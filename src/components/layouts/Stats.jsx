import { useEffect, useRef, useState } from "react";
import Container from "../Container";

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
    <div ref={ref} className="font-display text-5xl font-light text-gold md:text-6xl">
      {value}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-navy-deep py-20">
      <Container>
        <div className="grid grid-cols-2 gap-y-16 text-center md:grid-cols-3 lg:grid-cols-6 lg:gap-0">
          {/* stat 1 */}
          <div className="flex flex-col items-center justify-center border-white/10 lg:border-r">
            <Counter target={1200} suffix="" />
            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-white/50">
              happy customers
            </div>
          </div>
          {/* stat 2 */}
          <div className="flex flex-col items-center justify-center border-white/10 lg:border-r">
            <Counter target={94} suffix="%" />
            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-white/50">
              goals achieved
            </div>
          </div>
          {/* stat 3 */}
          <div className="flex flex-col items-center justify-center border-white/10 lg:border-r">
            <Counter target={98} suffix="%" />
            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-white/50">
              patient satisfaction
            </div>
          </div>
          {/* stat 4 */}
          <div className="flex flex-col items-center justify-center border-white/10 lg:border-r">
            <Counter target={40} suffix="+" />
            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-white/50">
              conditions treated
            </div>
          </div>
          {/* stat 5 */}
          <div className="flex flex-col items-center justify-center border-white/10 lg:border-r">
            <Counter target={25} suffix="+" />
            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-white/50">
              years experience
            </div>
          </div>
          {/* stat 6 */}
          <div className="flex flex-col items-center justify-center">
            <Counter target={7} suffix="" />
            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-white/50">
              days available / wk
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}