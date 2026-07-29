"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Counter({ target, className = "" }: { target: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = () => {
      cur += Math.max(1, target / 40);
      if (cur < target) {
        setValue(Math.floor(cur));
        requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };
    step();
  }, [inView, target]);

  return (
    <motion.div ref={ref} className={className}>
      {value}
    </motion.div>
  );
}
