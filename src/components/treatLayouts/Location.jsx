// import React from "react";
// import { MapPin } from "lucide-react";

// const Location = () => {
//   const locations = [
//     "Buckinghamshire",
//     "Bedfordshire",
//     "Hertfordshire",
//     "North London",
//     "East London",
//     "South London",
//     "West London",
//     "North Oxfordshire",
//     "Berkshire",
//     "Cambridgeshire",
//   ];

//   return (
//     <div className="font-sans">
//       {/* AREAS WE SERVE SECTION */}
//       <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto text-center">
//           {/* Section Header */}
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A202C] uppercase tracking-wider mb-10">
//             AREAS WE SERVE
//           </h2>

//           {/* Locations Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-6 max-w-5xl mx-auto mb-10 text-left">
//             {locations.map((location, index) => (
//               <div key={index} className="flex items-center gap-2.5">
//                 <MapPin className="w-5 h-5 text-[#008A90] flex-shrink-0 fill-[#008A90]/10" />
//                 <span className="text-[#2D3748] text-base font-medium">
//                   {location}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Explore More Button */}
//           <div>
//             <button className="bg-[#008A90] hover:bg-[#006E73] text-white font-semibold text-base px-7 py-3 rounded transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
//               Explore more locations
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* LET'S CREATE YOUR PERSONALISED RECOVERY PLAN SECTION */}
//       <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Main Title */}
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A202C] uppercase tracking-wider mb-4">
//             LET’S CREATE YOUR PERSONALISED RECOVERY PLAN
//           </h2>

//           {/* Subtitle Description */}
//           <p className="text-[#4A5568] text-base md:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
//             Ready to begin physiotherapy from home? Contact us to book a free
//             assessment or learn more about how we can help.
//           </p>

//           {/* Dual Action Buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <button className="w-full sm:w-auto bg-[#008A90] hover:bg-[#006E73] text-white font-semibold text-base px-8 py-3.5 rounded transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
//               Book an Assessment
//             </button>
//             <button className="w-full sm:w-auto bg-[#A2D2DF] hover:bg-[#8EC2D0] text-[#004D50] font-semibold text-base px-8 py-3.5 rounded transition-all duration-300 border border-[#008A90]/30 shadow-sm active:scale-95">
//               Request a Call Back
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Location;

import React from "react";
import { MapPin } from "lucide-react";

const Location = () => {
  const locations = [
    "Buckinghamshire",
    "Bedfordshire",
    "Hertfordshire",
    "North London",
    "East London",
    "South London",
    "West London",
    "North Oxfordshire",
    "Berkshire",
    "Cambridgeshire",
  ];

  return (
    <div className="font-sans">
      {/* AREAS WE SERVE SECTION */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Sub-header Badge */}
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#C68B45]"></span>
            <span className="text-[#C68B45] uppercase tracking-widest text-xs sm:text-sm font-semibold">
              Our Coverage
            </span>
            <span className="h-[1px] w-8 bg-[#C68B45]"></span>
          </div>

          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] uppercase tracking-wide mb-12">
            Areas We Serve
          </h2>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14 text-left">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#F2F4F4]/60 p-4 rounded-xl border border-[#EBEBEB] hover:border-[#C68B45]/40 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#C68B45] shadow-xs flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[#0F2D2A] text-base font-medium">
                  {location}
                </span>
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          <div>
            <button className="border-2 border-[#0F2D2A] text-[#0F2D2A] hover:bg-[#0F2D2A] hover:text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md active:scale-95">
              Explore More Locations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
