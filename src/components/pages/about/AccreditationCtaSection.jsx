import React from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import AccreditationLogos from "./AccreditationLogos";
import {
  ArrowRightIcon,
  UserIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

export default function AccreditationCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F2] py-16 text-[#556061] md:py-24">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C68B45]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-[#0F2D2A]/10 blur-3xl" />

      <Container className="space-y-12 sm:space-y-16">
        {/* Title Header */}
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-3 mb-1">
            <span className="h-px w-8 bg-[#C68B45]"></span>
            <span className="text-[#C68B45] uppercase tracking-widest text-xs font-semibold">
              Trusted & Accredited
            </span>
            <span className="h-px w-8 bg-[#C68B45]"></span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-wide text-[#0F2D2A] sm:text-3xl md:text-4xl uppercase">
            REGISTERED CHARTERED PHYSIOTHERAPISTS
          </h2>
        </div>

        {/* Accreditation Logos Component */}
        <AccreditationLogos />

        {/* Action Callout Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1: Patients / Loved Ones */}
          <div className="relative min-h-80 overflow-hidden rounded-3xl bg-[#0F2D2A] shadow-lg ring-1 ring-[#0F2D2A]/10 sm:min-h-[360px] border border-[#0F2D2A]/20">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
              alt="Need support for yourself"
              className="absolute inset-0 h-full w-full object-cover opacity-70"
              loading="lazy"
            />
            {/* Dark Teal Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0F2D2A]/95 via-[#0F2D2A]/70 to-[#0F2D2A]/30" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-center sm:p-10">
              <div className="mx-auto flex flex-col items-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F2D2A]/80 backdrop-blur-md border border-[#C68B45]/30 text-[#C68B45] shadow-md">
                  <UserIcon className="h-6 w-6" />
                </div>

                <h3 className="max-w-md text-lg font-bold uppercase tracking-wide text-[#F8F7F2] sm:text-xl md:text-2xl drop-shadow-sm">
                  Need Support for Yourself or a Loved One?
                </h3>

                <div className="pt-2">
                  <button className="cursor-pointer bg-[#C68B45] hover:bg-[#B37A38] text-white font-semibold text-base px-7 py-3 rounded-md shadow-md hover:shadow-lg border border-[#C68B45]/30 focus:outline-none">
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Case Managers / Professionals */}
          <div className="relative min-h-80 overflow-hidden rounded-3xl bg-[#0F2D2A] shadow-lg ring-1 ring-[#0F2D2A]/10 sm:min-h-[360px] border border-[#0F2D2A]/20">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
              alt="Case manager or professional"
              className="absolute inset-0 h-full w-full object-cover opacity-70"
              loading="lazy"
            />
            {/* Dark Teal Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0F2D2A]/95 via-[#0F2D2A]/70 to-[#0F2D2A]/30" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-center sm:p-10">
              <div className="mx-auto flex flex-col items-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F2D2A]/80 backdrop-blur-md border border-[#C68B45]/30 text-[#C68B45] shadow-md">
                  <BriefcaseIcon className="h-6 w-6" />
                </div>

                <h3 className="max-w-md text-lg font-bold uppercase tracking-wide text-[#F8F7F2] sm:text-xl md:text-2xl drop-shadow-sm">
                  Are You a Case Manager Arranging Rehab?
                </h3>

                <div className="pt-2">
                  <button className="cursor-pointer bg-transparent hover:bg-[#C68B45] text-[#F8F7F2] hover:text-white font-semibold text-base px-7 py-3 rounded-md border-2 border-[#C68B45] shadow-md hover:shadow-lg focus:outline-none">
                    Make a Referral
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// import React from "react";
// import Container from "@/components/Container";
// import Button from "@/components/Button";
// import AccreditationLogos from "./AccreditationLogos";
// import {
//   ArrowRightIcon,
//   UserIcon,
//   BriefcaseIcon,
// } from "@heroicons/react/24/solid";

// export default function AccreditationCtaSection() {
//   return (
//     <section className="relative overflow-hidden bg-slate-100/80 py-16 text-slate-700 md:py-24">
//       {/* Background  */}
//       <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-3xl" />
//       <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

//       <Container className="space-y-12 sm:space-y-16">
//         {/* Title Header */}
//         <div className="mx-auto max-w-2xl text-center space-y-3">
//           <span className="inline-block rounded-full bg-teal-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00746F] ring-1 ring-teal-500/20">
//             Trusted & Accredited
//           </span>
//           <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
//             REGISTERED CHARTERED PHYSIOTHERAPISTS
//           </h2>
//         </div>

//         {/* Accreditation Logos Component */}
//         <AccreditationLogos />

//         {/* Action Callout Cards  */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//           {/* Card 1: Patients / Loved Ones */}
//           <div className="group relative min-h-[320px] overflow-hidden rounded-3xl bg-slate-900 shadow-xl ring-1 ring-slate-900/10 transition-all duration-500 hover:shadow-2xl sm:min-h-[360px]">
//             {/* Background Image  */}
//             <img
//               src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
//               alt="Need support for yourself"
//               className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
//               loading="lazy"
//             />
//             {/* Dark Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

//             {/* Content Container */}
//             <div className="absolute inset-0 flex flex-col justify-end p-6 text-center sm:p-10">
//               <div className="mx-auto flex flex-col items-center space-y-4">
//                 <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
//                   <UserIcon className="h-6 w-6 text-white" />
//                 </div>

//                 <h3 className="max-w-md text-lg font-bold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
//                   Need Support for Yourself or a Loved One?
//                 </h3>

//                 <div className="pt-2">
//                   <Button className="group/btn inline-flex items-center gap-2 rounded-full !bg-[#00A499] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:!bg-[#00746F] active:scale-95">
//                     <span>Get in Touch</span>
//                     <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/*  Case Managers / Professionals */}
//           <div className="group relative min-h-[320px] overflow-hidden rounded-3xl bg-slate-900 shadow-xl ring-1 ring-slate-900/10 transition-all duration-500 hover:shadow-2xl sm:min-h-[360px]">
//             {/* Background Image */}
//             <img
//               src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
//               alt="Case manager or professional"
//               className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
//               loading="lazy"
//             />
//             {/* Dark Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

//             {/* Content Container */}
//             <div className="absolute inset-0 flex flex-col justify-end p-6 text-center sm:p-10">
//               <div className="mx-auto flex flex-col items-center space-y-4">
//                 <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
//                   <BriefcaseIcon className="h-6 w-6 text-white" />
//                 </div>

//                 <h3 className="max-w-md text-lg font-bold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
//                   Are You a Case Manager Arranging Rehab?
//                 </h3>

//                 <div className="pt-2">
//                   <Button className="group/btn inline-flex items-center gap-2 rounded-full !bg-[#00A499] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:!bg-[#00746F] active:scale-95">
//                     <span>Make a Referral</span>
//                     <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
