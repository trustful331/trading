import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthShell from "src/components/Auth/AuthShell";

const field = "mt-1 w-full rounded-2xl border border-white/10 bg-ink-2 px-4 py-3";

export default function Login() {
  const navigate = useNavigate();
  return (
    <AuthShell title="Welcome back." text="Enter any details. This screen only opens the portal design.">
      <form
        className="grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          toast.success("Design sign-in");
          navigate("/dashboard");
        }}
      >
        <label className="text-sm">Email<input required type="email" className={field} placeholder="you@email.com" /></label>
        <label className="text-sm">Password<input required type="password" className={field} placeholder="••••••••" /></label>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-mist"><input type="checkbox" className="accent-mint" /> Remember this device</label>
          <Link to="/forgot-password" className="text-mint">Forgot?</Link>
        </div>
        <button className="rounded-full bg-mint py-3 text-sm font-semibold text-ink">Sign in</button>
        <p className="text-sm text-mist">New here? <Link to="/register" className="text-paper">Open an account</Link></p>
      </form>
    </AuthShell>
  );
}
