import StatusPill from "src/components/_common/StatusPill";
import { kycQueue } from "src/data/site";
import { useRecords } from "src/utils/api";

export default function Kyc() {
  const rows = useRecords("/api/kyc", kycQueue);
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-4xl">KYC queue</h1>
      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <div className="space-y-3">
          {rows.map((item) => (
            <article key={item.id} className="flex flex-wrap items-center justify-between gap-3 rounded-3xl bg-white p-5">
              <div>
                <p className="text-xs text-ink/40">{item.id} · {item.submitted}</p>
                <p className="mt-1 font-medium">{item.client}</p>
                <p className="text-sm text-ink/50">{item.doc}</p>
              </div>
              <StatusPill value={item.status} />
            </article>
          ))}
        </div>
        <aside className="rounded-3xl bg-ink p-5 text-paper">
          <p className="text-xs tracking-[0.2em] text-gold uppercase">Review</p>
          <h2 className="mt-2 font-serif text-3xl">Passport · front</h2>
          <div className="mt-4 grid h-40 place-items-center rounded-2xl bg-white/5 text-sm text-mist">Document preview</div>
          <label className="mt-4 block text-sm">Reason
            <textarea rows={3} className="mt-1 w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2" placeholder="Required if rejecting" />
          </label>
          <div className="mt-4 flex gap-2">
            <button className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink">Approve</button>
            <button className="rounded-full border border-white/15 px-4 py-2 text-sm">Reject</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
