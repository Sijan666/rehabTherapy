import Container from "../Container";
import Image from "../Image";

const BADGES = ["HCPC Registered", "CSP", "ACPIN", "BABICM", "ICO"];

export function Trust() {
  return (
    <section className="border-t border-navy-deep/10 bg-white py-16 text-center">
      <Container>
        {/* eyebrow */}
        <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
          <span aria-hidden="true" className="h-px w-6 bg-gold-deep" />
          accreditation
          <span aria-hidden="true" className="h-px w-6 bg-gold-deep" />
        </div>
        {/* title */}
        <h2 className="font-display text-2xl font-light text-navy-deep md:text-3xl">
          Registered Chartered Physiotherapists
        </h2>
        {/* badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {BADGES.map((badge, index) => (
            <div
              key={index}
              className="border border-navy-deep/20 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-widest text-navy-deep/70 transition-colors duration-300 hover:border-navy-deep hover:text-navy-deep"
            >
              {badge}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// CTA BAND COMPONENT
export function CtaBand() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 border border-navy-deep/10 md:grid-cols-2">
          {/* left cta */}
          <div className="flex flex-col justify-between bg-navy-deep p-10 text-white lg:p-16">
            <div>
              <h3 className="font-display text-3xl font-light leading-tight text-white md:text-4xl">
                Need support for yourself or a loved one?
              </h3>
              <p className="mt-4 text-sm font-light text-white/70">
                Speak directly with our senior physiotherapists to find the best care plan.
              </p>
            </div>
            <a
              href="#contact-section"
              className="mt-12 inline-block w-fit cursor-pointer border border-white/30 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-navy-deep"
            >
              get in touch
            </a>
          </div>
          {/* right cta */}
          <div className="flex flex-col justify-between bg-gold-deep p-10 text-navy-deep lg:p-16">
            <div>
              <h3 className="font-display text-3xl font-light leading-tight text-navy-deep md:text-4xl">
                Arranging rehab for a client?
              </h3>
              <p className="mt-4 text-sm font-light text-navy-deep/80">
                Are you a case manager or professional? We provide tailored specialist care.
              </p>
            </div>
            <a
              href="#contact-section"
              className="mt-12 inline-block w-fit cursor-pointer border border-navy-deep/30 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-widest text-navy-deep transition-colors duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-white"
            >
              make a referral
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

// NEWS
const ARTICLES = [
  {
    date: "August 17, 2026",
    title: "Common Causes of Walking Problems in Older Adults",
    excerpt: "Walking problems in adults can start quietly. At first, it might be a slight change in the way someone walks…",
    img: "https://rehabtherapist.co.uk/wp-content/uploads/2026/08/blog-website-posters-45-300x196.png",
    href: "https://rehabtherapist.co.uk/common-causes-of-walking-problems-in-older-adults/",
  },
  {
    date: "August 10, 2026",
    title: "How Physiotherapy Helps Functional Neurological Disorder",
    excerpt: "FND is a condition that can affect walking, balance and coordination, strength and self-confidence…",
    img: "https://rehabtherapist.co.uk/wp-content/uploads/2026/08/blog-website-posters-44-300x196.png",
    href: "https://rehabtherapist.co.uk/how-physiotherapy-helps-functional-neurological-disorder/",
  },
  {
    date: "August 5, 2026",
    title: "Why Home-Based Rehab Matters in Spinal Cord Injury",
    excerpt: "A spinal cord injury can affect your balance, movement, strength, sitting balance and confidence…",
    img: "https://rehabtherapist.co.uk/wp-content/uploads/2026/08/blog-website-posters-43-300x196.png",
    href: "https://rehabtherapist.co.uk/why-home-based-rehab-matters-in-spinal-cord-injury/",
  },
];

export function News() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* section heading */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
            <span aria-hidden="true" className="h-px w-6 bg-gold-deep" />
            insights
            <span aria-hidden="true" className="h-px w-6 bg-gold-deep" />
          </div>
          <h2 className="font-display text-3xl font-light leading-tight text-navy-deep md:text-4xl">
            News & Articles
          </h2>
        </div>
        {/* news grid layout */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {ARTICLES.map((a, index) => (
            <div
              key={index}
              className="group flex flex-col border border-navy-deep/10 bg-white transition-colors duration-300 hover:border-gold"
            >
              <div className="aspect-16/10 overflow-hidden border-b border-navy-deep/10">
                <Image 
                  imgSrc={a.img} 
                  alt={a.title} 
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" 
                />
              </div>
              {/* article content */}
              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gold-deep">
                    {a.date}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-medium leading-snug text-navy-deep">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-navy-deep/70">
                    {a.excerpt}
                  </p>
                </div>
                <a 
                  href={a.href} 
                  className="mt-8 inline-block cursor-pointer text-xs font-bold uppercase tracking-widest text-gold-deep transition-colors duration-300 hover:text-navy-deep"
                >
                  read more &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}