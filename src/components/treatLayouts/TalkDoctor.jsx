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
    <section className="bg-[#EBF2F4] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A202C] uppercase tracking-wider mb-4 font-sans">
          POST-OPERATIVE REHABILITATION
        </h2>

        {/* Subtitle / Description */}
        <p className="text-[#4A5568] text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
          Recover faster and safer at home with structured rehab from our
          experienced therapists.
        </p>

        {/* Dynamic Card Grid (3 Columns on Desktop, 1 Column on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg p-6 flex items-center gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-[#008A90]/20 group cursor-pointer"
              >
                <div className="flex-shrink-0 text-[#008A90] group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 stroke-[1.5]" />
                </div>
                <span className="text-left font-semibold text-[#2D3748] text-base md:text-lg leading-snug">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Call-to-Action (CTA) Button */}
        <div>
          <button className="bg-[#008A90] hover:bg-[#006E73] text-white font-semibold text-base md:text-lg px-8 py-3.5 rounded transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#008A90]/30">
            Talk to a Specialist
          </button>
        </div>
      </div>
    </section>
  );
};

export default TalkDoctor;
