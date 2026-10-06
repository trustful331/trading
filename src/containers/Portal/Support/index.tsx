import { useState } from "react";
import { tickets } from "src/data/site";
import StatusPill from "src/components/_common/StatusPill";

export default function Support() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs tracking-[0.22em] text-mint uppercase">Support</p>
          <h1 className="text-4xl">Tickets</h1>
        </div>
        <button onClick={() => setOpen(true)} className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink">New ticket</button>
      </div>
      {open && (
        <form className="grid gap-3 rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5" onSubmit={(event) => event.preventDefault()}>
          <input placeholder="Subject" className="rounded-2xl border border-[var(--p-line)] bg-[var(--p-card-2)] px-4 py-3" />
          <textarea placeholder="How can we help?" rows={4} className="rounded-2xl border border-[var(--p-line)] bg-[var(--p-card-2)] px-4 py-3" />
          <button className="w-fit rounded-full border border-[var(--p-line)] px-4 py-2 text-sm">Save draft on screen</button>
        </form>
      )}
      <div className="grid gap-3">
        {tickets.map((ticket) => (
          <article key={ticket.id} className="flex items-center justify-between rounded-2xl border border-[var(--p-line)] bg-[var(--p-card)] px-4 py-4">
            <div>
              <p className="text-sm text-[var(--p-muted)]">{ticket.id}</p>
              <p>{ticket.subject}</p>
            </div>
            <StatusPill value={ticket.status} />
          </article>
        ))}
      </div>
      <div className="rounded-3xl border border-dashed border-[var(--p-line)] p-6 text-sm text-[var(--p-muted)]">
        Live chat placeholder — a person would appear here.
      </div>
    </div>
  );
}
