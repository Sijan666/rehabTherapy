import { useEffect, useState } from "react";
import Container from "../Container";
import Image from "../Image";

{/* slide data array */}
const heroSlides = [
    {
        id: 1,
        bgImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        subtitle: "home-based neuro & elderly care",
        title: "Expert Stroke &\nNeurological Physiotherapy",
        description: "Your local neurological and elderly rehabilitation specialists, helping you regain your strength, independence and confidence.",
        primaryAction: { label: "book a home visit", link: "#contact-section", external: false },
        secondaryAction: { label: "call 0330 551 3660", link: "tel:03305513660" },
    },
    {
        id: 2,
        bgImage: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop",
        subtitle: "trusted across the uk",
        title: "Physiotherapy\nDelivered by Specialists",
        description: "We come to you, so you can get back to YOU. Trusted by patients, families, case managers and GPs across the UK.",
        primaryAction: { label: "request a call back", link: "#contact-section", external: false },
    },
    {
        id: 3,
        bgImage: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
        subtitle: "private occupational therapy",
        title: "Private Occupational\nTherapy at Home",
        description: "Helping patients improve daily living skills, independence, confidence and safety, in the comfort of their own home.",
        primaryAction: { label: "book a free consultation", link: "https://scheduler.zoom.us/krishna-gundapudi/phone_consultation", external: true },
    },
];

export default function Hero() {
    {/* active slide state */}
    const [active, setActive] = useState(0);

    {/* auto slider logic */}
    useEffect(() => {
        const id = setInterval(() => {
            setActive((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(id);
    }, []);

    return (
        <section id="top" className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-navy-deep 2xl:h-[85vh]">
            {/* slides wrapper */}
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        active === index ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
                    }`}
                >
                    {/* background image */}
                    <Image
                        imgSrc={slide.bgImage}
                        alt={slide.title.replace('\n', ' ')}
                        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen transition-transform duration-10000 ease-linear"
                        style={{ transform: active === index ? "scale(1.05)" : "scale(1)" }}
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-navy-deep/95 via-navy-deep/70 to-transparent" />
                    {/* content container */}
                    <Container className="relative z-20 flex h-full w-full flex-col justify-center">
                        <div className="max-w-2xl lg:max-w-3xl">
                            {/* subtitle */}
                            <div className="mb-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-gold-deep md:text-[13px]">
                                <span className="h-0.5 w-10 bg-gold-deep sm:w-12" />
                                {slide.subtitle}
                            </div>
                            <h1 className="font-display text-[2.5rem] font-light leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-[72px]">
                                {slide.title.split('\n').map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </h1>
                            {/* description */}
                            <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-white/80 sm:max-w-xl md:text-lg">
                                {slide.description}
                            </p>
                            {/* action buttons */}
                            <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-6">
                                {/* primary action */}
                                <a
                                    href={slide.primaryAction.link}
                                    target={slide.primaryAction.external ? "_blank" : "_self"}
                                    rel={slide.primaryAction.external ? "noopener noreferrer" : ""}
                                    className="inline-block rounded-full bg-gold px-7 py-3.5 text-[13px] font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-xl sm:px-8 sm:py-4 sm:text-[14px]"
                                >
                                    {slide.primaryAction.label}
                                </a>
                                {/* secondary action (if exists) */}
                                {slide.secondaryAction && (
                                    <a
                                        href={slide.secondaryAction.link}
                                        className="group flex cursor-pointer items-center gap-3 text-[13px] font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:text-gold-deep sm:text-[14px]"
                                    >
                                        <span className="h-0.5 w-8 bg-white/30 transition-all duration-300 group-hover:w-12 group-hover:bg-gold-deep" />
                                        {slide.secondaryAction.label}
                                    </a>
                                )}
                            </div>
                        </div>
                    </Container>
                </div>
            ))}
            {/* automated pagination dots */}
            <Container className="absolute bottom-8 left-0 right-0 z-30 sm:bottom-10">
                <div className="flex items-center gap-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            aria-label={`go to slide ${index + 1}`}
                            className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${
                                active === index ? "w-10 bg-gold-deep" : "w-2.5 bg-white/30 hover:bg-white/60"
                            }`}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}