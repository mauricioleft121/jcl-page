import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 500, suffix: "+", label: "Empilhadeiras Vendidas" },
  { target: 15, suffix: "", label: "Anos de Experiência" },
  { target: 98, suffix: "%", label: "Clientes Satisfeitos" },
];

const useCountUp = (target: number, isVisible: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return count;
};

const StatsStrip = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="h-[110px] bg-dark flex items-center">
      <div className="container grid grid-cols-3 text-center">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} isVisible={visible} />
        ))}
      </div>
    </section>
  );
};

const StatItem = ({ target, suffix, label, isVisible }: { target: number; suffix: string; label: string; isVisible: boolean }) => {
  const count = useCountUp(target, isVisible);
  return (
    <div>
      <p className="text-yellow font-bold text-[28px]">{count}{suffix}</p>
      <p className="text-yellow/80 font-medium text-[13px]">{label}</p>
    </div>
  );
};

export default StatsStrip;
