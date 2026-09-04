import React, { useState, useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
  PlayIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Button from "@/components/Button";

// Swiper React Components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priscilla Sinder",
    initial: "P",
    bgColor: "bg-[#0F2D2A]",
    date: "10 months ago",
    text: "My father is a patient of Rehab Therapist in Harrow. He has been a patient since August 2025. The sessions are great as they target my father's condition of Parkinson's Disease. The 121 care and attention was very important to the family. The team are extremely accommodating and my initial talk with Krishna was encouraging.",
  },
  {
    id: 2,
    name: "Lloyd Curtis",
    initial: "L",
    bgColor: "bg-[#C68B45]",
    date: "12 months ago",
    text: "This was a marvellous experience which has truly renewed my life. I am very grateful for the fantastic expertise and the good-natured way I was treated while still ensuring I did the hard work.",
  },
];

export default function TestimonialsSlider() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Video ID
  const youtubeVideoId = "XcAjmElPcZU";

  return (
    <div className="space-y-10 text-center font-sans">
      {/* Title Header */}
      <div className="mx-auto max-w-xl space-y-3">
        {/* Sub-header Badge & Accent Divider */}
        <div className="flex flex-col items-center mb-3">
          <span className="text-[#C68B45] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Patient Stories
          </span>
          <div className="w-10 h-0.5 bg-[#C68B45] mt-1.5 rounded-full"></div>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2D2A] sm:text-4xl">
          Testimonials
        </h2>
      </div>

      {/* Main Slider Box */}
      <div className="relative mx-auto max-w-3xl px-2 sm:px-6">
        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          type="button"
          className="cursor-pointer absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#EBEBEB] bg-white text-[#0F2D2A] shadow-sm hover:border-[#0F2D2A] hover:bg-[#0F2D2A] hover:text-white focus:outline-none"
          aria-label="Previous Testimonial"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <button
          ref={nextRef}
          type="button"
          className="cursor-pointer absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#EBEBEB] bg-white text-[#0F2D2A] shadow-sm hover:border-[#0F2D2A] hover:bg-[#0F2D2A] hover:text-white focus:outline-none"
          aria-label="Next Testimonial"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".custom-testimonial-pagination",
            bulletClass:
              "inline-block h-2 w-2 rounded-full bg-slate-300 cursor-pointer mx-1",
            bulletActiveClass: "!w-6 !bg-[#C68B45]",
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="py-2!"
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="mx-auto flex h-[340px] w-full select-none flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-[#EBEBEB] sm:h-80 sm:p-8">
                <div className="flex flex-col items-center space-y-3 text-center">
                  {/* Avatar Profile */}
                  <div className="relative">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white shadow-xs ${item.bgColor}`}
                    >
                      {item.initial}
                    </div>
                    <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-xs border border-[#EBEBEB]">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
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

                  {/* Reviewer Details */}
                  <div>
                    <h3 className="text-base font-bold text-[#0F2D2A]">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium text-[#556061]">
                      {item.date}
                    </p>
                  </div>

                  {/* 5-Star Icons */}
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>

                {/* Feedback Text Container */}
                <div className="my-auto overflow-y-auto px-2">
                  <p className="text-xs leading-relaxed text-[#556061] sm:text-sm sm:leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-testimonial-pagination mt-4 flex items-center justify-center" />
      </div>

      {/* Google Rating Counter */}
      <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-medium text-[#556061] shadow-xs border border-[#EBEBEB] sm:text-sm">
        <span>Google rating score:</span>
        <span className="font-bold text-[#0F2D2A]">5.0 of 5</span>
        <span className="text-slate-300">•</span>
        <span className="font-semibold text-[#556061]">20 reviews</span>
      </div>

      {/* Interactive Video Box */}
      <div className="mx-auto max-w-xl overflow-hidden rounded-2xl bg-[#0F2D2A] shadow-sm border border-[#EBEBEB]">
        <div className="relative h-60 w-full sm:h-72">
          {!isVideoPlaying ? (
            /* Video Overlay Preview */
            <div
              onClick={() => setIsVideoPlaying(true)}
              className="group relative h-full w-full cursor-pointer overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80"
                alt="Video testimonial preview"
                className="h-full w-full object-cover opacity-40"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0F2D2A]/60 p-6 text-center backdrop-blur-[2px] group-hover:bg-[#0F2D2A]/40">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md group-hover:bg-[#C68B45]">
                  <PlayIcon className="ml-1 h-7 w-7 text-white" />
                </div>
                <p className="max-w-xs text-xs font-semibold text-white sm:text-sm">
                  Click to play video testimonial
                </p>
              </div>
            </div>
          ) : (
            /* Embedded Player Screen */
            <div className="relative h-full w-full">
              <iframe
                className="h-full w-full border-0"
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title="Patient Video Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="cursor-pointer absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#0F2D2A]/90 text-white backdrop-blur-md hover:bg-[#0F2D2A]"
                aria-label="Close video"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <Button className="cursor-pointer rounded-lg bg-[#0F2D2A] px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#163A35] border border-white/20">
          View more reviews
        </Button>
      </div>
    </div>
  );
}

// import React, { useState, useRef } from "react";
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   StarIcon,
//   PlayIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/solid";
// import Button from "@/components/Button";

// // Swiper React Components & Modules
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// // Swiper Styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: "Priscilla Sinder",
//     initial: "P",
//     bgColor: "bg-emerald-600",
//     date: "10 months ago",
//     text: "My father is a patient of Rehab Therapist in Harrow. He has been a patient since August 2025. The sessions are great as they target my father's condition of Parkinson's Disease. The 121 care and attention was very important to the family. The team are extremely accommodating and my initial talk with Krishna was encouraging.",
//   },
//   {
//     id: 2,
//     name: "Lloyd Curtis",
//     initial: "L",
//     bgColor: "bg-pink-600",
//     date: "12 months ago",
//     text: "This was a marvellous experience which has truly renewed my life. I am very grateful for the fantastic expertise and the good-natured way I was treated while still ensuring I did the hard work.",
//   },
// ];

// export default function TestimonialsSlider() {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   //  Video ID
//   const youtubeVideoId = "XcAjmElPcZU";

//   return (
//     <div className="space-y-10 text-center">
//       {/* Title Header */}
//       <div className="mx-auto max-w-xl space-y-3">
//         <span className="inline-block rounded-full bg-teal-100/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00746F]">
//           Patient Stories
//         </span>
//         <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
//           TESTIMONIALS
//         </h2>
//       </div>

//       {/* Main Slider Box */}
//       <div className="relative mx-auto max-w-3xl px-2 sm:px-6">
//         {/* Navigation Buttons */}
//         <button
//           ref={prevRef}
//           type="button"
//           className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10 transition-all duration-200 hover:scale-110 hover:bg-slate-50 active:scale-95 focus:outline-none"
//           aria-label="Previous Testimonial"
//         >
//           <ChevronLeftIcon className="h-5 w-5 text-slate-700" />
//         </button>

//         <button
//           ref={nextRef}
//           type="button"
//           className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md ring-1 ring-slate-900/10 transition-all duration-200 hover:scale-110 hover:bg-slate-50 active:scale-95 focus:outline-none"
//           aria-label="Next Testimonial"
//         >
//           <ChevronRightIcon className="h-5 w-5 text-slate-700" />
//         </button>

//         {/* Swiper Container */}
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           pagination={{
//             clickable: true,
//             el: ".custom-testimonial-pagination",
//             bulletClass:
//               "inline-block h-2 w-2 rounded-full bg-slate-300 transition-all duration-300 cursor-pointer mx-1",
//             bulletActiveClass: "!w-6 !bg-[#00A499]",
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//           }}
//           className="!py-2"
//         >
//           {TESTIMONIALS.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div className="mx-auto flex h-[340px] w-full select-none flex-col justify-between rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 sm:h-[320px] sm:p-8">
//                 <div className="flex flex-col items-center space-y-3 text-center">
//                   {/* Avatar Profile */}
//                   <div className="relative">
//                     <div
//                       className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white shadow-md ${item.bgColor}`}
//                     >
//                       {item.initial}
//                     </div>
//                     <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-100">
//                       <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
//                         <path
//                           fill="#4285F4"
//                           d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                         />
//                         <path
//                           fill="#34A853"
//                           d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                         />
//                         <path
//                           fill="#FBBC05"
//                           d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
//                         />
//                         <path
//                           fill="#EA4335"
//                           d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
//                         />
//                       </svg>
//                     </div>
//                   </div>

