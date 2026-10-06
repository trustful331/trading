export default function PartnersPortal() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs tracking-[0.22em] text-mint uppercase">Introducing broker</p>
        <h1 className="text-4xl">Your link</h1>
      </div>
      <div className="rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5">
        <p className="text-sm text-[var(--p-muted)]">Referral URL</p>
        <p className="mt-2 text-xl">primetradefx.com/r/AMINA</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Clicks", "240"],
          ["Accounts", "18"],
          ["Commission", "$1,240"],
        ].map(([label, value]) => (
          <article key={label} className="rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5">
            <p className="text-sm text-[var(--p-muted)]">{label}</p>
            <p className="mt-2 font-serif text-4xl">{value}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
