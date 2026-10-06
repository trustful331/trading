import { useState } from "react";
import { PageIntro } from "src/components/_common/PageIntro";
import { instruments, marketGroups } from "src/data/site";

export default function Markets() {
  const [active, setActive] = useState("All");
  const filters = ["All", ...marketGroups.map((group) => group.title)];
  const rows = instruments.filter((item) => active === "All" || item.market === active);

  return (
    <>
      <PageIntro
        kicker="Markets"
        title="A board you can scan in one glance."
        text="Sample symbols across forex, metals, indices, crypto CFDs, and energies. Prices on the home ticker are decorative."
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-4 py-2 text-sm ${active === filter ? "bg-mint text-ink" : "bg-white/5 text-paper"}`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-mist">
              <tr>
                <th className="px-4 py-3 font-medium">Symbol</th>
                <th className="px-4 py-3 font-medium">Market</th>
                <th className="px-4 py-3 font-medium">Spread</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">Leverage</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.symbol} className="border-t border-white/10">
                  <td className="px-4 py-4 font-medium">{row.symbol}</td>
                  <td className="px-4 py-4 text-mist">{row.market}</td>
                  <td className="px-4 py-4">{row.spread}</td>
                  <td className="hidden px-4 py-4 sm:table-cell">{row.leverage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
