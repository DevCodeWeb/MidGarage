/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "300px", max: "428px" },
      md: { min: "429px", max: "799px" },
      lg: { min: "800px", max: "1279px" },
      xl: { min: "1280px", max: "1439px" },
      xxl: "1440px",
    },
    colors: {
      black: "#292929",
      blue: "#0F647D",
      white: "#ececec",
      red: "#A7001E",
    },
    extend: {
      backgroundImage: {
        headView: "url('/assets/headView.png')",
        team: "url('/assets/team.png')",
      },
    },
  },
  plugins: [],
};
