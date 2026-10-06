import { Link } from "react-router-dom";
import { brand } from "src/config/brand";
import Logo from "./Logo";

const columns = [
  {
    title: "Trade",
    links: [
      ["/markets", "Markets"],
      ["/accounts", "Account types"],
      ["/platforms", "Platforms"],
      ["/conditions", "Trading conditions"],
    ],
  },
  {
    title: "Learn",
    links: [
      ["/education", "Education"],
      ["/calendar", "Economic calendar"],
      ["/faq", "FAQ"],
      ["/partners", "Partners"],
    ],
  },
  {
    title: "Company",
    links: [
      ["/about", "About"],
      ["/contact", "Contact"],
      ["/funding", "Deposits & withdrawals"],
      ["/admin", "Staff desk"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["/legal/terms", "Terms"],
      ["/legal/privacy", "Privacy"],
      ["/legal/risk", "Risk disclosure"],
      ["/legal/aml", "AML / KYC"],
      ["/legal/cookies", "Cookies"],
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm leading-relaxed text-gold">
          {brand.risk}
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-mist">
              {brand.tagline} A design preview for a brokerage website and client desk.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs tracking-[0.2em] text-mist uppercase">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map(([to, label]) => (
                  <li key={to}>
                    <Link to={to} className="text-sm text-paper/80 hover:text-mint">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-mist sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. Design preview — not a live broker.</p>
          <p>{brand.supportEmail}</p>
        </div>
      </div>
    </footer>
  );
}
