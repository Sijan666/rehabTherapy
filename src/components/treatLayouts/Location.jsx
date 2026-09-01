import React from "react";
import { MapPin } from "lucide-react";

const Location = () => {
  const locations = [
    "Buckinghamshire",
    "Bedfordshire",
    "Hertfordshire",
    "North London",
    "East London",
    "South London",
    "West London",
    "North Oxfordshire",
    "Berkshire",
    "Cambridgeshire",
  ];

  return (
    <div className="font-sans">
      {/* AREAS WE SERVE SECTION */}
      <section className="bg-[#F8F7F2] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Sub-header Badge */}
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#C68B45]"></span>
            <span className="text-[#C68B45] uppercase tracking-widest text-xs sm:text-sm font-semibold">
              Our Coverage
            </span>
            <span className="h-px w-8 bg-[#C68B45]"></span>
          </div>
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] uppercase tracking-wide mb-12">
            Areas We Serve
          </h2>
          {/* Locations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14 text-left">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-[#0F2D2A]/5 hover:border-[#C68B45]/40 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F8F7F2] flex items-center justify-center text-[#C68B45] border border-[#C68B45]/20 flex-shrink-0 group-hover:bg-[#0F2D2A] group-hover:text-[#C68B45] transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[#0F2D2A] text-base font-medium">
                  {location}
                </span>
              </div>
            ))}
          </div>
          {/* Explore More Button */}
          <div>
            <button className="bg-[#0F2D2A] hover:bg-[#112926] text-[#F8F7F2] font-semibold text-base px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 border border-[#C68B45]/30 focus:outline-none">
              Explore More Locations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;


