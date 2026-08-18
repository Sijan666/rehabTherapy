const REVIEWS = [
  {
    quote:
      "Very impressed with Krishna's advice and help. We were treated with kindness and professionalism. Would recommend Krishna.",
    who: "Lyn Halvorsen",
  },
  {
    quote:
      "I have had a head injury. I can now walk short distances without a stick and my balance is a lot better thanks to the team.",
    who: "Adam Fleet",
  },
  {
    quote:
      "A genuinely caring, highly skilled team. Coming to us at home made all the difference to how quickly we felt comfortable.",
    who: "A Patient Family Member",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream-dim px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-deep">
            <span className="inline-block h-px w-5 bg-gold-deep" />
            Reviews
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">Our patients speak for us</h2>
        </div>

        <div className="no-scrollbar mt-11 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3.5">
          {REVIEWS.map((r) => (
            <div
              key={r.who}
              className="w-85 flex-none snap-start rounded-[18px] bg-white px-7 py-7.5 shadow-[0_20px_45px_-25px_rgba(15,43,42,0.35)]"
            >
              <div className="mb-3.5 tracking-widest text-gold-deep">★★★★★</div>
              <p className="text-sm text-ink-soft">&ldquo;{r.quote}&rdquo;</p>
              <div className="mt-4 font-display font-bold text-navy-deep">{r.who}</div>
            </div>
          ))}
        </div>

        <div className="mt-7 text-center">
          <a
            href="https://rehabtherapist.co.uk/patient-feedback/"
            className="inline-block rounded-full border border-navy px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            View more reviews
          </a>
        </div>
      </div>
    </section>
  );
}
