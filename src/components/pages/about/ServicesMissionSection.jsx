import Container from "@/components/Container";
import React from "react";
import ServicesSlider from "./ServicesSlider";
import MissionVision from "./MissionVision";

export default function ServicesMissionSection() {
  return (
    <section className="bg-white py-20 text-[#556061] font-sans">
      <Container>
        <div className="text-center">
          {/* Sub-header Badge & Accent Divider */}
          <div className="flex flex-col items-center mb-3">
            <span className="text-[#C68B45] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Services
            </span>
            <div className="w-10 h-[2px] bg-[#C68B45] mt-1.5 rounded-full"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] mb-12">
            What We Do
          </h2>

          <ServicesSlider />
        </div>

        <MissionVision />
      </Container>
    </section>
  );
}

// import Container from "@/components/Container";
// import React from "react";
// import ServicesSlider from "./ServicesSlider";
// import MissionVision from "./MissionVision";

// export default function ServicesMissionSection() {
//   return (
//     <section className="bg-white py-12 text-slate-700 md:py-16">
//       <Container>
//         <div className="text-center">
//           <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
//             What We Do
//           </h2>
//           <ServicesSlider />
//         </div>
//         <MissionVision />
//       </Container>
//     </section>
//   );
// }
