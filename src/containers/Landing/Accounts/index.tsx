import { Link } from "react-router-dom";
import { PageIntro } from "src/components/_common/PageIntro";
import { accounts } from "src/data/site";

export default function Accounts() {
  return (
    <>
      <PageIntro
        kicker="Accounts"
        title="Three ways to price the same market."
        text="Standard, Pro, and ECN sit side by side. Numbers are placeholders for a later conditions feed."
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-3">
          {accounts.map((account) => (
            <article key={account.name} className={`rounded-3xl border p-6 ${account.featured ? "border-mint bg-panel-2" : "border-white/10 bg-panel"}`}>
              <p className="text-xs tracking-[0.2em] text-gold uppercase">{account.best}</p>
              <h2 className="mt-2 text-4xl">{account.name}</h2>
              <p className="mt-1 text-mint">{account.price}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-mist">Spread</dt><dd>{account.spread}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-mist">Commission</dt><dd>{account.commission}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-mist">Leverage</dt><dd>{account.leverage}</dd></div>
              </dl>
              <ul className="mt-6 space-y-2 text-sm text-paper/90">
                {account.points.map((point) => (
                  <li key={point}>· {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 overflow-x-auto rounded-3xl border border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-white/5 text-mist">
              <tr>
                {["", "Standard", "Pro", "ECN"].map((head) => (
                  <th key={head} className="px-4 py-3 font-medium">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Minimum", "$100", "$2,000", "$10,000"],
                ["Base currency", "USD", "USD", "USD"],
                ["Negative balance cover", "Shown as policy", "Shown as policy", "Shown as policy"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/10">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/register" className="mt-8 inline-flex rounded-full bg-mint px-5 py-3 text-sm font-semibold text-ink">
          Choose an account
        </Link>
      </section>
    </>
  );
}
