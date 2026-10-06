import { Link } from "react-router-dom";
import AuthShell from "src/components/Auth/AuthShell";

export default function VerifyEmail() {
  return (
    <AuthShell title="Check your inbox." text="Verification is drawn, not delivered.">
      <div className="rounded-3xl border border-white/10 bg-panel p-6">
        <p className="text-sm text-mist">We would send a code to the address you typed.</p>
        <div className="mt-4 flex gap-2">
          {["4", "8", "2", "1", "9", "0"].map((digit) => (
            <div key={digit} className="grid h-12 w-10 place-items-center rounded-xl border border-white/10 bg-ink-2">{digit}</div>
          ))}
        </div>
        <Link to="/login" className="mt-6 inline-flex rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink">
          Continue to login
        </Link>
      </div>
    </AuthShell>
  );
}
