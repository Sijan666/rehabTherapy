import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "../Image";

{/* features data array */}
const features = [
    "No waiting list",
    "Compassionate, personalised care at home",
    "Specialists in neurological & elderly rehabilitation",
    "Experienced and highly trained physiotherapists",
    "Dedicated to helping you maximise your potential and enhance your quality of life",
];

{/* elegant reusable check icon */}
const CheckIcon = () => (
    <svg
        className="h-3.5 w-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
        aria-hidden="true"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

export default function WhyChoose() {
    return (
        <section id="why-choose" className="overflow-hidden bg-cream py-20 md:py-28 lg:py-32">
            <Container>
                <div className="grid items-center gap-14 md:grid-cols-2 lg:gap-20 xl:gap-24">
                    {/* image side */}
                    <div className="relative order-2 w-full md:order-1">
                        {/* premium image wrapper with subtle hover zoom */}
                        <div className="relative z-10 overflow-hidden bg-navy-deep/5 shadow-2xl shadow-navy-deep/10">
                            <Image
                                imgSrc="https://rehabtherapist.co.uk/wp-content/uploads/2025/07/Why-choose-rehab-therapist.png"
                                alt="rehab therapist visiting a patient at home"
                                className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out hover:scale-105 sm:aspect-square md:aspect-4/5"
                            />
                        </div>
                        {/* elegant decorative offset border */}
                        <div 
                            aria-hidden="true" 
                            className="absolute -bottom-5 -left-5 z-0 h-full w-full border border-navy-deep/15 transition-transform duration-500 hover:-translate-x-1 hover:translate-y-1 sm:-bottom-8 sm:-left-8" 
                        />
                    </div>
                    {/* content side */}
                    <div className="order-1 flex flex-col justify-center md:order-2">
                        {/* eyebrow */}
                        <div className="mb-6 flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-gold-deep sm:text-xs">
                            <span aria-hidden="true" className="h-0.5 w-10 bg-gold-deep sm:w-12" />
                            why rehab therapist
                        </div>
                        {/* main section heading */}
                        <h2 className="font-display text-4xl font-light leading-tight text-navy-deep sm:text-5xl lg:text-[52px] lg:leading-[1.15]">
                            Why choose <br className="hidden sm:block" />
                            <span className="font-medium text-navy-deep">Rehab Therapist</span>
                        </h2>
                        {/* dynamic feature list mapping */}
                        <ul className="mt-10 flex flex-col gap-6">
                            {features.map((item, index) => (
                                <li key={index} className="group flex items-start gap-5">
                                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-deep/5 text-gold-deep transition-colors duration-300 group-hover:bg-gold-deep group-hover:text-white">
                                        <CheckIcon />
                                    </span>
                                    <span className="text-base font-medium leading-relaxed text-navy-deep/80 transition-colors duration-300 group-hover:text-navy-deep md:text-[17px]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        {/* cta action */}
                        <div className="mt-12">
                            <Link
                                to="/about"
                                aria-label="learn more about why choose rehab therapist"
                                className="inline-block border border-navy-deep bg-transparent px-8 py-3.5 text-[13px] font-bold uppercase tracking-widest text-navy-deep transition-all duration-300 hover:bg-navy-deep hover:text-white sm:px-10 sm:py-4 sm:text-[14px]"
                            >
                                learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}