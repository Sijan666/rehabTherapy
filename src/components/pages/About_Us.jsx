import React from "react";
import Image from "../Image";
import Container from "../Container";
import Button from "../Button";

import aboutBanner from "../../assets/aboutBanner.png";

// Custom Components
import ServicesSlider from "./about/ServicesSlider";
import MissionVision from "./about/MissionVision";
import CoreValuesSection from "./about/CoreValuesSection";
import TestimonialsSlider from "./about/TestimonialsSlider";
import MultidisciplinaryServices from "./about/MultidisciplinaryServices";
import AccreditationLogos from "./about/AccreditationLogos";

export default function About_Us() {
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

          <MultidisciplinaryServices />
        </Container>
      </section>

      {/* Services & Mission / Vision Section */}
      <section className="bg-white py-12 text-slate-700 md:py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
              What We Do
            </h2>
            <ServicesSlider />
          </div>

          <MissionVision />
        </Container>
      </section>

      {/* Core Values Section */}
      <CoreValuesSection />

      {/* Location & Testimonials Section */}
      <section className="bg-white py-12 text-slate-700 md:py-16">
        <Container className="space-y-14 md:space-y-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div className="space-y-4 md:col-span-5">
              <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
                AREAS WE COVER
              </h2>
              <p className="text-xs leading-relaxed text-slate-600 sm:text-sm lg:w-85">
                Home based Neurological, elderly physiotherapy and
                rehabilitation across the UK.
              </p>
              <div className="pt-2">
                <Button
                  className={
                    "rounded-md !bg-[#00A499] px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] active:scale-95"
                  }
                  children={" Find out More"}
                />
              </div>
            </div>

            <div className="flex justify-end md:col-span-7">
              <div className="w-full overflow-hidden rounded-md border border-slate-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2171.5524249815944!2d90.38014476097447!3d23.743766804136005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdhanmondi%20labaid%20hospital!5e0!3m2!1sen!2sbd!4v1787681693311!5m2!1sen!2sbd"
                  className="h-100 w-full"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>

          <TestimonialsSlider />
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

          <AccreditationLogos />

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
                  <Button
                    className={
                      "rounded-md !bg-[#00A499] px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] active:scale-95"
                    }
                    children={"Get in Touch"}
                  />
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
                  <Button
                    className={
                      "rounded-md !bg-[#00A499] px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] active:scale-95"
                    }
                    children={"Make a Referral"}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
