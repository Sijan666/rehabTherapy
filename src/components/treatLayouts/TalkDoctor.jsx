import React from "react";
import { Bone, Activity, Zap, Crosshair, Stethoscope } from "lucide-react";

const TalkDoctor = () => {
  const services = [
    { id: 1, title: "Hip Replacement", icon: Bone },
    { id: 2, title: "Knee Replacement", icon: Activity },
    { id: 3, title: "Spinal Surgery", icon: Zap },
    { id: 4, title: "Fracture Recovery", icon: Crosshair },
    { id: 5, title: "Orthopaedic Procedures", icon: Stethoscope },
  ];

  return (
    <section className="bg-[#F8F7F2] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Sub-header Badge */}
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="h-[1px] w-8 bg-[#C68B45]"></span>
          <span className="text-[#C68B45] uppercase tracking-widest text-xs font-semibold">Specialised Care</span>
          <span className="h-[1px] w-8 bg-[#C68B45]"></span>
        </div>

        {/* Section Header Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] uppercase tracking-wide mb-4">
          POST-OPERATIVE REHABILITATION
        </h2>

        {/* Subtitle / Description */}
        <p className="text-[#556061] text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
          Recover faster and safer at home with structured rehab from our
          experienced therapists.
        </p>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-[#0F2D2A]/5 hover:border-[#C68B45]/40 group cursor-pointer"
              >
                <div className="flex-shrink-0 text-[#C68B45] group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 stroke-[1.5]" />
                </div>
                <span className="text-left font-bold text-[#0F2D2A] text-base md:text-lg leading-snug">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Call-to-Action (CTA) Button */}
        <div>
          <button className="bg-[#0F2D2A] hover:bg-[#112926] text-[#F8F7F2] font-semibold text-base md:text-lg px-8 py-3.5 rounded transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 border border-[#C68B45]/30 focus:outline-none focus:ring-4 focus:ring-[#0F2D2A]/20">
            Talk to a Specialist
          </button>
        </div>
      </div>
    </section>
  );
};

export default TalkDoctor;