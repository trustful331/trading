import { useState, type FormEvent } from "react";
import { createRecord, useRecords } from "src/utils/api";

type Notice = { id: string; title: string; body: string };

const starter: Notice[] = [
  { id: "AN-1", title: "Swap-free request window", body: "Open until Friday. Sample notice." },
  { id: "AN-2", title: "Platform maintenance", body: "Sunday 02:00–03:00. No live session." },
];

export default function Announcements() {
  const saved = useRecords("/api/announcements", starter);
  const [extra, setExtra] = useState<Notice[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const visible = [...extra, ...saved.filter((item) => !extra.some((row) => row.id === item.id))];

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim() || !body.trim()) return;
    const created = await createRecord<Notice>("/api/announcements", { title, body });
    if (!created) return;
    setExtra((current) => [created, ...current]);
    setTitle("");
    setBody("");
  }

  return (
    <div className="space-y-4">
      <h1 className="font-serif text-4xl">Announcements</h1>
      <form className="grid gap-3 rounded-3xl bg-white p-5" onSubmit={onSubmit}>
        <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" className="rounded-2xl border border-black/10 px-4 py-3" />
        <textarea value={body} onChange={(event) => setBody(event.target.value)} rows={3} placeholder="Notice" className="rounded-2xl border border-black/10 px-4 py-3" />
        <button className="w-fit rounded-full bg-ink px-4 py-2 text-sm text-paper">Save</button>
      </form>
      <div className="grid gap-3">
        {visible.map((item) => (
          <article key={item.id} className="rounded-3xl bg-white px-5 py-4">
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-ink/50">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
