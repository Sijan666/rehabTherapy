import React from "react";
import { Activity, User, Bed, Bone, Zap, Accessibility } from "lucide-react";

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
    <section className="bg-[#009698] py-16 px-4 sm:px-6 lg:px-8 text-white font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase mb-3">
          Elderly Rehabilitation Support
        </h2>

        {/* Subtitle */}
        <p className="text-teal-50 text-base sm:text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Gentle, personalised rehab for older adults to maintain mobility,
          strength, and confidence.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rehabilitationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-md p-6 flex items-center gap-5 text-gray-800 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-[#008A90] flex-shrink-0">
                  <IconComponent className="w-9 h-9 stroke-[1.5]" />
                </div>
                <span className="text-left font-semibold text-gray-800 text-base md:text-lg leading-snug">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Call to Action Button */}
        <div>
          <button className="bg-[#005B5C] hover:bg-[#004748] text-white font-semibold text-base md:text-lg px-8 py-3.5 rounded transition-all duration-300 shadow-lg border border-teal-400/20 active:scale-95">
            Schedule Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
