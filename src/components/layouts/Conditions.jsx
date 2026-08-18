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
    <section id="conditions" className="px-6 py-22 text-center">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-deep">
          <span className="inline-block h-px w-5 bg-gold-deep" />
          Specialist care
        </div>
        <h2 className="text-3xl font-semibold md:text-4xl">Conditions Treated</h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-soft">
          Our comprehensive physiotherapy services cater to a wide range of complex conditions,
          providing specialised care to enhance mobility, strength and independence.
        </p>

        <div className="mt-11 grid grid-cols-2 gap-5 md:grid-cols-4">
          {CONDITIONS.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-line bg-white px-5 py-6.5 transition-all hover:-translate-y-1 hover:border-gold"
            >
              <div className="mx-auto mb-3.5 flex h-13.5 w-13.5 items-center justify-center rounded-2xl bg-cream-dim">
                <img src={c.img} alt="" className="h-7 w-7 object-contain opacity-70 saturate-0" />
              </div>
              <h4 className="text-sm font-semibold">{c.title}</h4>
              <a href={c.href} className="mt-2 inline-block text-xs font-bold text-gold-deep">
                Learn more →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-9">
          <a
            href="https://rehabtherapist.co.uk/conditions-treated/"
            className="inline-block rounded-full border border-navy px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            More Conditions
          </a>
        </div>
      </div>
    </section>
  );
}
