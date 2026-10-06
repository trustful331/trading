import { useState } from "react";
import { questions } from "src/data/site";

export default function Questionnaire() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[]>(Array(questions.length).fill(""));
  const current = questions[step];
  const done = step >= questions.length;

  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-xs tracking-[0.22em] text-mint uppercase">Appropriateness</p>
      <h1 className="text-4xl">A few honest questions</h1>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full bg-mint" style={{ width: `${(Math.min(step, questions.length) / questions.length) * 100}%` }} />
      </div>
      {done ? (
        <div className="mt-6 rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-6">
          <h2 className="text-3xl">Sample result: suitable to proceed</h2>
          <p className="mt-2 text-sm text-[var(--p-muted)]">Nothing is scored on a server. This is the end state of the form.</p>
          <button onClick={() => { setStep(0); setPicked(Array(questions.length).fill("")); }} className="mt-5 text-sm text-mint">Start again</button>
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-[var(--p-line)] bg-[var(--p-card)] p-6">
          <p className="text-sm text-[var(--p-muted)]">Step {step + 1} of {questions.length} · {current.title}</p>
          <h2 className="mt-2 text-3xl">{current.prompt}</h2>
          <div className="mt-5 grid gap-2">
            {current.options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  const next = [...picked];
                  next[step] = option;
                  setPicked(next);
                }}
                className={`rounded-2xl border px-4 py-3 text-left text-sm ${picked[step] === option ? "border-mint bg-[var(--p-soft)]" : "border-[var(--p-line)]"}`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <button disabled={step === 0} onClick={() => setStep((value) => value - 1)} className="text-sm text-[var(--p-muted)]">Back</button>
            <button onClick={() => setStep((value) => value + 1)} className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink">
              {step === questions.length - 1 ? "See result" : "Continue"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
