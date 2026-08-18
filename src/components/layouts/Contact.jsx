export default function Contact() {
  return (
    <section id="contact-section" className="px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] bg-navy-deep px-6 py-14 text-center text-white">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
            <span className="inline-block h-px w-5 bg-gold" />
            Get started
          </div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Contact Us</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/80">
            Home-based neurological, elderly physiotherapy and rehabilitation across the UK.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4.5">
            <a
              href="https://rehabtherapist.co.uk/book-free-rehabilitation-call/"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep transition-all hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-xl"
            >
              Book A Free Consultation
            </a>
            <a
              href="https://wa.me/4407777999277"
              className="rounded-full border border-white/55 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Message us on WhatsApp
            </a>
          </div>

          <p className="mt-7 text-sm text-white/75">
            info@rehabtherapist.co.uk &nbsp;·&nbsp;{" "}
            <a href="tel:03305513660" className="text-white">
              0330 551 3660
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
