import { instruments } from "src/data/site";

export default function ConditionsEditor() {
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-4xl">Trading conditions</h1>
      <p className="text-sm text-ink/50">Editable-looking table. Changes are not saved.</p>
      <div className="overflow-x-auto rounded-3xl bg-white">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="text-ink/50">
            <tr>
              {["Symbol", "Spread", "Leverage"].map((head) => (
                <th key={head} className="px-4 py-3 font-medium">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {instruments.slice(0, 6).map((row) => (
              <tr key={row.symbol} className="border-t border-black/5">
                <td className="px-4 py-3">{row.symbol}</td>
                <td className="px-4 py-3"><input defaultValue={row.spread} className="w-24 rounded-xl border border-black/10 px-2 py-1" /></td>
                <td className="px-4 py-3"><input defaultValue={row.leverage} className="w-24 rounded-xl border border-black/10 px-2 py-1" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
