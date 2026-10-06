import { cn } from "src/utils/cn";

const tones: Record<string, string> = {
  Completed: "bg-emerald-100 text-emerald-800",
  Approved: "bg-emerald-100 text-emerald-800",
  Pending: "bg-amber-100 text-amber-800",
  Open: "bg-amber-100 text-amber-800",
  Waiting: "bg-amber-100 text-amber-800",
  "In review": "bg-amber-100 text-amber-800",
  Rejected: "bg-[#ffe4e8] text-[#9f1239]",
  Closed: "bg-slate-200 text-slate-700",
};

export default function StatusPill({ value }: { value: string }) {
  return (
    <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium", tones[value] ?? "bg-white/10 text-paper")}>
      {value}
    </span>
  );
}
