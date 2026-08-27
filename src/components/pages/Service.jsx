import { Helmet } from "react-helmet-async";
import Container from "../Container";
import Image from "../Image";
import { CtaBand } from "../layouts/TrustAndCta";
import Contact from "../layouts/Contact";

const servicesList = [
  {
    title: "Rehab for Case Managers",
    description:
      "Prompt assessments, comprehensive rehabilitation plans, and detailed reports tailored to medico-legal and case management needs.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/case-managers-for-rehab-1024x576.jpg",
    href: "#",
  },
  {
    title: "Neurological Physiotherapy",
    description:
      "Expert home-based therapy for stroke, brain injury, spinal cord injury, MS, and Parkinson's disease, focusing on restoring mobility, stability, and freedom.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/Nuerological-physiotherapy-1024x576.jpg",
    href: "#",
  },
  {
    title: "Elderly Rehabilitation",
    description:
      "Helping older adults regain strength, mobility, and independence after illness, surgery, or hospital stays, focusing on functional recovery at home.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/Elderly-physiotherapy-1024x684.webp",
    href: "#",
  },
  {
    title: "Post-Operative Physiotherapy",
    description:
      "Safe and effective home-based recovery support after hip and knee joint replacements, or other surgeries to restore function quickly.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/post-operative-physiotherapy-1024x660.jpg",
    href: "#",
  },
  {
    title: "Complex Orthopaedic & Polytrauma Rehab",
    description:
      "Expert home rehabilitation for complex orthopaedic injuries and multiple traumas – supporting safe recovery after fractures, surgeries, and multi-system injuries.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/ortho-1024x683.jpg",
    href: "#",
  },
  {
    title: "Physiotherapy for Care Homes",
    description:
      "Physiotherapy and rehab services for care home residents. We support falls prevention, safe mobility, and personalised rehab which helps care homes meet quality standards and work closely with MDTs.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/care-home-physio-1024x683.jpg",
    href: "#",
  },
  {
    title: "Home Visit Physiotherapy",
    description:
      "We provide expert home visit physiotherapy, ensuring personalised care in the comfort of the patient's home. Ideal for people with mobility barriers or complex needs.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/home-visit-physiotherapy-1024x683.jpg",
    href: "#",
  },
  {
    title: "Intensive Rehabilitation",
    description:
      "Tailored intensive rehabilitation packages to accelerate recovery and restore independence. Whether you are looking for daily therapy or three sessions per week, we offer targeted rehab to meet your needs.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/intensive-rehabilation-1024x683.jpg",
    href: "#",
  },
  {
    title: "Falls Prevention and Rehabilitation",
    description:
      "Falls prevention and rehabilitation services designed to reduce fall risk and enhance confidence, promoting a better quality of life.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/Falls-prevention-rehabilation-1024x682.jpg",
    href: "#",
  },
  {
    title: "Hydrotherapy",
    description:
      "We offer guided hydrotherapy programmes in local pools, tailored for neurological and orthopaedic recovery — helping reduce pain, improve mobility, and restore function.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2025/07/female-coach-helping-senior-woman-in-swimming-pool-2025-04-04-09-45-17-utc-1024x683.jpg",
    href: "#",
  },
  {
    title: "Paediatric Physiotherapy",
    description:
      "We provide specialised physiotherapy programs for children, supporting developmental milestones and posture correction — helping young patients gain strength, coordination, and confidence in movement.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2025/10/Untitled-design-4-1.png",
    href: "#",
  },
  {
    title: "Occupational Therapy",
    description:
      "Our Occupational Therapists help individuals regain independence in daily living activities. We focus on mobility, home safety, and practical skills for everyday life.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2026/03/Occupational-therapy-1-1.png",
    href: "#",
  },
  {
    title: "Speech and Language Therapy",
    description:
      "Speech and language therapy supports adults and children with speech, communication, voice, and swallowing difficulties. We provide private home-based SLT support across the UK to improve confidence, communication, and independence.",
    image:
      "https://rehabtherapist.co.uk/wp-content/uploads/2026/05/speech-language-.png",
    href: "#",
  },
];

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Services | Rehab Therapist UK – Nationwide Rehab Support</title>
        <meta
          name="description"
          content="Discover therapy and rehabilitation services offered by Rehab Therapist UK. Expert care delivered nationwide across the UK to help you recover stronger."
        />
      </Helmet>

      <main>
        {/* hero */}
        <section className="relative overflow-hidden bg-navy-deep">
          <Container className="grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            <div className="max-w-xl">
              <div className="mb-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-gold-deep">
                <span
                  aria-hidden="true"
                  className="h-0.5 w-10 bg-gold-deep sm:w-12"
                />
                our services
              </div>
              <h1 className="font-display text-4xl font-light leading-[1.15] text-white sm:text-5xl">
                Specialist Home Physiotherapy Services, Tailored to You
              </h1>
              <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-white/80 md:text-lg">
                From stroke to elderly rehab — expert physio care at your home.
              </p>

              <a
                href="#contact-section"
                className="mt-10 inline-block rounded-full bg-gold px-8 py-4 text-[13px] font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-xl sm:text-[14px]"
              >
                book your free consultation today!
              </a>
            </div>

            <div className="mx-auto w-full max-w-md">
              <Image
                imgSrc="https://rehabtherapist.co.uk/wp-content/uploads/2025/08/service-2-1024x1024.png"
                alt="home physiotherapy session"
                className="w-full"
              />
            </div>
          </Container>
        </section>

        {/* services grid */}
        <section className="bg-white py-16 md:py-24">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesList.map((service) => (
                <div
                  key={service.title}
                  className="group flex flex-col border border-navy-deep/10 bg-white transition-colors duration-300 hover:border-gold"
                >
                  <div className="aspect-video overflow-hidden border-b border-navy-deep/10">
                    <Image
                      imgSrc={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-medium text-navy-deep">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-deep/70">
                      {service.description}
                    </p>

                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="mt-4 inline-block cursor-pointer text-xs font-bold uppercase tracking-widest text-gold-deep transition-colors duration-300 hover:text-navy-deep"
                    >
                      learn more &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <CtaBand />
        <Contact />
      </main>
    </>
  );
};

export default Service;
