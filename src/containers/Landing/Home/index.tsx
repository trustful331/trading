import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles, Timer } from "lucide-react";
import Ticker from "src/components/Marketing/Ticker";
import { accounts, marketGroups } from "src/data/site";
import { brand } from "src/config/brand";
import { mockMarketData } from "src/domain/providers/mock/marketData.ts";

const quotes = mockMarketData.getSymbols().slice(0, 4).map((symbol) => mockMarketData.getQuote(symbol));

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-fade" />
        <div className="pointer-events-none absolute -top-24 left-[12%] h-80 w-80 rounded-full bg-mint/20 blur-[110px]" />
        <div className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-gold/15 blur-[100px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs tracking-[0.28em] text-mint uppercase"
            >
              Private desk · sample prices
            </motion.p>
            <h1 className="mt-4 text-6xl leading-[0.9] sm:text-7xl">
              Markets,
              <span className="block italic text-gold">held in focus.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-mist">
              Prime Trade FX covers forex, metals, energies, indices, shares, commodities, and crypto CFDs. Commercial terms stay unpublished until they are confirmed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/register" className="rounded-full bg-mint px-5 py-3 text-sm font-semibold text-ink">
                Open live account
              </Link>
              <Link to="/platform" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm text-paper">
                Try demo terminal
              </Link>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {[
                ["Multi-asset", "Forex through crypto CFDs"],
                ["Own platform", "Web terminal in this app"],
                ["Simulated", "Until a provider connects"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-serif text-3xl">{value}</p>
                  <p className="text-xs text-mist">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-[28px] border border-white/10 bg-panel/80 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-mist">Watchlist</p>
              <span className="rounded-full bg-mint/15 px-2 py-1 text-[11px] text-mint">Simulated</span>
            </div>
            <svg viewBox="0 0 320 90" className="mt-4 h-24 w-full">
              <path d="M0 70 C 40 68, 50 40, 80 46 S 130 20, 160 28 210 62, 250 34 300 18, 320 22" fill="none" stroke="#49F0B8" strokeWidth="2.5" />
              <path d="M0 70 C 40 68, 50 40, 80 46 S 130 20, 160 28 210 62, 250 34 300 18, 320 22 V 90 H 0 Z" fill="url(#g)" opacity="0.35" />
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#49F0B8" />
                  <stop offset="100%" stopColor="#49F0B8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="mt-2 divide-y divide-white/10">
              {quotes.map((quote) => (
                <div key={quote.symbol} className="flex items-center justify-between py-3 text-sm">
                  <span className="font-medium">{quote.symbol}</span>
                  <span className="text-mist">{quote.bid}</span>
                  <span className={quote.changePercent >= 0 ? "text-mint" : "text-rose"}>{quote.changePercent}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Ticker />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.28em] text-mint uppercase">Markets</p>
            <h2 className="mt-2 text-4xl sm:text-5xl">Five desks. One screen.</h2>
          </div>
          <Link to="/markets" className="hidden items-center gap-1 text-sm text-mint sm:inline-flex">
            View all <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-6">
          {marketGroups.map((group, index) => (
            <Link
              key={group.id}
              to="/markets"
              className={`rounded-3xl border border-white/10 bg-panel p-5 transition hover:-translate-y-0.5 hover:border-mint/40 ${index === 0 ? "md:col-span-3 md:row-span-2" : "md:col-span-3 lg:col-span-2"}`}
            >
              <p className="text-xs text-gold">{group.count}</p>
              <h3 className="mt-2 text-3xl">{group.title}</h3>
              <p className="mt-2 text-sm text-mist">{group.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-paper">
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="border-y border-white/10 bg-ink-2">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-14 sm:px-6 lg:grid-cols-3">
          {accounts.map((account) => (
            <article
              key={account.name}
              className={`rounded-3xl border p-6 ${account.featured ? "border-mint bg-mint text-ink" : "border-white/10 bg-panel text-paper"}`}
            >
              <p className={`text-xs tracking-[0.2em] uppercase ${account.featured ? "text-ink/70" : "text-mist"}`}>
                {account.best}
              </p>
              <h3 className="mt-2 text-4xl">{account.name}</h3>
              <p className="mt-2 text-lg">{account.price}</p>
              <ul className="mt-5 space-y-2 text-sm">
                <li>Spread {account.spread}</li>
                <li>Commission {account.commission}</li>
                <li>Leverage {account.leverage}</li>
              </ul>
              <Link
                to="/accounts"
                className={`mt-6 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${account.featured ? "bg-ink text-mint" : "bg-white/10"}`}
              >
                Compare
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3">
        {[
          { icon: Timer, title: "Clear conditions", text: "Spreads, leverage, and swaps sit in one table — sample figures, ready to be replaced." },
          { icon: ShieldCheck, title: "A client path", text: "Register, questionnaire, documents, deposit, and withdraw are laid out end to end." },
          { icon: Sparkles, title: "A staff desk", text: "Queues for KYC, money movement, and an audit trail are designed beside the public site." },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 p-6">
            <item.icon size={20} className="text-mint" />
            <h3 className="mt-4 text-3xl">{item.title}</h3>
            <p className="mt-2 text-sm text-mist">{item.text}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="overflow-hidden rounded-[32px] bg-paper text-ink">
          <div className="grid gap-6 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div>
              <h2 className="text-5xl leading-none">Open the account screen. Nothing is live yet.</h2>
              <p className="mt-4 max-w-xl text-ink/70">{brand.risk}</p>
            </div>
            <div className="flex items-end gap-3 lg:justify-end">
              <Link to="/register" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-mint">
                Start application
              </Link>
              <Link to="/contact" className="rounded-full border border-ink/15 px-5 py-3 text-sm">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
