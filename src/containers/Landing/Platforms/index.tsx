import { MonitorSmartphone, Laptop, Smartphone } from "lucide-react";
import { PageIntro } from "src/components/_common/PageIntro";

const platforms = [
  { icon: Laptop, name: "Desktop", text: "A desktop workspace. A broker bridge, including MT5, stays on the server." },
  { icon: MonitorSmartphone, name: "Web", text: "The in-app terminal reads the market-data provider. Today that provider is simulated." },
  { icon: Smartphone, name: "Mobile", text: "The same account actions, laid out for a phone." },
];

export default function Platforms() {
  return (
    <>
      <PageIntro
        kicker="Platforms"
        title="One brand. Three places to look."
        text="Desktop, web, and mobile are one product. MT5 credentials never go to the browser."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:px-6 lg:grid-cols-3">
        {platforms.map((item) => (
          <article key={item.name} className="rounded-3xl border border-white/10 bg-panel p-6">
            <item.icon className="text-mint" />
            <h2 className="mt-5 text-4xl">{item.name}</h2>
            <p className="mt-3 text-sm text-mist">{item.text}</p>
            <button className="mt-6 rounded-full border border-white/15 px-4 py-2 text-sm">Download preview</button>
          </article>
        ))}
      </section>
    </>
  );
}
