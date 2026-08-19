import Container from "../Container";

export default function Coverage() {
  return (
    // coverage section wrapper
    <section id="locations" className="bg-cream py-24">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* text content side */}
          <div className="flex flex-col justify-center">
            {/* eyebrow */}
            <div className="mb-6 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
              <span aria-hidden="true" className="h-px w-8 bg-gold-deep" />
              coverage area
            </div>
            {/* main heading */}
            <h2 className="font-display text-4xl font-light leading-[1.2] text-navy-deep md:text-5xl">
              Home-based neurological & elderly rehabilitation across the UK
            </h2>
            {/* description */}
            <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-navy-deep/80">
              We cover across Buckinghamshire, Hertfordshire, Bedfordshire, Oxfordshire,
              Cambridgeshire, Greater London, Berkshire, Surrey and surrounding areas.
            </p>
            {/* cta button */}
            <div className="mt-10">
              <a
                href="https://rehabtherapist.co.uk/locations/"
                aria-label="find out more about our coverage areas"
                className="inline-block cursor-pointer border border-navy-deep px-10 py-4 text-sm font-bold uppercase tracking-widest text-navy-deep transition-colors duration-300 hover:bg-navy-deep hover:text-white"
              >
                find out more
              </a>
            </div>
          </div>
          {/* graphic / map side  */}
          <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden bg-navy-deep text-white shadow-2xl">
            {/* abstract map svg with gold accents */}
            <svg
              aria-hidden="true"
              viewBox="0 0 200 200"
              className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
            >
              <circle cx="60" cy="70" r="3" fill="#D4A253" />
              <circle cx="120" cy="50" r="3" fill="#D4A253" />
              <circle cx="90" cy="120" r="3" fill="#D4A253" />
              <circle cx="150" cy="110" r="3" fill="#D4A253" />
              <circle cx="40" cy="140" r="3" fill="#D4A253" />
              <path
                d="M60 70 L120 50 L150 110 L90 120 L40 140 Z"
                stroke="#D4A253"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>
            <div className="absolute inset-0 bg-linear-to-tr from-navy-deep via-transparent to-transparent opacity-50" />
            <span className="relative z-10 max-w-[280px] text-center font-display text-xl font-light leading-relaxed tracking-wide text-white">
              Serving Buckinghamshire, Herts, Beds, Oxfordshire, Cambridgeshire, Greater London & Surrey
            </span>
            <div aria-hidden="true" className="absolute bottom-6 left-6 h-12 w-12 border-b border-l border-gold/50" />
            <div aria-hidden="true" className="absolute right-6 top-6 h-12 w-12 border-r border-t border-gold/50" />
          </div>
        </div>
      </Container>
    </section>
  );
}