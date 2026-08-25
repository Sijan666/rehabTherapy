const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#033434] via-[#006A6B] to-[#0D9488] text-white py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-6 z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase tracking-tight leading-tight text-white font-sans">
            Conditions We Treat With Home-Based Physiotherapy
          </h2>

          <p className="text-lg md:text-xl text-teal-100 font-light max-w-xl leading-relaxed">
            Specialists in Stroke, neuro, and elderly physiotherapy — restoring
            mobility at your home.
          </p>

          <div className="pt-4">
            <button className="bg-[#00A896] hover:bg-[#028090] text-white text-base md:text-lg font-semibold px-8 py-3.5 rounded-md shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-teal-300/40">
              Book Free Consultation
            </button>
          </div>
        </div>

        {/* Right Image Column with Custom House Cutout (Clip-Path) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md md:max-w-lg aspect-4/3 drop-shadow-2xl">
            {/* House-shaped clipping mask container */}
            <div
              className="w-full h-full bg-white overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 30%)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000"
                alt="Physiotherapist assisting senior patient at home"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Subtle Accent Glow / Outer Line behind the house shape */}
            <div
              className="absolute -inset-1 bg-white/10 -z-10 rounded-lg blur-sm"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 30%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
