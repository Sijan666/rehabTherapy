// import React from "react";
// import { CheckCircle2 } from "lucide-react";

// const WhyChoose = () => {
//   const points = [
//     "No travel needed – we come to you",
//     "Fully qualified UK physiotherapists",
//     "Evidence-based, goal-driven plans",
//     "One-on-one care in familiar surroundings",
//     "Flexible scheduling across South East England",
//   ];

//   return (
//     <section className="bg-[#F8F7F2] py-16 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
//         {/* Sub-header Badge */}
//         <div className="inline-flex items-center gap-3 mb-3">
//           <span className="h-px w-8 bg-[#C68B45]"></span>
//           <span className="text-[#C68B45] uppercase tracking-widest text-xs font-semibold">
//             Our Key Advantages
//           </span>
//           <span className="h-px w-8 bg-[#C68B45]"></span>
//         </div>

//         {/* Section Header */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] uppercase tracking-wide mb-10">
//           WHY CHOOSE OUR HOME-BASED THERAPY?
//         </h2>

//         {/* Feature List */}
//         <ul className="space-y-3.5 text-left mb-10 max-w-xl w-full">
//           {points.map((point, index) => (
//             <li
//               key={index}
//               className="flex items-center gap-3.5 bg-white/70 backdrop-blur-sm p-3.5 rounded-lg border border-[#0F2D2A]/5 shadow-sm hover:border-[#C68B45]/40 transition-colors"
//             >
//               <CheckCircle2 className="w-5 h-5 text-[#C68B45] shrink-0 stroke-[2.5]" />
//               <span className="text-[#556061] text-base md:text-lg font-medium leading-snug">
//                 {point}
//               </span>
//             </li>
//           ))}
//         </ul>

//         {/* CTA Button */}
//         <div>
//           <button className="bg-[#0F2D2A] hover:bg-[#112926] text-[#F8F7F2] font-semibold text-base md:text-lg px-8 py-3.5 rounded transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 border border-[#C68B45]/30 focus:outline-none focus:ring-4 focus:ring-[#0F2D2A]/20">
//             Book Home Visit Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChoose;

import React from "react";
import { CheckCircle2 } from "lucide-react";

const WhyChoose = () => {
  const points = [
    "No travel needed – we come to you",
    "Fully qualified UK physiotherapists",
    "Evidence-based, goal-driven plans",
    "One-on-one care in familiar surroundings",
    "Flexible scheduling across South East England",
  ];

  return (
    <section className="bg-[#F8F7F2] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Sub-header Badge */}
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-[#C68B45]"></span>
          <span className="text-[#C68B45] uppercase tracking-widest text-xs font-semibold">
            Our Key Advantages
          </span>
          <span className="h-px w-8 bg-[#C68B45]"></span>
        </div>

        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] uppercase tracking-wide mb-10">
          WHY CHOOSE OUR HOME-BASED THERAPY?
        </h2>

        {/* Feature List */}
        <ul className="space-y-3.5 text-left mb-10 max-w-xl w-full">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-center gap-3.5 bg-white/70 backdrop-blur-sm p-3.5 rounded-lg border border-[#0F2D2A]/5 shadow-sm hover:border-[#C68B45]/40 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-[#C68B45] shrink-0 stroke-[2.5]" />
              <span className="text-[#556061] text-base md:text-lg font-medium leading-snug">
                {point}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div>
          <button className="bg-[#0F2D2A] hover:bg-[#112926] text-[#F8F7F2] font-semibold text-base md:text-lg px-8 py-3.5 rounded transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 border border-[#C68B45]/30 focus:outline-none focus:ring-4 focus:ring-[#0F2D2A]/20">
            Book Home Visit Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
