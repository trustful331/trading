import { Building2, CreditCard, Landmark, Wallet } from "lucide-react";
import { PageIntro, RiskStrip } from "src/components/_common/PageIntro";

const methods = [
  { icon: CreditCard, name: "Card", text: "Instant layout for visa-style cards. Fees shown before confirm." },
  { icon: Landmark, name: "Bank transfer", text: "Reference, beneficiary, and expected arrival on one card." },
  { icon: Wallet, name: "Local methods", text: "Regional rails designed as first-class options, not an afterthought." },
  { icon: Building2, name: "Crypto", text: "Network, address, and a clearly labelled demo status." },
];

export default function Funding() {
  return (
    <>
      <PageIntro
        kicker="Funding"
        title="Money in and money out, drawn before it is wired."
        text="No payment provider is connected. These cards are the visual contract for deposits and withdrawals."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:px-6 md:grid-cols-2">
        {methods.map((method) => (
          <article key={method.name} className="rounded-3xl border border-white/10 bg-panel p-6">
            <method.icon className="text-gold" />
            <h2 className="mt-4 text-3xl">{method.name}</h2>
            <p className="mt-2 text-sm text-mist">{method.text}</p>
          </article>
        ))}
      </section>
      <RiskStrip />
      <div className="h-12" />
    </>
  );
}
