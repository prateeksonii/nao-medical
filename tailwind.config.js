/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "TodaySansNow Pro",
      },
      spacing: {
        36: "36px",
        31: "31.74px",
        15: "15px",
        24: "24px",
        app: "414px",
      },
      colors: {
        primary: "#1E3565",
        secondary: "#9AD08C",
        light: "#F3F3F3",
        safe: "#9ACF8C",
        unsafe: "#FF4D00",
      },
    },
  },
  plugins: [],
};
