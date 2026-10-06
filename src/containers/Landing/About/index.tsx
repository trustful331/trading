import { PageIntro } from "src/components/_common/PageIntro";

export default function About() {
  return (
    <>
      <PageIntro
        kicker="About"
        title="A desk designed before the licence paperwork."
        text="Elite Trade FX is this project's brokerage platform. Regulatory status is unpublished until official documents are added."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:px-6 lg:grid-cols-3">
        {[
          ["01", "Clarity", "Risk sits in the footer and on the pages where people decide."],
          ["02", "One system", "Public site, client portal, and staff desk share the same type and color."],
          ["03", "Room to connect", "Payments, storage, and a trading terminal can plug in without a redesign."],
        ].map(([step, title, text]) => (
          <article key={step} className="rounded-3xl border border-white/10 p-6">
            <p className="font-serif text-4xl text-gold">{step}</p>
            <h2 className="mt-4 text-3xl">{title}</h2>
            <p className="mt-2 text-sm text-mist">{text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
