import { Link } from "react-router-dom";
import { clients, kycQueue, moneyQueue } from "src/data/site";

const cards = [
  ["New registrations", "24", "This week"],
  ["Pending deposits", "$15,500", "2 items"],
  ["Pending withdrawals", "$2,600", "2 items"],
  ["KYC in queue", String(kycQueue.length), "Needs a look"],
];

export default function AdminHome() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs tracking-[0.22em] text-ink/50 uppercase">Today</p>
        <h1 className="font-serif text-4xl">Desk overview</h1>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(([label, value, note]) => (
          <article key={label} className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-sm text-ink/50">{label}</p>
            <p className="mt-2 font-serif text-4xl">{value}</p>
            <p className="mt-1 text-xs text-ink/40">{note}</p>
          </article>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-3xl bg-white p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl">Latest clients</h2>
            <Link to="/admin/users" className="text-sm text-mint-2">Open list</Link>
          </div>
          <ul className="mt-4 divide-y divide-black/5">
            {clients.map((client) => (
              <li key={client.id} className="flex items-center justify-between py-3 text-sm">
                <span>{client.name}</span>
                <span className="text-ink/50">{client.kyc}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl bg-white p-5">
          <h2 className="font-serif text-2xl">Money waiting</h2>
          <ul className="mt-4 divide-y divide-black/5">
            {moneyQueue.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-3 text-sm">
                <span>{item.id} · {item.client}</span>
                <span>{item.amount}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
