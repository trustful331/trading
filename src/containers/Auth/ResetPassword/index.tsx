import AuthShell from "src/components/Auth/AuthShell";

const field = "mt-1 w-full rounded-2xl border border-white/10 bg-ink-2 px-4 py-3";

export default function ResetPassword() {
  return (
    <AuthShell title="Choose a new password." text="Both fields are visual. Nothing is saved.">
      <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
        <label className="text-sm">New password<input type="password" className={field} /></label>
        <label className="text-sm">Confirm<input type="password" className={field} /></label>
        <button className="rounded-full bg-mint py-3 text-sm font-semibold text-ink">Update password</button>
      </form>
    </AuthShell>
  );
}
