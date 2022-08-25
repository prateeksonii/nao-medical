/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "TodaySansNow Pro",
      },
      spacing: {
        31: "31.74px",
        app: "414px",
      },
      colors: {
        text: "#1E3565",
      },
    },
  },
  plugins: [],
};
