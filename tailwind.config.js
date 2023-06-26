const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", //Just in time compiler
  darkMode: "class", // or 'media' or 'class'
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
      },
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
