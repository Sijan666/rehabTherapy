import React from "react";

const Book = () => {
  return (
    <div className="font-sans">
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-[#EBEBEB]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sub-header Badge & Accent Divider */}
          <div className="flex flex-col items-center mb-3">
            <span className="text-[#C68B45] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Get Started Today
            </span>
            <div className="w-10 h-0.5 bg-[#C68B45] mt-1.5 rounded-full"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] mb-4">
            Let’s Create Your Personalised Recovery Plan
          </h2>

          {/* Subtitle Description */}
          <p className="text-[#556061] text-base md:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Ready to begin physiotherapy from home? Contact us to book a free
            assessment or learn more about how we can help.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="cursor-pointer w-full sm:w-auto bg-[#0F2D2A] hover:bg-[#163A35] text-white font-semibold text-base px-8 py-3.5 rounded-lg shadow-sm hover:shadow-md">
              Book an Assessment
            </button>
            <button className="cursor-pointer w-full sm:w-auto bg-transparent border-2 border-[#C68B45] text-[#C68B45] hover:bg-[#C68B45] hover:text-white font-semibold text-base px-8 py-3.5 rounded-lg shadow-sm hover:shadow-md">
              Request a Call Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
