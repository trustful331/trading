const SCALE = 8n;
const FACTOR = 10n ** SCALE;

export type Minor = bigint;

export function parseMinor(input: string): Minor {
  const trimmed = input.trim();
  if (!/^-?\d+(\.\d+)?$/.test(trimmed)) {
    throw new Error("INVALID_AMOUNT");
  }
  const negative = trimmed.startsWith("-");
  const [whole, fraction = ""] = trimmed.replace("-", "").split(".");
  if (fraction.length > Number(SCALE)) {
    throw new Error("TOO_MANY_DECIMALS");
  }
  const padded = fraction.padEnd(Number(SCALE), "0");
  const value = BigInt(whole) * FACTOR + BigInt(padded);
  return negative ? -value : value;
}

export function formatMinor(value: Minor): string {
  const negative = value < 0n;
  const absolute = negative ? -value : value;
  const whole = absolute / FACTOR;
  let fraction = (absolute % FACTOR).toString().padStart(Number(SCALE), "0").replace(/0+$/, "");
  if (fraction.length === 0) fraction = "00";
  else if (fraction.length === 1) fraction = `${fraction}0`;
  const body = `${whole}.${fraction}`;
  return negative ? `-${body}` : body;
}

export function addMinor(left: Minor, right: Minor): Minor {
  return left + right;
}

export function subMinor(left: Minor, right: Minor): Minor {
  return left - right;
}
