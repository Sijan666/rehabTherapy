import React from "react";;

import valuesOne from "../../../assets/valuesOne.png";
import valuesTwo from "../../../assets/valuesTwo.png";
import valuesThree from "../../../assets/valuesThree.png";
import valuesFour from "../../../assets/valuesFour.png";
import Container from "@/components/Container";

const VALUES = [
  {
    title: "COMPASSION",
    description:
      "We treat every person with dignity, empathy, and kindness. We listen, understand, and respond to each individual’s story, needs, and goals.",
    image: valuesOne,
  },
  {
    title: "EXCELLENCE",
    description:
      "We deliver the highest standards of rehabilitation through skilled clinicians, continuous learning, and evidence-based practice. We strive for meaningful outcomes that truly enhance quality of life.",
    image: valuesTwo,
  },
  {
    title: "EMPOWERMENT",
    description:
      "We support individuals and families to take an active role in their rehabilitation. Our approach is collaborative, goal-driven, and focused on restoring confidence and independence.",
    image: valuesThree,
  },
  {
    title: "INTEGRITY",
    description:
      "We are honest, dependable, and transparent in all our actions. We take pride in providing consistent, reliable care that patients and professionals can trust.",
    image: valuesFour,
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-[#EBF2F6] py-12 text-slate-700 md:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
            OUR CORE VALUES
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2">
          {VALUES.map((item, index) => (
            <div
              key={`value-${index}`}
              className="flex min-h-[160px] flex-col overflow-hidden rounded-md border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row"
            >
              <div className="h-44 flex-shrink-0 sm:h-auto sm:w-5/12">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-start p-5 sm:w-7/12">
                <h3 className="text-base font-bold uppercase tracking-wide text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
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
