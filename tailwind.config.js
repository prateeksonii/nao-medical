/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "TodaySansNow Pro",
      },
      spacing: {
        app: "414px",
      },
      colors: {
        text: "#1E3565",
      },
    },
  },
  plugins: [],
};
