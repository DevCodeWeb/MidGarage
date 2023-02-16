/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: { max: "428px" },
      sm: { min: "429px", max: "799px" },
      md: { min: "800px", max: "1279px" },
      lg: { min: "1280px", max: "1919px" },
      xl: { min: "1920px", max: "2560px" },
      xxl: "2561px",
    },
    colors: {
      black: "#292929",
      blue: "#0f777d",
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
