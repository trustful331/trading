import StatusPill from "src/components/_common/StatusPill";
import { tickets } from "src/data/site";

export default function Tickets() {
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-4xl">Tickets</h1>
      <div className="grid gap-3">
        {tickets.map((ticket) => (
          <article key={ticket.id} className="flex items-center justify-between rounded-3xl bg-white px-5 py-4">
            <div>
              <p className="text-xs text-ink/40">{ticket.id} · {ticket.updated}</p>
              <p className="font-medium">{ticket.subject}</p>
              <p className="text-sm text-ink/50">{ticket.from}</p>
            </div>
            <StatusPill value={ticket.status} />
          </article>
        ))}
      </div>
    </div>
  );
}
