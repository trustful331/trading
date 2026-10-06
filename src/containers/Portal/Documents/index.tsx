import { useState } from "react";
import StatusPill from "src/components/_common/StatusPill";

const docs = [
  { name: "Passport · front", status: "Pending" },
  { name: "Passport · back", status: "Pending" },
  { name: "Proof of address", status: "Rejected" },
];

export default function Documents() {
  const [name, setName] = useState("");

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs tracking-[0.22em] text-mint uppercase">KYC</p>
        <h1 className="text-4xl">Upload documents</h1>
        <p className="mt-2 text-sm text-[var(--p-muted)]">JPG, PNG, or PDF up to 10 MB. Files are not uploaded.</p>
      </div>
      <label className="grid cursor-pointer place-items-center rounded-3xl border border-dashed border-[var(--p-line)] bg-[var(--p-card)] px-6 py-12 text-center">
        <input
          type="file"
          className="hidden"
          onChange={(event) => setName(event.target.files?.[0]?.name ?? "")}
        />
        <p className="text-lg">Drop a file or browse</p>
        <p className="mt-1 text-sm text-[var(--p-muted)]">{name || "Nothing selected"}</p>
      </label>
      <div className="grid gap-3">
        {docs.map((doc) => (
          <article key={doc.name} className="flex items-center justify-between rounded-2xl border border-[var(--p-line)] bg-[var(--p-card)] px-4 py-4">
            <div>
              <p>{doc.name}</p>
              {doc.status === "Rejected" && <p className="text-xs text-rose">Address is older than 90 days. Sample reason.</p>}
            </div>
            <StatusPill value={doc.status} />
          </article>
        ))}
      </div>
    </div>
  );
}
