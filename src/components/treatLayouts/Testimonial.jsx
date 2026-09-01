import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Play } from "lucide-react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "JAMES R",
      tagline: "FALL INJURY SURVIVOR",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
      text: "I was very unsteady on my feet after a fall and felt nervous going out. The therapist from Rehab Therapist visited me weekly in Fairford Leys, gave me exercises, and helped me practise safe walking around the house. It's made such a difference",
      videoThumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "SARAH M",
      tagline: "STROKE RECOVERY PATIENT",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&auto=format&fit=crop",
      text: "The home visits saved me so much stress and energy. My mobility improved significantly within just six weeks of structured physiotherapy care.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const current = testimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="bg-[#EBF2F4] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A202C] uppercase tracking-wider mb-12">
          TESTIMONIALS
        </h2>

        {/* Carousel / Content Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Text Testimonial Card */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Avatar Circle */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 bg-teal-100 flex items-center justify-center">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 5-Star Rating */}
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* User Info */}
            <h3 className="text-base font-bold text-[#1A202C] uppercase tracking-wide mb-4">
              {current.name} – {current.tagline}
            </h3>

            {/* Testimonial Quote Box with Navigation Controls */}
            <div className="relative w-full bg-white rounded-lg p-6 md:p-8 shadow-sm text-center">
              {/* Left Navigation Arrow */}
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="absolute -left-3 top-1/2 -translate-y-1/2 bg-[#008A90] hover:bg-[#006E73] text-white p-1.5 rounded transition-all duration-200 shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Quote Content */}
              <Quote className="w-7 h-7 text-[#008A90] rotate-180 mb-2 inline-block opacity-80" />
              <p className="text-[#4A5568] text-sm md:text-base italic font-medium leading-relaxed max-w-md mx-auto">
                "{current.text}"
              </p>

              {/* Right Navigation Arrow */}
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="absolute -right-3 top-1/2 -translate-y-1/2 bg-[#008A90] hover:bg-[#006E73] text-white p-1.5 rounded transition-all duration-200 shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-[#008A90]"
                      : "w-2.5 bg-[#008A90]/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Video Review Box */}
          <div className="lg:col-span-6 w-full h-full min-h-[280px] md:min-h-[340px] relative rounded-lg overflow-hidden shadow-md group cursor-pointer bg-black/80">
            <img
              src={current.videoThumbnail}
              alt="Video Testimonial Thumbnail"
              className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
              <div className="bg-[#1A202C]/80 backdrop-blur-sm border border-white/20 text-white px-5 py-3 rounded-md text-xs sm:text-sm font-medium shadow-lg max-w-xs mb-4 flex items-center gap-3">
                <Play className="w-5 h-5 text-[#008A90] fill-current flex-shrink-0" />
                <span>
                  Click to accept marketing cookies and enable this content
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12">
          <button className="bg-[#008A90] hover:bg-[#006E73] text-white font-semibold text-base md:text-lg px-8 py-3.5 rounded transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#008A90]/30">
            View more reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
