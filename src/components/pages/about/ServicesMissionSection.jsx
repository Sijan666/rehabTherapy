import Container from "@/components/Container";
import React from "react";
import ServicesSlider from "./ServicesSlider";
import MissionVision from "./MissionVision";

export default function ServicesMissionSection() {
  return (
    <section className="bg-white py-12 text-slate-700 md:py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
            What We Do
          </h2>
          <ServicesSlider />
        </div>
        <MissionVision />
      </Container>
    </section>
  );
}
