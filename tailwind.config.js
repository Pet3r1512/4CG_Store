module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // account_bg: "url('./public/images/account_bg.png')",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      libre: ["Libre Baskerville", "serif"],
    },
  },
  plugins: [],
};
