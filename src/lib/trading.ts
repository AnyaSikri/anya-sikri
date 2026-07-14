// Core types and logic for the paper swing-trading platform.
// All money values are USD; shares may be fractional.

export const STARTING_CASH = 4000;
export const STORAGE_KEY = "swing-trading-portfolio-v1";

export interface Position {
  symbol: string;
  shares: number;
  avgCost: number;
}

export interface Trade {
  id: string;
  date: string; // ISO timestamp
  symbol: string;
  side: "buy" | "sell";
  shares: number;
  price: number;
  realizedPnl?: number; // only on sells
}

export interface PortfolioState {
  cash: number;
  startingCash: number;
  positions: Position[];
  trades: Trade[];
  watchlist: string[];
  createdAt: string;
}

export interface StockData {
  symbol: string;
  price: number;
  previousClose: number;
  currency: string;
  closes: number[]; // daily closes, oldest first, ending at latest price
  error?: string;
}

export type SignalAction = "buy" | "sell" | "hold";

export interface Signal {
  action: SignalAction;
  reason: string;
  rsi: number | null;
  smaFast: number | null;
  smaSlow: number | null;
}

export const DEFAULT_WATCHLIST = ["AAPL", "MSFT", "NVDA", "AMZN", "TSLA", "SPY"];

export function initialPortfolio(): PortfolioState {
  return {
    cash: STARTING_CASH,
    startingCash: STARTING_CASH,
    positions: [],
    trades: [],
    watchlist: [...DEFAULT_WATCHLIST],
    createdAt: new Date().toISOString(),
  };
}

export function loadPortfolio(): PortfolioState {
  if (typeof window === "undefined") return initialPortfolio();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialPortfolio();
    const parsed = JSON.parse(raw) as PortfolioState;
    if (typeof parsed.cash !== "number" || !Array.isArray(parsed.positions)) {
      return initialPortfolio();
    }
    const state: PortfolioState = {
      ...initialPortfolio(),
      ...parsed,
      watchlist: parsed.watchlist?.length ? parsed.watchlist : [...DEFAULT_WATCHLIST],
    };
    // Portfolios saved before startingCash existed began with $1,000; top
    // them up to the current starting amount without touching positions.
    if (typeof parsed.startingCash !== "number") {
      state.startingCash = STARTING_CASH;
      state.cash = parsed.cash + (STARTING_CASH - 1000);
    } else if (parsed.startingCash < STARTING_CASH) {
      state.cash = parsed.cash + (STARTING_CASH - parsed.startingCash);
      state.startingCash = STARTING_CASH;
    }
    return state;
  } catch {
    return initialPortfolio();
  }
}

export function savePortfolio(state: PortfolioState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ---------- Indicators ----------

/** Simple moving average of the last `period` values, or null if not enough data. */
export function sma(values: number[], period: number): number | null {
  if (values.length < period) return null;
  const slice = values.slice(-period);
  return slice.reduce((a, b) => a + b, 0) / period;
}

/** Wilder-smoothed RSI over `period` bars, or null if not enough data. */
export function rsi(values: number[], period = 14): number | null {
  if (values.length < period + 1) return null;
  let gain = 0;
  let loss = 0;
  for (let i = 1; i <= period; i++) {
    const change = values[i] - values[i - 1];
    if (change >= 0) gain += change;
    else loss -= change;
  }
  let avgGain = gain / period;
  let avgLoss = loss / period;
  for (let i = period + 1; i < values.length; i++) {
    const change = values[i] - values[i - 1];
    avgGain = (avgGain * (period - 1) + Math.max(change, 0)) / period;
    avgLoss = (avgLoss * (period - 1) + Math.max(-change, 0)) / period;
  }
  if (avgLoss === 0) return 100;
  const rs = avgGain / avgLoss;
  return 100 - 100 / (1 + rs);
}

/**
 * Basic swing signal: 10/30-day SMA trend filter with RSI(14) for
 * overbought/oversold. Educational only — not financial advice.
 */
export function getSignal(closes: number[]): Signal {
  const smaFast = sma(closes, 10);
  const smaSlow = sma(closes, 30);
  const rsiVal = rsi(closes, 14);

  if (smaFast === null || smaSlow === null || rsiVal === null) {
    return { action: "hold", reason: "Not enough history yet", rsi: rsiVal, smaFast, smaSlow };
  }

  const uptrend = smaFast > smaSlow;
  if (rsiVal >= 70) {
    return { action: "sell", reason: `RSI ${rsiVal.toFixed(0)} — overbought`, rsi: rsiVal, smaFast, smaSlow };
  }
  if (uptrend && rsiVal <= 45) {
    return { action: "buy", reason: `Uptrend pullback, RSI ${rsiVal.toFixed(0)}`, rsi: rsiVal, smaFast, smaSlow };
  }
  if (uptrend) {
    return { action: "hold", reason: `Uptrend, RSI ${rsiVal.toFixed(0)}`, rsi: rsiVal, smaFast, smaSlow };
  }
  if (rsiVal <= 30) {
    return { action: "buy", reason: `RSI ${rsiVal.toFixed(0)} — oversold bounce setup`, rsi: rsiVal, smaFast, smaSlow };
  }
  return { action: "sell", reason: `Downtrend, RSI ${rsiVal.toFixed(0)}`, rsi: rsiVal, smaFast, smaSlow };
}

// ---------- Trading ----------

export interface TradeResult {
  state?: PortfolioState;
  error?: string;
}

export function executeTrade(
  state: PortfolioState,
  side: "buy" | "sell",
  symbol: string,
  shares: number,
  price: number
): TradeResult {
  symbol = symbol.toUpperCase();
  if (!Number.isFinite(shares) || shares <= 0) return { error: "Enter a share amount above 0." };
  if (!Number.isFinite(price) || price <= 0) return { error: "No valid price for this symbol." };

  shares = Math.round(shares * 10000) / 10000; // cap at 4 decimal places
  const cost = shares * price;
  const positions = state.positions.map((p) => ({ ...p }));
  const existing = positions.find((p) => p.symbol === symbol);

  let realizedPnl: number | undefined;

  if (side === "buy") {
    if (cost > state.cash + 1e-9) {
      return { error: `Not enough cash: need $${cost.toFixed(2)}, have $${state.cash.toFixed(2)}.` };
    }
    if (existing) {
      const totalShares = existing.shares + shares;
      existing.avgCost = (existing.avgCost * existing.shares + cost) / totalShares;
      existing.shares = totalShares;
    } else {
      positions.push({ symbol, shares, avgCost: price });
    }
  } else {
    if (!existing || existing.shares + 1e-9 < shares) {
      return { error: `You only hold ${existing ? existing.shares : 0} shares of ${symbol}.` };
    }
    realizedPnl = (price - existing.avgCost) * shares;
    existing.shares = Math.round((existing.shares - shares) * 10000) / 10000;
  }

  const trade: Trade = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    date: new Date().toISOString(),
    symbol,
    side,
    shares,
    price,
    realizedPnl,
  };

  return {
    state: {
      ...state,
      cash: side === "buy" ? state.cash - cost : state.cash + cost,
      positions: positions.filter((p) => p.shares > 1e-9),
      trades: [trade, ...state.trades],
    },
  };
}

export function positionsValue(state: PortfolioState, prices: Record<string, number>): number {
  return state.positions.reduce((sum, p) => {
    const price = prices[p.symbol] ?? p.avgCost;
    return sum + p.shares * price;
  }, 0);
}

export function formatMoney(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
