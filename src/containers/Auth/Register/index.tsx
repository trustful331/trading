import { Link, useNavigate } from "react-router-dom";
import AuthShell from "src/components/Auth/AuthShell";

const field = "mt-1 w-full rounded-2xl border border-white/10 bg-ink-2 px-4 py-3";

export default function Register() {
  const navigate = useNavigate();
  return (
    <AuthShell title="Open a live account." text="The form is visual. It does not create a profile.">
      <form
        className="grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/verify-email");
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm">First name<input required className={field} /></label>
          <label className="text-sm">Last name<input required className={field} /></label>
        </div>
        <label className="text-sm">Email<input required type="email" className={field} /></label>
        <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
          <label className="text-sm">Code<input className={field} defaultValue="+92" /></label>
          <label className="text-sm">Phone<input className={field} /></label>
        </div>
        <label className="text-sm">Country
          <select className={field} defaultValue="Pakistan">
            <option>Pakistan</option>
            <option>United Arab Emirates</option>
            <option>United Kingdom</option>
          </select>
        </label>
        <label className="text-sm">Password<input required type="password" className={field} /></label>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 bg-mint" />
        </div>
        <p className="text-xs text-mist">Strength meter is decorative.</p>
        <label className="text-sm">Referral code <span className="text-mist">(optional)</span><input className={field} /></label>
        <label className="flex items-start gap-2 text-sm text-mist">
          <input required type="checkbox" className="mt-1 accent-mint" />
          I accept the terms and the risk disclosure.
        </label>
        <button className="rounded-full bg-mint py-3 text-sm font-semibold text-ink">Create account</button>
        <p className="text-sm text-mist">Already registered? <Link to="/login" className="text-paper">Log in</Link></p>
      </form>
    </AuthShell>
  );
}
