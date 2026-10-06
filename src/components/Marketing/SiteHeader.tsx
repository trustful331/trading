import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "src/data/site";
import Logo from "./Logo";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-mint" : "text-mist hover:text-paper"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <Link to="/login" className="rounded-full px-4 py-2 text-sm text-paper hover:bg-white/5">
            Log in
          </Link>
          <Link
            to="/register"
            className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink"
          >
            Open live account
          </Link>
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink px-4 py-4 xl:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-sm text-paper">
                {link.label}
              </NavLink>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="text-sm text-mist">
              Log in
            </Link>
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="rounded-full bg-mint px-4 py-2 text-center text-sm font-semibold text-ink"
            >
              Open live account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
