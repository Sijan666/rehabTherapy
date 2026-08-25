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
} from "lucide-react";

const HomeVisite = () => {
  const conditions = [
    { title: "Stroke Rehabilitation", icon: Zap },
    { title: "Parkinson's disease", icon: Activity },
    { title: "Multiple Sclerosis (MS)", icon: Star },
    { title: "Traumatic Brain Injury (TBI)", icon: Brain },
    { title: "Spinal Cord Injuries", icon: Bone },
    { title: "Motor Neurone Disease (MND)", icon: UserCheck },
    { title: "Functional Neurological Disorder (FND)", icon: HelpCircle },
    { title: "Neuropathy", icon: Footprints },
    { title: "Guillain-Barré Syndrome", icon: HeartPulse },
  ];

  return (
    <section className="bg-[#EEF5F6] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] uppercase tracking-wider mb-3">
          Neurological Conditions Treated
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-12">
          Expert care for clients recovering from stroke and living with
          long-term neurological challenges.
        </p>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {conditions.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-teal-500/20"
              >
                <div className="flex-shrink-0 text-[#008A90]">
                  <IconComponent className="w-8 h-8 stroke-[1.5]" />
                </div>
                <span className="text-left font-medium text-gray-800 text-base md:text-lg leading-snug">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-[#008A90] hover:bg-[#006E73] text-white font-semibold px-8 py-3.5 rounded transition-colors duration-200 shadow-md">
            Book Your Home Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeVisite;
