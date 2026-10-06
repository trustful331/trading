import type { Bar, MarketDataProvider, Quote, Timeframe } from "../types.ts";

type Spec = { symbol: string; name: string; base: number; digits: number };

const BOOK: Spec[] = [
  { symbol: "EURUSD", name: "Euro vs US Dollar", base: 1.12174, digits: 5 },
  { symbol: "GBPUSD", name: "British Pound vs US Dollar", base: 1.3142, digits: 5 },
  { symbol: "USDJPY", name: "US Dollar vs Japanese Yen", base: 149.32, digits: 3 },
  { symbol: "AUDUSD", name: "Australian Dollar vs US Dollar", base: 0.6621, digits: 5 },
  { symbol: "USDCHF", name: "US Dollar vs Swiss Franc", base: 0.8644, digits: 5 },
  { symbol: "USDCAD", name: "US Dollar vs Canadian Dollar", base: 1.3622, digits: 5 },
  { symbol: "XAUUSD", name: "Gold vs US Dollar", base: 2648.3, digits: 2 },
  { symbol: "XAGUSD", name: "Silver vs US Dollar", base: 31.42, digits: 3 },
  { symbol: "US30", name: "US Wall Street 30", base: 42180, digits: 2 },
  { symbol: "NAS100", name: "US Tech 100", base: 19840, digits: 2 },
  { symbol: "UK100", name: "UK 100", base: 8274, digits: 2 },
  { symbol: "USOIL", name: "Crude oil", base: 78.46, digits: 2 },
  { symbol: "UKOIL", name: "Brent oil", base: 82.1, digits: 2 },
  { symbol: "AAPL", name: "Apple", base: 226.4, digits: 2 },
  { symbol: "AMZN", name: "Amazon", base: 186.2, digits: 2 },
  { symbol: "TSLA", name: "Tesla", base: 248.5, digits: 2 },
  { symbol: "BTCUSD", name: "Bitcoin", base: 67420, digits: 2 },
  { symbol: "ETHUSD", name: "Ethereum", base: 2486, digits: 2 },
];

const STEP: Record<Timeframe, number> = {
  "1m": 60_000,
  "5m": 300_000,
  "15m": 900_000,
  "30m": 1_800_000,
  "1h": 3_600_000,
  "4h": 14_400_000,
  "1D": 86_400_000,
  "1W": 604_800_000,
  "1M": 2_592_000_000,
};

function unit(seed: number): number {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
}

function specFor(symbol: string): Spec {
  return BOOK.find((item) => item.symbol === symbol) ?? BOOK[0];
}

export function createMockMarketData(): MarketDataProvider {
  return {
    id: "mock",
    getSymbols: () => BOOK.map((item) => item.symbol),
    getQuote(symbol: string): Quote {
      const spec = specFor(symbol);
      const bars = this.getHistoricalBars(symbol, "1h", 24);
      const last = bars[bars.length - 1];
      const prev = bars[0];
      const spread = spec.digits >= 4 ? 0.00012 : spec.digits === 3 ? 0.012 : Math.max(0.01, last.close * 0.00015);
      return {
        symbol: spec.symbol,
        name: spec.name,
        bid: Number(last.close.toFixed(spec.digits)),
        ask: Number((last.close + spread).toFixed(spec.digits)),
        changePercent: Number((((last.close - prev.close) / prev.close) * 100).toFixed(2)),
        digits: spec.digits,
      };
    },
    getHistoricalBars(symbol: string, timeframe: Timeframe, limit: number): Bar[] {
      const spec = specFor(symbol);
      const step = STEP[timeframe];
      const end = Math.floor(Date.UTC(2026, 9, 6, 13) / step) * step;
      const seedBase = spec.symbol.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
      const swing = spec.base < 20 ? 0.0011 : spec.base < 500 ? 0.0035 : 0.006;
      let price = spec.base;
      const bars: Bar[] = [];
      for (let index = limit - 1; index >= 0; index -= 1) {
        const time = end - index * step;
        const drift = (unit(seedBase + index) - 0.5) * price * swing;
        const open = price;
        const close = Math.max(spec.base * 0.2, open + drift);
        const wick = price * swing * 0.45;
        const high = Math.max(open, close) + unit(seedBase + index + 3) * wick;
        const low = Math.min(open, close) - unit(seedBase + index + 7) * wick;
        bars.push({
          time,
          open: Number(open.toFixed(spec.digits)),
          high: Number(high.toFixed(spec.digits)),
          low: Number(Math.max(0.00001, low).toFixed(spec.digits)),
          close: Number(close.toFixed(spec.digits)),
          volume: Math.round(80 + unit(seedBase + index + 11) * 900),
        });
        price = close;
      }
      return bars;
    },
  };
}

export const mockMarketData = createMockMarketData();
