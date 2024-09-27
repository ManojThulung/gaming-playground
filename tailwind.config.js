/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Barlow"', "sans-serif"],
        condensed: ['"Barlow Condensed"', "sans-serif"],
      },
      screens: {
        xs: "460px",
      },
      colors: {
        primary: "#6357F6",
        secondary: "#E6606C",
      },
    },
  },
  plugins: [],
};
