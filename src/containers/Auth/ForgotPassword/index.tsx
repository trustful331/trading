import { useState } from "react";
import AuthShell from "src/components/Auth/AuthShell";

const field = "mt-1 w-full rounded-2xl border border-white/10 bg-ink-2 px-4 py-3";

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
  return (
    <AuthShell title="Reset the password." text="A confirmation state only. No email is sent.">
      <form
        className="grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        <label className="text-sm">Email<input required type="email" className={field} /></label>
        <button className="rounded-full bg-mint py-3 text-sm font-semibold text-ink">Send reset link</button>
        {sent && <p className="text-sm text-mint">If this were live, a link would be on its way.</p>}
      </form>
    </AuthShell>
  );
}
