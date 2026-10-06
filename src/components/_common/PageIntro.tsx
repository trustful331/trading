import { brand } from "src/config/brand";

export function PageIntro({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs tracking-[0.28em] text-mint uppercase">{kicker}</p>
        <h1 className="mt-3 max-w-3xl text-5xl leading-[0.95] sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-mist sm:text-lg">{text}</p>
      </div>
    </section>
  );
}

export function RiskStrip() {
  return (
    <p className="mx-auto mt-12 max-w-6xl px-4 text-xs leading-relaxed text-mist sm:px-6">
      {brand.risk}
    </p>
  );
}
