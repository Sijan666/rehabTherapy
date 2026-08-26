import React from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import AccreditationLogos from "./AccreditationLogos";

export default function AccreditationCtaSection() {
  return (
    <section className="bg-[#EBF2F6] py-12 text-slate-700 md:py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-xl font-black uppercase tracking-wide text-slate-900 sm:text-2xl md:text-3xl">
            REGISTERED CHARTERED PHYSIOTHERAPISTS
          </h2>
        </div>
        <AccreditationLogos />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
              alt="Need support for yourself"
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/60 p-6 text-center">
              <h3 className="text-base font-bold uppercase tracking-wide text-white sm:text-xl">
                NEED SUPPORT FOR YOURSELF OR A LOVED ONE?
              </h3>
              <div className="mt-4">
                <Button
                  className={
                    "rounded-md bg-[#00A499]! px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] active:scale-95"
                  }
                  children={"Get in Touch"}
                />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
              alt="Case manager or professional"
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/60 p-6 text-center">
              <h3 className="text-base font-bold uppercase tracking-wide text-white sm:text-xl">
                ARE YOU A CASE MANAGER OR PROFESSIONAL ARRANGING REHAB FOR YOUR
                CLIENT?
              </h3>
              <div className="mt-4">
                <Button
                  className={
                    "rounded-md bg-[#00A499]! px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#008f85] focus:outline-none focus:ring-2 focus:ring-[#00A499] active:scale-95"
                  }
                  children={"Make a Referral"}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
