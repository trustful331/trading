import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { applyPaymentWebhook } from "../src/domain/providers/mock/payment.ts";
import { createLedger } from "../src/domain/ledger.ts";
import { formatMinor } from "../src/domain/money.ts";
import { balanceOf } from "../src/domain/ledger.ts";

describe("payment webhook", () => {
  it("credits once when the signature matches", () => {
    const ledger = createLedger();
    const body = JSON.stringify({ id: "evt-1", status: "completed", amount: "25.50" });
    const first = applyPaymentWebhook({
      secret: "dev-secret",
      signature: "dev-secret",
      body,
      ledger,
      accountId: "SIM-1",
    });
    const second = applyPaymentWebhook({
      secret: "dev-secret",
      signature: "dev-secret",
      body,
      ledger,
      accountId: "SIM-1",
    });
    assert.equal(first.ok && first.applied, true);
    assert.equal(second.ok && second.applied, false);
    assert.equal(formatMinor(balanceOf(ledger, "SIM-1")), "25.50");
  });

  it("does not credit a bad signature", () => {
    const ledger = createLedger();
    const result = applyPaymentWebhook({
      secret: "dev-secret",
      signature: "nope",
      body: JSON.stringify({ id: "evt-2", status: "completed", amount: "10" }),
      ledger,
      accountId: "SIM-1",
    });
    assert.deepEqual(result, { ok: false, code: "BAD_SIGNATURE" });
    assert.equal(balanceOf(ledger, "SIM-1"), 0n);
  });
});
