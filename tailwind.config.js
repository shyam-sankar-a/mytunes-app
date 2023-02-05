/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js, jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        deepBblack: "#000000",
        black: "#333333",
        offGrey: "#121213",
        red: "#E85353",
        white: "#FFFFFF",
        blue: "#18345E",
        question: "#312E81",
        gradientBlack: "#00040f",
        highlight: "#22c1dc"
      },
      fontFamily: {
        playfair: ["spectral", "serif"],
        opensans: ["Open Sans", "sans-serif"],
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
}
