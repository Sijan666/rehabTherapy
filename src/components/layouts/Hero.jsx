import { useEffect, useState } from "react";
import Container from "../Container";
import Image from "../Image";

export default function Hero() {
  // active slide state
  const [active, setActive] = useState(0);

  // auto slider logic
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev === 2 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative h-[70vh] min-h-[600px] w-full overflow-hidden bg-navy-deep">
      {/* slide 1 */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          active === 0 ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
        }`}
      >
        <Image
          imgSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
          alt="stroke and neuro physiotherapy"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-deep via-navy-deep/90 to-transparent" />
        <Container className="relative z-20 flex h-full w-full flex-col justify-center">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-12 bg-gold" />
              home-based neuro & elderly care
            </div>
            <h1 className="font-display text-4xl font-light leading-[1.1] text-white md:text-6xl lg:text-[70px]">
              Expert Stroke & Neurological Physiotherapy
            </h1>
            <p className="mt-6 max-w-xl text-base font-light text-white/70 md:text-lg">
              Your local neurological and elderly rehabilitation specialists, helping you regain your strength, independence and confidence.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#contact-section" className="cursor-pointer bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-navy-deep transition-colors duration-300 hover:bg-gold hover:text-white">
                book a home visit
              </a>
              <a href="tel:03305513660" className="group flex cursor-pointer items-center gap-3 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:text-gold">
                <span className="h-px w-8 bg-white/30 transition-all duration-300 group-hover:w-12 group-hover:bg-gold" />
                call 0330 551 3660
              </a>
            </div>
          </div>
        </Container>
      </div>
      {/* slide 2 */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          active === 1 ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
        }`}
      >
        <Image
          imgSrc="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop"
          alt="trusted physiotherapy specialists"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-deep via-navy-deep/90 to-transparent" />
        <Container className="relative z-20 flex h-full w-full flex-col justify-center">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-12 bg-gold" />
              trusted across the uk
            </div>
            <h1 className="font-display text-4xl font-light leading-[1.1] text-white md:text-6xl lg:text-[70px]">
              Physiotherapy Delivered by Specialists
            </h1>
            <p className="mt-6 max-w-xl text-base font-light text-white/70 md:text-lg">
              We come to you, so you can get back to YOU. Trusted by patients, families, case managers and GPs across the UK.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#contact-section" className="cursor-pointer bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-navy-deep transition-colors duration-300 hover:bg-white">
                request a call back
              </a>
            </div>
          </div>
        </Container>
      </div>
      {/* slide 3 */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          active === 2 ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
        }`}
      >
        <Image
          imgSrc="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"
          alt="private occupational therapy"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-deep via-navy-deep/90 to-transparent" />
        <Container className="relative z-20 flex h-full w-full flex-col justify-center">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-12 bg-gold" />
              private occupational therapy
            </div>
            <h1 className="font-display text-4xl font-light leading-[1.1] text-white md:text-6xl lg:text-[70px]">
              Private Occupational Therapy at Home
            </h1>
            <p className="mt-6 max-w-xl text-base font-light text-white/70 md:text-lg">
              Helping patients improve daily living skills, independence, confidence and safety, in the comfort of their own home.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="https://scheduler.zoom.us/krishna-gundapudi/phone_consultation" target="_blank" rel="noopener noreferrer" className="cursor-pointer bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-navy-deep transition-colors duration-300 hover:bg-gold hover:text-white">
                book a free consultation
              </a>
            </div>
          </div>
        </Container>
      </div>
      {/* manual pagination dots */}
      <Container className="absolute bottom-8 left-0 right-0 z-30">
        <div className="flex gap-3">
          <button
            onClick={() => setActive(0)}
            className={`h-1 cursor-pointer transition-all duration-300 ${active === 0 ? "w-12 bg-gold" : "w-6 bg-white/30 hover:bg-white/50"}`}
            aria-label="go to slide 1"
          />
          <button
            onClick={() => setActive(1)}
            className={`h-1 cursor-pointer transition-all duration-300 ${active === 1 ? "w-12 bg-gold" : "w-6 bg-white/30 hover:bg-white/50"}`}
            aria-label="go to slide 2"
          />
          <button
            onClick={() => setActive(2)}
            className={`h-1 cursor-pointer transition-all duration-300 ${active === 2 ? "w-12 bg-gold" : "w-6 bg-white/30 hover:bg-white/50"}`}
            aria-label="go to slide 3"
          />
        </div>
      </Container>
    </section>
  );
}