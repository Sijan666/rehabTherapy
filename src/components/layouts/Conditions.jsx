import Container from "../Container";
import Image from "../Image";

// conditions data array
const CONDITIONS = [
  { title: "Stroke", img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/06/Stroke.png", href: "https://rehabtherapist.co.uk/stroke/" },
  { title: "Brain Injury", img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/06/Brain-Injury.png", href: "https://rehabtherapist.co.uk/brain-injury/" },
  { title: "Multiple Sclerosis", img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/06/Multiple-Sclerosis.png", href: "https://rehabtherapist.co.uk/multiple-sclerosis/" },
  { title: "Parkinson's Disease", img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/06/Parkinson.png", href: "https://rehabtherapist.co.uk/parkinsons-disease/" },
  { title: "Balance Rehabilitation", img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/06/Balance-rehab.png", href: "https://rehabtherapist.co.uk/balance-disorders-and-falls-prevention/" },
  { title: "Spinal Cord Injury", img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/06/Spinal-cord-injury.png", href: "https://rehabtherapist.co.uk/spinal-cord-injury/" },
  { title: "Falls Prevention", img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/06/falls-prevention.png", href: "https://rehabtherapist.co.uk/falls-prevention-and-rehabilitation/" },
  { title: "Recovery After Surgery", img: "https://rehabtherapist.co.uk/wp-content/uploads/2025/06/postop-recovery.png", href: "https://rehabtherapist.co.uk/recovery-after-a-hospital-stay-or-surgery/" },
];

export default function Conditions() {
  return (
    <section id="conditions" className="bg-white py-16 md:py-24">
      <Container>
        {/* section heading */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* eyebrow */}
          <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
            <span aria-hidden="true" className="h-px w-6 bg-gold-deep" />
            specialist care
          </div>
          {/* title */}
          <h2 className="font-display text-3xl font-light leading-tight text-navy-deep md:text-4xl">
            Conditions Treated
          </h2>
          {/* description */}
          <p className="mt-4 max-w-xl text-base font-light text-navy-deep/70">
            Our comprehensive physiotherapy services cater to a wide range of complex conditions,
            providing specialised care to enhance mobility, strength and independence.
          </p>
        </div>
        {/* conditions grid */}
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {CONDITIONS.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col items-center border border-navy-deep/10 bg-white p-8 text-center transition-colors duration-300 hover:border-gold hover:bg-cream/30"
            >
              {/* icon wrapper */}
              <div className="mb-5 flex h-16 w-16 items-center justify-center bg-navy-deep/5 transition-colors duration-300 group-hover:bg-gold/10">
                <Image 
                  imgSrc={c.img} 
                  alt={c.title} 
                  className="h-8 w-8 object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" 
                />
              </div>
              {/* condition title */}
              <h4 className="font-display text-lg font-medium text-navy-deep">
                {c.title}
              </h4>
              {/* link */}
              <a 
                href={c.href} 
                className="mt-4 inline-block cursor-pointer text-xs font-bold uppercase tracking-widest text-gold-deep transition-colors duration-300 hover:text-navy-deep"
              >
                learn more &rarr;
              </a>
            </div>
          ))}
        </div>
        {/* cta action */}
        <div className="mt-12 text-center">
          <a
            href="https://rehabtherapist.co.uk/conditions-treated/"
            className="inline-block cursor-pointer border border-navy-deep bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-navy-deep transition-colors duration-300 hover:bg-navy-deep hover:text-white"
          >
            more conditions
          </a>
        </div>
      </Container>
    </section>
  );
}