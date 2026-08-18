const STEPS = [
  {
    num: "01",
    title: "Free consultation",
    body: "Speak to one of our senior physiotherapists for advice and to see if home rehab is right for you. No pressure, just clear guidance.",
  },
  {
    num: "02",
    title: "Home assessment",
    body: "We visit you at home to carry out a full clinical assessment and create a tailored plan for stroke, surgery or age-related needs.",
  },
  {
    num: "03",
    title: "Start personalised therapy",
    body: "We begin your personalised physiotherapy at home, with regular sessions, progress reviews and expert support.",
  },
];

export default function Journey() {
  return (
    <section className="px-6 py-22 text-center">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-deep">
          <span className="inline-block h-px w-5 bg-gold-deep" />
          Patient journey
        </div>
        <h2 className="text-3xl font-semibold md:text-4xl">
          Your journey with Rehab Therapist
        </h2>

        <div className="relative mt-13 grid gap-9 md:grid-cols-3 md:gap-0">
          <div className="pointer-events-none absolute top-8 right-[12%] left-[12%] hidden h-0.5 [background-image:repeating-linear-gradient(90deg,var(--color-gold)_0_10px,transparent_10px_20px)] md:block" />
          {STEPS.map((s) => (
            <div key={s.num} className="relative z-10 px-6.5">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-navy-deep font-display text-xl font-semibold text-gold shadow-[0_20px_45px_-25px_rgba(15,43,42,0.35)]">
                {s.num}
              </div>
              <h4 className="text-base font-semibold">{s.title}</h4>
              <p className="mt-1.5 text-sm text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
