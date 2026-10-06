export type Bar = {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type Quote = {
  symbol: string;
  name: string;
  bid: number;
  ask: number;
  changePercent: number;
  digits: number;
};

export type Timeframe = "1m" | "5m" | "15m" | "30m" | "1h" | "4h" | "1D" | "1W" | "1M";

export interface MarketDataProvider {
  readonly id: "mock";
  getSymbols(): string[];
  getQuote(symbol: string): Quote;
  getHistoricalBars(symbol: string, timeframe: Timeframe, limit: number): Bar[];
}

export type TradingAccountSnapshot = {
  id: string;
  currency: string;
  simulated: true;
  balance: string;
  equity: string;
};

export interface TradingProvider {
  readonly id: "mock" | "mt5";
  getAccount(): TradingAccountSnapshot;
  getPositions(): unknown[];
  getOrders(): unknown[];
}

export type PaymentStatus = "pending" | "completed" | "failed";

export type PaymentRecord = {
  id: string;
  amount: string;
  currency: string;
  status: PaymentStatus;
};

export interface PaymentProvider {
  readonly id: "mock";
  createPayment(input: { id: string; amount: string; currency: string }): PaymentRecord;
}
