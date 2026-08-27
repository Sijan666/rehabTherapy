import React from "react";
import Image from "@/components/Image";
import {
  GlobeAltIcon,
  SparklesIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

import mission from "../../../assets/mission.png";
import vision from "../../../assets/vision.png";

export default function MissionVision() {
  const missionPoints = [
    "Expert & compassionate home care",
    "Evidence-based treatment protocols",
    "Accessible across every community",
  ];

  const visionPoints = [
    "UK's leading home rehab provider",
    "Gold standard clinical excellence",
    "Continuous innovation in care",
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute -top-24 left-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 -z-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="space-y-16 sm:space-y-24">
        {/* ================= OUR MISSION ================= */}
        <div className="group grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Mission Image  */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-xl ring-1 ring-slate-900/5 transition-all duration-500 group-hover:shadow-2xl group-hover:ring-teal-500/20">
              <div className="relative h-64 sm:h-80 lg:h-[400px] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  imgSrc={mission}
                  alt="Our Mission"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

          {/* Mission Content */}
          <div className="space-y-5 lg:col-span-6 lg:pl-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00746F] ring-1 ring-teal-500/20">
              <GlobeAltIcon className="h-4 w-4 text-[#00A499]" />
              <span>Purpose & Core Values</span>
            </div>

            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              OUR MISSION
            </h3>

            <p className="text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              At Rehab Therapist, our mission is to deliver expert,
              compassionate rehabilitation in the comfort of people’s own
              homes—empowering individuals with rehabilitation needs to regain
              independence, improve function, and live fulfilling lives.
            </p>

            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
              We are committed to providing high-quality, evidence-based care
              that is seamless, personalized, responsive, and accessible across
              every community we serve.
            </p>

            {/* Quick Checklist */}
            <div className="pt-2 space-y-2.5">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm font-semibold text-slate-700"
                >
                  <CheckCircleIcon className="mr-2.5 h-5 w-5 shrink-0 text-[#00A499]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= OUR VISION ================= */}
        <div className="group grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Vision Content */}
          <div className="order-2 space-y-5 lg:order-1 lg:col-span-6 lg:pr-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00746F] ring-1 ring-teal-500/20">
              <SparklesIcon className="h-4 w-4 text-[#00A499]" />
              <span>Future & Impact</span>
            </div>

            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              OUR VISION
            </h3>

            <p className="text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              To be the leading provider of home-based rehabilitation in the
              UK—setting the standard for excellence, equity, and innovation in
              private community rehabilitation.
            </p>

            {/* Highlight Banner */}
            <div className="rounded-2xl border-l-4 border-[#00A499] bg-slate-50 p-4 text-sm font-medium leading-relaxed text-slate-700 shadow-xs">
              Transforming patient outcomes through personalized home-based care
              models and modern evidence-led techniques.
            </div>

            {/* Quick Checklist */}
            <div className="pt-2 space-y-2.5">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm font-semibold text-slate-700"
                >
                  <CheckCircleIcon className="mr-2.5 h-5 w-5 shrink-0 text-[#00A499]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Image Frame */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-xl ring-1 ring-slate-900/5 transition-all duration-500 group-hover:shadow-2xl group-hover:ring-teal-500/20">
              <div className="relative h-64 sm:h-80 lg:h-[400px] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  imgSrc={vision}
                  alt="Our Vision"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
