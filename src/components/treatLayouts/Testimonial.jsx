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
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Sub-header Badge & Accent Divider */}
        <div className="flex flex-col items-center mb-3">
          <span className="text-[#C68B45] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Real Stories
          </span>
          <div className="w-10 h-0.5 bg-[#C68B45] mt-1.5 rounded-full"></div>
        </div>

        {/* Section Header Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] mb-14">
          Testimonials
        </h2>

        {/* Carousel / Content Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Text Testimonial Card */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Avatar Circle */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#EBEBEB] p-1 shadow-sm mb-4 bg-white">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* 5-Star Rating */}
            <div className="flex items-center gap-1 text-[#C68B45] mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* User Info */}
            <h3 className="text-sm font-bold text-[#0F2D2A] uppercase tracking-wide mb-4">
              {current.name} –{" "}
              <span className="text-[#C68B45]">{current.tagline}</span>
            </h3>

            {/* Testimonial Quote Box with Navigation Controls */}
            <div className="relative w-full bg-white rounded-2xl p-6 md:p-8 shadow-sm text-center border border-[#EBEBEB]">
              {/* Left Navigation Arrow */}
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="absolute -left-3 top-1/2 -translate-y-1/2 bg-[#F2F4F4] hover:bg-[#0F2D2A] text-[#0F2D2A] hover:text-white p-2.5 rounded-full transition-all duration-300 shadow-sm border border-[#EBEBEB] focus:outline-none"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Quote Content */}
              <Quote className="w-8 h-8 text-[#C68B45] rotate-180 mb-2 inline-block opacity-60" />
              <p className="text-[#556061] text-sm md:text-base italic font-normal leading-relaxed max-w-md mx-auto">
                "{current.text}"
              </p>

              {/* Right Navigation Arrow */}
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="absolute -right-3 top-1/2 -translate-y-1/2 bg-[#F2F4F4] hover:bg-[#0F2D2A] text-[#0F2D2A] hover:text-white p-2.5 rounded-full transition-all duration-300 shadow-sm border border-[#EBEBEB] focus:outline-none"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-[#C68B45]"
                      : "w-2 bg-[#EBEBEB]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Video Review Box */}
          <div className="lg:col-span-6 w-full h-full min-h-[280px] md:min-h-[360px] relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-[#EBEBEB]">
            <img
              src={current.videoThumbnail}
              alt="Video Testimonial Thumbnail"
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#0F2D2A]/30 group-hover:bg-[#0F2D2A]/20 transition-colors flex flex-col items-center justify-center p-6 text-center">
              <div className="bg-white/95 backdrop-blur-md border border-[#EBEBEB] text-[#0F2D2A] px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium shadow-md max-w-xs flex items-center gap-3 group-hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-full bg-[#C68B45] flex items-center justify-center text-white shrink-0">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span className="text-left font-medium">
                  Click to accept marketing cookies and enable this content
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14">
          <button className="border-2 border-[#0F2D2A] text-[#0F2D2A] hover:bg-[#0F2D2A] hover:text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md active:scale-95">
            View More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
