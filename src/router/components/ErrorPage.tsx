import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-ink px-6 text-paper">
      <div className="max-w-md text-center">
        <p className="text-xs tracking-[0.28em] text-mint uppercase">Elite Trade FX</p>
        <h1 className="mt-3 text-5xl">This page is off the map.</h1>
        <p className="mt-3 text-mist">
          The route does not exist in this design preview.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-ink"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
