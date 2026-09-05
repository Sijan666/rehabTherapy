import React from "react";
import aboutBanner from "../../../assets/aboutBanner.png";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Image from "@/components/Image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#005f5B] via-[#00746F] to-[#008B84] text-white">
      {/*  Background  */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-teal-300/15 blur-3xl" />
      <Container>
        <div className="relative z-10 grid grid-cols-1 items-center gap-8 py-16 md:grid-cols-2 md:gap-12 lg:py-24">
          {/* Left Text Content */}
          <div className="flex flex-col items-start space-y-5 sm:space-y-6">
            {/* Sub-header Badge */}
            <div className="inline-flex items-center gap-3 mb-1">
              <span className="h-px w-8 bg-[#C68B45]"></span>
              <span className="text-[#C68B45] uppercase tracking-widest text-xs font-semibold">
                Professional Home Care
              </span>
              <span className="h-px w-8 bg-[#C68B45]"></span>
            </div>
            <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-wide sm:text-4xl md:text-5xl text-white">
              Expert <span className="text-[#C68B45]">Neurological</span> &amp;{" "}
              <span className="text-[#C68B45]">Elderly</span> Physiotherapy in
              the Comfort of Your Home
            </h1>
            <p className="max-w-xl text-base font-normal leading-relaxed text-[#F8F7F2]/80 sm:text-lg">
              Trusted home physiotherapists helping you move, strengthen, and
              live independently. Relied on by patients, families, case
              managers, and GPs.
            </p>
            <div className="pt-2">
              <Button className="rounded-xl bg-[#00A499]! px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-teal-950/30 transition-all duration-300 hover:bg-[#008B82]! hover:shadow-xl hover:shadow-teal-950/40 focus:outline-none focus:ring-2 focus:ring-[#00A499] focus:ring-offset-2 active:scale-95 sm:px-9 sm:py-4">
                Book A Home Visit
              </Button>
            </div>
          </div>
          {/* Right Image Container */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white/5 p-2 shadow-2xl backdrop-blur-md ring-1 ring-[#C68B45]/20 lg:max-w-none">
              <div className="overflow-hidden rounded-xl">
                <Image
                  imgSrc={aboutBanner}
                  alt="Home Physiotherapy Care"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}