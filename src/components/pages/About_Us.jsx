import React, { useState, useCallback, useMemo } from "react";
import Image from "../Image";
import Container from "../Container";
import Button from "../Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import aboutBanner from "../../assets/aboutBanner.png";
import mission from "../../assets/mission.png";
import vision from "../../assets/vision.png";
import logoOne from "../../assets/logoOne.webp";
import logoTwo from "../../assets/logoTwo.webp";
import logoThree from "../../assets/logoThree.webp";
import logoFour from "../../assets/logoFour.webp";
import logoFive from "../../assets/logoFive.webp";
import sliderOne from "../../assets/sliderOne.jpg";
import sliderTwo from "../../assets/sliderTwo.jpg";
import sliderThree from "../../assets/sliderThree.jpg";
import sliderFour from "../../assets/sliderFour.jpg";
import sliderFive from "../../assets/sliderFive.jpg";
import sliderSix from "../../assets/sliderSix.jpg";
import valuesOne from "../../assets/valuesOne.png";
import valuesTwo from "../../assets/valuesTwo.png";
import valuesThree from "../../assets/valuesThree.png";
import valuesFour from "../../assets/valuesFour.png";

// Multidisciplinary Team Services
const MULTIDISCIPLINARY_SERVICES = [
  "Occupational Therapist",
  "Speech and Language Therapist",
  "Psychologist",
  "Dietitian",
];

// Cards Slider Data
const CARDS = [
  { id: 1, title: "Home Visits", image: sliderOne },
  { id: 2, title: "Neurological Physiotherapy ", image: sliderTwo },
  { id: 3, title: "Intensive Rehabilitation", image: sliderThree },
  { id: 4, title: "Case Managers", image: sliderFour },
  { id: 5, title: "Elderly Physiotherapy", image: sliderFive },
  { id: 6, title: "Post-Operative Physiotherapy", image: sliderSix },
];

// Core Values Data
const VALUES = [
  {
    title: "COMPASSION",
    description:
      "We treat every person with dignity, empathy, and kindness. We listen, understand, and respond to each individual’s story, needs, and goals.",
    image: valuesOne,
  },
  {
    title: "EXCELLENCE",
    description:
      "We deliver the highest standards of rehabilitation through skilled clinicians, continuous learning, and evidence-based practice. We strive for meaningful outcomes that truly enhance quality of life.",
    image: valuesTwo,
  },
  {
    title: "EMPOWERMENT",
    description:
      "We support individuals and families to take an active role in their rehabilitation. Our approach is collaborative, goal-driven, and focused on restoring confidence and independence.",
    image: valuesThree,
  },
  {
    title: "INTEGRITY",
    description:
      "We are honest, dependable, and transparent in all our actions. We take pride in providing consistent, reliable care that patients and professionals can trust.",
    image: valuesFour,
  },
];

// Accreditation Logos Data
const LOGOS = [
  { name: "HCPC Registered", src: logoOne, alt: "HCPC Registered Logo" },
  { name: "Chartered Society of Physiotherapy", src: logoTwo, alt: "CSP Logo" },
  { name: "ACPIN", src: logoThree, alt: "ACPIN Logo" },
  { name: "BABICM Member", src: logoFour, alt: "BABICM Member Logo" },
  { name: "ICO", src: logoFive, alt: "ICO Logo" },
];

// Testimonials Data
const TESTIMONIALS = [
  {
    id: 1,
    name: "Priscilla Sinder",
    initial: "P",
    bgColor: "bg-green-800",
    date: "10 months ago",
    text: "My father is a patient of Rehab Therapist in Harrow. He has been a patient since August 2025. The sessions are great as they target my father's condition of Parkinson's Disease. The 121 care and attention was very important to the family. The team are extremely accommodating and my initial talk with Krishna was encouraging....",
  },
  {
    id: 2,
    name: "Lloyd Curtis",
    initial: "L",
    bgColor: "bg-pink-700",
    date: "12 months ago",
    text: "This was a marvellous experience which has truly renewed my life. I am very grateful for the fantastic expertise and the good-natured way I was treated while still ensuring I did the hard work.",
  },
];

