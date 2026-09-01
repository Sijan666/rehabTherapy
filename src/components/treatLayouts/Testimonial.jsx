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
      text: "I was very unsteady on my feet after a fall and felt nervous going out. The therapist from Rehab Therapist visited me weekly in Fairford Leys, gave me exercises, and helped me practise safe walking around the house. It's made such a difference.",
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
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-[#F8F7F2] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Sub-header Badge */}
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="h-[1px] w-8 bg-[#C68B45]"></span>
          <span className="text-[#C68B45] uppercase tracking-widest text-xs font-semibold">
            Real Stories
          </span>
          <span className="h-[1px] w-8 bg-[#C68B45]"></span>
        </div>

        {/* Section Header Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] uppercase tracking-wide mb-12">
          TESTIMONIALS
        </h2>

        {/* Carousel / Content Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Text Testimonial Card */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Avatar Circle */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0F2D2A]/10 shadow-md mb-4 bg-white p-1">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* 5-Star Rating */}
            <div className="flex items-center gap-1 text-[#C68B45] mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* User Info */}
            <h3 className="text-base font-bold text-[#0F2D2A] uppercase tracking-wide mb-4">
              {current.name} –{" "}
              <span className="text-[#C68B45]">{current.tagline}</span>
            </h3>

            {/* Testimonial Quote Box with Navigation Controls */}
            <div className="relative w-full bg-white rounded-xl p-6 md:p-8 shadow-sm text-center border border-[#0F2D2A]/5">
              {/* Left Navigation Arrow */}
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="absolute -left-3 top-1/2 -translate-y-1/2 bg-[#0F2D2A] hover:bg-[#C68B45] text-white p-2 rounded-full transition-all duration-200 shadow-md focus:outline-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Quote Content */}
              <Quote className="w-8 h-8 text-[#C68B45] rotate-180 mb-2 inline-block opacity-70" />
              <p className="text-[#556061] text-sm md:text-base italic font-normal leading-relaxed max-w-md mx-auto">
                "{current.text}"
              </p>

              {/* Right Navigation Arrow */}
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="absolute -right-3 top-1/2 -translate-y-1/2 bg-[#0F2D2A] hover:bg-[#C68B45] text-white p-2 rounded-full transition-all duration-200 shadow-md focus:outline-none"
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
                      ? "w-6 bg-[#C68B45]"
                      : "w-2.5 bg-[#0F2D2A]/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Video Review Box */}
          <div className="lg:col-span-6 w-full h-full min-h-[280px] md:min-h-[340px] relative rounded-xl overflow-hidden shadow-md group cursor-pointer border border-[#0F2D2A]/10">
            <img
              src={current.videoThumbnail}
              alt="Video Testimonial Thumbnail"
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#0F2D2A]/40 group-hover:bg-[#0F2D2A]/30 transition-colors flex flex-col items-center justify-center p-6 text-center">
              <div className="bg-[#0F2D2A]/90 backdrop-blur-md border border-[#C68B45]/30 text-white px-5 py-3 rounded-lg text-xs sm:text-sm font-medium shadow-lg max-w-xs flex items-center gap-3 group-hover:scale-105 transition-transform">
                <Play className="w-5 h-5 text-[#C68B45] fill-current flex-shrink-0" />
                <span>
                  Click to accept marketing cookies and enable this content
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12">
          <button className="bg-[#0F2D2A] hover:bg-[#112926] text-[#F8F7F2] font-semibold text-base md:text-lg px-8 py-3.5 rounded transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 border border-[#C68B45]/30 focus:outline-none">
            View more reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;