module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      libre: "Libre\\ Baskerville, serif",
      playfair: "Playfair\\ Display, serif",
      dancing: "Dancing\\ Script, cursive",
    },
    extend: {},
  },
  plugins: ["postcss-import", "tailwindcss", "autoprefixer"],
};
