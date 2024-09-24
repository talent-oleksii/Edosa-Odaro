/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-person": "url('/src/assets/images/home.png')",
      },
      colors: {
        "def-color": "#F3F8FE",
        "text-color": "#475467",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
