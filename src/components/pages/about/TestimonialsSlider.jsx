import React, { useState, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priscilla Sinder",
    initial: "P",
    bgColor: "bg-green-800",
    date: "10 months ago",
    text: "My father is a patient of Rehab Therapist in Harrow. He has been a patient since August 2025. The sessions are great as they target my father's condition of Parkinson's Disease. The 121 care and attention was very important to the family. The team are extremely accommodating and my initial talk with Krishna was encouraging....",
  },
  {
    id: 2,
    name: "Lloyd Curtis",
    initial: "L",
    bgColor: "bg-pink-700",
    date: "12 months ago",
    text: "This was a marvellous experience which has truly renewed my life. I am very grateful for the fantastic expertise and the good-natured way I was treated while still ensuring I did the hard work.",
  },
];

export default function TestimonialsSlider() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleTestimonialPrev = useCallback(() => {
    setTestimonialIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  }, []);

  const handleTestimonialNext = useCallback(() => {
    setTestimonialIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1,
    );
  }, []);

  const currentTestimonial = TESTIMONIALS[testimonialIndex];

  return (
    <div className="space-y-8 text-center">
      <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
        TESTIMONIALS
      </h2>

      <div className="relative mx-auto flex max-w-3xl items-center justify-center px-4 sm:px-0">
        <button
          onClick={handleTestimonialPrev}
          type="button"
          className="absolute -left-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#00A499] sm:-left-6 sm:h-10 sm:w-10"
          aria-label="Previous Testimonial"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <div className="w-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="relative">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white ${currentTestimonial.bgColor}`}
              >
                {currentTestimonial.initial}
              </div>
              <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-xs">
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
            </div>

            <div className="text-sm font-bold text-slate-800">
              {currentTestimonial.name}
            </div>
            <div className="text-xs text-slate-400">
              {currentTestimonial.date}
            </div>

            <div className="flex items-center space-x-1 py-1 text-amber-400">
              {"★".repeat(5)}
              <svg
                className="ml-1 h-4 w-4 fill-blue-500 text-blue-500"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>

            <p className="max-w-xl px-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              "{currentTestimonial.text}"
            </p>
            <button
              type="button"
              className="text-xs font-medium text-slate-400 hover:text-slate-600 hover:underline focus:outline-none"
            >
              Read more
            </button>
          </div>
        </div>

        <button
          onClick={handleTestimonialNext}
          type="button"
          className="absolute -right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#00A499] sm:-right-6 sm:h-10 sm:w-10"
          aria-label="Next Testimonial"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="text-xs text-slate-500">
        <span className="font-semibold text-slate-700">Google</span> rating
        score: <span className="font-semibold text-slate-700">5.0 of 5</span>,
        based on{" "}
        <span className="font-semibold text-slate-700">20 reviews</span>.
      </div>

      <div className="mx-auto max-w-lg overflow-hidden rounded-md border border-slate-200 shadow-sm">
        <div className="relative flex h-56 w-full items-center justify-center bg-slate-800">
          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80"
            alt="Video thumbnail"
            className="h-full w-full object-cover opacity-60"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4 text-center">
            <p className="max-w-xs text-xs font-medium text-white sm:text-sm">
              Click to accept marketing cookies and enable this content
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <Button
          className={
            "rounded-md !bg-[#00A499] px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] active:scale-95"
          }
          children={"View more reviews"}
        />
      </div>
    </div>
  );
}
