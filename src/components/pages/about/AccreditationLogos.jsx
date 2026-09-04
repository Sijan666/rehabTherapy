import React from "react";
import Image from "@/components/Image";

import logoOne from "../../../assets/logoOne.webp";
import logoTwo from "../../../assets/logoTwo.webp";
import logoThree from "../../../assets/logoThree.webp";
import logoFour from "../../../assets/logoFour.webp";
import logoFive from "../../../assets/logoFive.webp";

const LOGOS = [
  { name: "HCPC Registered", src: logoOne, alt: "HCPC Registered Logo" },
  { name: "Chartered Society of Physiotherapy", src: logoTwo, alt: "CSP Logo" },
  { name: "ACPIN", src: logoThree, alt: "ACPIN Logo" },
  { name: "BABICM Member", src: logoFour, alt: "BABICM Member Logo" },
  { name: "ICO", src: logoFive, alt: "ICO Logo" },
];

export default function AccreditationLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-sans">
      {LOGOS.map((logo, index) => (
        <div
          key={`logo-${index}`}
          className="group flex h-24 w-36 items-center justify-center rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#0F2D2A]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#C68B45]/30 sm:h-28 sm:w-44"
        >
          <Image
            className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-16"
            imgSrc={logo.src}
            alt={logo.alt}
          />
        </div>
      ))}
    </div>
  );
}

// import React from "react";
// import Image from "@/components/Image";

// import logoOne from "../../../assets/logoOne.webp";
// import logoTwo from "../../../assets/logoTwo.webp";
// import logoThree from "../../../assets/logoThree.webp";
// import logoFour from "../../../assets/logoFour.webp";
// import logoFive from "../../../assets/logoFive.webp";

// const LOGOS = [
//   { name: "HCPC Registered", src: logoOne, alt: "HCPC Registered Logo" },
//   { name: "Chartered Society of Physiotherapy", src: logoTwo, alt: "CSP Logo" },
//   { name: "ACPIN", src: logoThree, alt: "ACPIN Logo" },
//   { name: "BABICM Member", src: logoFour, alt: "BABICM Member Logo" },
//   { name: "ICO", src: logoFive, alt: "ICO Logo" },
// ];

// export default function AccreditationLogos() {
//   return (
//     <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
//       {LOGOS.map((logo, index) => (
//         <div
//           key={`logo-${index}`}
//           className="group flex h-24 w-36 items-center justify-center rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-teal-500/30 sm:h-28 sm:w-44"
//         >
//           <Image
//             className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-16"
//             imgSrc={logo.src}
//             alt={logo.alt}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }
