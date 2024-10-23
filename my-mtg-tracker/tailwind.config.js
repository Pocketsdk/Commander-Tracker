/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },

      gridTemplateColumns: {
        "70/30": "70% 30%",
      },
    },
  },
  plugins: [],
};
