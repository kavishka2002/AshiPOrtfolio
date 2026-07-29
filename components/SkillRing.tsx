"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function SkillRing({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [pct, setPct] = useState(0);
  const r = 20;
  const circumference = 2 * Math.PI * r;

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = () => {
      cur += 2;
      if (cur < level) {
        setPct(cur);
        requestAnimationFrame(step);
      } else {
        setPct(level);
      }
    };
    step();
  }, [inView, level]);

  return (
    <div
      ref={ref}
      className="tilt glass p-5 text-center transition-transform duration-300 hover:-translate-y-2 hover:border-pulse"
    >
      <div className="relative mx-auto mb-3.5 h-[76px] w-[76px]">
        <svg viewBox="0 0 44 44" className="h-full w-full -rotate-90">
          <circle cx={22} cy={22} r={r} fill="none" strokeWidth={6} className="stroke-glassBrd" />
          <circle
            cx={22}
            cy={22}
            r={r}
            fill="none"
            strokeWidth={6}
            strokeLinecap="round"
            className="stroke-pulse transition-[stroke-dashoffset] duration-[1.2s] ease-out"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * pct) / 100}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[13px] text-text0">
          {pct}%
        </div>
      </div>
      <div className="text-[13px] text-text1">{name}</div>
    </div>
  );
}
