const types = [
  { name: "Silver", swapFree: false, note: "Entry account. Commercial terms are not published yet." },
  { name: "Gold", swapFree: false, note: "Active account. Commercial terms are not published yet." },
  { name: "Platinum", swapFree: false, note: "Higher-volume account. Commercial terms are not published yet." },
  { name: "Islamic", swapFree: true, note: "Swap-free flag. Symbol coverage is not published yet." },
];

export default function AccountTypes() {
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-4xl">Account types</h1>
      <p className="text-sm text-ink/50">Loaded from configuration. Minimum deposit, spread, and leverage stay empty until official figures exist.</p>
      <div className="grid gap-3 md:grid-cols-2">
        {types.map((type) => (
          <article key={type.name} className="rounded-xl bg-white p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-3xl">{type.name}</h2>
              <span className="text-xs text-ink/50">{type.swapFree ? "Swap-free" : "Swap applies"}</span>
            </div>
            <p className="mt-2 text-sm text-ink/60">{type.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
