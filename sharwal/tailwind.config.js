/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshiReg: ["SatoshiReg", "sans-serif"],
        satoshiMid: ["SatoshiMid", "sans-serif"],
        satoshiBlk: ["SatoshiBlk", "sans-serif"],
        satoshiBold: ["SatoshiBold", "modern-sans"],
        dentonReg: ["DentonReg", "modern-sans"],
        dentonRegItalic: ["DentonRegItalic", "modern-sans"],
        dentonBold: ["DentonBold", "modern-sans"],
      },
      colors: {
        myYellow: "#F3B73E",
        myGreen: "#3B8457",
        myRed: "#B94429",
        myWhite: "#F5F5DA",
      },
    },
  },
  plugins: [],
};
