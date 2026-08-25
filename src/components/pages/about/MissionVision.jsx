import React from "react";
import Image from "@/components/Image";

import mission from "../../../assets/mission.png";
import vision from "../../../assets/vision.png";

export default function MissionVision() {
  return (
    <div className="mt-14 space-y-12 sm:mt-20 sm:space-y-16">
      {/* Our Mission */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <Image
              imgSrc={mission}
              alt="Our Mission"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="w-full space-y-3 md:w-1/2 md:pt-4">
          <h3 className="text-xl font-extrabold uppercase tracking-wider text-slate-800 sm:text-2xl">
            OUR MISSION
          </h3>
          <p className="text-justify text-xs leading-relaxed text-slate-500 sm:text-sm sm:leading-loose">
            At Rehab Therapist, our mission is to deliver expert, compassionate
            rehabilitation in the comfort of people’s own homes—empowering
            individuals with rehabilitation needs to regain independence,
            improve function, and live fulfilling lives. We are committed to
            providing high-quality, evidence-based care that is seamless,
            personalised, responsive, and accessible across every community we
            serve.
          </p>
        </div>
      </div>

      {/* Our Vision */}
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
        <div className="w-full space-y-3 md:w-1/2 md:pt-4">
          <h3 className="text-xl font-extrabold uppercase tracking-wider text-slate-800 sm:text-2xl">
            OUR VISION
          </h3>
          <p className="text-justify text-xs leading-relaxed text-slate-500 sm:text-sm sm:leading-loose">
            To be the leading provider of home-based rehabilitation in the
            UK—setting the standard for excellence, equity, and innovation in
            private community rehabilitation.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <Image
              imgSrc={vision}
              alt="Our Vision"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
