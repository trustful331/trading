import { parseMinor } from "../../money.ts";
import { balanceOf, createLedger, postEntry, type Ledger } from "../../ledger.ts";
import type { PaymentProvider, PaymentRecord } from "../types.ts";

export function createMockPayments(): PaymentProvider {
  return {
    id: "mock",
    createPayment(input): PaymentRecord {
      parseMinor(input.amount);
      return { id: input.id, amount: input.amount, currency: input.currency, status: "pending" };
    },
  };
}

export type WebhookResult =
  | { ok: true; applied: boolean; balance: string }
  | { ok: false; code: "NOT_CONFIGURED" | "BAD_SIGNATURE" | "BAD_BODY" };

export function applyPaymentWebhook(input: {
  secret: string | undefined;
  signature: string | undefined;
  body: string;
  ledger: Ledger;
  accountId: string;
}): WebhookResult {
  if (!input.secret) return { ok: false, code: "NOT_CONFIGURED" };
  if (input.signature !== input.secret) return { ok: false, code: "BAD_SIGNATURE" };

  let parsed: { id?: string; status?: string; amount?: string };
  try {
    parsed = JSON.parse(input.body) as { id?: string; status?: string; amount?: string };
  } catch {
    return { ok: false, code: "BAD_BODY" };
  }
  if (!parsed.id || !parsed.amount) return { ok: false, code: "BAD_BODY" };

  if (parsed.status === "completed") {
    const posted = postEntry(input.ledger, {
      id: parsed.id,
      accountId: input.accountId,
      amount: parseMinor(parsed.amount),
      idempotencyKey: parsed.id,
      reason: "payment_webhook",
    });
    return {
      ok: true,
      applied: posted.applied,
      balance: balanceOf(input.ledger, input.accountId).toString(),
    };
  }

  return { ok: true, applied: false, balance: balanceOf(input.ledger, input.accountId).toString() };
}

export const devLedger = createLedger();
