"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-4 bg-bg0 transition-all duration-700 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <svg viewBox="0 0 300 60" className="h-10 w-32">
        <path
          d="M0,30 L60,30 L75,10 L95,50 L115,20 L130,30 L300,30"
          stroke="var(--pulse)"
          strokeWidth={2}
          fill="none"
          strokeDasharray={300}
          className="animate-[draw_1.4s_ease-in-out_infinite]"
        />
      </svg>
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-text2">
        Loading vitals…
      </div>
      <style jsx>{`
        @keyframes draw {
          0% {
            stroke-dashoffset: 300;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -300;
          }
        }
        path {
          stroke-dashoffset: 300;
        }
      `}</style>
    </div>
  );
}
