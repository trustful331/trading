import { useState } from "react";
import toast from "react-hot-toast";
import { PageIntro } from "src/components/_common/PageIntro";
import { brand } from "src/config/brand";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageIntro
        kicker="Contact"
        title="Write the desk."
        text={`This form stays on the page. Nothing is emailed. Reach the design address at ${brand.supportEmail}.`}
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-white/10 bg-panel p-6">
          <p className="text-sm text-mist">Support</p>
          <p className="mt-2 text-2xl">{brand.supportEmail}</p>
          <p className="mt-6 text-sm text-mist">Hours shown for layout</p>
          <p>Sun–Thu · 09:00–18:00</p>
        </div>
        <form
          className="grid gap-4 rounded-3xl border border-white/10 p-6"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
            toast.success("Message kept on this screen only.");
          }}
        >
          <label className="grid gap-1 text-sm">
            Name
            <input required className="rounded-2xl border border-white/10 bg-ink-2 px-4 py-3" />
          </label>
          <label className="grid gap-1 text-sm">
            Email
            <input required type="email" className="rounded-2xl border border-white/10 bg-ink-2 px-4 py-3" />
          </label>
          <label className="grid gap-1 text-sm">
            Message
            <textarea required rows={5} className="rounded-2xl border border-white/10 bg-ink-2 px-4 py-3" />
          </label>
          <button className="rounded-full bg-mint px-5 py-3 text-sm font-semibold text-ink">Send</button>
          {sent && <p className="text-sm text-mint">Thanks — this preview does not store the message.</p>}
        </form>
      </section>
    </>
  );
}
