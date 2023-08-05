/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
      
        primary : "#E8ECEB",
        primary2 : " #CED0D0",
        sectionTitle : "#2C3D4D",
        sectionParagraph : "#515C66",
        bgFooter:"#2C3D4D",
       
        dimWhite: "rgba(255, 255, 255, 0.7)",
       
        dimBlue: "rgba(9, 151, 124, 0.1)",
        border : "#D2C6C6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};