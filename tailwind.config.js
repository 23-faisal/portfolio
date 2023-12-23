/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["Handjet", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],
        bodyFont: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
