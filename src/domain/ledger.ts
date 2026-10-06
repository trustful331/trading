import { addMinor, type Minor } from "./money.ts";

export type LedgerEntry = {
  id: string;
  accountId: string;
  amount: Minor;
  idempotencyKey: string;
  reason: string;
};

export type Ledger = {
  entries: LedgerEntry[];
  keys: Set<string>;
};

export function createLedger(): Ledger {
  return { entries: [], keys: new Set() };
}

export function postEntry(ledger: Ledger, entry: LedgerEntry): { applied: boolean } {
  if (ledger.keys.has(entry.idempotencyKey)) {
    return { applied: false };
  }
  ledger.keys.add(entry.idempotencyKey);
  ledger.entries.push(entry);
  return { applied: true };
}

export function balanceOf(ledger: Ledger, accountId: string): Minor {
  return ledger.entries
    .filter((entry) => entry.accountId === accountId)
    .reduce((sum, entry) => addMinor(sum, entry.amount), 0n);
}
