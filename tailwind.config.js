module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      libre: "Libre\\ Baskerville, serif",
      playfair: "Playfair\\ Display, serif",
      dancing: "Dancing\\ Script, cursive",
    },
    extend: {},
  },
  plugins: ["postcss-import", "tailwindcss", "autoprefixer"],
};
