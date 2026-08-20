import Container from "../Container";
import Image from "../Image";

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
            <span aria-hidden="true" className="h-px w-6 bg-gold-deep" />
            what we offer
          </div>
          {/* main title */}
          <h2 className="font-display text-3xl font-light leading-tight text-navy-deep md:text-4xl">
            Our Services
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#services" className="cursor-pointer border border-navy-deep/10 bg-transparent px-5 py-2 text-xs font-bold text-navy-deep transition-colors duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-white">
            Home Visits
          </a>
          <a href="#services" className="cursor-pointer border border-navy-deep/10 bg-transparent px-5 py-2 text-xs font-bold text-navy-deep transition-colors duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-white">
            Neurological Physiotherapy
          </a>
          <a href="#services" className="cursor-pointer border border-navy-deep/10 bg-transparent px-5 py-2 text-xs font-bold text-navy-deep transition-colors duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-white">
            Intensive Rehabilitation
          </a>
          <a href="#services" className="cursor-pointer border border-navy-deep/10 bg-transparent px-5 py-2 text-xs font-bold text-navy-deep transition-colors duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-white">
            Case Managers
          </a>
          <a href="#services" className="cursor-pointer border border-navy-deep/10 bg-transparent px-5 py-2 text-xs font-bold text-navy-deep transition-colors duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-white">
            Elderly Physiotherapy
          </a>
          <a href="#services" className="cursor-pointer border border-navy-deep/10 bg-transparent px-5 py-2 text-xs font-bold text-navy-deep transition-colors duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-white">
            Post-Operative Physiotherapy
          </a>
          <a href="#services" className="cursor-pointer border border-navy-deep/10 bg-transparent px-5 py-2 text-xs font-bold text-navy-deep transition-colors duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-white">
            Hydrotherapy
          </a>
          <a href="#services" className="cursor-pointer border border-navy-deep/10 bg-transparent px-5 py-2 text-xs font-bold text-navy-deep transition-colors duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-white">
            Falls Prevention & Rehab
          </a>
          <a href="#services" className="cursor-pointer border border-navy-deep/10 bg-transparent px-5 py-2 text-xs font-bold text-navy-deep transition-colors duration-300 hover:border-navy-deep hover:bg-navy-deep hover:text-white">
            Care Homes
          </a>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* card 1 */}
          <div className="group flex flex-col border border-navy-deep/10 bg-white transition-colors duration-300 hover:border-gold">
            <div className="aspect-video overflow-hidden border-b border-navy-deep/10">
              <Image 
                imgSrc="https://rehabtherapist.co.uk/wp-content/uploads/2025/07/case-managers-for-rehab-1024x576.jpg" 
                alt="rehab for case managers" 
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" 
              />
            </div>
            <div className="flex flex-col p-6">
              <h3 className="font-display text-xl font-medium text-navy-deep">
                Rehab for Case Managers
              </h3>
              <a href="https://rehabtherapist.co.uk/rehab-for-case-managers/" className="mt-4 inline-block cursor-pointer text-xs font-bold uppercase tracking-widest text-gold-deep transition-colors duration-300 hover:text-navy-deep">
                learn more &rarr;
              </a>
            </div>
          </div>
          {/* card 2 */}
          <div className="group flex flex-col border border-navy-deep/10 bg-white transition-colors duration-300 hover:border-gold">
            <div className="aspect-video overflow-hidden border-b border-navy-deep/10">
              <Image 
                imgSrc="https://rehabtherapist.co.uk/wp-content/uploads/2025/07/Nuerological-physiotherapy-1024x576.jpg" 
                alt="neurological physiotherapy" 
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" 
              />
            </div>
            <div className="flex flex-col p-6">
              <h3 className="font-display text-xl font-medium text-navy-deep">
                Neurological Physiotherapy
              </h3>
              <a href="https://rehabtherapist.co.uk/neurological-physiotherapy/" className="mt-4 inline-block cursor-pointer text-xs font-bold uppercase tracking-widest text-gold-deep transition-colors duration-300 hover:text-navy-deep">
                learn more &rarr;
              </a>
            </div>
          </div>
          {/* card 3 */}
          <div className="group flex flex-col border border-navy-deep/10 bg-white transition-colors duration-300 hover:border-gold">
            <div className="aspect-video overflow-hidden border-b border-navy-deep/10">
              <Image 
                imgSrc="https://rehabtherapist.co.uk/wp-content/uploads/2025/07/Elderly-physiotherapy-1024x684.webp" 
                alt="elderly rehabilitation" 
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" 
              />
            </div>
            <div className="flex flex-col p-6">
              <h3 className="font-display text-xl font-medium text-navy-deep">
                Elderly Rehabilitation
              </h3>
              <a href="https://rehabtherapist.co.uk/elderly-rehabilitation/" className="mt-4 inline-block cursor-pointer text-xs font-bold uppercase tracking-widest text-gold-deep transition-colors duration-300 hover:text-navy-deep">
                learn more &rarr;
              </a>
            </div>
          </div>
          {/* card 4 */}
          <div className="group flex flex-col border border-navy-deep/10 bg-white transition-colors duration-300 hover:border-gold">
            <div className="aspect-video overflow-hidden border-b border-navy-deep/10">
              <Image 
                imgSrc="https://rehabtherapist.co.uk/wp-content/uploads/2025/07/post-operative-physiotherapy-1024x660.jpg" 
                alt="post-operative physiotherapy" 
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" 
              />
            </div>
            <div className="flex flex-col p-6">
              <h3 className="font-display text-xl font-medium text-navy-deep">
                Post-operative Physiotherapy
              </h3>
              <a href="https://rehabtherapist.co.uk/post-operative-physiotherapy/" className="mt-4 inline-block cursor-pointer text-xs font-bold uppercase tracking-widest text-gold-deep transition-colors duration-300 hover:text-navy-deep">
                learn more &rarr;
              </a>
            </div>
          </div>
          {/* card 5 */}
          <div className="group flex flex-col border border-navy-deep/10 bg-white transition-colors duration-300 hover:border-gold">
            <div className="aspect-video overflow-hidden border-b border-navy-deep/10">
              <Image 
                imgSrc="https://rehabtherapist.co.uk/wp-content/uploads/2025/07/ortho-1024x683.jpg" 
                alt="complex orthopaedic & polytrauma rehab" 
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" 
              />
            </div>
            <div className="flex flex-col p-6">
              <h3 className="font-display text-xl font-medium text-navy-deep">
                Complex Orthopaedic Rehab
              </h3>
              <a href="https://rehabtherapist.co.uk/complex-orthopaedic-polytrauma-rehabilitation/" className="mt-4 inline-block cursor-pointer text-xs font-bold uppercase tracking-widest text-gold-deep transition-colors duration-300 hover:text-navy-deep">
                learn more &rarr;
              </a>
            </div>
          </div>
          {/* card 6 */}
          <div className="group flex flex-col border border-navy-deep/10 bg-white transition-colors duration-300 hover:border-gold">
            <div className="aspect-video overflow-hidden border-b border-navy-deep/10">
              <Image 
                imgSrc="https://rehabtherapist.co.uk/wp-content/uploads/2025/07/care-home-physio-1024x683.jpg" 
                alt="physiotherapy for care homes" 
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" 
              />
            </div>
            <div className="flex flex-col p-6">
              <h3 className="font-display text-xl font-medium text-navy-deep">
                Physiotherapy for Care Homes
              </h3>
              <a href="https://rehabtherapist.co.uk/physiotherapy-for-care-homes/" className="mt-4 inline-block cursor-pointer text-xs font-bold uppercase tracking-widest text-gold-deep transition-colors duration-300 hover:text-navy-deep">
                learn more &rarr;
              </a>
            </div>
          </div>
        </div>
        {/* cta action */}
        <div className="mt-12 text-center">
          <a
            href="https://rehabtherapist.co.uk/services/"
            className="inline-block cursor-pointer border border-navy-deep bg-navy-deep px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-navy-deep"
          >
            explore more services
          </a>
        </div>
      </Container>
    </section>
  );
}