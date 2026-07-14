import { NextRequest, NextResponse } from "next/server";

// Proxies Yahoo Finance's chart endpoint so the browser avoids CORS issues.
// Returns the latest price plus ~3 months of daily closes for indicators.

interface YahooChartResponse {
  chart?: {
    result?: Array<{
      meta?: {
        regularMarketPrice?: number;
        chartPreviousClose?: number;
        previousClose?: number;
        currency?: string;
      };
      indicators?: { quote?: Array<{ close?: Array<number | null> }> };
    }>;
    error?: { description?: string } | null;
  };
}

export async function GET(req: NextRequest) {
  const symbol = req.nextUrl.searchParams.get("symbol")?.trim().toUpperCase() ?? "";
  if (!/^[A-Z0-9.^-]{1,12}$/.test(symbol)) {
    return NextResponse.json({ error: "Invalid symbol" }, { status: 400 });
  }

  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
      symbol
    )}?range=3mo&interval=1d`;
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; paper-trading-demo)" },
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: `Quote lookup failed (${res.status})` },
        { status: res.status === 404 ? 404 : 502 }
      );
    }

    const data = (await res.json()) as YahooChartResponse;
    const result = data.chart?.result?.[0];
    const price = result?.meta?.regularMarketPrice;
    if (!result || typeof price !== "number") {
      return NextResponse.json(
        { error: data.chart?.error?.description ?? `No data for ${symbol}` },
        { status: 404 }
      );
    }

    const closes = (result.indicators?.quote?.[0]?.close ?? []).filter(
      (c): c is number => typeof c === "number"
    );
    // Make sure the series ends at the live price so indicators use it.
    if (closes.length === 0 || closes[closes.length - 1] !== price) closes.push(price);

    return NextResponse.json({
      symbol,
      price,
      previousClose: result.meta?.chartPreviousClose ?? result.meta?.previousClose ?? price,
      currency: result.meta?.currency ?? "USD",
      closes,
    });
  } catch {
    return NextResponse.json(
      { error: "Market data is unreachable right now. Try again in a minute." },
      { status: 502 }
    );
  }
}
