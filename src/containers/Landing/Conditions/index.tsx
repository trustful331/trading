import { PageIntro } from "src/components/_common/PageIntro";
import { instruments } from "src/data/site";

export default function Conditions() {
  return (
    <>
      <PageIntro
        kicker="Conditions"
        title="Spreads, leverage, swaps — in the open."
        text="Illustrative figures only. A later editor in the staff desk can replace this table."
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="overflow-x-auto rounded-3xl border border-white/10">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-white/5 text-mist">
              <tr>
                {["Symbol", "Market", "Typical spread", "Leverage", "Swap long / short"].map((head) => (
                  <th key={head} className="px-4 py-3 font-medium">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {instruments.map((row) => (
                <tr key={row.symbol} className="border-t border-white/10">
                  <td className="px-4 py-4 font-medium">{row.symbol}</td>
                  <td className="px-4 py-4 text-mist">{row.market}</td>
                  <td className="px-4 py-4">{row.spread}</td>
                  <td className="px-4 py-4">{row.leverage}</td>
                  <td className="px-4 py-4">{row.swap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
