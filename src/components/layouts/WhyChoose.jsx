const REASONS = [
  "No waiting list",
  "Compassionate, personalised care at home",
  "Specialists in neurological & elderly rehabilitation",
  "Experienced and highly trained physiotherapists",
  "Dedicated to helping you maximise your potential and enhance your quality of life",
];

export default function WhyChoose() {
  return (
    <section id="about" className="py-22 px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <img
          src="https://rehabtherapist.co.uk/wp-content/uploads/2025/07/Why-choose-rehab-therapist.png"
          alt="Rehab therapist visiting a patient at home"
          className="rounded-[18px] shadow-[0_20px_45px_-25px_rgba(15,43,42,0.35)]"
        />
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-deep">
            <span className="inline-block h-px w-5 bg-gold-deep" />
            Why Rehab Therapist
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">Why choose Rehab Therapist</h2>

          <ul className="mt-6 grid gap-4">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3.5 font-medium text-navy-deep">
                <span className="mt-0.5 flex h-6.5 w-6.5 flex-none items-center justify-center rounded-full bg-teal text-xs text-white">
                  ✓
                </span>
                {reason}
              </li>
            ))}
          </ul>

          <a
            href="https://rehabtherapist.co.uk/about-us/"
            className="mt-8 inline-block rounded-full border border-navy px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
