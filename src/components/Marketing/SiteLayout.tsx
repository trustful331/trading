import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DevModeBanner from "src/components/_common/DevModeBanner";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function SiteLayout() {
  const [cookies, setCookies] = useState(true);

  return (
    <div className="min-h-screen bg-ink text-paper">
      <DevModeBanner />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      {cookies && (
        <div className="fixed right-4 bottom-4 left-4 z-50 mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-white/10 bg-ink-2/95 p-4 shadow-2xl backdrop-blur sm:flex-row sm:items-center">
          <p className="text-sm text-mist">
            This preview stores a theme preference locally. Read the{" "}
            <Link to="/legal/cookies" className="text-mint">cookie note</Link>.
          </p>
          <button onClick={() => setCookies(false)} className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink">
            Accept
          </button>
        </div>
      )}
    </div>
  );
}
