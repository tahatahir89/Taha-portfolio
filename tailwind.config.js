/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#05070D",
          panel: "#0A0F1C",
          card: "#0D1425",
          border: "#1B2740",
        },
        ink: {
          DEFAULT: "#EAF0FB",
          muted: "#93A1B8",
          dim: "#5C6B85",
        },
        signal: {
          DEFAULT: "#2F6BFF",
          bright: "#5C8DFF",
          glow: "#6FA8FF",
          deep: "#1638A8",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(47,107,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(47,107,255,0.07) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 0%), rgba(47,107,255,0.18), transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(47,107,255,0.25), 0 0 40px -10px rgba(47,107,255,0.55)",
        "glow-sm": "0 0 0 1px rgba(47,107,255,0.2), 0 0 18px -6px rgba(47,107,255,0.5)",
        "glow-purple": "0 0 0 2px rgba(168,85,247,0.55), 0 0 26px -4px rgba(168,85,247,0.75)",
        "glow-purple-lg": "0 0 0 3px rgba(168,85,247,0.5), 0 0 55px -10px rgba(168,85,247,0.8)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
