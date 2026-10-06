import { Link } from "react-router-dom";
import { brand } from "src/config/brand";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink ring-1 ring-white/10">
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
          <path d="M6 24L16 6L26 24" stroke="#49F0B8" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M10 18H22" stroke="#E7C98A" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </span>
      <span className={`text-lg font-semibold tracking-tight ${light ? "text-ink" : "text-paper"}`}>
        {brand.name}
      </span>
    </Link>
  );
}
