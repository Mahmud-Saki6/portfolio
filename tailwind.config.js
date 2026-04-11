/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          bg: "#080c14",
          surface: "#0d1220",
          "card-solid": "#111827",
          neon: "#00ffaa",
          purple: "#a855f7",
          cyan: "#22d3ee",
        },
      },
      boxShadow: {
        "glow-neon": "0 0 20px rgba(0, 255, 170, 0.45)",
        "glow-purple": "0 0 24px rgba(168, 85, 247, 0.45)",
        "glow-cyan": "0 0 16px rgba(34, 211, 238, 0.45)",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #00ffaa 0%, #22d3ee 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #a855f7 0%, #00ffaa 100%)",
        "gradient-title":
          "linear-gradient(90deg, #00ffaa 0%, #a855f7 55%, #22d3ee 100%)",
        "gradient-skill": "linear-gradient(90deg, #00ffaa 0%, #22d3ee 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
