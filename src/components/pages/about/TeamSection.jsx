import Container from "@/components/Container";
import React from "react";
import MultidisciplinaryServices from "./MultidisciplinaryServices";

export default function TeamSection() {
  return (
    <section className="bg-white py-20 font-sans">
      <Container>
        <div className="text-center">
          {/* Sub-header Badge & Accent Divider */}
          <div className="flex flex-col items-center mb-3">
            <span className="text-[#C68B45] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Our Experts
            </span>
            <div className="w-10 h-0.5 bg-[#C68B45] mt-1.5 rounded-full"></div>
          </div>
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2D2A] mb-8">
            Meet Our Team
          </h2>
        </div>
        {/* Description Text */}
        <div className="mx-auto max-w-3xl space-y-5 text-center text-base md:text-lg leading-relaxed text-[#556061] mb-14">
          <p>
            Every member of our team is a qualified, HCPC-registered
            professional with extensive experience gained within the NHS or
            private sector. All team members belong to professional bodies such
            as the Chartered Society of Physiotherapy (CSP) and maintain
            continuous skill development.
          </p>
          <p>
            Each member holds an enhanced Disclosure and Barring Service (DBS)
            clearance and undergoes mandatory training in Safeguarding, Moving
            &amp; Handling, and Basic Life Support alongside their clinical
            practice.
          </p>
        </div>
        {/* Embedded Component */}
        <MultidisciplinaryServices />
      </Container>
    </section>
  );
}