import type { TradingAccountSnapshot, TradingProvider } from "../types.ts";

const simulatedAccount: TradingAccountSnapshot = {
  id: "SIM-820441",
  currency: "USD",
  simulated: true,
  balance: "0.00",
  equity: "0.00",
};

export const mockTrading: TradingProvider = {
  id: "mock",
  getAccount: () => simulatedAccount,
  getPositions: () => [],
  getOrders: () => [],
};

export function mt5Trading(): TradingProvider {
  return {
    id: "mt5",
    getAccount(): TradingAccountSnapshot {
      throw new Error("NOT_CONFIGURED");
    },
    getPositions(): unknown[] {
      throw new Error("NOT_CONFIGURED");
    },
    getOrders(): unknown[] {
      throw new Error("NOT_CONFIGURED");
    },
  };
}
