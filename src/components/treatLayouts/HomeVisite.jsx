// import React from "react";
// import {
//   Zap,
//   Brain,
//   HelpCircle,
//   Activity,
//   Bone,
//   Footprints,
//   Star,
//   UserCheck,
//   HeartPulse,
//   ArrowRight,
// } from "lucide-react";

// const HomeVisite = () => {
//   const conditions = [
//     { title: "Stroke Rehabilitation", icon: Zap },
//     { title: "Parkinson's Disease", icon: Activity },
//     { title: "Multiple Sclerosis (MS)", icon: Star },
//     { title: "Traumatic Brain Injury (TBI)", icon: Brain },
//     { title: "Spinal Cord Injuries", icon: Bone },
//     { title: "Motor Neurone Disease (MND)", icon: UserCheck },
//     { title: "Functional Neurological Disorder (FND)", icon: HelpCircle },
//     { title: "Neuropathy", icon: Footprints },
//     { title: "Guillain-Barré Syndrome", icon: HeartPulse },
//   ];

//   return (
//     <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Sub-title & Accent Divider */}
//         <div className="flex flex-col items-center mb-3">
//           <span className="text-[#C68B45] text-xs sm:text-sm font-semibold tracking-widest uppercase">
//             Specialist Care
//           </span>
//           <div className="w-10 h-0.5 bg-[#C68B45] mt-1.5 rounded-full"></div>
//         </div>

//         {/* Section Header */}
//         <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2D2A] mb-4">
//           Conditions Treated
//         </h2>
//         <p className="text-[#556061] text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
//           Expert care for clients recovering from stroke and living with
//           long-term neurological challenges.
//         </p>

//         {/* Conditions Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
//           {conditions.map((item, index) => {
//             const IconComponent = item.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-white rounded-xl p-6 flex flex-col justify-between border border-[#EBEBEB] hover:border-[#C68B45]/40 hover:shadow-lg transition-all duration-300 text-left cursor-pointer"
//               >
//                 <div>
//                   {/* Icon Box */}
//                   <div className="w-12 h-12 rounded-lg bg-[#F2F4F4] flex items-center justify-center text-[#0F2D2A] mb-5 group-hover:bg-[#0F2D2A] group-hover:text-white transition-colors duration-300">
//                     <IconComponent className="w-6 h-6 stroke-[1.8]" />
//                   </div>

//                   {/* Title */}
//                   <h3 className="font-semibold text-[#0F2D2A] text-lg mb-4">
//                     {item.title}
//                   </h3>
//                 </div>

//                 {/* Learn More Link */}
//                 <div className="flex items-center gap-1.5 text-[#C68B45] font-medium text-sm group-hover:gap-2.5 transition-all duration-300">
//                   <span>LEARN MORE</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA Button */}
//         <div>
//           <button className="border-2 border-[#0F2D2A] text-[#0F2D2A] hover:bg-[#0F2D2A] hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
//             Book Your Home Visit
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeVisite;

import React from "react";
import {
  Zap,
  Brain,
  HelpCircle,
  Activity,
  Bone,
  Footprints,
  Star,
  UserCheck,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

const HomeVisite = () => {
  const conditions = [
    { title: "Stroke Rehabilitation", icon: Zap },
    { title: "Parkinson's Disease", icon: Activity },
    { title: "Multiple Sclerosis (MS)", icon: Star },
    { title: "Traumatic Brain Injury (TBI)", icon: Brain },
    { title: "Spinal Cord Injuries", icon: Bone },
    { title: "Motor Neurone Disease (MND)", icon: UserCheck },
    { title: "Functional Neurological Disorder (FND)", icon: HelpCircle },
    { title: "Neuropathy", icon: Footprints },
    { title: "Guillain-Barré Syndrome", icon: HeartPulse },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Sub-title & Accent Divider */}
        <div className="flex flex-col items-center mb-3">
          <span className="text-[#C68B45] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Specialist Care
          </span>
          <div className="w-10 h-0.5 bg-[#C68B45] mt-1.5 rounded-full"></div>
        </div>

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2D2A] mb-4">
          Conditions Treated
        </h2>
        <p className="text-[#556061] text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Expert care for clients recovering from stroke and living with
          long-term neurological challenges.
        </p>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {conditions.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 flex flex-col justify-between border border-[#EBEBEB] hover:border-[#C68B45]/40 hover:shadow-lg transition-all duration-300 text-left cursor-pointer"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-lg bg-[#F2F4F4] flex items-center justify-center text-[#0F2D2A] mb-5 group-hover:bg-[#0F2D2A] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-[#0F2D2A] text-lg mb-4">
                    {item.title}
                  </h3>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-1.5 text-[#C68B45] font-medium text-sm group-hover:gap-2.5 transition-all duration-300">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div>
          <button className="border-2 border-[#0F2D2A] text-[#0F2D2A] hover:bg-[#0F2D2A] hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300">
            Book Your Home Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeVisite;
