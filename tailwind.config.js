/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      keyframes: {
        menuOpenAnimation: {
          "0%": { width: "56px" },
          "100%": { width: "100%" },
        },
        menuCloseAnimation: {
          "0%": { width: "100%" },
          "100%": { width: "56px" },
        },
      },
    },
  },
  plugins: [],
};
