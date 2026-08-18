export default function Coverage() {
  return (
    <section id="locations" className="px-6 py-22">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-deep">
            <span className="inline-block h-px w-5 bg-gold-deep" />
            Coverage Area
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Home based neurological &amp; elderly rehabilitation across the UK
          </h2>
          <p className="mt-4 max-w-lg text-ink-soft">
            We cover across Buckinghamshire, Hertfordshire, Bedfordshire, Oxfordshire,
            Cambridgeshire, Greater London, Berkshire, Surrey and surrounding areas.
          </p>
          <a
            href="https://rehabtherapist.co.uk/locations/"
            className="mt-7 inline-block rounded-full border border-navy px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Find out More
          </a>
        </div>

        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[18px] bg-gradient-to-br from-teal to-navy text-white shadow-[0_20px_45px_-25px_rgba(15,43,42,0.35)]">
          <svg
            viewBox="0 0 200 200"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
          >
            <circle cx="60" cy="70" r="3" fill="#fff" />
            <circle cx="120" cy="50" r="3" fill="#fff" />
            <circle cx="90" cy="120" r="3" fill="#fff" />
            <circle cx="150" cy="110" r="3" fill="#fff" />
            <circle cx="40" cy="140" r="3" fill="#fff" />
            <path
              d="M60 70 L120 50 L150 110 L90 120 L40 140 Z"
              stroke="#fff"
              strokeWidth="0.6"
              fill="none"
            />
          </svg>
          <span className="relative px-8 text-center font-display text-lg">
            Serving Buckinghamshire, Herts, Beds, Oxfordshire, Cambridgeshire, Greater London &amp;
            Surrey
          </span>
        </div>
      </div>
    </section>
  );
}
