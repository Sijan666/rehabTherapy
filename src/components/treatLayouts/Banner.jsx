import React from "react";

const Banner = () => {
  return (
    <section className="relative min-h-[550px] bg-gradient-to-br from-[#0F2D2A] via-[#163A35] to-[#0F2D2A] overflow-hidden flex items-center px-6 lg:px-16 py-20">
      {/* Background Overlay & Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000"
          alt="Physiotherapist assisting senior patient at home"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D2A] via-[#0F2D2A]/95 to-[#163A35]/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-4">
          {/* Eyebrow Label with Amber Gold Accent Line */}
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#C68B45]">
            <span className="w-8 h-[2px] bg-[#C68B45]" />
            <span>Clinical Director Approved</span>
          </div>

          {/* Heading - Pure White Serif */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-[1.15] tracking-tight max-w-2xl">
            Conditions We Treat With Home-Based Physiotherapy
          </h1>

          {/* Subtext - Soft Teal White for High Readability */}
          <p className="text-[#B0C4C1] text-base sm:text-lg font-sans font-light leading-relaxed max-w-xl pt-1 pb-2">
            Specialists in Stroke, neuro, and elderly physiotherapy — restoring
            mobility at your home.
          </p>

          {/* Key Stat Counters with Amber Accent */}
          <div className="flex items-center gap-8 py-2">
            <div>
              <div className="font-serif text-3xl font-bold text-[#C68B45]">
                25+
              </div>
              <div className="text-[#B0C4C1] text-xs uppercase tracking-wider mt-0.5">
                Years Experience
              </div>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div>
              <div className="font-serif text-3xl font-bold text-[#C68B45]">
                UK
              </div>
              <div className="text-[#B0C4C1] text-xs uppercase tracking-wider mt-0.5">
                Wide Coverage
              </div>
            </div>
          </div>

          {/* Primary CTA - High Contrast Pure White Pill Button */}
          <div className="pt-3">
            <button className="inline-flex items-center justify-center bg-white hover:bg-white/90 text-[#0F2D2A] font-sans text-xs sm:text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#C68B45]">
              Discover More
            </button>
          </div>
        </div>

        {/* Right Image Frame with Premium Border */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#163A35]">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000"
              alt="Physiotherapist assisting senior patient"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Gradient Rim */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
