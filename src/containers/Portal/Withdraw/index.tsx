export default function Withdraw() {
  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <p className="text-xs tracking-[0.22em] text-mint uppercase">Withdraw</p>
        <h1 className="text-4xl">Send funds out</h1>
      </div>
      <div className="rounded-2xl border border-rose/40 bg-rose/10 px-4 py-3 text-sm text-rose">
        KYC is not approved on this sample profile, so the confirm button stays disabled.
      </div>
      <form className="grid gap-4 rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5" onSubmit={(event) => event.preventDefault()}>
        <label className="text-sm">Amount
          <input defaultValue="400" className="mt-1 w-full rounded-2xl border border-[var(--p-line)] bg-[var(--p-card-2)] px-4 py-3" />
        </label>
        <label className="text-sm">Method
          <select className="mt-1 w-full rounded-2xl border border-[var(--p-line)] bg-[var(--p-card-2)] px-4 py-3">
            <option>Local transfer</option>
            <option>Bank wire</option>
            <option>Crypto</option>
          </select>
        </label>
        <label className="text-sm">Destination
          <input placeholder="Account or wallet" className="mt-1 w-full rounded-2xl border border-[var(--p-line)] bg-[var(--p-card-2)] px-4 py-3" />
        </label>
        <div className="flex justify-between text-sm text-[var(--p-muted)]">
          <span>Available</span><span>0.00 USD</span>
        </div>
        <label className="text-sm">One-time code
          <input placeholder="000000" className="mt-1 w-full rounded-2xl border border-[var(--p-line)] bg-[var(--p-card-2)] px-4 py-3" />
        </label>
        <button disabled className="rounded-full bg-white/10 py-3 text-sm text-[var(--p-muted)]">Confirm withdrawal</button>
      </form>
    </div>
  );
}
