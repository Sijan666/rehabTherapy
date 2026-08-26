import React from "react";
import aboutBanner from "../../../assets/aboutBanner.png";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Image from "@/components/Image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#005f5B] via-[#00746F] to-[#008B84] text-white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-2 md:gap-12 lg:py-16">
          <div className="flex flex-col items-start space-y-4 sm:space-y-6">
            <h1 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Expert Neurological &amp; Elderly Physiotherapy in the Comfort of
              Your Home
            </h1>
            <p className="max-w-xl text-sm font-normal leading-relaxed text-teal-50 sm:text-base md:text-lg">
              Trusted home physiotherapists helping you move, strengthen, and
              live independently. Relied on by patients, families, case
              managers, and GPs.
            </p>
            <div className="pt-2">
              <Button className="rounded-md !bg-[#00A499] px-6 py-3 text-sm font-semibold shadow-md transition-all duration-300 hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] focus:ring-offset-2 active:scale-95 sm:px-8 sm:py-3.5 sm:text-base">
                Book A Home Visit
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-2xl lg:max-w-none">
              <Image
                imgSrc={aboutBanner}
                alt="Home Physiotherapy Care"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
