import { useAppSelector } from "src/store/hooks";

const field = "mt-1 w-full rounded-2xl border border-[var(--p-line)] bg-[var(--p-card-2)] px-4 py-3";

export default function Profile() {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div>
        <p className="text-xs tracking-[0.22em] text-mint uppercase">Profile</p>
        <h1 className="text-4xl">Personal details</h1>
      </div>
      <form className="grid gap-4 rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-5 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
        <label className="text-sm">First name<input className={field} defaultValue={user?.firstName} /></label>
        <label className="text-sm">Last name<input className={field} defaultValue={user?.lastName} /></label>
        <label className="text-sm sm:col-span-2">Email<input className={field} defaultValue={user?.email} /></label>
        <label className="text-sm">Phone<input className={field} defaultValue="+92 300 0000000" /></label>
        <label className="text-sm">City<input className={field} defaultValue="Karachi" /></label>
        <label className="text-sm sm:col-span-2">Address<input className={field} defaultValue="Sample street, Clifton" /></label>
        <button className="rounded-full bg-mint py-2.5 text-sm font-semibold text-ink sm:col-span-2">Save details</button>
      </form>
    </div>
  );
}
