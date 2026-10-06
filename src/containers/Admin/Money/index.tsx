import StatusPill from "src/components/_common/StatusPill";
import { moneyQueue } from "src/data/site";

export function MoneyQueue({ kind }: { kind: "Deposit" | "Withdrawal" }) {
  const rows = moneyQueue.filter((item) => (kind === "Deposit" ? item.id.startsWith("DP") : item.id.startsWith("WD")));
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-4xl">{kind}s</h1>
      <div className="overflow-x-auto rounded-3xl bg-white">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="text-ink/50">
            <tr>
              {["ID", "Client", "Method", "Amount", "Status", "Action"].map((head) => (
                <th key={head} className="px-4 py-3 font-medium">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-black/5">
                <td className="px-4 py-3">{row.id}</td>
                <td className="px-4 py-3">{row.client}</td>
                <td className="px-4 py-3">{row.method}</td>
                <td className="px-4 py-3">{row.amount}</td>
                <td className="px-4 py-3"><StatusPill value={row.status === "Approved" ? "Approved" : "Pending"} /></td>
                <td className="px-4 py-3 text-mint-2">Review</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
