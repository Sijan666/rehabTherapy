const PILLS = [
  "Home Visits",
  "Neurological Physiotherapy",
  "Intensive Rehabilitation",
  "Case Managers",
  "Elderly Physiotherapy",
  "Post-Operative Physiotherapy",
  "Hydrotherapy",
  "Falls Prevention and Rehabilitation",
  "Care Homes",
];

const FEATURED = [
  {
    title: "Rehab for Case Managers",
    img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/case-managers-for-rehab-1024x576.jpg",
    href: "https://rehabtherapist.co.uk/rehab-for-case-managers/",
  },
  {
    title: "Neurological Physiotherapy",
    img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/Nuerological-physiotherapy-1024x576.jpg",
    href: "https://rehabtherapist.co.uk/neurological-physiotherapy/",
  },
  {
    title: "Elderly Rehabilitation",
    img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/Elderly-physiotherapy-1024x684.webp",
    href: "https://rehabtherapist.co.uk/elderly-rehabilitation/",
  },
  {
    title: "Post-operative Physiotherapy",
    img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/post-operative-physiotherapy-1024x660.jpg",
    href: "https://rehabtherapist.co.uk/post-operative-physiotherapy/",
  },
  {
    title: "Complex Orthopaedic & Polytrauma Rehab",
    img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/ortho-1024x683.jpg",
    href: "https://rehabtherapist.co.uk/complex-orthopaedic-polytrauma-rehabilitation/",
  },
  {
    title: "Physiotherapy for Care Homes",
    img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/care-home-physio-1024x683.jpg",
    href: "https://rehabtherapist.co.uk/physiotherapy-for-care-homes/",
  },
];

export default function Services() {
  return (
    <>
      <section id="services" className="px-6 py-22 text-center">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-deep">
            <span className="inline-block h-px w-5 bg-gold-deep" />
            What we offer
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">Our Services</h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            {PILLS.map((p) => (
              <a
                key={p}
                href="#services"
                className="rounded-full border border-line bg-white px-5.5 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy-deep hover:bg-navy-deep hover:text-white"
              >
                {p}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((s) => (
              <div
                key={s.title}
                className="overflow-hidden rounded-[18px] bg-white shadow-[0_20px_45px_-25px_rgba(15,43,42,0.35)] transition-transform hover:-translate-y-1.5"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                </div>
                <div className="px-6 py-6">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <a href={s.href} className="mt-2.5 inline-block text-sm font-bold text-gold-deep">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://rehabtherapist.co.uk/services/"
              className="inline-block rounded-full border border-navy px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Explore more Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
