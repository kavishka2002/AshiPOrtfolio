"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf = 0;

    const handleMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
      if (spotRef.current) {
        spotRef.current.style.setProperty("--sx", `${mx}px`);
        spotRef.current.style.setProperty("--sy", `${my}px`);
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", handleMove);
    loop();

    const interactive = document.querySelectorAll("a, button, .tilt, .cert-card");
    const grow = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width = "54px";
      ringRef.current.style.height = "54px";
      ringRef.current.style.borderColor = "rgba(51,242,194,.8)";
    };
    const shrink = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width = "34px";
      ringRef.current.style.height = "34px";
      ringRef.current.style.borderColor = "rgba(124,92,255,.55)";
    };
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={spotRef}
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px circle at var(--sx,50%) var(--sy,50%), rgba(124,92,255,.10), transparent 70%)"
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pulse md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-[34px] w-[34px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple/60 transition-[width,height,border-color] duration-200 md:block"
      />
    </>
  );
}
