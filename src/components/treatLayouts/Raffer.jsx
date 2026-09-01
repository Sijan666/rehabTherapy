import React from "react";

const Raffer = () => {
  return (
    <section className="bg-[#EBF2F4] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Card: Personal Support */}
        <div className="relative rounded-2xl overflow-hidden min-h-[260px] md:min-h-[300px] flex items-center justify-center shadow-lg group">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
            alt="Physiotherapist supporting patient"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px] transition-opacity duration-300"></div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 text-center flex flex-col items-center justify-center max-w-md">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider mb-6 leading-snug drop-shadow-sm">
              NEED SUPPORT FOR YOURSELF OR A LOVED ONE?
            </h3>
            <button className="bg-[#008A90] hover:bg-[#006E73] text-white font-semibold text-base px-7 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#008A90]/40">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Card: Professional Referral */}
        <div className="relative rounded-2xl overflow-hidden min-h-[260px] md:min-h-[300px] flex items-center justify-center shadow-lg group">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
            alt="Professional taking medical notes"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] transition-opacity duration-300"></div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 text-center flex flex-col items-center justify-center max-w-md">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider mb-6 leading-snug drop-shadow-sm">
              ARE YOU A CASE MANAGER OR PROFESSIONAL ARRANGING REHAB FOR YOUR
              CLIENT?
            </h3>
            <button className="bg-[#008A90] hover:bg-[#006E73] text-white font-semibold text-base px-7 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#008A90]/40">
              Make a Referral
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Raffer;
