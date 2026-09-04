import React from "react";

const Raffer = () => {
  return (
    <section className="bg-[#F8F7F2] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Card: Personal Support */}
        <div className="relative rounded-2xl overflow-hidden min-h-[280px] md:min-h-80 flex items-center justify-center shadow-md hover:shadow-xl border border-[#0F2D2A]/10 group">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
            alt="Physiotherapist supporting patient"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Custom Dark Teal Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0F2D2A]/90 via-[#0F2D2A]/75 to-[#0F2D2A]/60"></div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 text-center flex flex-col items-center justify-center max-w-md">
            <span className="text-[#C68B45] text-xs font-semibold uppercase tracking-widest mb-2">
              Personal Support
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8F7F2] uppercase tracking-wide mb-6 leading-relaxed drop-shadow-sm">
              NEED SUPPORT FOR YOURSELF OR A LOVED ONE?
            </h3>
            <button className="cursor-pointer bg-[#C68B45] hover:bg-[#B37A38] text-white font-semibold text-base px-7 py-3 rounded-md shadow-md hover:shadow-lg border border-[#C68B45]/30 focus:outline-none">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Card: Professional Referral */}
        <div className="relative rounded-2xl overflow-hidden min-h-[280px] md:min-h-80 flex items-center justify-center shadow-md hover:shadow-xl border border-[#0F2D2A]/10 group">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
            alt="Professional taking medical notes"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Custom Dark Teal Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0F2D2A]/90 via-[#0F2D2A]/75 to-[#0F2D2A]/60"></div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 text-center flex flex-col items-center justify-center max-w-md">
            <span className="text-[#C68B45] text-xs font-semibold uppercase tracking-widest mb-2">
              For Professionals
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8F7F2] uppercase tracking-wide mb-6 leading-relaxed drop-shadow-sm">
              ARE YOU A CASE MANAGER OR ARRANGING REHAB FOR A CLIENT?
            </h3>
            <button className="cursor-pointer bg-transparent hover:bg-[#C68B45] text-[#F8F7F2] hover:text-white font-semibold text-base px-7 py-3 rounded-md border-2 border-[#C68B45] shadow-md hover:shadow-lg focus:outline-none">
              Make a Referral
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Raffer;
