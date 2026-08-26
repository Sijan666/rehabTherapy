import React from "react";
import aboutBanner from "../../../assets/aboutBanner.png";
import Container from "@/components/Container";
import Image from "@/components/Image";
import Button from "@/components/Button";

export default function LeadershipSection() {
  return (
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
              Krishna is a highly specialist physiotherapist with over 25 years
              of clinical experience. He leads a team of mobile rehabilitation
              experts who provide personalised rehabilitation to individuals
              with neurological and age-related conditions in the comfort of
              their own homes across the South East and East of England.
            </p>
            <p>
              Krishna’s career spans across the NHS, private, and voluntary
              sectors. Over the years, he has held various senior clinical and
              leadership roles, contributing significantly to clinical outcomes
              and service development. His vision and initiatives have
              consistently positioned his services as national examples of
              high-quality, evidence-based rehabilitation.
            </p>
            <p>
              Krishna trained to a master’s level and continues to stay at the
              forefront of rehabilitation through ongoing study, conference
              attendance, and networking. Specialising in Neurological
              Physiotherapy and Elderly rehabilitation, he is known for a robust
              evidence-based approach guided by research, professional
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
            working in partnership to develop goal-driven rehabilitation plans.
          </p>
          <p>
            He founded Rehab Therapist with a clear mission to empower
            individuals suffering from neurological and age-related conditions
            to lead fulfilling lives through seamless, high-quality
            rehabilitation that is accessible, responsive, and person-centered.
          </p>
          <p>
            Krishna and his mobile physiotherapists team would be delighted to
            play a part in your rehabilitation journey. We cover
            Buckinghamshire, Hertfordshire, Bedfordshire, Oxfordshire,
            Cambridgeshire, Berkshire, and Greater London, constantly expanding
            to support more individuals at home.
          </p>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Button className="rounded-md !bg-[#00A499] px-6 py-3 text-sm font-semibold shadow-md transition-all duration-300 hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] focus:ring-offset-2 active:scale-95 sm:px-8 sm:py-3.5 sm:text-base">
            Book your Free Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
