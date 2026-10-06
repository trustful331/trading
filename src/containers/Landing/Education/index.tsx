import { PageIntro } from "src/components/_common/PageIntro";
import { lessons } from "src/data/site";

export default function Education() {
  return (
    <>
      <PageIntro
        kicker="Education"
        title="Short lessons. No hype."
        text="A library layout for people who want the mechanics before the chart."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {lessons.map((lesson, index) => (
          <article key={lesson.title} className="rounded-3xl border border-white/10 bg-panel p-5">
            <p className="text-xs text-gold">0{index + 1} · {lesson.level}</p>
            <h2 className="mt-3 text-3xl leading-tight">{lesson.title}</h2>
            <p className="mt-4 text-sm text-mist">{lesson.time} read</p>
          </article>
        ))}
      </section>
    </>
  );
}
