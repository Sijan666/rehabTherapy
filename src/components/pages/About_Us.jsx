import React from "react";
import HeroSection from "./about/HeroSection";
import LeadershipSection from "./about/LeadershipSection";
import TeamSection from "./about/TeamSection";
import ServicesMissionSection from "./about/ServicesMissionSection";
import CoreValuesSection from "./about/CoreValuesSection";
import LocationTestimonialsSection from "./about/LocationTestimonialsSection";
import AccreditationCtaSection from "./about/AccreditationCtaSection";

export default function About_Us() {
  return (
    <>
      <HeroSection />
      <LeadershipSection />
      <TeamSection />
      <ServicesMissionSection />
      <CoreValuesSection />
      <LocationTestimonialsSection />
      <AccreditationCtaSection />
    </>
  );
}
