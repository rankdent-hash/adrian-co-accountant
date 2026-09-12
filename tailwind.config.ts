import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1A2B",
        navy: {
          DEFAULT: "#16273F",
          soft: "#22364F",
        },
        cream: "#F7F4EE",
        paper: "#FFFFFF",
        gold: {
          DEFAULT: "#B08D57",
          light: "#D8C39A",
        },
        charcoal: "#1F2937",
        slate: "#4B5563",
        line: "#E4DFD3",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Desktop-first display scale from the build spec's type ramp.
        h1: ["3.5rem", { lineHeight: "4rem", letterSpacing: "-0.01em" }], // 56/64
        "h1-mobile": ["2.5rem", { lineHeight: "2.75rem", letterSpacing: "-0.01em" }],
        h2: ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.01em" }], // 36/44
        "h2-mobile": ["1.75rem", { lineHeight: "2.125rem" }],
        h3: ["1.5rem", { lineHeight: "1.75rem" }], // 24/28
        body: ["1.0625rem", { lineHeight: "1.7rem" }], // ~17px
        "body-lg": ["1.125rem", { lineHeight: "1.8rem" }], // ~18px
        eyebrow: ["0.8125rem", { lineHeight: "1.25rem", letterSpacing: "0.12em" }],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "10px",
      },
      spacing: {
        "gutter-mobile": "24px",
        "gutter-desktop": "80px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
