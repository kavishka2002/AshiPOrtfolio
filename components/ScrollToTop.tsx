"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`glass fixed bottom-7 right-7 z-[900] flex h-[46px] w-[46px] items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-pulse ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUp size={16} className="text-pulse" />
    </button>
  );
}
