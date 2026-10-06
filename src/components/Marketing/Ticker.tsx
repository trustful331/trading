import { ticker } from "src/data/site";

export default function Ticker() {
  const loop = [...ticker, ...ticker];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink-2/80">
      <div className="ticker-track flex w-max gap-8 py-2.5">
        {loop.map((item, index) => (
          <div key={`${item.symbol}-${index}`} className="flex items-center gap-2 px-2 text-sm">
            <span className="font-medium text-paper">{item.symbol}</span>
            <span className="text-mist">feed offline</span>
          </div>
        ))}
      </div>
    </div>
  );
}
