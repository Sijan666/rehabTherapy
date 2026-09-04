import React from "react";

const MULTIDISCIPLINARY_SERVICES = [
  "Occupational Therapist",
  "Speech and Language Therapist",
  "Psychologist",
  "Dietitian",
];

export default function MultidisciplinaryServices() {
  return (
    <div className="mt-8 flex flex-col items-center font-sans">
      <p className="mb-4 text-center text-sm font-semibold text-[#0F2D2A] sm:text-base tracking-wide">
        Multi-disciplinary team services available on request:
      </p>
      <ul className="grid w-full max-w-xl grid-cols-1 gap-3 px-4 text-sm text-[#556061] sm:grid-cols-2 sm:text-base">
        {MULTIDISCIPLINARY_SERVICES.map((service, index) => (
          <li
            key={`service-${index}`}
            className="flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-xs border border-[#EBEBEB] transition-all duration-300 hover:border-[#C68B45]/40"
          >
            <span className="inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#C68B45]" />
            <span className="font-medium text-[#0F2D2A]">{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// import React from "react";

// const MULTIDISCIPLINARY_SERVICES = [
//   "Occupational Therapist",
//   "Speech and Language Therapist",
//   "Psychologist",
//   "Dietitian",
// ];

// export default function MultidisciplinaryServices() {
//   return (
//     <div className="mt-8 flex flex-col items-center">
//       <p className="mb-3 text-center text-sm font-semibold text-slate-800 sm:text-base">
//         Multi-disciplinary team services available on request:
//       </p>
//       <ul className="grid w-full max-w-xl grid-cols-1 gap-2.5 px-4 text-sm text-slate-600 sm:grid-cols-2 sm:text-base">
//         {MULTIDISCIPLINARY_SERVICES.map((service, index) => (
//           <li key={`service-${index}`} className="flex items-center gap-2.5">
//             <span className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[#00A499]" />
//             <span>{service}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
