import Button from "@/components/Button";
import Container from "@/components/Container";
import React from "react";
import TestimonialsSlider from "./TestimonialsSlider";
import { MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function LocationTestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50/60 py-16 text-slate-700 md:py-24">
      {/* Background*/}
      <div className="pointer-events-none absolute top-1/3 left-0 -z-10 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />

      <Container className="space-y-16 md:space-y-24">
        {/* Areas Cover Section */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 lg:gap-14">
          {/* Left Text Box */}
          <div className="space-y-6 md:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00746F] ring-1 ring-teal-500/20">
              <MapPinIcon className="h-4 w-4 text-[#00A499]" />
              <span>Coverage & Reach</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              AREAS WE COVER
            </h2>

            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Providing home-based Neurological, elderly physiotherapy, and
              comprehensive rehabilitation services right across the UK.
            </p>

            <div className="pt-2">
              <Button className="group inline-flex items-center gap-2 rounded-full !bg-[#00A499] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:!bg-[#00746F] active:scale-95">
                <span>Find out More</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Map Container */}
          <div className="md:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-white p-2.5 shadow-xl ring-1 ring-slate-900/5">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-2xl bg-slate-100">
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

        {/* Testimonials  */}
        <TestimonialsSlider />
      </Container>
    </section>
  );
}
