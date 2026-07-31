import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#58CCD0",
          light: "#CEF0F0",
          dark: "#2A1A1A",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "flow-progress": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "pulse-ring": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(88, 204, 208, 0.45)" },
          "50%": { boxShadow: "0 0 0 10px rgba(88, 204, 208, 0)" },
        },
        "grow-down": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "bounce-slow": "bounce 2.5s infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "flow-progress": "flow-progress 1.4s ease-out forwards",
        "pulse-ring": "pulse-ring 2.5s ease-in-out infinite",
        "grow-down": "grow-down 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
