import Container from "@/components/Container";
import React from "react";
import MultidisciplinaryServices from "./MultidisciplinaryServices";

export default function TeamSection() {
  return (
    <section className="bg-[#EBF2F6] py-12 text-slate-700 md:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
            Meet Our Team
          </h2>
        </div>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-sm leading-relaxed text-slate-600 sm:mt-8 sm:space-y-6 sm:text-base">
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
        <MultidisciplinaryServices />
      </Container>
    </section>
  );
}
