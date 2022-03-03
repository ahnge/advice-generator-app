module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["'Manrope', sans-serif"],
      },
      boxShadow: {
        custom: "0px 0px 50px 5px",
      },
    },
  },
  plugins: [],
};
