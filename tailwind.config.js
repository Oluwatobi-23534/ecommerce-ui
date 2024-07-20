/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        custom: "-8px 4px 12px rgba(0, 0, 0, 0.6)",
      },
      colors: {
        primary: "#8B0000", // Blood Red
        secondary: "#808080", // Gray
        brandYellow: "#FFD700", // Yellow
        brandGreen: "#008000", // Green
        brandBlue: "#0000FF", // Blue
        brandWhite: "#FFFFFF", // White
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
