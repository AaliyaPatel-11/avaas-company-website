import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        avaas: {
          dark: "#060A14",
          navy: "#0B1528",
          navyLight: "#13223D",
          slate: "#1E293B",
          muted: "#64748B",
          border: "#E2E8F0",
          borderDark: "#1E293B",
          cream: "#FAF9F6",
          light: "#F8FAFC",
          blue: {
            DEFAULT: "#2563EB",
            hover: "#1D4ED8",
            light: "#EFF6FF",
            muted: "#DBEAFE",
            dark: "#1E40AF",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "wave-bar": "wave 1.2s ease-in-out infinite alternate",
      },
      keyframes: {
        wave: {
          "0%": { height: "20%" },
          "100%": { height: "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
