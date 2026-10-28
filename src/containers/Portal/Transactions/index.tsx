import { useMemo, useState } from "react";
import StatusPill from "src/components/_common/StatusPill";
import { transactions } from "src/data/site";
import { useRecords } from "src/utils/api";

export default function Transactions() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const loaded = useRecords("/api/transactions", transactions);
  const rows = useMemo(
    () =>
      loaded.filter((row) => {
        const matchesType = type === "All" || row.type === type;
        const matchesQuery = `${row.id} ${row.type} ${row.account}`.toLowerCase().includes(query.toLowerCase());
        return matchesType && matchesQuery;
      }),
    [loaded, query, type],
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs tracking-[0.22em] text-mint uppercase">Ledger</p>
          <h1 className="text-4xl">Transactions</h1>
        </div>
        <button className="rounded-full border border-[var(--p-line)] px-4 py-2 text-sm">Export CSV</button>
      </div>
      <div className="flex flex-wrap gap-2">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search"
          className="rounded-2xl border border-[var(--p-line)] bg-[var(--p-card)] px-4 py-2 text-sm"
        />
        {["All", "Deposit", "Withdrawal", "Internal transfer", "Adjustment"].map((item) => (
          <button key={item} onClick={() => setType(item)} className={`rounded-full px-3 py-2 text-xs ${type === item ? "bg-mint text-ink" : "bg-[var(--p-card)]"}`}>
            {item}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)]">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="text-[var(--p-muted)]">
            <tr>
              {["ID", "Type", "Account", "Amount", "Status", "Date"].map((head) => (
                <th key={head} className="px-4 py-3 font-medium">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-[var(--p-line)]">
                <td className="px-4 py-3">{row.id}</td>
                <td className="px-4 py-3">{row.type}</td>
                <td className="px-4 py-3 text-[var(--p-muted)]">{row.account}</td>
                <td className="px-4 py-3">{row.amount}</td>
                <td className="px-4 py-3"><StatusPill value={row.status} /></td>
                <td className="px-4 py-3">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && <p className="px-4 py-8 text-sm text-[var(--p-muted)]">No rows match.</p>}
      </div>
    </div>
  );
}
