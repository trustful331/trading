import { tradingAccounts } from "src/data/site";
import { useRecords } from "src/utils/api";

type AccountRow = { id?: string; login?: string; server: string; platform: string; type: string; leverage: string; currency: string; balance: string };

export default function TradingInfo() {
  const rows = useRecords<AccountRow>("/api/trading-accounts", tradingAccounts);
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs tracking-[0.22em] text-mint uppercase">Accounts</p>
          <h1 className="text-4xl">Trading info</h1>
        </div>
        <button className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink">Open new account</button>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {rows.map((account) => (
          <article key={account.login ?? account.id} className="rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[var(--p-muted)]">{account.server}</p>
              <span className="rounded-full bg-[var(--p-soft)] px-2 py-1 text-xs text-mint">{account.type}</span>
            </div>
            <h2 className="mt-3 text-3xl">{account.login ?? account.id}</h2>
            <p className="mt-1 text-sm text-[var(--p-muted)]">{account.platform} · {account.currency} · {account.leverage}</p>
            <p className="mt-4 font-serif text-3xl">{account.balance}</p>
            <div className="mt-4 flex gap-2 text-xs">
              <button className="rounded-full border border-[var(--p-line)] px-3 py-1.5">Reset password</button>
              <button className="rounded-full border border-[var(--p-line)] px-3 py-1.5">Change leverage</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
