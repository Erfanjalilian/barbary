"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "تعداد سرویس موفق", value: 6525 },
  { label: "تعداد مشتری راضی", value: 4320 },
  { label: "سال تجربه", value: 12 },
  { label: "منطقه‌های تحت پوشش", value: 22 },
];

function AnimatedNumber({ target, duration = 1800 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let startTime: number | null = null;

    const step = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      }
    };

    rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafId);
  }, [target, duration]);

  return <span>{value.toLocaleString("fa-IR")}</span>;
}

export function StatsCounter() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-orange-500 py-16 text-white lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[28px] border border-white/20 bg-orange-600/15 p-6 text-center shadow-[0_20px_45px_rgba(194,65,12,0.2)] backdrop-blur-sm">
              <div className="text-4xl font-black leading-none md:text-5xl">
                {isVisible ? <AnimatedNumber target={item.value} /> : 0}
              </div>
              <p className="mt-4 text-sm font-medium text-orange-50 md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
