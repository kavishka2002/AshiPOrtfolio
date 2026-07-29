import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg0: "var(--bg-0)",
        bg1: "var(--bg-1)",
        bg2: "var(--bg-2)",
        navy: "var(--navy)",
        purple: "var(--purple)",
        purple2: "var(--purple-2)",
        pulse: "var(--pulse)",
        pulseDim: "var(--pulse-dim)",
        text0: "var(--text-0)",
        text1: "var(--text-1)",
        text2: "var(--text-2)",
        glassBrd: "var(--glass-brd)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"]
      },
      borderRadius: {
        card: "18px"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" }
        },
        blink: {
          "50%": { opacity: "0.25" }
        },
        spin: {
          to: { transform: "rotate(360deg)" }
        },
        pulseMove: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        blink: "blink 1.4s infinite",
        spinSlow: "spin 8s linear infinite",
        pulseMove: "pulseMove 7s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
