"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Activity, LayoutGrid, HeartPulse, Monitor, Clock } from "lucide-react";
import { typedWords, heroStats } from "@/lib/data";
import Counter from "@/components/Counter";

export default function Hero() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = typedWords[wordIndex];
      setDisplay(deleting ? word.slice(0, charIndex--) : word.slice(0, charIndex++));

      let delay = deleting ? 45 : 85;
      if (!deleting && charIndex === word.length + 1) {
        deleting = true;
        delay = 1400;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % typedWords.length;
        delay = 400;
      }
      timeout = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(timeout);
  }, []);

  const floatIcons = [
    { Icon: Activity, pos: "left-0 top-0" },
    { Icon: LayoutGrid, pos: "right-[-4%] top-[10%]" },
    { Icon: HeartPulse, pos: "left-[-8%] bottom-[14%]" },
    { Icon: Monitor, pos: "right-[6%] bottom-0" },
    { Icon: Clock, pos: "left-[-14%] top-[44%]" }
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center pb-20 pt-[140px]">
      <div className="container mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 px-8 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-glassBrd px-3.5 py-[7px] font-mono text-xs uppercase tracking-[0.12em] text-pulse">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-pulse shadow-[0_0_8px_var(--pulse)]" />
            Open to opportunities
          </div>
          <h1 className="mb-4 font-display text-[clamp(38px,6vw,68px)] leading-[1.03]">
            Ayesha
            <br />
            <span className="gradient-text">Nahalage</span>
          </h1>
          <div className="mb-5 h-6 font-mono text-base text-text1">
            I build for <span className="text-pulse">{display}</span>
            <span className="ml-0.5 inline-block w-0.5 animate-blink bg-pulse">&nbsp;</span>
          </div>
          <p className="mb-8 max-w-[490px] text-base leading-[1.8] text-text1">
            Health Information & Communication Technology undergraduate who designs and builds
            thoughtful digital interfaces — where clean frontend engineering meets real
            healthcare workflows.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="/cv%20(2).pdf"
              download="Ayesha-Nahalage-CV.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple to-pulseDim px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(124,92,255,0.6)] transition-transform hover:-translate-y-1"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-glassBrd px-6 py-3.5 text-sm font-semibold text-text0 transition-all hover:-translate-y-1 hover:border-pulse"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-11 flex gap-8 font-mono">
            {heroStats.map((s) => (
              <div key={s.label}>
                <Counter target={s.value} className="text-2xl font-semibold text-pulse" />
                <div className="text-[11px] uppercase tracking-[0.08em] text-text2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-[460px] items-center justify-center">
          <div className="relative h-[340px] w-[340px]">
            <div className="absolute inset-0 animate-spinSlow rounded-full bg-[conic-gradient(from_0deg,var(--purple),var(--pulse),var(--purple-2),var(--purple))]" />
            <div className="absolute inset-[3px] rounded-full bg-bg0 p-[10px]">
              <div className="relative h-full w-full overflow-hidden rounded-full border border-glassBrd bg-navy">
                <Image
                  src="/profile1.png"
                  alt="Ayesha Nahalage"
                  fill
                  priority
                  sizes="(min-width: 768px) 320px, 80vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
          {floatIcons.map(({ Icon, pos }, i) => (
            <div
              key={i}
              className={`glass absolute flex h-[52px] w-[52px] animate-float items-center justify-center rounded-2xl ${pos}`}
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <Icon size={22} className="text-pulse" strokeWidth={2} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.15em] text-text2">
        <span>SCROLL</span>
        <span className="h-[34px] w-px bg-gradient-to-b from-pulse to-transparent" />
      </div>
    </section>
  );
}
