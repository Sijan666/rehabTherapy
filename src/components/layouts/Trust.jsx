import Container from "../Container";

{/* badge data */}
const badges = ["HCPC Registered", "CSP", "ACPIN", "BABICM", "ICO"];

export default function Trust() {
    return (
        <section className="border-t border-navy-deep/5 bg-cream/50 py-20 text-center md:py-24">
            <Container>
                {/* eyebrow */}
                <div className="mb-6 flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-widest text-gold-deep sm:text-xs">
                    <span aria-hidden="true" className="h-0.5 w-8 bg-gold-deep" />
                    accreditation
                    <span aria-hidden="true" className="h-0.5 w-8 bg-gold-deep" />
                </div>
                {/* title */}
                <h2 className="font-display text-3xl font-light text-navy-deep sm:text-4xl lg:text-[40px]">
                    Registered Chartered Physiotherapists
                </h2>
                {/* badges grid */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="cursor-default border border-navy-deep/10 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-navy-deep/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-deep hover:text-navy-deep hover:shadow-md sm:px-8 sm:py-4 sm:text-[13px]"
                        >
                            {badge}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}