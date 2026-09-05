import Button from "@/components/Button";
import Container from "@/components/Container";
import React from "react";
import TestimonialsSlider from "./TestimonialsSlider";
import { MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function LocationTestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#556061] font-sans md:py-24">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute top-1/3 left-0 -z-10 h-96 w-96 rounded-full bg-[#0F2D2A]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-96 w-96 rounded-full bg-[#C68B45]/5 blur-3xl" />
      <Container className="space-y-16 md:space-y-24">
        {/* Areas Cover Section */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 lg:gap-14">
          {/* Left Text Box */}
          <div className="space-y-6 md:col-span-5">
            {/* Sub-header Badge & Accent Divider */}
            <div className="flex flex-col items-start mb-3">
              <span className="text-[#C68B45] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                Coverage & Reach
              </span>
              <div className="w-10 h-0.5 bg-[#C68B45] mt-1.5 rounded-full"></div>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2D2A] sm:text-4xl">
              Areas We Cover
            </h2>
            <p className="text-base leading-relaxed text-[#556061] sm:text-lg">
              Providing home-based Neurological, elderly physiotherapy, and
              comprehensive rehabilitation services right across the UK.
            </p>
            <div className="pt-2">
              <Button className="group inline-flex items-center gap-2 rounded-lg bg-[#0F2D2A] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#163A35] active:scale-95">
                <span>Find out More</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          {/* Right Map Container */}
          <div className="md:col-span-7">
            <div className="relative overflow-hidden rounded-2xl bg-white p-2.5 shadow-sm border border-[#EBEBEB]">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-xl bg-[#F2F4F4]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2171.5524249815944!2d90.38014476097447!3d23.743766804136005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdhanmondi%20labaid%20hospital!5e0!3m2!1sen!2sbd!4v1787681693311!5m2!1sen!2sbd"
                  className="h-full w-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Service Coverage Area Map"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <TestimonialsSlider />
      </Container>
    </section>
  );
}