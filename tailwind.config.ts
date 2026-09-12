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
        // Charcoal: logo lettering, headings, circle outline — also doubles
        // as the dark section background (footer, CTA banner, page-hero band).
        ink: "#222629",
        charcoal: "#222629",
        navy: {
          // A lighter charcoal tint for layering dark elements (icon badges)
          // against the charcoal ink background — not in the brief's table,
          // derived to keep depth without introducing a new hue.
          DEFAULT: "#2E3337",
          soft: "#3B4146",
        },
        cream: "#F7F5F1",
        paper: "#FFFFFF",
        gold: {
          DEFAULT: "#9E2532",
          light: "#7D1D28",
        },
        slate: "#555B61",
        grey: "#8A8F93",
        line: "#E4E1DC",
      },
      fontFamily: {
        display: ["var(--font-libre-baskerville)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        h1: ["3.5rem", { lineHeight: "1.2" }], // 56px desktop
        "h1-mobile": ["2.25rem", { lineHeight: "1.2" }], // 36px mobile
        h2: ["2.5rem", { lineHeight: "1.2" }], // 40px desktop
        "h2-mobile": ["1.75rem", { lineHeight: "1.2" }], // 28px mobile
        h3: ["1.5rem", { lineHeight: "1.2" }], // 24px desktop
        "h3-mobile": ["1.375rem", { lineHeight: "1.2" }], // 22px mobile
        body: ["1.25rem", { lineHeight: "1.6" }], // 20px desktop (+2px)
        "body-mobile": ["1.125rem", { lineHeight: "1.6" }], // 18px mobile (+2px)
        nav: ["0.9375rem", { lineHeight: "1.4" }], // 15px desktop
        "nav-mobile": ["1rem", { lineHeight: "1.4" }], // 16px mobile
        btn: ["1rem", { lineHeight: "1.2" }], // 16px, both
        small: ["0.875rem", { lineHeight: "1.5" }], // 14px, both
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
