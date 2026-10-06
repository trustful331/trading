import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Minus, MousePointer2, Search, TrendingUp, Type } from "lucide-react";
import PriceChart, { type ChartKind, type Ohlc } from "src/components/charts/PriceChart";
import { mockMarketData } from "src/domain/providers/mock/marketData.ts";
import type { Timeframe } from "src/domain/providers/types.ts";

const frames: Timeframe[] = ["1m", "5m", "15m", "30m", "1h", "4h", "1D", "1W", "1M"];

const metrics = [
  ["Balance", "0.00"],
  ["Credit", "0.00"],
  ["Equity", "0.00"],
  ["Margin", "0.00"],
  ["Free margin", "0.00"],
  ["Margin level", "0.00"],
  ["P/L", "$ 0.00"],
];

export default function Trade() {
  const [symbol, setSymbol] = useState("EURUSD");
  const [frame, setFrame] = useState<Timeframe>("1h");
  const [kind, setKind] = useState<ChartKind>("candles");
  const [panel, setPanel] = useState<"positions" | "history" | "orders">("positions");
  const [desk, setDesk] = useState<"chart" | "news" | "heat">("chart");
  const [query, setQuery] = useState("");
  const [marketOpen, setMarketOpen] = useState(false);
  const [ohlc, setOhlc] = useState<Ohlc | null>(null);

  const quote = mockMarketData.getQuote(symbol);
  const bars = useMemo(() => mockMarketData.getHistoricalBars(symbol, frame, 180), [symbol, frame]);
  const book = mockMarketData.getSymbols().map((item) => mockMarketData.getQuote(item));
  const visible = book.filter((item) => `${item.symbol} ${item.name}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#0b1220] text-[#d7deea]">
      <header className="flex h-12 shrink-0 items-center gap-4 border-b border-white/10 px-3">
        <Link to="/dashboard" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
          <span className="grid h-7 w-7 place-items-center rounded bg-[#12304a] text-[11px] text-[#7dffe1]">PT</span>
          PRIMETRADE
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {(
            [
              ["chart", "Chart"],
              ["news", "News"],
              ["heat", "Heatmap"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setDesk(id)}
              className={`rounded px-3 py-1 ${desk === id ? "bg-white/10 text-white" : "text-[#8b98ad]"}`}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-4 text-[11px] lg:flex">
          {metrics.map(([label, value]) => (
            <div key={label} className="text-right">
              <p className="text-[#8b98ad]">{label}</p>
              <p className={label === "P/L" ? "text-[#2ebd85]" : "text-white"}>{value}</p>
            </div>
          ))}
          <div className="rounded-full border border-white/10 px-3 py-1 text-xs">SIM-820441</div>
        </div>
        <button className="ml-auto rounded border border-white/10 px-2 py-1 text-xs md:hidden" onClick={() => setMarketOpen(true)}>
          Market
        </button>
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-11 shrink-0 flex-col items-center gap-3 border-r border-white/10 py-3 text-[#8b98ad] md:flex">
          <button aria-label="Crosshair" className="text-white"><MousePointer2 size={16} /></button>
          <button aria-label="Line chart" onClick={() => setKind("line")} className={kind === "line" ? "text-[#7dffe1]" : ""}><Minus size={16} /></button>
          <button aria-label="Area chart" onClick={() => setKind("area")} className={kind === "area" ? "text-[#7dffe1]" : ""}><TrendingUp size={16} /></button>
          <button aria-label="Candles" onClick={() => setKind("candles")} className={kind === "candles" ? "text-[#7dffe1]" : ""}><Type size={16} /></button>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          {desk === "chart" && (
            <>
              <div className="flex flex-wrap items-center gap-3 border-b border-white/10 px-3 py-2 text-xs">
                <p className="font-semibold text-white">{quote.symbol}</p>
                <p className="text-[#8b98ad]">{quote.name}</p>
                {ohlc && (
                  <p className="font-mono text-[11px]">
                    O {ohlc.open.toFixed(quote.digits)} H {ohlc.high.toFixed(quote.digits)} L {ohlc.low.toFixed(quote.digits)} C {ohlc.close.toFixed(quote.digits)}
                  </p>
                )}
                <div className="ml-auto flex flex-wrap gap-1">
                  {frames.map((item) => (
                    <button
                      key={item}
                      onClick={() => setFrame(item)}
                      className={`rounded px-2 py-1 ${frame === item ? "bg-white text-[#0b1220]" : "text-[#8b98ad]"}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative min-h-0 flex-1">
                <PriceChart bars={bars} digits={quote.digits} kind={kind} onOhlc={setOhlc} />
                <p className="pointer-events-none absolute bottom-3 left-3 text-[10px] tracking-wide text-white/25">SIMULATED</p>
              </div>
            </>
          )}
          {desk === "news" && (
            <div className="grid flex-1 place-items-center text-sm text-[#8b98ad]">News feed is not connected.</div>
          )}
          {desk === "heat" && (
            <div className="grid flex-1 grid-cols-2 content-start gap-2 overflow-auto p-3 sm:grid-cols-3 lg:grid-cols-4">
              {book.map((item) => (
                <button
                  key={item.symbol}
                  onClick={() => {
                    setSymbol(item.symbol);
                    setDesk("chart");
                  }}
                  className={`rounded p-3 text-left ${item.changePercent >= 0 ? "bg-[#14352c]" : "bg-[#3a1a22]"}`}
                >
                  <p className="text-sm font-semibold">{item.symbol}</p>
                  <p className={item.changePercent >= 0 ? "text-[#2ebd85]" : "text-[#f6465d]"}>{item.changePercent}%</p>
                </button>
              ))}
            </div>
          )}

          <div className="h-44 shrink-0 border-t border-white/10">
            <div className="flex items-center gap-4 border-b border-white/10 px-3 text-xs">
              {(
                [
                  ["positions", "Positions"],
                  ["history", "History"],
                  ["orders", "Pending orders"],
                ] as const
              ).map(([id, label]) => (
                <button key={id} onClick={() => setPanel(id)} className={`py-2 ${panel === id ? "border-b border-[#7dffe1] text-white" : "text-[#8b98ad]"}`}>
                  {label}
                </button>
              ))}
            </div>
            <div className="overflow-auto">
              <table className="w-full min-w-[880px] text-left text-[11px] text-[#8b98ad]">
                <thead>
                  <tr>
                    {["Symbol", "Open date", "Type", "Volume", "SL", "TP", "Open price", "Market price", "Commission", "Swaps", "P/L"].map((head) => (
                      <th key={head} className="px-3 py-2 font-medium">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-6 text-[#5f6d82]" colSpan={11}>
                      No {panel === "orders" ? "pending orders" : panel}. Simulated account has no live trades.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <aside className={`${marketOpen ? "fixed inset-y-0 right-0 z-20 flex w-72" : "hidden"} w-72 shrink-0 flex-col border-l border-white/10 bg-[#0b1220] md:flex`}>
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
            <p className="text-sm">Market</p>
            <button className="text-xs md:hidden" onClick={() => setMarketOpen(false)}>Close</button>
          </div>
          <label className="m-2 flex items-center gap-2 rounded border border-white/10 px-2 py-1 text-xs text-[#8b98ad]">
            <Search size={14} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="w-full bg-transparent text-white outline-none"
            />
          </label>
          <div className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.6fr] px-3 pb-1 text-[10px] text-[#8b98ad]">
            <span>Symbol</span><span className="text-right">Bid</span><span className="text-right">Ask</span><span className="text-right">1D</span>
          </div>
          <div className="scrollbar min-h-0 flex-1 overflow-auto">
            {visible.map((item) => (
              <button
                key={item.symbol}
                onClick={() => {
                  setSymbol(item.symbol);
                  setDesk("chart");
                  setMarketOpen(false);
                }}
                className={`grid w-full grid-cols-[1.4fr_0.7fr_0.7fr_0.6fr] px-3 py-1.5 text-left text-[11px] hover:bg-white/5 ${symbol === item.symbol ? "bg-white/5" : ""}`}
              >
                <span>
                  <span className="block text-white">{item.symbol}</span>
                  <span className="block truncate text-[10px] text-[#8b98ad]">{item.name}</span>
                </span>
                <span className="text-right text-[#f6465d]">{item.bid.toFixed(item.digits)}</span>
                <span className="text-right text-[#2ebd85]">{item.ask.toFixed(item.digits)}</span>
                <span className={`text-right ${item.changePercent >= 0 ? "text-[#2ebd85]" : "text-[#f6465d]"}`}>{item.changePercent}%</span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