export default function About_Us() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Callbacks for optimized state handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? CARDS.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === CARDS.length - 1 ? 0 : prev + 1));
  }, []);

  const handleTestimonialPrev = useCallback(() => {
    setTestimonialIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  }, []);

  const handleTestimonialNext = useCallback(() => {
    setTestimonialIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1,
    );
  }, []);

  // Memoized visible cards for dynamic 3-card carousel slider
  const visibleCards = useMemo(() => {
    return [
      CARDS[currentIndex],
      CARDS[(currentIndex + 1) % CARDS.length],
      CARDS[(currentIndex + 2) % CARDS.length],
    ];
  }, [currentIndex]);

  const currentTestimonial = TESTIMONIALS[testimonialIndex];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#005f5B] via-[#00746F] to-[#008B84] text-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-2 md:gap-12 lg:py-16">
            <div className="flex flex-col items-start space-y-4 sm:space-y-6">
              <h1 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Expert Neurological &amp; Elderly Physiotherapy in the Comfort
                of Your Home
              </h1>
              <p className="max-w-xl text-sm font-normal leading-relaxed text-teal-50 sm:text-base md:text-lg">
                Trusted home physiotherapists helping you move, strengthen, and
                live independently. Relied on by patients, families, case
                managers, and GPs.
              </p>
              <div className="pt-2">
                <Button className="rounded-md !bg-[#00A499] px-6 py-3 text-sm font-semibold shadow-md transition-all duration-300 hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] focus:ring-offset-2 active:scale-95 sm:px-8 sm:py-3.5 sm:text-base">
                  Book A Home Visit
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-2xl lg:max-w-none">
                <Image
                  imgSrc={aboutBanner}
                  alt="Home Physiotherapy Care"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership / Profile Section */}
      <section className="bg-white py-10 text-slate-700 md:py-16">
        <Container>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
              Krishna Gundapudi
            </h2>
            <p className="mt-1 text-sm font-semibold text-slate-600 sm:text-lg">
              Clinical Director and Neurological Physiotherapist
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            <div className="flex justify-center md:col-span-4 md:justify-start">
              <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-md md:max-w-none">
                <Image
                  imgSrc={aboutBanner}
                  alt="Krishna Gundapudi"
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-start space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base md:col-span-8">
              <p>
                Krishna is a highly specialist physiotherapist with over 25
                years of clinical experience. He leads a team of mobile
                rehabilitation experts who provide personalised rehabilitation
                to individuals with neurological and age-related conditions in
                the comfort of their own homes across the South East and East of
                England.
              </p>
              <p>
                Krishna’s career spans across the NHS, private, and voluntary
                sectors. Over the years, he has held various senior clinical and
                leadership roles, contributing significantly to clinical
                outcomes and service development. His vision and initiatives
                have consistently positioned his services as national examples
                of high-quality, evidence-based rehabilitation.
              </p>
              <p>
                Krishna trained to a master’s level and continues to stay at the
                forefront of rehabilitation through ongoing study, conference
                attendance, and networking. Specialising in Neurological
                Physiotherapy and Elderly rehabilitation, he is known for a
                robust evidence-based approach guided by research, professional
                expertise, and patient values.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              Having trained with highly reputed researchers such as Anne
              Shumway-Cook and Marjorie H. Woollacott, Krishna teaches
              extensively, delivering advanced training courses for
              physiotherapists, occupational therapists, researchers, and
              academics. His popular three-day Balance Rehabilitation course has
              equipped rehabilitation professionals across the UK and abroad to
              deliver high-quality rehabilitation.
            </p>
            <p>
              Krishna possesses highly specialist skills in balance
              rehabilitation, complex disability management, spasticity
              management, splinting, posture management, and hydrotherapy. He
              places a strong emphasis on understanding individual needs and
              working in partnership to develop goal-driven rehabilitation
              plans.
            </p>
            <p>
              He founded Rehab Therapist with a clear mission to empower
              individuals suffering from neurological and age-related conditions
              to lead fulfilling lives through seamless, high-quality
              rehabilitation that is accessible, responsive, and
              person-centered.
            </p>
            <p>
              Krishna and his mobile physiotherapists team would be delighted to
              play a part in your rehabilitation journey. We cover
              Buckinghamshire, Hertfordshire, Bedfordshire, Oxfordshire,
              Cambridgeshire, Berkshire, and Greater London, constantly
              expanding to support more individuals at home.
            </p>
          </div>

          <div className="mt-8 flex justify-center sm:mt-10">
            <Button className="rounded-md !bg-[#00A499] px-6 py-3 text-sm font-semibold shadow-md transition-all duration-300 hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] focus:ring-offset-2 active:scale-95 sm:px-8 sm:py-3.5 sm:text-base">
              Book your Free Consultation
            </Button>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="bg-[#EBF2F6] py-12 text-slate-700 md:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
              Meet Our Team
            </h2>
          </div>

          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-sm leading-relaxed text-slate-600 sm:mt-8 sm:space-y-6 sm:text-base">
            <p>
              Every member of our team is a qualified, HCPC-registered
              professional with extensive experience gained within the NHS or
              private sector. All team members belong to professional bodies
              such as the Chartered Society of Physiotherapy (CSP) and maintain
              continuous skill development.
            </p>
            <p>
              Each member holds an enhanced Disclosure and Barring Service (DBS)
              clearance and undergoes mandatory training in Safeguarding, Moving
              &amp; Handling, and Basic Life Support alongside their clinical
              practice.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <p className="mb-3 text-center text-sm font-semibold text-slate-800 sm:text-base">
              Multi-disciplinary team services available on request:
            </p>
            <ul className="grid w-full max-w-xl grid-cols-1 gap-2.5 px-4 text-sm text-slate-600 sm:grid-cols-2 sm:text-base">
              {MULTIDISCIPLINARY_SERVICES.map((service, index) => (
                <li
                  key={`service-${index}`}
                  className="flex items-center gap-2.5"
                >
                  <span className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[#00A499]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Services & Mission / Vision Section */}
      <section className="bg-white py-12 text-slate-700 md:py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
              What We Do
            </h2>

            {/* Functional Card Carousel Slider */}
            <div className="relative mt-8 flex items-center justify-center">
              <button
                onClick={handlePrev}
                type="button"
                className="absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/20 text-teal-700 transition hover:bg-teal-500/40 focus:outline-none focus:ring-2 focus:ring-[#00A499] sm:h-10 sm:w-10"
                aria-label="Previous Slide"
              >
                <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <div className="grid w-full grid-cols-1 gap-4 px-10 sm:grid-cols-3 sm:px-12">
                {visibleCards.map((card, idx) => (
                  <div
                    key={`card-${card.id}-${idx}`}
                    className="group relative overflow-hidden rounded-md border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-[#00746F]/90 px-3 py-3 text-center backdrop-blur-xs">
                      <span className="text-xs font-semibold text-white sm:text-sm">
                        {card.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleNext}
                type="button"
                className="absolute right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/20 text-teal-700 transition hover:bg-teal-500/40 focus:outline-none focus:ring-2 focus:ring-[#00A499] sm:h-10 sm:w-10"
                aria-label="Next Slide"
              >
                <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="mt-14 space-y-12 sm:mt-20 sm:space-y-16">
            {/* Our Mission */}
            <div className="flex flex-col items-center gap-8 md:flex-row  md:gap-12">
              {/* Image container */}
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    imgSrc={mission}
                    alt="Our Mission"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              {/* Text container */}
              <div className="w-full space-y-3 md:w-1/2 md:pt-4">
                <h3 className="text-xl font-extrabold uppercase tracking-wider text-slate-800 sm:text-2xl">
                  OUR MISSION
                </h3>
                <p className=" text-justify text-xs leading-relaxed text-slate-500 sm:text-sm sm:leading-loose">
                  At Rehab Therapist, our mission is to deliver expert,
                  compassionate rehabilitation in the comfort of people’s own
                  homes—empowering individuals with rehabilitation needs to
                  regain independence, improve function, and live fulfilling
                  lives. We are committed to providing high-quality,
                  evidence-based care that is seamless, personalised,
                  responsive, and accessible across every community we serve.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="flex flex-col-reverse items-center gap-8 md:flex-row  md:gap-12">
              {/* Text container */}
              <div className="w-full space-y-3 md:w-1/2 md:pt-4">
                <h3 className="text-xl font-extrabold uppercase tracking-wider text-slate-800 sm:text-2xl">
                  OUR VISION
                </h3>
                <p className="text-justify text-xs leading-relaxed text-slate-500 sm:text-sm sm:leading-loose">
                  To be the leading provider of home-based rehabilitation in the
                  UK—setting the standard for excellence, equity, and innovation
                  in private community rehabilitation.
                </p>
              </div>

              {/* Image container */}
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    imgSrc={vision}
                    alt="Our Vision"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#EBF2F6] py-12 text-slate-700 md:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
              OUR CORE VALUES
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2">
            {VALUES.map((item, index) => (
              <div
                key={`value-${index}`}
                className="flex min-h-[160px] flex-col overflow-hidden rounded-md border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row"
              >
                <div className="h-44 flex-shrink-0 sm:h-auto sm:w-5/12">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col justify-start p-5 sm:w-7/12">
                  <h3 className="text-base font-bold uppercase tracking-wide text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Location & Testimonials Section */}
      <section className="bg-white py-12 text-slate-700 md:py-16">
        <Container className="space-y-14 md:space-y-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div className="space-y-4 md:col-span-5">
              <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
                AREAS WE COVER
              </h2>
              <p className="text-xs lg:w-85 leading-relaxed text-slate-600 sm:text-sm">
                Home based Neurological, elderly physiotherapy and
                rehabilitation across the UK.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  className="rounded-md bg-[#00A499] px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] active:scale-95"
                >
                  Find out More
                </button>
              </div>
            </div>

            <div className="flex justify-end md:col-span-7">
              <div className="w-full overflow-hidden rounded-md border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2171.5524249815944!2d90.38014476097447!3d23.743766804136005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdhanmondi%20labaid%20hospital!5e0!3m2!1sen!2sbd!4v1787681693311!5m2!1sen!2sbd"
            className="w-full h-100"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-center">
            <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
              TESTIMONIALS
            </h2>

            {/* Testimonials Slider */}
            <div className="relative mx-auto flex max-w-3xl items-center justify-center px-4 sm:px-0">
              <button
                onClick={handleTestimonialPrev}
                type="button"
                className="absolute -left-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#00A499] sm:-left-6 sm:h-10 sm:w-10"
                aria-label="Previous Testimonial"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>

              <div className="w-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-8">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="relative">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white ${currentTestimonial.bgColor}`}
                    >
                      {currentTestimonial.initial}
                    </div>
                    <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-xs">
                      <svg className="h-4 w-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="text-sm font-bold text-slate-800">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {currentTestimonial.date}
                  </div>

                  <div className="flex items-center space-x-1 py-1 text-amber-400">
                    {"★".repeat(5)}
                    <svg
                      className="ml-1 h-4 w-4 fill-blue-500 text-blue-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>

                  <p className="max-w-xl px-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    "{currentTestimonial.text}"
                  </p>
                  <button
                    type="button"
                    className="text-xs font-medium text-slate-400 hover:text-slate-600 hover:underline focus:outline-none"
                  >
                    Read more
                  </button>
                </div>
              </div>

              <button
                onClick={handleTestimonialNext}
                type="button"
                className="absolute -right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#00A499] sm:-right-6 sm:h-10 sm:w-10"
                aria-label="Next Testimonial"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Google</span>{" "}
              rating score:{" "}
              <span className="font-semibold text-slate-700">5.0 of 5</span>,
              based on{" "}
              <span className="font-semibold text-slate-700">20 reviews</span>.
            </div>

            <div className="mx-auto max-w-lg overflow-hidden rounded-md border border-slate-200 shadow-sm">
              <div className="relative flex h-56 w-full items-center justify-center bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80"
                  alt="Video thumbnail"
                  className="h-full w-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4 text-center">
                  <p className="max-w-xs text-xs font-medium text-white sm:text-sm">
                    Click to accept marketing cookies and enable this content
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                className="rounded-md bg-[#00A499] px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] active:scale-95"
              >
                View more reviews
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Accreditation Logos & Bottom CTA */}
      <section className="bg-[#EBF2F6] py-12 text-slate-700 md:py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-xl font-black uppercase tracking-wide text-slate-900 sm:text-2xl md:text-3xl">
              REGISTERED CHARTERED PHYSIOTHERAPISTS
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 md:gap-8">
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex h-20 items-center justify-center rounded-md bg-white px-4 py-2 shadow-sm transition hover:shadow-md"
              >
                <Image
                  className="max-h-12 w-auto object-contain sm:max-h-14"
                  imgSrc={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                alt="Need support for yourself"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/60 p-6 text-center">
                <h3 className="text-base font-bold uppercase tracking-wide text-white sm:text-xl">
                  NEED SUPPORT FOR YOURSELF OR A LOVED ONE?
                </h3>
                <div className="mt-4">
                  <button
                    type="button"
                    className="rounded-md bg-[#00A499] px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-white active:scale-95"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Case manager or professional"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/60 p-6 text-center">
                <h3 className="text-base font-bold uppercase tracking-wide text-white sm:text-xl">
                  ARE YOU A CASE MANAGER OR PROFESSIONAL ARRANGING REHAB FOR
                  YOUR CLIENT?
                </h3>
                <div className="mt-4">
                  <button
                    type="button"
                    className="rounded-md bg-[#00A499] px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-white active:scale-95"
                  >
                    Make a Referral
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
