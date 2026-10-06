import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Bell, Menu, Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { toggleTheme } from "src/store/slices/ui";
import DevModeBanner from "src/components/_common/DevModeBanner";
import PortalSidebar from "./PortalSidebar";

export default function PortalLayout() {
  const [open, setOpen] = useState(false);
  const theme = useAppSelector((state) => state.ui.theme);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  return (
    <div className="portal min-h-screen" data-theme={theme}>
      <DevModeBanner />
      <PortalSidebar open={open} onClose={() => setOpen(false)} />
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-3 border-b border-[var(--p-line)] bg-[var(--p-bg)]/80 px-4 backdrop-blur-xl sm:px-6">
          <button className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--p-line)] lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={18} />
          </button>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="rounded-full bg-[var(--p-soft)] px-3 py-1 text-xs text-mint">Simulated · SIM-820441</span>
            <span className="text-sm text-[var(--p-muted)]">Equity</span>
            <span className="text-sm font-semibold">0.00 USD</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--p-line)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button className="relative grid h-10 w-10 place-items-center rounded-xl border border-[var(--p-line)]" aria-label="Notifications">
              <Bell size={16} />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-mint" />
            </button>
            <Link to="/profile" className="hidden items-center gap-2 rounded-full border border-[var(--p-line)] py-1 pr-3 pl-1 sm:flex">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-mint text-xs font-bold text-ink">
                {user?.firstName?.[0]}
                {user?.lastName?.[0]}
              </span>
              <span className="text-sm">{user?.firstName}</span>
            </Link>
          </div>
        </header>
        <main className="px-4 py-6 sm:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
