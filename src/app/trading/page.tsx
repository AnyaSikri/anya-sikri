"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowDownRight,
  ArrowUpRight,
  LineChart,
  Plus,
  RefreshCw,
  RotateCcw,
  Wallet,
  X,
} from "lucide-react";
import {
  PortfolioState,
  Signal,
  StockData,
  STARTING_CASH,
  executeTrade,
  formatMoney,
  getSignal,
  initialPortfolio,
  loadPortfolio,
  positionsValue,
  savePortfolio,
} from "@/lib/trading";

type Quotes = Record<string, StockData>;

function Sparkline({ closes }: { closes: number[] }) {
  if (closes.length < 2) return null;
  const w = 120;
  const h = 36;
  const min = Math.min(...closes);
  const max = Math.max(...closes);
  const range = max - min || 1;
  const points = closes
    .map((c, i) => `${(i / (closes.length - 1)) * w},${h - ((c - min) / range) * h}`)
    .join(" ");
  const up = closes[closes.length - 1] >= closes[0];
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={up ? "#22c55e" : "#f87171"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignalBadge({ signal }: { signal: Signal }) {
  const styles = {
    buy: "bg-[#22c55e]/15 text-[#22c55e]",
    sell: "bg-[#f87171]/15 text-[#f87171]",
    hold: "bg-[#6366f1]/15 text-[#8b8dfa]",
  } as const;
  return (
    <span
      title={signal.reason}
      className={`px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide ${styles[signal.action]}`}
    >
      {signal.action}
    </span>
  );
}

export default function TradingPage() {
  const [portfolio, setPortfolio] = useState<PortfolioState | null>(null);
  const [quotes, setQuotes] = useState<Quotes>({});
  const [loading, setLoading] = useState(false);
  const [newSymbol, setNewSymbol] = useState("");
  const [addError, setAddError] = useState("");
  const [trade, setTrade] = useState<{ symbol: string; side: "buy" | "sell" } | null>(null);
  const [tradeShares, setTradeShares] = useState("");
  const [tradeError, setTradeError] = useState("");
  const quotesRef = useRef<Quotes>({});
  quotesRef.current = quotes;

  // Load saved portfolio after mount (localStorage isn't available during SSR).
  useEffect(() => {
    setPortfolio(loadPortfolio());
  }, []);

  useEffect(() => {
    if (portfolio) savePortfolio(portfolio);
  }, [portfolio]);

  const symbols = useMemo(() => {
    if (!portfolio) return [];
    const set = new Set([...portfolio.watchlist, ...portfolio.positions.map((p) => p.symbol)]);
    return [...set];
  }, [portfolio]);

  const fetchQuotes = useCallback(async (syms: string[]) => {
    if (syms.length === 0) return;
    setLoading(true);
    const results = await Promise.all(
      syms.map(async (symbol): Promise<StockData> => {
        try {
          const res = await fetch(`/api/stock?symbol=${encodeURIComponent(symbol)}`);
          const data = await res.json();
          if (!res.ok) throw new Error(data.error ?? "Lookup failed");
          return data as StockData;
        } catch (err) {
          const prev = quotesRef.current[symbol];
          const message = err instanceof Error ? err.message : "Lookup failed";
          return prev ? { ...prev, error: message } : {
            symbol,
            price: NaN,
            previousClose: NaN,
            currency: "USD",
            closes: [],
            error: message,
          };
        }
      })
    );
    setQuotes((q) => {
      const next = { ...q };
      for (const r of results) next[r.symbol] = r;
      return next;
    });
    setLoading(false);
  }, []);

  // Fetch on symbol changes and refresh every 60s.
  useEffect(() => {
    fetchQuotes(symbols);
    const interval = setInterval(() => fetchQuotes(symbols), 60_000);
    return () => clearInterval(interval);
  }, [symbols, fetchQuotes]);

  const prices = useMemo(() => {
    const p: Record<string, number> = {};
    for (const [sym, q] of Object.entries(quotes)) {
      if (Number.isFinite(q.price)) p[sym] = q.price;
    }
    return p;
  }, [quotes]);

  if (!portfolio) {
    return (
      <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center text-gray-400">
        Loading portfolio…
      </main>
    );
  }

  const invested = positionsValue(portfolio, prices);
  const totalValue = portfolio.cash + invested;
  const totalPnl = totalValue - portfolio.startingCash;
  const pnlPct = (totalPnl / portfolio.startingCash) * 100;

  const tradeQuote = trade ? quotes[trade.symbol] : undefined;
  const tradePrice = tradeQuote && Number.isFinite(tradeQuote.price) ? tradeQuote.price : null;
  const tradePosition = trade
    ? portfolio.positions.find((p) => p.symbol === trade.symbol)
    : undefined;
  const parsedShares = parseFloat(tradeShares);
  const estTotal =
    tradePrice && Number.isFinite(parsedShares) && parsedShares > 0
      ? parsedShares * tradePrice
      : null;

  const openTrade = (symbol: string, side: "buy" | "sell") => {
    setTrade({ symbol, side });
    setTradeShares("");
    setTradeError("");
  };

  const setMaxShares = () => {
    if (!trade || !tradePrice) return;
    if (trade.side === "buy") {
      setTradeShares((Math.floor((portfolio.cash / tradePrice) * 10000) / 10000).toString());
    } else if (tradePosition) {
      setTradeShares(tradePosition.shares.toString());
    }
  };

  const confirmTrade = () => {
    if (!trade || !tradePrice) return;
    const result = executeTrade(portfolio, trade.side, trade.symbol, parsedShares, tradePrice);
    if (result.error) {
      setTradeError(result.error);
      return;
    }
    setPortfolio(result.state!);
    setTrade(null);
  };

  const addSymbol = async () => {
    const symbol = newSymbol.trim().toUpperCase();
    setAddError("");
    if (!symbol) return;
    if (portfolio.watchlist.includes(symbol)) {
      setAddError(`${symbol} is already on your watchlist.`);
      return;
    }
    try {
      const res = await fetch(`/api/stock?symbol=${encodeURIComponent(symbol)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? `Couldn't find ${symbol}`);
      setQuotes((q) => ({ ...q, [symbol]: data as StockData }));
      setPortfolio({ ...portfolio, watchlist: [...portfolio.watchlist, symbol] });
      setNewSymbol("");
    } catch (err) {
      setAddError(err instanceof Error ? err.message : `Couldn't find ${symbol}`);
    }
  };

  const removeSymbol = (symbol: string) => {
    setPortfolio({ ...portfolio, watchlist: portfolio.watchlist.filter((s) => s !== symbol) });
  };

  const resetPortfolio = () => {
    if (window.confirm(`Reset everything back to ${formatMoney(STARTING_CASH)} cash? This clears all positions and history.`)) {
      setPortfolio(initialPortfolio());
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#13131a] to-[#0a0a0f] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-3 flex items-center gap-3"
              >
                <LineChart className="text-[#6366f1]" size={40} />
                Swing Trading Sandbox
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 text-lg"
              >
                Paper trading with {formatMoney(STARTING_CASH)} — real prices, zero risk.
              </motion.p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => fetchQuotes(symbols)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#13131a] border border-[#2a2a3c] text-gray-300 rounded-full text-sm hover:border-[#6366f1]/50 transition-colors"
              >
                <RefreshCw size={15} className={loading ? "animate-spin" : ""} />
                Refresh
              </button>
              <button
                onClick={resetPortfolio}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#13131a] border border-[#2a2a3c] text-gray-400 rounded-full text-sm hover:border-[#f87171]/50 hover:text-[#f87171] transition-colors"
              >
                <RotateCcw size={15} />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Summary cards */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Value", value: formatMoney(totalValue), sub: null },
            { label: "Cash", value: formatMoney(portfolio.cash), sub: null },
            { label: "Invested", value: formatMoney(invested), sub: `${portfolio.positions.length} position${portfolio.positions.length === 1 ? "" : "s"}` },
            {
              label: "Total P/L",
              value: `${totalPnl >= 0 ? "+" : ""}${formatMoney(totalPnl)}`,
              sub: `${pnlPct >= 0 ? "+" : ""}${pnlPct.toFixed(2)}%`,
              color: totalPnl >= 0 ? "text-[#22c55e]" : "text-[#f87171]",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="bg-[#13131a] border border-[#2a2a3c] rounded-2xl p-5"
            >
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                {card.label === "Cash" && <Wallet size={12} />}
                {card.label}
              </p>
              <p className={`text-2xl font-bold ${card.color ?? "text-white"}`}>{card.value}</p>
              {card.sub && <p className="text-gray-500 text-sm mt-1">{card.sub}</p>}
            </div>
          ))}
        </section>

        {/* Trade panel */}
        {trade && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#13131a] border border-[#6366f1]/40 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">
                {trade.side === "buy" ? "Buy" : "Sell"} {trade.symbol}
                {tradePrice && (
                  <span className="text-gray-400 font-normal text-base ml-3">
                    @ {formatMoney(tradePrice)}
                  </span>
                )}
              </h2>
              <button onClick={() => setTrade(null)} className="text-gray-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex rounded-full border border-[#2a2a3c] overflow-hidden">
                {(["buy", "sell"] as const).map((side) => (
                  <button
                    key={side}
                    onClick={() => setTrade({ ...trade, side })}
                    className={`px-5 py-2 text-sm font-medium capitalize transition-colors ${
                      trade.side === side
                        ? side === "buy"
                          ? "bg-[#22c55e]/20 text-[#22c55e]"
                          : "bg-[#f87171]/20 text-[#f87171]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {side}
                  </button>
                ))}
              </div>
              <input
                type="number"
                min="0"
                step="any"
                value={tradeShares}
                onChange={(e) => setTradeShares(e.target.value)}
                placeholder="Shares (fractional ok)"
                className="bg-[#0a0a0f] border border-[#2a2a3c] rounded-full px-4 py-2 text-white text-sm w-48 focus:border-[#6366f1] focus:outline-none"
              />
              <button
                onClick={setMaxShares}
                className="px-4 py-2 text-sm text-gray-400 border border-[#2a2a3c] rounded-full hover:text-white hover:border-[#6366f1]/50 transition-colors"
              >
                Max
              </button>
              <span className="text-gray-400 text-sm">
                {estTotal !== null ? `≈ ${formatMoney(estTotal)}` : ""}
              </span>
              <button
                onClick={confirmTrade}
                disabled={!tradePrice || !estTotal}
                className="ml-auto px-6 py-2 bg-[#6366f1] text-white rounded-full text-sm font-medium hover:bg-[#2563eb] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Confirm {trade.side}
              </button>
            </div>
            {trade.side === "sell" && tradePosition && (
              <p className="text-gray-500 text-sm mt-3">
                You hold {tradePosition.shares} shares at {formatMoney(tradePosition.avgCost)} avg cost.
              </p>
            )}
            {tradeError && <p className="text-[#f87171] text-sm mt-3">{tradeError}</p>}
          </motion.section>
        )}

        {/* Positions */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-5">Positions</h2>
          {portfolio.positions.length === 0 ? (
            <p className="text-gray-500 bg-[#13131a] border border-[#2a2a3c] rounded-2xl p-6">
              No positions yet — pick something from the watchlist below to make your first trade.
            </p>
          ) : (
            <div className="bg-[#13131a] border border-[#2a2a3c] rounded-2xl overflow-x-auto">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="text-gray-500 text-xs uppercase tracking-wider border-b border-[#2a2a3c]">
                    <th className="text-left px-5 py-3 font-medium">Symbol</th>
                    <th className="text-right px-5 py-3 font-medium">Shares</th>
                    <th className="text-right px-5 py-3 font-medium">Avg Cost</th>
                    <th className="text-right px-5 py-3 font-medium">Price</th>
                    <th className="text-right px-5 py-3 font-medium">Value</th>
                    <th className="text-right px-5 py-3 font-medium">Unrealized P/L</th>
                    <th className="px-5 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {portfolio.positions.map((p) => {
                    const price = prices[p.symbol];
                    const value = price ? p.shares * price : null;
                    const pnl = price ? (price - p.avgCost) * p.shares : null;
                    const pnlPctPos = price ? ((price - p.avgCost) / p.avgCost) * 100 : null;
                    return (
                      <tr key={p.symbol} className="border-b border-[#2a2a3c]/50 last:border-0">
                        <td className="px-5 py-3.5 font-semibold text-white">{p.symbol}</td>
                        <td className="px-5 py-3.5 text-right text-gray-300">{p.shares}</td>
                        <td className="px-5 py-3.5 text-right text-gray-300">{formatMoney(p.avgCost)}</td>
                        <td className="px-5 py-3.5 text-right text-gray-300">
                          {price ? formatMoney(price) : "—"}
                        </td>
                        <td className="px-5 py-3.5 text-right text-white">
                          {value !== null ? formatMoney(value) : "—"}
                        </td>
                        <td
                          className={`px-5 py-3.5 text-right font-medium ${
                            pnl === null ? "text-gray-500" : pnl >= 0 ? "text-[#22c55e]" : "text-[#f87171]"
                          }`}
                        >
                          {pnl !== null
                            ? `${pnl >= 0 ? "+" : ""}${formatMoney(pnl)} (${pnlPctPos! >= 0 ? "+" : ""}${pnlPctPos!.toFixed(1)}%)`
                            : "—"}
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <button
                            onClick={() => openTrade(p.symbol, "sell")}
                            className="px-3 py-1 text-xs text-[#f87171] border border-[#f87171]/30 rounded-full hover:bg-[#f87171]/10 transition-colors"
                          >
                            Sell
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Watchlist */}
        <section>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <h2 className="text-2xl font-bold text-white">Watchlist</h2>
            <div className="flex items-center gap-2">
              <input
                value={newSymbol}
                onChange={(e) => setNewSymbol(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addSymbol()}
                placeholder="Add ticker (e.g. GOOG)"
                className="bg-[#13131a] border border-[#2a2a3c] rounded-full px-4 py-2 text-white text-sm w-48 focus:border-[#6366f1] focus:outline-none uppercase placeholder:normal-case"
              />
              <button
                onClick={addSymbol}
                className="p-2 bg-[#6366f1] text-white rounded-full hover:bg-[#2563eb] transition-colors"
                aria-label="Add symbol"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          {addError && <p className="text-[#f87171] text-sm mb-4">{addError}</p>}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.watchlist.map((symbol) => {
              const q = quotes[symbol];
              const hasPrice = q && Number.isFinite(q.price);
              const dayChange =
                hasPrice && Number.isFinite(q.previousClose) && q.previousClose !== 0
                  ? ((q.price - q.previousClose) / q.previousClose) * 100
                  : null;
              const signal = hasPrice ? getSignal(q.closes) : null;
              return (
                <div
                  key={symbol}
                  className="bg-[#13131a] border border-[#2a2a3c] rounded-2xl p-5 hover:border-[#6366f1]/40 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white text-lg">{symbol}</h3>
                      {signal && <SignalBadge signal={signal} />}
                    </div>
                    <button
                      onClick={() => removeSymbol(symbol)}
                      className="text-gray-600 hover:text-[#f87171] opacity-0 group-hover:opacity-100 transition-all"
                      aria-label={`Remove ${symbol}`}
                    >
                      <X size={16} />
                    </button>
                  </div>
                  {hasPrice ? (
                    <>
                      <div className="flex items-end justify-between mb-3">
                        <div>
                          <p className="text-2xl font-bold text-white">{formatMoney(q.price)}</p>
                          {dayChange !== null && (
                            <p
                              className={`text-sm flex items-center gap-1 ${
                                dayChange >= 0 ? "text-[#22c55e]" : "text-[#f87171]"
                              }`}
                            >
                              {dayChange >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                              {dayChange >= 0 ? "+" : ""}
                              {dayChange.toFixed(2)}% today
                            </p>
                          )}
                        </div>
                        <Sparkline closes={q.closes} />
                      </div>
                      {signal && <p className="text-gray-500 text-xs mb-4">{signal.reason}</p>}
                      <div className="flex gap-2">
                        <button
                          onClick={() => openTrade(symbol, "buy")}
                          className="flex-1 py-1.5 text-sm font-medium text-[#22c55e] border border-[#22c55e]/30 rounded-full hover:bg-[#22c55e]/10 transition-colors"
                        >
                          Buy
                        </button>
                        {portfolio.positions.some((p) => p.symbol === symbol) && (
                          <button
                            onClick={() => openTrade(symbol, "sell")}
                            className="flex-1 py-1.5 text-sm font-medium text-[#f87171] border border-[#f87171]/30 rounded-full hover:bg-[#f87171]/10 transition-colors"
                          >
                            Sell
                          </button>
                        )}
                      </div>
                      {q.error && (
                        <p className="text-yellow-500/70 text-xs mt-3">Showing last known price — {q.error}</p>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-500 text-sm py-4">
                      {q?.error ?? "Loading…"}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Trade history */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-5">Trade History</h2>
          {portfolio.trades.length === 0 ? (
            <p className="text-gray-500 bg-[#13131a] border border-[#2a2a3c] rounded-2xl p-6">
              Your trades will show up here.
            </p>
          ) : (
            <div className="space-y-2">
              {portfolio.trades.slice(0, 25).map((t) => (
                <div
                  key={t.id}
                  className="bg-[#13131a] border border-[#2a2a3c] rounded-xl px-5 py-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm"
                >
                  <span
                    className={`font-semibold uppercase text-xs px-2 py-0.5 rounded-full ${
                      t.side === "buy" ? "bg-[#22c55e]/15 text-[#22c55e]" : "bg-[#f87171]/15 text-[#f87171]"
                    }`}
                  >
                    {t.side}
                  </span>
                  <span className="font-semibold text-white">{t.symbol}</span>
                  <span className="text-gray-300">
                    {t.shares} sh @ {formatMoney(t.price)}
                  </span>
                  <span className="text-gray-500">= {formatMoney(t.shares * t.price)}</span>
                  {t.realizedPnl !== undefined && (
                    <span className={t.realizedPnl >= 0 ? "text-[#22c55e]" : "text-[#f87171]"}>
                      {t.realizedPnl >= 0 ? "+" : ""}
                      {formatMoney(t.realizedPnl)} realized
                    </span>
                  )}
                  <span className="text-gray-600 ml-auto">
                    {new Date(t.date).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        <p className="text-gray-600 text-xs border-t border-[#2a2a3c] pt-6">
          Paper trading only — no real money moves. Prices come from Yahoo Finance and can be
          delayed. Signals are a simple SMA(10/30) + RSI(14) heuristic for learning, not financial
          advice.
        </p>
      </div>
    </main>
  );
}
