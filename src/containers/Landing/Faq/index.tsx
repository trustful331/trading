import { useState } from "react";
import { PageIntro } from "src/components/_common/PageIntro";
import { faqs } from "src/data/site";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageIntro kicker="FAQ" title="Straight answers." text="Short questions for the public site. Staff can edit a CMS version later." />
      <section className="mx-auto max-w-3xl space-y-3 px-4 py-10 sm:px-6">
        {faqs.map((item, index) => (
          <button
            key={item.q}
            onClick={() => setOpen(index)}
            className="block w-full rounded-3xl border border-white/10 bg-panel p-5 text-left"
          >
            <span className="text-lg">{item.q}</span>
            {open === index && <p className="mt-3 text-sm text-mist">{item.a}</p>}
          </button>
        ))}
      </section>
    </>
  );
}
