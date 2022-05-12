module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
  plugins: ["postcss-import", "tailwindcss", "autoprefixer"],
};
