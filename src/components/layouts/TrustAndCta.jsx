const BADGES = ["HCPC Registered", "CSP", "ACPIN", "BABICM", "ICO"];

export function Trust() {
  return (
    <section className="px-6 py-14 text-center">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-deep">
          <span className="inline-block h-px w-5 bg-gold-deep" />
          Accreditation
        </div>
        <h2 className="text-xl font-semibold">Registered Chartered Physiotherapists</h2>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-11 opacity-75">
          {BADGES.map((b) => (
            <div
              key={b}
              className="rounded-[10px] border border-line bg-white px-4.5 py-2.5 text-sm font-bold tracking-wide text-ink-soft"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
        <div className="flex min-h-43 flex-col justify-between gap-6 rounded-[18px] bg-gradient-to-br from-teal to-navy-deep px-9.5 py-11 text-white">
          <h3 className="text-xl font-semibold text-white">
            Need support for yourself or a loved one?
          </h3>
          <a
            href="#contact-section"
            className="inline-block w-fit rounded-full border border-white/55 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Get in Touch
          </a>
        </div>
        <div className="flex min-h-43 flex-col justify-between gap-6 rounded-[18px] bg-gradient-to-br from-gold-deep to-[#8f6321] px-9.5 py-11 text-white">
          <h3 className="text-xl font-semibold text-white">
            Are you a case manager or professional arranging rehab for a client?
          </h3>
          <a
            href="#contact-section"
            className="inline-block w-fit rounded-full border border-white/55 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Make a Referral
          </a>
        </div>
      </div>
    </section>
  );
}

const ARTICLES = [
  {
    date: "August 17, 2026",
    title: "Common Causes of Walking Problems in Older Adults",
    excerpt:
      "Walking problems in adults can start quietly. At first, it might be a slight change in the way someone walks…",
    img: "https://rehabtherapist.co.uk/wp-content/uploads/2026/08/blog-website-posters-45-300x196.png",
    href: "https://rehabtherapist.co.uk/common-causes-of-walking-problems-in-older-adults/",
  },
  {
    date: "August 10, 2026",
    title: "How Physiotherapy Helps Functional Neurological Disorder",
    excerpt:
      "FND is a condition that can affect walking, balance and coordination, strength and self-confidence…",
    img: "https://rehabtherapist.co.uk/wp-content/uploads/2026/08/blog-website-posters-44-300x196.png",
    href: "https://rehabtherapist.co.uk/how-physiotherapy-helps-functional-neurological-disorder/",
  },
  {
    date: "August 5, 2026",
    title: "Why Home-Based Rehab Matters in Spinal Cord Injury",
    excerpt:
      "A spinal cord injury can affect your balance, movement, strength, sitting balance and confidence…",
    img: "https://rehabtherapist.co.uk/wp-content/uploads/2026/08/blog-website-posters-43-300x196.png",
    href: "https://rehabtherapist.co.uk/why-home-based-rehab-matters-in-spinal-cord-injury/",
  },
];

export function News() {
  return (
    <section className="px-6 py-22">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-deep">
          <span className="inline-block h-px w-5 bg-gold-deep" />
          Insights
        </div>
        <h2 className="text-3xl font-semibold md:text-4xl">News &amp; Articles</h2>

        <div className="mt-11 grid gap-7 md:grid-cols-3">
          {ARTICLES.map((a) => (
            <div
              key={a.title}
              className="overflow-hidden rounded-[18px] bg-white shadow-[0_20px_45px_-25px_rgba(15,43,42,0.35)]"
            >
              <img src={a.img} alt="" className="aspect-[16/10] w-full object-cover" />
              <div className="p-5.5">
                <div className="text-xs font-bold uppercase tracking-wide text-gold-deep">
                  {a.date}
                </div>
                <h3 className="mt-2 mb-2.5 text-base font-semibold">{a.title}</h3>
                <p className="text-sm text-ink-soft">{a.excerpt}</p>
                <a href={a.href} className="mt-3 inline-block text-sm font-bold text-gold-deep">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
