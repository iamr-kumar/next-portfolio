/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      dancingScript: ["Dancing Script", "cursive"],
      openSans: ["Open Sans", "sans-serif"],
    },
    letterSpacing: {
      tight: "-0.025em",
      normal: "0",
      wide: "0.05em",
      wider: "0.10em",
      widest: "0.20em",
    },
  },
  plugins: [],
};
