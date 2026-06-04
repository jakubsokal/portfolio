import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
          canvas: "#F3F6F8",
          "canvas-secondary": "#EEF3F6",
          ink: "#0F1720",
          "ink-secondary": "#475569",
          "ink-tertiary": "#94A3B8",
        night: "#080D16",
        "night-secondary": "#0F1824",
        "night-border": "#1E2C3F",
        "night-text": "#C8D4E3",
        "night-secondary-text": "#7A8EA6",
        amber: {
          DEFAULT: "#D48800",
          dark: "#B36B00",
          glow: "rgba(212,136,0,0.07)",
        },
        border: {
          light: "#E6EDF3",
          dark: "#1E2C3F",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "cursor-blink": "cursorBlink 1s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
