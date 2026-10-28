import { useState } from "react";
import { tradingAccounts } from "src/data/site";
import { useRecords } from "src/utils/api";

const methods = ["Card", "Bank transfer", "Local transfer", "Crypto"];

export default function Deposit() {
  const [method, setMethod] = useState("Card");
  const accounts = useRecords("/api/trading-accounts", tradingAccounts.map((account) => ({ ...account, id: account.login })));
  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <p className="text-xs tracking-[0.22em] text-mint uppercase">Deposit</p>
        <h1 className="text-4xl">Add funds</h1>
        <p className="mt-2 text-sm text-[var(--p-muted)]">Preview only. No payment is taken.</p>
      </div>
      <label className="block text-sm">Trading account
        <select className="mt-1 w-full rounded-2xl border border-[var(--p-line)] bg-[var(--p-card)] px-4 py-3">
          {accounts.map((account) => (
            <option key={account.id}>{account.id} · {account.type}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        {methods.map((item) => (
          <button
            key={item}
            onClick={() => setMethod(item)}
            className={`rounded-2xl border px-4 py-4 text-left ${method === item ? "border-mint bg-[var(--p-soft)]" : "border-[var(--p-line)] bg-[var(--p-card)]"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5">
        <label className="text-sm">Amount (USD)
          <input defaultValue="500" className="mt-1 w-full rounded-2xl border border-[var(--p-line)] bg-[var(--p-card-2)] px-4 py-3" />
        </label>
        <div className="mt-4 flex justify-between text-sm text-[var(--p-muted)]">
          <span>Fee preview</span>
          <span>$0.00</span>
        </div>
        <div className="mt-2 flex justify-between text-sm">
          <span>You receive</span>
          <span>$500.00</span>
        </div>
        <p className="mt-4 text-sm text-[var(--p-muted)]">
          {method} instructions would appear here after a provider is connected.
        </p>
        <button className="mt-5 rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-ink">Continue</button>
      </div>
    </div>
  );
}
