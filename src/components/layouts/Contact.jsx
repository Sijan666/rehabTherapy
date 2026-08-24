import Container from "../Container";

export default function Contact() {
  return (
    // contact section wrapper
    <section id="contact-section" className="bg-white py-16 md:py-24">
      <Container>
        
        {/* sharp dark premium block */}
        <div className="flex flex-col items-center border border-navy-deep/10 bg-navy-deep p-10 text-center text-white md:p-20">
          
          {/* eyebrow */}
          <div className="mb-6 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            get started
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
          </div>
          
          {/* main title */}
          <h2 className="font-display text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
            Contact Us
          </h2>
          
          {/* description */}
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/80 md:text-lg">
            Home-based neurological, elderly physiotherapy and rehabilitation across the UK.
          </p>
          
          {/* action buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="https://rehabtherapist.co.uk/book-free-rehabilitation-call/"
              aria-label="book a free consultation"
              className="inline-block cursor-pointer bg-gold px-10 py-4 text-xs font-bold uppercase tracking-widest text-navy-deep transition-colors duration-300 hover:bg-white hover:text-navy-deep"
            >
              book consultation
            </a>
            <a
              href="https://wa.me/4407777999277"
              aria-label="message us on whatsapp"
              className="inline-block cursor-pointer border border-white/30 bg-transparent px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-navy-deep"
            >
              whatsapp us
            </a>
          </div>
          
          {/* contact info footer */}
          <div className="mt-16 flex w-full max-w-2xl flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:gap-10">
            <a 
              href="mailto:info@rehabtherapist.co.uk" 
              className="text-sm font-light tracking-widest text-white/70 transition-colors duration-300 hover:text-gold"
            >
              info@rehabtherapist.co.uk
            </a>
            <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-gold/50 sm:block" />
            <a 
              href="tel:03305513660" 
              className="text-sm font-light tracking-widest text-white/70 transition-colors duration-300 hover:text-gold"
            >
              0330 551 3660
            </a>
          </div>

        </div>
        
      </Container>
    </section>
  );
}