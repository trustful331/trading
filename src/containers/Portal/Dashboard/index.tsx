import { Link } from "react-router-dom";
import StatusPill from "src/components/_common/StatusPill";
import { transactions } from "src/data/site";
import { useRecords } from "src/utils/api";

const stats = [
  ["Balance", "0.00 USD"],
  ["Equity", "0.00 USD"],
  ["Used margin", "0.00 USD"],
  ["Free margin", "0.00 USD"],
];

const notices = [
  { id: "AN-1", title: "Swap-free request window", body: "Open until Friday. Sample notice." },
  { id: "AN-2", title: "Platform maintenance", body: "Sunday 02:00–03:00. No live session." },
];

export default function Dashboard() {
  const activity = useRecords("/api/transactions", transactions);
  const announcements = useRecords("/api/announcements", notices);
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs tracking-[0.22em] text-mint uppercase">Good afternoon</p>
          <h1 className="text-4xl text-[var(--p-text)]">Amina Rahman</h1>
        </div>
        <div className="flex gap-2">
          <Link to="/deposit" className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink">Deposit</Link>
          <Link to="/withdraw-funds" className="rounded-full border border-[var(--p-line)] px-4 py-2 text-sm">Withdraw</Link>
          <Link to="/platform" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[var(--p-line)] px-4 py-2 text-sm">Trade</Link>
        </div>
      </div>
      <div className="rounded-2xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold">
        Documents are in review. You can still look around. Withdrawals stay locked until approval.
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value]) => (
          <article key={label} className="rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5">
            <p className="text-sm text-[var(--p-muted)]">{label}</p>
            <p className="mt-2 font-serif text-3xl">{value}</p>
          </article>
        ))}
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
        <article className="rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Performance</h2>
            <span className="text-sm text-[var(--p-muted)]">No closed trades</span>
          </div>
          <svg viewBox="0 0 560 160" className="mt-4 h-40 w-full">
            <path d="M0 120 C 60 110, 80 80, 130 90 S 200 40, 260 55 340 130, 400 70 500 30, 560 40" fill="none" stroke="#49F0B8" strokeWidth="3" />
          </svg>
        </article>
        <article className="rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5">
          <h2 className="text-2xl">Announcements</h2>
          <ul className="mt-4 space-y-4 text-sm">
            {announcements.map((item) => (
              <li key={item.id}>
                <p className="font-medium">{item.title}</p>
                <p className="text-[var(--p-muted)]">{item.body}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
      <article className="overflow-x-auto rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)]">
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="text-2xl">Recent activity</h2>
          <Link to="/transactions-history" className="text-sm text-mint">View all</Link>
        </div>
        <table className="w-full min-w-[640px] text-left text-sm">
          <tbody>
            {activity.slice(0, 4).map((row) => (
              <tr key={row.id} className="border-t border-[var(--p-line)]">
                <td className="px-5 py-3">{row.type}</td>
                <td className="px-5 py-3 text-[var(--p-muted)]">{row.date}</td>
                <td className="px-5 py-3">{row.amount}</td>
                <td className="px-5 py-3"><StatusPill value={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </div>
  );
}
