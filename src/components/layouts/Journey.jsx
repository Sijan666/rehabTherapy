import Container from "../Container";

// patient journey steps data
const STEPS = [
  {
    num: "01",
    title: "Free Consultation",
    body: "Speak to one of our senior physiotherapists for advice and to see if home rehab is right for you. No pressure, just clear guidance.",
  },
  {
    num: "02",
    title: "Home Assessment",
    body: "We visit you at home to carry out a full clinical assessment and create a tailored plan for stroke, surgery or age-related needs.",
  },
  {
    num: "03",
    title: "Start Personalised Therapy",
    body: "We begin your personalised physiotherapy at home, with regular sessions, progress reviews and expert support.",
  },
];

export default function Journey() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* eyebrow */}
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
            <span aria-hidden="true" className="h-px w-6 bg-gold-deep" />
            patient journey
          </div>
          {/* title */}
          <h2 className="font-display text-3xl font-light leading-tight text-navy-deep md:text-4xl">
            Your journey with Rehab Therapist
          </h2>
        </div>
        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-0">
          <div 
            aria-hidden="true" 
            className="absolute left-[16%] right-[16%] top-8 hidden h-px border-t border-dashed border-navy-deep/20 md:block" 
          />
          {STEPS.map((s) => (
            <div key={s.num} className="group relative z-10 flex flex-col items-center px-6 text-center">
              {/* step number circle */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-navy-deep font-display text-xl font-medium text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-deep">
                {s.num}
              </div>
              {/* step title */}
              <h4 className="font-display text-xl font-medium text-navy-deep">
                {s.title}
              </h4>
              {/* step description */}
              <p className="mt-3 text-sm font-light leading-relaxed text-navy-deep/70">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}