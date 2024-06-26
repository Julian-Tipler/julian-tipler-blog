import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: "#FFBE18",
        bg: { 400: " #F9F9F9", 500: "#FAF3DD" },
        primary: {
          50: "#E3F4FE", // Lightest
          100: "#C6E7FE", // Lighter
          200: "#A9DAFD", // Light
          300: "#8CCDFD", // Primary Light
          400: "#6FC0FD", // Primary Light
          500: "#7CC6FE", // Primary (brand)
          600: "#5EA4E6", // Darker
          700: "#4983C0", // Darker
          800: "#35639A", // Darker
          900: "#224274", // Darkest
          border: "#E4E5E6",
          text: {
            light: "#717476",
          },
        },
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
export default config;
