import React from "react";
import {
  Activity,
  User,
  Bed,
  Bone,
  Zap,
  Accessibility,
  ArrowRight,
} from "lucide-react";

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
    <section className="bg-[#F8F7F2] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Sub-header Badge */}
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-[#C68B45]"></span>
          <span className="text-[#C68B45] uppercase tracking-widest text-xs font-semibold">
            Specialist Care
          </span>
          <span className="h-px w-8 bg-[#C68B45]"></span>
        </div>

        {/* Header Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] mb-4">
          Elderly Rehabilitation Support
        </h2>

        {/* Subtitle */}
        <p className="text-[#556061] text-base sm:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Gentle, personalised rehab for older adults to maintain mobility,
          strength, and confidence.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {rehabilitationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 flex flex-col justify-between border border-[#0F2D2A]/5 hover:border-[#C68B45]/40 shadow-sm hover:shadow-md transition-all duration-300 text-left cursor-pointer"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-lg bg-[#F8F7F2] flex items-center justify-center text-[#C68B45] mb-5 border border-[#C68B45]/20 group-hover:bg-[#0F2D2A] group-hover:text-[#C68B45] group-hover:border-[#0F2D2A] transition-colors duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#0F2D2A] text-lg mb-4 leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-1.5 text-[#C68B45] font-semibold text-sm group-hover:gap-2.5 transition-all duration-300">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Button */}
        <div>
          <button className="cursor-pointer bg-[#0F2D2A] hover:bg-[#112926] text-[#F8F7F2] font-semibold text-base px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg border border-[#C68B45]/30 focus:outline-none">
            Schedule Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
