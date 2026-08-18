import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Happy Customers", target: 1200, suffix: "" },
  { label: "Goals Achieved", target: 94, suffix: "%" },
  { label: "Patient Satisfaction", target: 98, suffix: "%" },
  { label: "Conditions Treated", target: 40, suffix: "+" },
  { label: "Years of Experience", target: 25, suffix: "+" },
  { label: "Days Available / Week", target: 7, suffix: "" },
];

function Counter({ target, suffix }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const startTime = performance.now();

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-4xl font-semibold text-gold">
      {value}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-navy-deep text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-y-9 text-center sm:grid-cols-3 md:grid-cols-6 md:gap-6">
          {STATS.map((s) => (
            <div key={s.label}>
              <Counter target={s.target} suffix={s.suffix} />
              <div className="mt-1.5 text-sm text-white/75">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
