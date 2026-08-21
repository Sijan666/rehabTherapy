import Container from "../Container";

// reviews data array
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

// reusable svg star icon
const StarIcon = () => (
  <svg 
    className="h-4 w-4 text-gold" 
    fill="currentColor" 
    viewBox="0 0 20 20" 
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// reusable svg quote watermark
const QuoteIcon = () => (
  <svg 
    className="h-10 w-10 text-gold/20" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    aria-hidden="true"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* section heading */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* eyebrow */}
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
            <span aria-hidden="true" className="h-px w-6 bg-gold-deep" />
            reviews
          </div>
          {/* title */}
          <h2 className="font-display text-3xl font-light leading-tight text-navy-deep md:text-4xl">
            Our patients speak for us
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between border border-navy-deep/10 bg-white p-8 transition-colors duration-300 hover:border-gold"
            >
              {/* background quote watermark */}
              <div className="absolute right-6 top-6">
                <QuoteIcon />
              </div>
              <div>
                {/* svg star rating */}
                <div className="mb-6 flex gap-1">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                {/* review text */}
                <p className="text-base font-light leading-relaxed text-navy-deep/80">
                  "{r.quote}"
                </p>
              </div>
              {/* reviewer name */}
              <div className="mt-8 border-t border-navy-deep/10 pt-6 font-display text-sm font-bold uppercase tracking-widest text-navy-deep">
                {r.who}
              </div>
            </div>
          ))}
        </div>
        {/* cta action */}
        <div className="mt-14 text-center">
          <a
            href="https://rehabtherapist.co.uk/patient-feedback/"
            className="inline-block cursor-pointer border border-navy-deep bg-transparent px-10 py-4 text-sm font-bold uppercase tracking-widest text-navy-deep transition-colors duration-300 hover:bg-navy-deep hover:text-white"
          >
            view more reviews
          </a>
        </div>
      </Container>
    </section>
  );
}