import React, { useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

// Swiper React Components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import sliderOne from "../../../assets/sliderOne.jpg";
import sliderTwo from "../../../assets/sliderTwo.jpg";
import sliderThree from "../../../assets/sliderThree.jpg";
import sliderFour from "../../../assets/sliderFour.jpg";
import sliderFive from "../../../assets/sliderFive.jpg";
import sliderSix from "../../../assets/sliderSix.jpg";

const CARDS = [
  {
    id: 1,
    title: "Home Visits",
    image: sliderOne,
    desc: "Personalized therapy services delivered directly in the comfort and safety of your home.",
  },
  {
    id: 2,
    title: "Neurological Physiotherapy",
    image: sliderTwo,
    desc: "Specialized rehabilitation protocols for stroke, Parkinson's, and complex spinal injuries.",
  },
  {
    id: 3,
    title: "Intensive Rehabilitation",
    image: sliderThree,
    desc: "Goal-oriented, high-frequency recovery programs tailored to fast-track mobility restore.",
  },
  {
    id: 4,
    title: "Case Managers",
    image: sliderFour,
    desc: "Collaborative clinical care plans coordinated with medical specialists and families.",
  },
  {
    id: 5,
    title: "Elderly Physiotherapy",
    image: sliderFive,
    desc: "Mobility restoration, proactive fall prevention, and strength maintenance for seniors.",
  },
  {
    id: 6,
    title: "Post-Operative Physiotherapy",
    image: sliderSix,
    desc: "Targeted rehab protocols ensuring safe and complete recovery after surgical procedures.",
  },
];

export default function ServicesSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-12 select-none sm:px-6 lg:px-8 font-sans">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-[#F2F4F4]/30" />

      {/* Main Slider */}
      <div className="relative">
        {/* Buttons */}
        <button
          ref={prevRef}
          type="button"
          aria-label="Previous Slide"
          className="cursor-pointer absolute -left-3 top-1/2 z-25 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#EBEBEB] bg-white text-[#0F2D2A] shadow-sm hover:border-[#0F2D2A] hover:bg-[#0F2D2A] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0F2D2A] focus:ring-offset-2 sm:-left-5 sm:h-12 sm:w-12"
        >
          <ChevronLeftIcon className="h-5 w-5 stroke-[2.5]" />
        </button>

        <button
          ref={nextRef}
          type="button"
          aria-label="Next Slide"
          className="cursor-pointer absolute -right-3 top-1/2 z-25 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#EBEBEB] bg-white text-[#0F2D2A] shadow-sm hover:border-[#0F2D2A] hover:bg-[#0F2D2A] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0F2D2A] focus:ring-offset-2 sm:-right-5 sm:h-12 sm:w-12"
        >
          <ChevronRightIcon className="h-5 w-5 stroke-[2.5]" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
            bulletClass:
              "inline-block h-2.5 w-2.5 rounded-full bg-slate-300 cursor-pointer mx-1",
            bulletActiveClass: "!w-8 !bg-[#C68B45]",
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="!py-4 overflow-visible"
        >
          {CARDS.map((card) => (
            <SwiperSlide key={card.id} className="h-auto">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#EBEBEB] bg-white shadow-sm hover:border-[#C68B45]/40 hover:shadow-md">
                {/* Image Banner Section */}
                <div className="relative h-56 w-full overflow-hidden bg-[#F2F4F4] sm:h-64">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D2A]/80 via-[#0F2D2A]/20 to-transparent opacity-60" />

                  {/* ID Counter Badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#C68B45] shadow-xs backdrop-blur-md border border-[#EBEBEB]">
                    0{card.id}
                  </span>
                </div>

                {/* Card Body Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#0F2D2A] group-hover:text-[#C68B45]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#556061] line-clamp-3">
                      {card.desc}
                    </p>
                  </div>

                  {/* Interactive Action CTA */}
                  <div className="mt-6 border-t border-[#EBEBEB] pt-4">
                    <span className="inline-flex items-center text-sm font-semibold text-[#0F2D2A] group-hover:text-[#C68B45]">
                      Book Consultation
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Pagination Dots */}
      <div className="custom-swiper-pagination mt-8 flex items-center justify-center" />
    </section>
  );
}

// import React, { useRef } from "react";
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   ArrowRightIcon,
// } from "@heroicons/react/24/outline";

// // Swiper React Components & Modules
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// // Swiper Styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import sliderOne from "../../../assets/sliderOne.jpg";
// import sliderTwo from "../../../assets/sliderTwo.jpg";
// import sliderThree from "../../../assets/sliderThree.jpg";
// import sliderFour from "../../../assets/sliderFour.jpg";
// import sliderFive from "../../../assets/sliderFive.jpg";
// import sliderSix from "../../../assets/sliderSix.jpg";

// const CARDS = [
//   {
//     id: 1,
//     title: "Home Visits",
//     image: sliderOne,
//     desc: "Personalized therapy services delivered directly in the comfort and safety of your home.",
//   },
//   {
//     id: 2,
//     title: "Neurological Physiotherapy",
//     image: sliderTwo,
//     desc: "Specialized rehabilitation protocols for stroke, Parkinson's, and complex spinal injuries.",
//   },
//   {
//     id: 3,
//     title: "Intensive Rehabilitation",
//     image: sliderThree,
//     desc: "Goal-oriented, high-frequency recovery programs tailored to fast-track mobility restore.",
//   },
//   {
//     id: 4,
//     title: "Case Managers",
//     image: sliderFour,
//     desc: "Collaborative clinical care plans coordinated with medical specialists and families.",
//   },
//   {
//     id: 5,
//     title: "Elderly Physiotherapy",
//     image: sliderFive,
//     desc: "Mobility restoration, proactive fall prevention, and strength maintenance for seniors.",
//   },
//   {
//     id: 6,
//     title: "Post-Operative Physiotherapy",
//     image: sliderSix,
//     desc: "Targeted rehab protocols ensuring safe and complete recovery after surgical procedures.",
//   },
// ];

// export default function ServicesSlider() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <section className="relative mx-auto w-full max-w-7xl px-4 py-12 select-none sm:px-6 lg:px-8">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-teal-50/40 via-transparent to-slate-50/50" />

//       {/* Main Slider  */}
//       <div className="relative">
//         {/* Buttons */}
//         <button
//           ref={prevRef}
//           type="button"
//           aria-label="Previous Slide"
//           className="absolute -left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white text-[#00746F] shadow-md transition-all duration-300 hover:scale-110 hover:border-[#00746F] hover:bg-[#00746F] hover:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00746F] focus:ring-offset-2 sm:-left-5 sm:h-12 sm:w-12"
//         >
//           <ChevronLeftIcon className="h-5 w-5 stroke-[2.5]" />
//         </button>

//         <button
//           ref={nextRef}
//           type="button"
//           aria-label="Next Slide"
//           className="absolute -right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white text-[#00746F] shadow-md transition-all duration-300 hover:scale-110 hover:border-[#00746F] hover:bg-[#00746F] hover:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00746F] focus:ring-offset-2 sm:-right-5 sm:h-12 sm:w-12"
//         >
//           <ChevronRightIcon className="h-5 w-5 stroke-[2.5]" />
//         </button>

//         {/* Swiper */}
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={24}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           pagination={{
//             clickable: true,
//             el: ".custom-swiper-pagination",
//             bulletClass:
//               "inline-block h-2.5 w-2.5 rounded-full bg-slate-300 transition-all duration-300 cursor-pointer mx-1",
//             bulletActiveClass: "!w-8 !bg-[#00746F]",
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 24,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 32,
//             },
//           }}
//           className="!py-4"
//         >
//           {CARDS.map((card) => (
//             <SwiperSlide key={card.id} className="h-auto">
//               <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl">
//                 {/* Image Banner Section */}
//                 <div className="relative h-56 w-full overflow-hidden bg-slate-100 sm:h-64">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                     loading="lazy"
//                   />

//                   {/* Gradient  */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

//                   {/* ID Counter Badge */}
//                   <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#00746F] shadow-sm backdrop-blur-md">
//                     0{card.id}
//                   </span>
//                 </div>

//                 {/* Card Body Content */}
//                 <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
//                   <div>
//                     <h3 className="text-xl font-bold tracking-tight text-slate-800 transition-colors duration-200 group-hover:text-[#00746F]">
//                       {card.title}
//                     </h3>
//                     <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
//                       {card.desc}
//                     </p>
//                   </div>

//                   {/* Interactive Action CTA */}
//                   <div className="mt-6 border-t border-slate-100 pt-4">
//                     <span className="inline-flex items-center text-sm font-semibold text-[#00746F] transition-colors duration-200 group-hover:text-teal-700">
//                       Book Consultation
//                       <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Custom Swiper Pagination Dots */}
//       <div className="custom-swiper-pagination mt-8 flex items-center justify-center" />
//     </section>
//   );
// }
