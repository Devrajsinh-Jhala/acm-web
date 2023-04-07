/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1E1E1E",
        secondary: "#0182AC",
        light: "#FAF9F6",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
