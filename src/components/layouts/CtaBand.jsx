import Container from "../Container";
import Button from "../Button";

export default function CtaBand() {
    
    const scrollToContact = () => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="bg-white py-16 md:py-24 lg:py-32">
            <Container>
                <div className="grid overflow-hidden border border-navy-deep/10 shadow-2xl lg:grid-cols-2">
                    {/* left cta - patient focus */}
                    <div className="group relative flex flex-col justify-between bg-navy-deep p-12 transition-colors lg:p-16 xl:p-20">
                        <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-3xl transition-transform duration-700 ease-out group-hover:scale-150" />
                        <div className="relative z-10">
                            <h3 className="font-display text-3xl font-light leading-tight text-white sm:text-4xl lg:text-[40px]">
                                Need support for yourself or a loved one?
                            </h3>
                            <p className="mt-5 text-sm font-light leading-relaxed text-white/70 sm:text-base">
                                Speak directly with our senior physiotherapists to find the best care plan tailored to your specific needs.
                            </p>
                        </div>
                        {/* custom button component */}
                        <Button
                            onClick={scrollToContact}
                            className="relative z-10 mt-12 inline-block w-fit border border-white/30 bg-transparent px-8 py-3.5 text-[13px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-gold-deep hover:bg-gold-deep hover:text-white sm:px-10 sm:py-4 sm:text-[14px]"
                        >
                            get in touch
                        </Button>
                    </div>
                    {/* right cta - professional focus */}
                    <div className="group relative flex flex-col justify-between bg-gold-deep p-12 transition-colors lg:p-16 xl:p-20">
                        <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-navy-deep/5 blur-3xl transition-transform duration-700 ease-out group-hover:scale-150" />
                        <div className="relative z-10">
                            <h3 className="font-display text-3xl font-light leading-tight text-navy-deep sm:text-4xl lg:text-[40px]">
                                Arranging rehab for a client?
                            </h3>
                            <p className="mt-5 text-sm font-light leading-relaxed text-navy-deep/80 sm:text-base">
                                Are you a case manager or healthcare professional? We provide tailored specialist care across the UK.
                            </p>
                        </div>
                        {/* custom button component */}
                        <Button
                            onClick={scrollToContact}
                            className="relative z-10 mt-12 inline-block w-fit border border-navy-deep/20 bg-transparent px-8 py-3.5 text-[13px] font-bold uppercase tracking-widest text-navy-deep transition-all duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-white sm:px-10 sm:py-4 sm:text-[14px]"
                        >
                            make a referral
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}