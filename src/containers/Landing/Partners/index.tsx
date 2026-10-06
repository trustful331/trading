import { Link } from "react-router-dom";
import { PageIntro } from "src/components/_common/PageIntro";

export default function Partners() {
  return (
    <>
      <PageIntro
        kicker="Partners"
        title="Introduce clients. See the trail."
        text="An introducing-broker layout: link, referred accounts, and a commission summary — all sample numbers."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:px-6 lg:grid-cols-3">
        {[
          ["Referral link", "primetradefx.com/r/AMINA"],
          ["Referred clients", "18"],
          ["Sample commission", "$1,240.00"],
        ].map(([label, value]) => (
          <article key={label} className="rounded-3xl border border-white/10 bg-panel p-6">
            <p className="text-sm text-mist">{label}</p>
            <p className="mt-3 font-serif text-4xl">{value}</p>
          </article>
        ))}
      </section>
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <Link to="/partners" className="rounded-full bg-mint px-5 py-3 text-sm font-semibold text-ink">
          Open partner view
        </Link>
      </div>
    </>
  );
}
