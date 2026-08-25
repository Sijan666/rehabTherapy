import React from "react";

const MULTIDISCIPLINARY_SERVICES = [
  "Occupational Therapist",
  "Speech and Language Therapist",
  "Psychologist",
  "Dietitian",
];

export default function MultidisciplinaryServices() {
  return (
    <div className="mt-8 flex flex-col items-center">
      <p className="mb-3 text-center text-sm font-semibold text-slate-800 sm:text-base">
        Multi-disciplinary team services available on request:
      </p>
      <ul className="grid w-full max-w-xl grid-cols-1 gap-2.5 px-4 text-sm text-slate-600 sm:grid-cols-2 sm:text-base">
        {MULTIDISCIPLINARY_SERVICES.map((service, index) => (
          <li key={`service-${index}`} className="flex items-center gap-2.5">
            <span className="inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[#00A499]" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
