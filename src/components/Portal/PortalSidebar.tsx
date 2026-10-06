import { NavLink } from "react-router-dom";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Bell,
  ClipboardList,
  Headset,
  LayoutDashboard,
  LineChart,
  Receipt,
  Shield,
  Upload,
  UserRound,
  Users,
  Wallet,
  X,
} from "lucide-react";
import { portalNav } from "src/data/site";
import { cn } from "src/utils/cn";

const icons: Record<string, typeof LayoutDashboard> = {
  Dashboard: LayoutDashboard,
  Deposit: ArrowDownToLine,
  Withdraw: ArrowUpFromLine,
  Questionnaire: ClipboardList,
  "Trading accounts": Wallet,
  Documents: Upload,
  Transactions: Receipt,
  Trade: LineChart,
  Security: Shield,
  Profile: UserRound,
  Support: Headset,
  Partners: Users,
};

export default function PortalSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {open && (
        <button className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={onClose} aria-label="Close menu" />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-[var(--p-line)] bg-[var(--p-card)] transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <div>
            <p className="text-xs tracking-[0.22em] text-mint uppercase">Client desk</p>
            <p className="font-semibold">Prime Trade FX</p>
          </div>
          <button className="lg:hidden" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <nav className="scrollbar flex-1 space-y-1 overflow-y-auto px-3 pb-6">
          {portalNav.map((item) => {
            const Icon = icons[item.label] ?? Bell;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm",
                    isActive
                      ? "bg-[var(--p-soft)] text-mint"
                      : "text-[var(--p-muted)] hover:bg-white/5 hover:text-[var(--p-text)]",
                  )
                }
              >
                <Icon size={16} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
