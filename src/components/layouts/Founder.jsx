import Container from "../Container";
import Image from "../Image";

export default function Founder() {
  return (
    // completely new editorial layout section
    <section id="founder" className="bg-navy-deep py-24 lg:py-32">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* image side */}
          <div className="relative z-10 w-full lg:w-5/12">
            <Image
              imgSrc="https://rehabtherapist.co.uk/wp-content/uploads/2025/08/rehabtherapist-1024x1024.png"
              alt="krishna gundapudi, clinical director"
              className="aspect-4/5 w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          {/* text box */}
          <div className="relative z-20 w-full border border-white/10 bg-navy p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] lg:-ml-16 lg:w-7/12 lg:p-20">
            {/* eyebrow */}
            <div className="mb-6 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              clinical director
            </div>
            {/* massive clean typography */}
            <h2 className="font-display text-5xl font-light leading-tight text-white lg:text-[70px]">
              Krishna Gundapudi
            </h2>
            <p className="mt-4 font-display text-xl tracking-wide text-white/50">
              Neurological Physiotherapist
            </p>
            {/* description text */}
            <p className="mt-8 text-base font-light leading-relaxed text-white/70 lg:text-lg">
              Krishna Gundapudi is a seasoned professional neurological physiotherapist with over 25 years of experience. He is leading a dedicated team of expert rehabilitation experts committed to delivering personalised care to clients in their own homes across the UK.
            </p>
            {/* statistics block for premium feel */}
            <div className="my-10 flex gap-8 border-y border-white/10 py-6">
              <div>
                <span className="block font-display text-3xl text-gold">25+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/50">years exp.</span>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <span className="block font-display text-3xl text-gold">UK</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/50">nationwide</span>
              </div>
            </div>
            {/* high contrast cta button */}
            <a
              href="https://rehabtherapist.co.uk/about-us/"
              aria-label="learn more about the founder"
              className="inline-block cursor-pointer bg-white px-10 py-4 text-sm font-bold uppercase tracking-widest text-navy-deep transition-colors duration-300 hover:bg-gold hover:text-white"
            >
              discover more
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}