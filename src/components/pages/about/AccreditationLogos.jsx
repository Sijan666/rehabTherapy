import React from "react";
import Image from "@/components/Image";

import logoOne from "../../../assets/logoOne.webp";
import logoTwo from "../../../assets/logoTwo.webp";
import logoThree from "../../../assets/logoThree.webp";
import logoFour from "../../../assets/logoFour.webp";
import logoFive from "../../../assets/logoFive.webp";

const LOGOS = [
  { name: "HCPC Registered", src: logoOne, alt: "HCPC Registered Logo" },
  { name: "Chartered Society of Physiotherapy", src: logoTwo, alt: "CSP Logo" },
  { name: "ACPIN", src: logoThree, alt: "ACPIN Logo" },
  { name: "BABICM Member", src: logoFour, alt: "BABICM Member Logo" },
  { name: "ICO", src: logoFive, alt: "ICO Logo" },
];

export default function AccreditationLogos() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 md:gap-8">
      {LOGOS.map((logo, index) => (
        <div
          key={`logo-${index}`}
          className="flex h-20 items-center justify-center rounded-md bg-white px-4 py-2 shadow-sm transition hover:shadow-md"
        >
          <Image
            className="max-h-12 w-auto object-contain sm:max-h-14"
            imgSrc={logo.src}
            alt={logo.alt}
          />
        </div>
      ))}
    </div>
  );
}
