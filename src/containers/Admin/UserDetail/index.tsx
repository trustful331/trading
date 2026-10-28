import { Link, useParams } from "react-router-dom";
import StatusPill from "src/components/_common/StatusPill";
import { useRecord } from "src/utils/api";

const fallback = {
  id: "CL-2041",
  name: "Amina Rahman",
  email: "amina.rahman@email.com",
  country: "Pakistan",
  kyc: "In review",
  balance: "$60,590.22",
};

export default function UserDetail() {
  const { id = fallback.id } = useParams();
  const client = useRecord(`/api/clients/${id}`, { ...fallback, id });
  return (
    <div className="space-y-4">
      <Link to="/admin/users" className="text-sm text-ink/50">Back to clients</Link>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs tracking-[0.2em] text-ink/40 uppercase">{client.id}</p>
          <h1 className="font-serif text-4xl">{client.name}</h1>
          <p className="text-sm text-ink/50">{client.email} · {client.country}</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-black/10 px-4 py-2 text-sm">Add note</button>
          <button className="rounded-full bg-ink px-4 py-2 text-sm text-paper">Block</button>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-3xl bg-white p-5 lg:col-span-2">
          <h2 className="font-serif text-2xl">Accounts</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex justify-between"><span>SIM-820441 · Silver</span><span>0.00 USD</span></li>
            <li className="flex justify-between"><span>SIM-820552 · Gold</span><span>0.00 USD</span></li>
          </ul>
        </article>
        <article className="rounded-3xl bg-white p-5">
          <h2 className="font-serif text-2xl">KYC</h2>
          <div className="mt-3"><StatusPill value={client.kyc} /></div>
          <p className="mt-3 text-sm text-ink/50">Passport pending. Address proof rejected.</p>
        </article>
      </div>
      <article className="rounded-3xl bg-white p-5">
        <h2 className="font-serif text-2xl">Notes</h2>
        <p className="mt-2 text-sm text-ink/60">Called about leverage on the ECN account. Sample staff note.</p>
      </article>
    </div>
  );
}
