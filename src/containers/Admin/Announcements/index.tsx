export default function Announcements() {
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-4xl">Announcements</h1>
      <form className="grid gap-3 rounded-3xl bg-white p-5" onSubmit={(event) => event.preventDefault()}>
        <input placeholder="Title" className="rounded-2xl border border-black/10 px-4 py-3" defaultValue="Swap-free request window" />
        <textarea rows={3} className="rounded-2xl border border-black/10 px-4 py-3" defaultValue="Open until Friday for Standard accounts." />
        <button className="w-fit rounded-full bg-ink px-4 py-2 text-sm text-paper">Save draft</button>
      </form>
    </div>
  );
}