//                   {/* Reviewer Details */}
//                   <div>
//                     <h3 className="text-base font-bold text-slate-900">
//                       {item.name}
//                     </h3>
//                     <p className="text-xs font-medium text-slate-400">
//                       {item.date}
//                     </p>
//                   </div>

//                   {/* 5-Star Icons */}
//                   <div className="flex items-center space-x-1 text-amber-400">
//                     {[...Array(5)].map((_, i) => (
//                       <StarIcon key={i} className="h-4 w-4" />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Feedback Text Container */}
//                 <div className="my-auto overflow-y-auto px-2">
//                   <p className="text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-relaxed">
//                     "{item.text}"
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Pagination Dots */}
//         <div className="custom-testimonial-pagination mt-4 flex items-center justify-center" />
//       </div>

//       {/* Google Rating Counter */}
//       <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-900/5 sm:text-sm">
//         <span>Google rating score:</span>
//         <span className="font-bold text-slate-900">5.0 of 5</span>
//         <span className="text-slate-300">•</span>
//         <span className="font-semibold text-slate-700">20 reviews</span>
//       </div>

//       {/* Interactive Video Box */}
//       <div className="mx-auto max-w-xl overflow-hidden rounded-3xl bg-slate-900 shadow-xl ring-1 ring-slate-900/10">
//         <div className="relative h-60 w-full sm:h-72">
//           {!isVideoPlaying ? (
//             /* Video Overlay Preview */
//             <div
//               onClick={() => setIsVideoPlaying(true)}
//               className="group relative h-full w-full cursor-pointer overflow-hidden"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80"
//                 alt="Video testimonial preview"
//                 className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/40 p-6 text-center backdrop-blur-[2px] transition-colors duration-300 group-hover:bg-slate-950/30">
//                 <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00A499]">
//                   <PlayIcon className="ml-1 h-7 w-7 text-white" />
//                 </div>
//                 <p className="max-w-xs text-xs font-semibold text-white/90 sm:text-sm">
//                   Click to play video testimonial
//                 </p>
//               </div>
//             </div>
//           ) : (
//             /* Embedded Player Screen */
//             <div className="relative h-full w-full">
//               <iframe
//                 className="h-full w-full border-0"
//                 src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
//                 title="Patient Video Testimonial"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//               <button
//                 onClick={() => setIsVideoPlaying(false)}
//                 className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur-md transition hover:bg-slate-900"
//                 aria-label="Close video"
//               >
//                 <XMarkIcon className="h-5 w-5" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Action Button */}
//       <div className="pt-2">
//         <Button className="rounded-full !bg-[#00A499] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:!bg-[#00746F] active:scale-95">
//           View more reviews
//         </Button>
//       </div>
//     </div>
//   );
// }
