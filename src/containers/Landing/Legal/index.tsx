import { useParams } from "react-router-dom";
import { PageIntro } from "src/components/_common/PageIntro";
import { legalPages } from "src/data/site";

export default function Legal() {
  const { slug } = useParams();
  const page = legalPages[slug ?? ""] ?? legalPages.terms;

  return (
    <>
      <PageIntro kicker="Legal" title={page.title} text="Sample policy layout. Replace with counsel-approved text before any launch." />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-10 sm:px-6">
        {page.body.map((paragraph) => (
          <p key={paragraph} className="text-mist leading-relaxed">{paragraph}</p>
        ))}
      </section>
    </>
  );
}
