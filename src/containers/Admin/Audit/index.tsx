import { auditRows } from "src/data/site";
import { useRecords } from "src/utils/api";

export default function Audit() {
  const rows = useRecords("/api/audit", auditRows);
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-4xl">Audit log</h1>
      <p className="text-sm text-ink/50">Sample entries. A live log would be append-only.</p>
      <div className="overflow-hidden rounded-3xl bg-white">
        <table className="w-full text-left text-sm">
          <tbody>
            {rows.map((row) => (
              <tr key={row.time} className="border-t border-black/5">
                <td className="px-4 py-4 text-ink/50">{row.time}</td>
                <td className="px-4 py-4">{row.actor}</td>
                <td className="px-4 py-4">{row.action}</td>
                <td className="px-4 py-4">{row.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
