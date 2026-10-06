import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { addMinor, formatMinor, parseMinor } from "../src/domain/money.ts";

describe("money", () => {
  it("adds minor units without float drift", () => {
    const sum = addMinor(parseMinor("0.10"), parseMinor("0.20"));
    assert.equal(formatMinor(sum), "0.30");
  });

  it("rejects extra precision", () => {
    assert.throws(() => parseMinor("1.123456789"), /TOO_MANY_DECIMALS/);
  });
});
