/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: {
        blackText: "#0A0A0A",
        grayText: "#404040",
        graaay: "#9E9E9E",
      },
    },
    screens: {
      start: "610px",
      note: "1070px",
      table: "1400px",
    },
  },
  plugins: [],
};
