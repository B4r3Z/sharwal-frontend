/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshiReg: ["SatoshiReg", "sans-serif"],
        satoshiMid: ["SatoshiMid", "sans-serif"],
        satoshiBlk: ["SatoshiBlk", "sans-serif"],
        satoshiBold: ["SatoshiBold", "sans-serif"],
        dentonReg: ["DentonReg", "modern-serif"],
        dentonRegItalic: ["DentonRegItalic", "modern-serif"],
        dentonBold: ["DentonBold", "modern-serif"],
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
