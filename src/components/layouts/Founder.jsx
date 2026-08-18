export default function Founder() {
  return (
    <section className="px-3 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 rounded-[28px] bg-navy-deep px-6 py-11 text-white md:grid-cols-[0.85fr_1.15fr] md:px-16 md:py-[70px] md:gap-14">
          <img
            src="https://rehabtherapist.co.uk/wp-content/uploads/2025/08/rehabtherapist-1024x1024.png"
            alt="Krishna Gundapudi, Clinical Director"
            className="rounded-2xl"
          />
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
              <span className="inline-block h-px w-5 bg-gold" />
              Who we are
            </div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Krishna Gundapudi</h2>
            <p className="mt-1 font-semibold text-gold">
              Clinical Director and Neurological Physiotherapist
            </p>
            <p className="mt-4 text-white/80">
              Krishna Gundapudi is a seasoned professional neurological physiotherapist with over
              25 years of experience. He is leading a dedicated team of expert rehabilitation
              experts committed to delivering personalised care to clients in their own homes
              across the UK.
            </p>
            <a
              href="https://rehabtherapist.co.uk/about-us/"
              className="mt-4 inline-block rounded-full border border-white/55 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
