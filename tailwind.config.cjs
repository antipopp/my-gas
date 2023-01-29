/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      brand: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      primary: '#ef4444',
      secondary: '#fff',
      error: '#b91c1c',
      info: '#3b82f6',
      success: '#10b981',
      warning: '#f59e0b',
      white: colors.white,
      black: colors.black,
      gray: colors.slate,
      blue: colors.blue,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
    },
    extend: {},
    variants: {},
    plugins: [],
  },
};
