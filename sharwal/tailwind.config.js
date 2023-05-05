/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
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
        mySecondary: "#F3B73E",
        myPrimary: "#3B8457",
        myRed: "#B94429",
        myWhite: "#F5F5DA",
      },
      screens: {
        "1300px": "1300px",
        "1100px": "1100px",
        "1000px": "1000px",
        "800px": "800px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
