import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        festivalBlack: "#0c0c0c",
        festivalGray: "#1a1a1a",
        festivalWhite: "#ffffff",
        festivalAccent: "#FF0050",
        festivalAccentWarm: "#FF6600",
        festivalAccentCyan: "#00D4FF",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
