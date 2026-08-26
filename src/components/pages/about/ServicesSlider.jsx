import React, { useState, useCallback, useMemo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import sliderOne from "../../../assets/sliderOne.jpg";
import sliderTwo from "../../../assets/sliderTwo.jpg";
import sliderThree from "../../../assets/sliderThree.jpg";
import sliderFour from "../../../assets/sliderFour.jpg";
import sliderFive from "../../../assets/sliderFive.jpg";
import sliderSix from "../../../assets/sliderSix.jpg";

const CARDS = [
  { id: 1, title: "Home Visits", image: sliderOne },
  { id: 2, title: "Neurological Physiotherapy ", image: sliderTwo },
  { id: 3, title: "Intensive Rehabilitation", image: sliderThree },
  { id: 4, title: "Case Managers", image: sliderFour },
  { id: 5, title: "Elderly Physiotherapy", image: sliderFive },
  { id: 6, title: "Post-Operative Physiotherapy", image: sliderSix },
];

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? CARDS.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === CARDS.length - 1 ? 0 : prev + 1));
  }, []);

  const visibleCards = useMemo(() => {
    return [
      CARDS[currentIndex],
      CARDS[(currentIndex + 1) % CARDS.length],
      CARDS[(currentIndex + 2) % CARDS.length],
    ];
  }, [currentIndex]);

  return (
    <div className="relative mt-8 flex items-center justify-center">
      <button
        onClick={handlePrev}
        type="button"
        className="absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/20 text-teal-700 transition hover:bg-teal-500/40 focus:outline-none focus:ring-2 focus:ring-[#00A499] sm:h-10 sm:w-10"
        aria-label="Previous Slide"
      >
        <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div className="grid w-full grid-cols-1 gap-4 px-10 sm:grid-cols-3 sm:px-12">
        {visibleCards.map((card, idx) => (
          <div
            key={`card-${card.id}-${idx}`}
            className="group relative overflow-hidden rounded-md border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[#00746F]/90 px-3 py-3 text-center backdrop-blur-xs">
              <span className="text-xs font-semibold text-white sm:text-sm">
                {card.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        type="button"
        className="absolute right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/20 text-teal-700 transition hover:bg-teal-500/40 focus:outline-none focus:ring-2 focus:ring-[#00A499] sm:h-10 sm:w-10"
        aria-label="Next Slide"
      >
        <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
    </div>
  );
}
