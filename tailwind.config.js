const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      libre: "Libre\\ Baskerville, serif",
      oleo: "Oleo\\ Script, cursive",
      satisfy: ["Satisfy", "cursive"],
      playfair: ['"Playfair Display"', "serif"],
      dancing: ['"Dancing Script"', "cursive"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}

