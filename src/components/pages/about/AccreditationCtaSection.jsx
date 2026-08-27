import React from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import AccreditationLogos from "./AccreditationLogos";
import {
  ArrowRightIcon,
  UserIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

export default function AccreditationCtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-100/80 py-16 text-slate-700 md:py-24">
      {/* Background  */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

      <Container className="space-y-12 sm:space-y-16">
        {/* Title Header */}
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <span className="inline-block rounded-full bg-teal-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00746F] ring-1 ring-teal-500/20">
            Trusted & Accredited
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            REGISTERED CHARTERED PHYSIOTHERAPISTS
          </h2>
        </div>

        {/* Accreditation Logos Component */}
        <AccreditationLogos />

        {/* Action Callout Cards  */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1: Patients / Loved Ones */}
          <div className="group relative min-h-[320px] overflow-hidden rounded-3xl bg-slate-900 shadow-xl ring-1 ring-slate-900/10 transition-all duration-500 hover:shadow-2xl sm:min-h-[360px]">
            {/* Background Image  */}
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
              alt="Need support for yourself"
              className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-center sm:p-10">
              <div className="mx-auto flex flex-col items-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
                  <UserIcon className="h-6 w-6 text-white" />
                </div>

                <h3 className="max-w-md text-lg font-bold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
                  Need Support for Yourself or a Loved One?
                </h3>

                <div className="pt-2">
                  <Button className="group/btn inline-flex items-center gap-2 rounded-full !bg-[#00A499] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:!bg-[#00746F] active:scale-95">
                    <span>Get in Touch</span>
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/*  Case Managers / Professionals */}
          <div className="group relative min-h-[320px] overflow-hidden rounded-3xl bg-slate-900 shadow-xl ring-1 ring-slate-900/10 transition-all duration-500 hover:shadow-2xl sm:min-h-[360px]">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
              alt="Case manager or professional"
              className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-center sm:p-10">
              <div className="mx-auto flex flex-col items-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
                  <BriefcaseIcon className="h-6 w-6 text-white" />
                </div>

                <h3 className="max-w-md text-lg font-bold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
                  Are You a Case Manager Arranging Rehab?
                </h3>

                <div className="pt-2">
                  <Button className="group/btn inline-flex items-center gap-2 rounded-full !bg-[#00A499] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:!bg-[#00746F] active:scale-95">
                    <span>Make a Referral</span>
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
