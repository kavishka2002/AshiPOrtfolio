"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sectionIds = navItems.map((n) => n.href.replace("#", ""));

    const onScroll = () => {
      setShrink(window.scrollY > 60);
      let current = "home";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) current = id;
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`glass fixed left-1/2 top-5 z-[1000] flex max-w-[92vw] -translate-x-1/2 items-center gap-7 rounded-full transition-all duration-300 ${
          shrink ? "top-3 py-[7px] pl-[18px] pr-[7px]" : "py-[10px] pl-[22px] pr-[10px]"
        }`}
      >
        <div className="whitespace-nowrap font-mono text-sm text-pulse">AN.</div>

        <ul className="hidden gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative whitespace-nowrap rounded-full px-[15px] py-[9px] text-[13.5px] transition-colors ${
                    isActive ? "text-bg0" : "text-text1 hover:text-text0"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-pulse shadow-[0_0_18px_rgba(51,242,194,0.6)]" />
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="glass flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full"
          >
            {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="glass flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full md:hidden"
          >
            <Menu size={16} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-bg0 transition-transform duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute right-6 top-6 text-2xl text-text0"
          aria-label="Close menu"
        >
          <X size={26} />
        </button>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-2xl text-text0"
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
