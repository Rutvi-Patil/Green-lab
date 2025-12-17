import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // My Green Lab Color Palette
        "mgl-lime": "var(--mgl-lime)",
        "mgl-dark": "var(--mgl-dark)",
        "mgl-seafoam": "var(--mgl-seafoam)",
        "mgl-light-bg": "var(--mgl-light-bg)",
        "mgl-stats-green": "var(--mgl-stats-green)",
        "mgl-program-purple": "var(--mgl-program-purple)",
        "mgl-program-magenta": "var(--mgl-program-magenta)",
        "mgl-program-blue": "var(--mgl-program-blue)",
        "mgl-program-light-green": "var(--mgl-program-light-green)",
        "mgl-join-teal": "var(--mgl-join-teal)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia", "Times New Roman", "serif"],
      },
      animation: {
        "cta-bounce": "cta-bounce 0.35s ease-out",
        "float": "float 8s ease-in-out infinite",
        "join-float": "joinFloat 9s ease-in-out infinite",
        "join-drift-right": "joinDriftRight 18s ease-in-out infinite",
        "join-drift-down": "joinDriftDown 16s ease-in-out infinite",
        "fade-left": "fadeLeft 1s forwards",
        "fade-right": "fadeRight 1s forwards",
        "fade-up": "fadeUp 1s forwards",
      },
      keyframes: {
        "cta-bounce": {
          "0%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-2px)" },
          "60%": { transform: "translateY(1px)" },
          "100%": { transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "joinFloat": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "joinDriftRight": {
          "0%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(14px,-10px)" },
          "100%": { transform: "translate(0,0)" },
        },
        "joinDriftDown": {
          "0%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-10px,12px)" },
          "100%": { transform: "translate(0,0)" },
        },
        "fadeLeft": {
          "0%": { opacity: "0", right: "-40px" },
          "75%": { right: "0" },
          "100%": { opacity: "1", right: "0" },
        },
        "fadeRight": {
          "0%": { opacity: "0", left: "-40px" },
          "75%": { left: "0" },
          "100%": { opacity: "1", left: "0" },
        },
        "fadeUp": {
          "0%": { opacity: "0", top: "40px" },
          "75%": { top: "0" },
          "100%": { opacity: "1", top: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
