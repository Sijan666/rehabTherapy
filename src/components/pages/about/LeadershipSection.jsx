import React from "react";
import aboutBanner from "../../../assets/aboutBanner.png";
import Container from "@/components/Container";
import Image from "@/components/Image";
import Button from "@/components/Button";
import {
  CheckCircleIcon,
  AcademicCapIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function LeadershipSection() {
  const highlights = [
    "Over 25+ years of clinical leadership",
    "Master's trained & NHS senior experience",
    "Specialist in Neuro & Balance Rehabilitation",
    "National trainer for PTs & OT professionals",
  ];

  const coverageAreas = [
    "Buckinghamshire",
    "Hertfordshire",
    "Bedfordshire",
    "Oxfordshire",
    "Cambridgeshire",
    "Berkshire",
    "Greater London",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#556061] lg:py-24 font-sans">
      {/* Background Subtle Gradient Blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#0F2D2A]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#C68B45]/5 blur-3xl" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Sub-header Badge & Accent Divider */}
          <div className="flex flex-col items-center mb-3">
            <span className="text-[#C68B45] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Leadership & Expertise
            </span>
            <div className="w-10 h-0.5 bg-[#C68B45] mt-1.5 rounded-full"></div>
          </div>

          <h2 className="text-3xl font-extrabold text-[#0F2D2A] sm:text-4xl lg:text-5xl">
            Krishna Gundapudi
          </h2>
          <p className="mt-2 text-base font-semibold text-[#C68B45] sm:text-xl">
            Clinical Director & Neurological Physiotherapist
          </p>
        </div>

        {/* Profile Card & Bio Section */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Image & Quick Info Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-8 overflow-hidden rounded-2xl bg-white p-5 shadow-sm border border-[#EBEBEB]">
              <div className="relative overflow-hidden rounded-xl bg-[#F2F4F4]">
                <Image
                  imgSrc={aboutBanner}
                  alt="Krishna Gundapudi - Clinical Director"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0F2D2A]/40 via-transparent to-transparent" />
              </div>

              {/* Key Highlights Badge List */}
              <div className="mt-6 space-y-3">
                <h3 className="flex items-center text-sm font-bold uppercase tracking-wider text-[#0F2D2A]">
                  <AcademicCapIcon className="mr-2 h-5 w-5 text-[#C68B45]" />
                  Clinical Credentials
                </h3>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center text-xs font-medium text-[#556061] sm:text-sm"
                    >
                      <CheckCircleIcon className="mr-2 h-4 w-4 shrink-0 text-[#C68B45]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Biography */}
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#EBEBEB] sm:p-8">
              <h3 className="text-xl font-bold text-[#0F2D2A]">
                About Krishna
              </h3>
              <p className="mt-4 leading-relaxed text-[#556061]">
                Krishna is a highly specialist physiotherapist with over 25
                years of clinical experience. He leads a team of mobile
                rehabilitation experts who provide personalised rehabilitation
                to individuals with neurological and age-related conditions in
                the comfort of their own homes across the South East and East of
                England.
              </p>
              <p className="mt-4 leading-relaxed text-[#556061]">
                Krishna’s career spans across the NHS, private, and voluntary
                sectors. Over the years, he has held various senior clinical and
                leadership roles, contributing significantly to clinical
                outcomes and service development. His vision and initiatives
                have consistently positioned his services as national examples
                of high-quality, evidence-based rehabilitation.
              </p>
              <p className="mt-4 leading-relaxed text-[#556061]">
                Krishna trained to a master’s level and continues to stay at the
                forefront of rehabilitation through ongoing study, conference
                attendance, and networking. Specialising in Neurological
                Physiotherapy and Elderly rehabilitation, he is known for a
                robust evidence-based approach guided by research, professional
                expertise, and patient values.
              </p>
            </div>

            {/* Teaching & Specialisms Box */}
            <div className="rounded-2xl bg-[#F2F4F4] p-6 border border-[#EBEBEB] sm:p-8">
              <h4 className="text-lg font-bold text-[#0F2D2A]">
                Advanced Training & Specialisms
              </h4>
              <p className="mt-3 leading-relaxed text-[#556061]">
                Having trained with highly reputed researchers such as Anne
                Shumway-Cook and Marjorie H. Woollacott, Krishna teaches
                extensively, delivering advanced training courses for
                physiotherapists, occupational therapists, researchers, and
                academics. His popular three-day Balance Rehabilitation course
                has equipped rehabilitation professionals across the UK and
                abroad to deliver high-quality rehabilitation.
              </p>
              <p className="mt-3 leading-relaxed text-[#556061]">
                Krishna possesses highly specialist skills in balance
                rehabilitation, complex disability management, spasticity
                management, splinting, posture management, and hydrotherapy. He
                places a strong emphasis on understanding individual needs and
                working in partnership to develop goal-driven rehabilitation
                plans.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement & Coverage Map Container */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-[#EBEBEB] sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-bold text-[#0F2D2A]">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-[#556061]">
                Krishna founded Rehab Therapist with a clear mission to empower
                individuals suffering from neurological and age-related
                conditions to lead fulfilling lives through seamless,
                high-quality rehabilitation that is accessible, responsive, and
                person-centered.
              </p>
              <p className="mt-3 leading-relaxed text-[#556061]">
                Krishna and his mobile physiotherapists team would be delighted
                to play a part in your rehabilitation journey.
              </p>
            </div>

            {/* Coverage Areas Chips */}
            <div className="rounded-xl bg-[#F2F4F4] p-6 lg:col-span-5 border border-[#EBEBEB]">
              <h4 className="flex items-center text-sm font-bold uppercase tracking-wider text-[#0F2D2A]">
                <MapPinIcon className="mr-2 h-5 w-5 text-[#C68B45]" />
                Coverage Areas
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {coverageAreas.map((area, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0F2D2A] shadow-xs border border-[#EBEBEB]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="mt-10 flex flex-col items-center justify-center border-t border-[#EBEBEB] pt-8 sm:flex-row">
            <Button className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2D2A] px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#163A35] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0F2D2A] focus:ring-offset-2">
              <span>Book Your Free Consultation</span>
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

// import React from "react";
// import aboutBanner from "../../../assets/aboutBanner.png";
// import Container from "@/components/Container";
// import Image from "@/components/Image";
// import Button from "@/components/Button";
// import {
//   CheckCircleIcon,
//   AcademicCapIcon,
//   MapPinIcon,
//   ArrowRightIcon,
// } from "@heroicons/react/24/solid";

// export default function LeadershipSection() {
//   const highlights = [
//     "Over 25+ years of clinical leadership",
//     "Master's trained & NHS senior experience",
//     "Specialist in Neuro & Balance Rehabilitation",
//     "National trainer for PTs & OT professionals",
//   ];

//   const coverageAreas = [
//     "Buckinghamshire",
//     "Hertfordshire",
//     "Bedfordshire",
//     "Oxfordshire",
//     "Cambridgeshire",
//     "Berkshire",
//     "Greater London",
//   ];

//   return (
//     <section className="relative overflow-hidden bg-slate-50/60 py-16 text-slate-700 lg:py-24">
//       {/* Background  */}
//       <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

//       <Container className="relative z-10">
//         {/* Section Header */}
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="inline-block rounded-full bg-teal-100/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00746F]">
//             Leadership & Expertise
//           </span>
//           <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
//             Krishna Gundapudi
//           </h2>
//           <p className="mt-2 text-base font-semibold text-[#00746F] sm:text-xl">
//             Clinical Director & Neurological Physiotherapist
//           </p>
//         </div>

//         {/* Profile Card & Bio Section */}
//         <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
//           {/*  Image & Quick Info Card */}
//           <div className="lg:col-span-5">
//             <div className="sticky top-8 overflow-hidden rounded-3xl bg-white p-4 shadow-xl ring-1 ring-slate-900/5">
//               <div className="relative overflow-hidden rounded-2xl bg-slate-100">
//                 <Image
//                   imgSrc={aboutBanner}
//                   alt="Krishna Gundapudi - Clinical Director"
//                   className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
//               </div>

//               {/* Key Highlights Badge List */}
//               <div className="mt-6 space-y-3 px-2 pb-2">
//                 <h3 className="flex items-center text-sm font-bold uppercase tracking-wider text-slate-900">
//                   <AcademicCapIcon className="mr-2 h-5 w-5 text-[#00A499]" />
//                   Clinical Credentials
//                 </h3>
//                 <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
//                   {highlights.map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center text-xs font-medium text-slate-600 sm:text-sm"
//                     >
//                       <CheckCircleIcon className="mr-2 h-4 w-4 shrink-0 text-[#00A499]" />
//                       <span>{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/*Detailed Biography */}
//           <div className="space-y-6 lg:col-span-7">
//             <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8">
//               <h3 className="text-xl font-bold text-slate-900">
//                 About Krishna
//               </h3>
//               <p className="mt-4 leading-relaxed text-slate-600">
//                 Krishna is a highly specialist physiotherapist with over 25
//                 years of clinical experience. He leads a team of mobile
//                 rehabilitation experts who provide personalised rehabilitation
//                 to individuals with neurological and age-related conditions in
//                 the comfort of their own homes across the South East and East of
//                 England.
//               </p>
//               <p className="mt-4 leading-relaxed text-slate-600">
//                 Krishna’s career spans across the NHS, private, and voluntary
//                 sectors. Over the years, he has held various senior clinical and
//                 leadership roles, contributing significantly to clinical
//                 outcomes and service development. His vision and initiatives
//                 have consistently positioned his services as national examples
//                 of high-quality, evidence-based rehabilitation.
//               </p>
//               <p className="mt-4 leading-relaxed text-slate-600">
//                 Krishna trained to a master’s level and continues to stay at the
//                 forefront of rehabilitation through ongoing study, conference
//                 attendance, and networking. Specialising in Neurological
//                 Physiotherapy and Elderly rehabilitation, he is known for a
//                 robust evidence-based approach guided by research, professional
//                 expertise, and patient values.
//               </p>
//             </div>

//             {/* Teaching & Specialisms Box */}
//             <div className="rounded-3xl bg-teal-900/5 p-6 ring-1 ring-teal-500/10 sm:p-8">
//               <h4 className="text-lg font-bold text-[#00746F]">
//                 Advanced Training & Specialisms
//               </h4>
//               <p className="mt-3 leading-relaxed text-slate-700">
//                 Having trained with highly reputed researchers such as Anne
//                 Shumway-Cook and Marjorie H. Woollacott, Krishna teaches
//                 extensively, delivering advanced training courses for
//                 physiotherapists, occupational therapists, researchers, and
//                 academics. His popular three-day Balance Rehabilitation course
//                 has equipped rehabilitation professionals across the UK and
//                 abroad to deliver high-quality rehabilitation.
//               </p>
//               <p className="mt-3 leading-relaxed text-slate-700">
//                 Krishna possesses highly specialist skills in balance
//                 rehabilitation, complex disability management, spasticity
//                 management, splinting, posture management, and hydrotherapy. He
//                 places a strong emphasis on understanding individual needs and
//                 working in partnership to develop goal-driven rehabilitation
//                 plans.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Mission Statement & Coverage Map Container */}
//         <div className="mt-12 overflow-hidden rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 sm:p-10 lg:p-12">
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
//             <div className="lg:col-span-7">
//               <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
//               <p className="mt-3 leading-relaxed text-slate-600">
//                 Krishna founded Rehab Therapist with a clear mission to empower
//                 individuals suffering from neurological and age-related
//                 conditions to lead fulfilling lives through seamless,
//                 high-quality rehabilitation that is accessible, responsive, and
//                 person-centered.
//               </p>
//               <p className="mt-3 leading-relaxed text-slate-600">
//                 Krishna and his mobile physiotherapists team would be delighted
//                 to play a part in your rehabilitation journey.
//               </p>
//             </div>

//             {/* Coverage Areas Chips */}
//             <div className="rounded-2xl bg-slate-50 p-6 lg:col-span-5">
//               <h4 className="flex items-center text-sm font-bold uppercase tracking-wider text-slate-900">
//                 <MapPinIcon className="mr-2 h-5 w-5 text-[#00A499]" />
//                 Coverage Areas
//               </h4>
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {coverageAreas.map((area, index) => (
//                   <span
//                     key={index}
//                     className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200/60"
//                   >
//                     {area}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Call to Action Button */}
//           <div className="mt-10 flex flex-col items-center justify-center border-t border-slate-100 pt-8 sm:flex-row">
//             <Button className="group inline-flex items-center justify-center gap-2 rounded-full !bg-[#00A499] px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:!bg-[#00746F] hover:shadow-teal-500/25 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00A499] focus:ring-offset-2">
//               <span>Book your Free Consultation</span>
//               <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//             </Button>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
