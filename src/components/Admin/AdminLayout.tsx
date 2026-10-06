import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DevModeBanner from "src/components/_common/DevModeBanner";
import { adminNav } from "src/data/site";
import { cn } from "src/utils/cn";

export default function AdminLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="admin-shell min-h-screen">
      <DevModeBanner />
      {open && <button className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setOpen(false)} aria-label="Close menu" />}
      <aside className={cn("fixed inset-y-0 left-0 z-40 w-64 bg-ink text-paper transition-transform lg:translate-x-0", open ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex h-16 items-center justify-between px-5">
          <div>
            <p className="text-xs tracking-[0.22em] text-gold uppercase">Back office</p>
            <p className="font-semibold">Elite Trade FX</p>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(false)} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <nav className="space-y-1 px-3">
          {adminNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/admin"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block rounded-xl px-3 py-2.5 text-sm",
                  isActive ? "bg-white/10 text-mint" : "text-mist hover:bg-white/5 hover:text-paper",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-black/5 bg-[#f4f1ea]/90 px-4 backdrop-blur sm:px-6">
          <button className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={18} />
          </button>
          <p className="text-sm text-ink/60">Signed in as Sara Qureshi · Compliance</p>
          <span className="rounded-full bg-ink px-3 py-1 text-xs text-mint">Design preview</span>
        </header>
        <main className="px-4 py-6 sm:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
