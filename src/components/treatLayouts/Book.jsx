// import React from "react";

// const Book = () => {
//   return (
//     <div className="font-sans">
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

// export default Book;



import React from "react";

const Book = () => {
  return (
    <div className="font-sans">
      <section className="bg-[#F6F5EF] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#0F2D2A]/10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sub-header Badge */}
          <div className="inline-flex items-center gap-3 mb-3">
            <span class="h-[1px] w-8 bg-[#C68B45]"></span>
            <span className="text-[#C68B45] uppercase tracking-widest text-xs font-semibold">
              Get Started Today
            </span>
            <span class="h-[1px] w-8 bg-[#C68B45]"></span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] uppercase tracking-wide mb-4">
            LET’S CREATE YOUR PERSONALISED RECOVERY PLAN
          </h2>

          {/* Subtitle Description */}
          <p className="text-[#556061] text-base md:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Ready to begin physiotherapy from home? Contact us to book a free
            assessment or learn more about how we can help.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#0F2D2A] hover:bg-[#112926] text-[#F8F7F2] font-semibold text-base px-8 py-3.5 rounded transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 border border-[#C68B45]/30">
              Book an Assessment
            </button>
            <button className="w-full sm:w-auto bg-transparent hover:bg-[#C68B45]/10 text-[#0F2D2A] font-semibold text-base px-8 py-3.5 rounded transition-all duration-300 border-2 border-[#C68B45] active:scale-95">
              Request a Call Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Book;