import Container from "../Container";
import Image from "../Image";

// reusable svg check icon
const CheckIcon = () => (
  <svg
    className="h-3.5 w-3.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function WhyChoose() {
  return (
    // section wrapper
    <section id="about" className="bg-cream py-24">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* image side */}
          <div className="relative w-full">
            <Image
              imgSrc="https://rehabtherapist.co.uk/wp-content/uploads/2025/07/Why-choose-rehab-therapist.png"
              alt="rehab therapist visiting a patient at home"
              className="w-full object-cover shadow-[0_20px_45px_-25px_rgba(15,43,42,0.35)]"
            />
            <div aria-hidden="true" className="absolute -bottom-6 -left-6 -z-10 h-full w-full border border-line/80" />
          </div>
          {/* content side */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
              <span aria-hidden="true" className="h-px w-8 bg-gold-deep" />
              why rehab therapist
            </div>
            {/* main section heading */}
            <h2 className="font-display text-4xl font-light leading-[1.2] text-navy-deep md:text-5xl">
              Why choose Rehab Therapist
            </h2>
            {/* feature list */}
            <ul className="mt-10 flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal/15 text-teal">
                  <CheckIcon />
                </span>
                <span className="text-lg font-light text-navy-deep/80">
                  No waiting list
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal/15 text-teal">
                  <CheckIcon />
                </span>
                <span className="text-lg font-light text-navy-deep/80">
                  Compassionate, personalised care at home
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal/15 text-teal">
                  <CheckIcon />
                </span>
                <span className="text-lg font-light text-navy-deep/80">
                  Specialists in neurological & elderly rehabilitation
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal/15 text-teal">
                  <CheckIcon />
                </span>
                <span className="text-lg font-light text-navy-deep/80">
                  Experienced and highly trained physiotherapists
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal/15 text-teal">
                  <CheckIcon />
                </span>
                <span className="text-lg font-light text-navy-deep/80">
                  Dedicated to helping you maximise your potential and enhance your quality of life
                </span>
              </li>
            </ul>
            {/* cta action with proper aria-label */}
            <div className="mt-12">
              <a
                href="https://rehabtherapist.co.uk/about-us/"
                aria-label="learn more about why choose rehab therapist"
                className="inline-block cursor-pointer border border-navy-deep px-10 py-4 text-sm font-bold uppercase tracking-widest text-navy-deep transition-colors duration-300 hover:bg-navy-deep hover:text-white"
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}