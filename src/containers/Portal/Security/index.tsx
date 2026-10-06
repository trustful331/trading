const sessions = [
  { device: "Chrome · Windows", place: "Karachi", current: true },
  { device: "Safari · iPhone", place: "Lahore", current: false },
];

export default function Security() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5">
        <h1 className="text-3xl">Password</h1>
        <form className="mt-4 grid gap-3" onSubmit={(event) => event.preventDefault()}>
          {["Current", "New", "Confirm"].map((label) => (
            <input key={label} type="password" placeholder={label} className="rounded-2xl border border-[var(--p-line)] bg-[var(--p-card-2)] px-4 py-3" />
          ))}
          <button className="rounded-full bg-mint py-2.5 text-sm font-semibold text-ink">Update</button>
        </form>
      </section>
      <section className="rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5">
        <h2 className="text-3xl">Two-factor</h2>
        <p className="mt-2 text-sm text-[var(--p-muted)]">A QR placeholder. No authenticator is enrolled.</p>
        <div className="mt-4 grid h-32 w-32 place-items-center rounded-2xl bg-white text-xs text-ink">QR</div>
        <p className="mt-3 text-xs text-[var(--p-muted)]">Backup codes: 4K2M · 9PQ1 · 88LA</p>
      </section>
      <section className="rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5 lg:col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl">Sessions</h2>
          <button className="text-sm text-rose">Sign out everywhere</button>
        </div>
        <ul className="mt-4 divide-y divide-[var(--p-line)]">
          {sessions.map((session) => (
            <li key={session.device} className="flex items-center justify-between py-3 text-sm">
              <span>{session.device} · {session.place}</span>
              <span className="text-[var(--p-muted)]">{session.current ? "This device" : "Active"}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
