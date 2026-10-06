import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from "src/components/Marketing/Logo";

export default function AuthShell({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-screen bg-ink text-paper lg:grid-cols-2">
      <div className="relative hidden overflow-hidden border-r border-white/10 p-10 lg:block">
        <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-mint/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gold/15 blur-[90px]" />
        <div className="relative flex h-full flex-col justify-between">
          <Logo />
          <div>
            <p className="text-xs tracking-[0.28em] text-mint uppercase">Client access</p>
            <h1 className="mt-3 max-w-md text-6xl leading-[0.92]">A quieter way to open the desk.</h1>
            <p className="mt-4 max-w-sm text-mist">Design preview. Sign-in does not check a password.</p>
          </div>
          <p className="text-sm text-mist">CFDs carry a high risk of losing money.</p>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>
          <h2 className="text-4xl">{title}</h2>
          <p className="mt-2 text-sm text-mist">{text}</p>
          <div className="mt-8">{children}</div>
          <p className="mt-8 text-sm text-mist">
            <Link to="/" className="text-paper hover:text-mint">Back to the site</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
