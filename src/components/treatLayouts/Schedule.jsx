// import React from "react";
// import { Activity, User, Bed, Bone, Zap, Accessibility } from "lucide-react";

// const Schedule = () => {
//   const rehabilitationItems = [
//     {
//       title: "Balance Disorders and Fall Prevention",
//       icon: Activity,
//     },
//     {
//       title: "Mobility Decline",
//       icon: Accessibility,
//     },
//     {
//       title: "Post-Hospital Deconditioning",
//       icon: Bed,
//     },
//     {
//       title: "Osteoarthritis",
//       icon: Bone,
//     },
//     {
//       title: "Joint Stiffness",
//       icon: Zap,
//     },
//     {
//       title: "General Age-Related Weakness",
//       icon: User,
//     },
//   ];

//   return (
//     <section className="bg-[#009698] py-16 px-4 sm:px-6 lg:px-8 text-white font-sans">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Header Title */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase mb-3">
//           Elderly Rehabilitation Support
//         </h2>

//         {/* Subtitle */}
//         <p className="text-teal-50 text-base sm:text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
//           Gentle, personalised rehab for older adults to maintain mobility,
//           strength, and confidence.
//         </p>

//         {/* Feature Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {rehabilitationItems.map((item, index) => {
//             const IconComponent = item.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-md p-6 flex items-center gap-5 text-gray-800 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 <div className="text-[#008A90] flex-shrink-0">
//                   <IconComponent className="w-9 h-9 stroke-[1.5]" />
//                 </div>
//                 <span className="text-left font-semibold text-gray-800 text-base md:text-lg leading-snug">
//                   {item.title}
//                 </span>
//               </div>
//             );
//           })}
//         </div>

//         {/* Call to Action Button */}
//         <div>
//           <button className="bg-[#005B5C] hover:bg-[#004748] text-white font-semibold text-base md:text-lg px-8 py-3.5 rounded transition-all duration-300 shadow-lg border border-teal-400/20 active:scale-95">
//             Schedule Free Assessment
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Schedule;


import React from "react";
import {
  Activity,
  User,
  Bed,
  Bone,
  Zap,
  Accessibility,
  ArrowRight,
} from "lucide-react";

const Schedule = () => {
  const rehabilitationItems = [
    {
      title: "Balance Disorders and Fall Prevention",
      icon: Activity,
    },
    {
      title: "Mobility Decline",
      icon: Accessibility,
    },
    {
      title: "Post-Hospital Deconditioning",
      icon: Bed,
    },
    {
      title: "Osteoarthritis",
      icon: Bone,
    },
    {
      title: "Joint Stiffness",
      icon: Zap,
    },
    {
      title: "General Age-Related Weakness",
      icon: User,
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Sub-title & Accent Divider */}
        <div className="flex flex-col items-center mb-3">
          <span className="text-[#C68B45] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Specialist Care
          </span>
          <div className="w-10 h-[2px] bg-[#C68B45] mt-1.5 rounded-full"></div>
        </div>

        {/* Header Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] mb-4">
          Elderly Rehabilitation Support
        </h2>

        {/* Subtitle */}
        <p className="text-[#556061] text-base sm:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Gentle, personalised rehab for older adults to maintain mobility,
          strength, and confidence.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {rehabilitationItems.map((item, index) => {
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

        {/* Call to Action Button */}
        <div>
          <button className="border-2 border-[#0F2D2A] text-[#0F2D2A] hover:bg-[#0F2D2A] hover:text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md active:scale-95">
            Schedule Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;