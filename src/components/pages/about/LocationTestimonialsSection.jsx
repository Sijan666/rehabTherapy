import Button from "@/components/Button";
import Container from "@/components/Container";
import React from "react";
import TestimonialsSlider from "./TestimonialsSlider";

export default function LocationTestimonialsSection() {
  return (
    <section className="bg-white py-12 text-slate-700 md:py-16">
      <Container className="space-y-14 md:space-y-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
              AREAS WE COVER
            </h2>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm lg:w-85">
              Home based Neurological, elderly physiotherapy and rehabilitation
              across the UK.
            </p>
            <div className="pt-2">
              <Button
                className={
                  "rounded-md bg-[#00A499]! px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] active:scale-95"
                }
                children={" Find out More"}
              />
            </div>
          </div>
          <div className="flex justify-end md:col-span-7">
            <div className="w-full overflow-hidden rounded-md border border-slate-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2171.5524249815944!2d90.38014476097447!3d23.743766804136005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdhanmondi%20labaid%20hospital!5e0!3m2!1sen!2sbd!4v1787681693311!5m2!1sen!2sbd"
                className="h-100 w-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>
        <TestimonialsSlider />
      </Container>
    </section>
  );
}
