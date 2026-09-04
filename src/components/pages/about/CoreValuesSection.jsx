import React from "react";
import valuesOne from "../../../assets/valuesOne.png";
import valuesTwo from "../../../assets/valuesTwo.png";
import valuesThree from "../../../assets/valuesThree.png";
import valuesFour from "../../../assets/valuesFour.png";
import Container from "@/components/Container";

const VALUES = [
  {
    id: "01",
    title: "COMPASSION",
    description:
      "We treat every person with dignity, empathy, and kindness. We listen, understand, and respond to each individual’s story, needs, and goals.",
    image: valuesOne,
  },
  {
    id: "02",
    title: "EXCELLENCE",
    description:
      "We deliver the highest standards of rehabilitation through skilled clinicians, continuous learning, and evidence-based practice. We strive for meaningful outcomes that truly enhance quality of life.",
    image: valuesTwo,
  },
  {
    id: "03",
    title: "EMPOWERMENT",
    description:
      "We support individuals and families to take an active role in their rehabilitation. Our approach is collaborative, goal-driven, and focused on restoring confidence and independence.",
    image: valuesThree,
  },
  {
    id: "04",
    title: "INTEGRITY",
    description:
      "We are honest, dependable, and transparent in all our actions. We take pride in providing consistent, reliable care that patients and professionals can trust.",
    image: valuesFour,
  },
];

export default function CoreValuesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#556061] font-sans lg:py-24">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C68B45]/5 blur-3xl" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Sub-header Badge & Accent Divider */}
          <div className="flex flex-col items-center mb-3">
            <span className="text-[#C68B45] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Guiding Principles
            </span>
            <div className="w-10 h-[2px] bg-[#C68B45] mt-1.5 rounded-full"></div>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2D2A] sm:text-4xl lg:text-5xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#556061] sm:text-lg">
            The foundation of everything we do, ensuring high-quality and
            compassionate healthcare delivery.
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-10">
          {VALUES.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-sm border border-[#EBEBEB] hover:shadow-md hover:border-[#C68B45]/40 sm:flex-row sm:items-center"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl bg-[#F2F4F4] sm:h-56 sm:w-5/12">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D2A]/40 via-transparent to-transparent opacity-60 sm:hidden" />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#C68B45] shadow-xs backdrop-blur-md border border-[#EBEBEB]">
                  {item.id}
                </span>
              </div>

              {/* Text Body */}
              <div className="flex flex-1 flex-col justify-center p-5 sm:p-6 sm:pl-7">
                <h3 className="text-xl font-bold uppercase tracking-wide text-[#0F2D2A] group-hover:text-[#C68B45]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#556061] sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// import React from "react";
// import valuesOne from "../../../assets/valuesOne.png";
// import valuesTwo from "../../../assets/valuesTwo.png";
// import valuesThree from "../../../assets/valuesThree.png";
// import valuesFour from "../../../assets/valuesFour.png";
// import Container from "@/components/Container";

// const VALUES = [
//   {
//     id: "01",
//     title: "COMPASSION",
//     description:
//       "We treat every person with dignity, empathy, and kindness. We listen, understand, and respond to each individual’s story, needs, and goals.",
//     image: valuesOne,
//   },
//   {
//     id: "02",
//     title: "EXCELLENCE",
//     description:
//       "We deliver the highest standards of rehabilitation through skilled clinicians, continuous learning, and evidence-based practice. We strive for meaningful outcomes that truly enhance quality of life.",
//     image: valuesTwo,
//   },
//   {
//     id: "03",
//     title: "EMPOWERMENT",
//     description:
//       "We support individuals and families to take an active role in their rehabilitation. Our approach is collaborative, goal-driven, and focused on restoring confidence and independence.",
//     image: valuesThree,
//   },
//   {
//     id: "04",
//     title: "INTEGRITY",
//     description:
//       "We are honest, dependable, and transparent in all our actions. We take pride in providing consistent, reliable care that patients and professionals can trust.",
//     image: valuesFour,
//   },
// ];

// export default function CoreValuesSection() {
//   return (
//     <section className="relative overflow-hidden bg-slate-50/70 py-16 text-slate-700 lg:py-24">
//       {/* Background */}
//       <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

//       <Container className="relative z-10">
//         {/* Section Header */}
//         <div className="mx-auto max-w-2xl text-center">
//           <span className="inline-block rounded-full bg-teal-100/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00746F]">
//             Guiding Principles
//           </span>
//           <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
//             OUR CORE VALUES
//           </h2>
//           <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
//             The foundation of everything we do, ensuring high-quality and
//             compassionate healthcare delivery.
//           </p>
//         </div>

//         {/* Responsive Cards Grid */}
//         <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-10">
//           {VALUES.map((item) => (
//             <div
//               key={item.id}
//               className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-3 shadow-md ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-teal-500/30 sm:flex-row sm:items-center"
//             >
//               {/* Image Container */}
//               <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-56 sm:w-5/12">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 sm:hidden" />
//                 <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#00746F] shadow-xs backdrop-blur-md">
//                   {item.id}
//                 </span>
//               </div>

//               {/* Text Body */}
//               <div className="flex flex-1 flex-col justify-center p-5 sm:p-6 sm:pl-7">
//                 <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900 transition-colors duration-200 group-hover:text-[#00746F]">
//                   {item.title}
//                 </h3>
//                 <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
