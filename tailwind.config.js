/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #C7FF00",
        secondary: "#F2F2F2",
      },
      margin: {
        "63px": "63px",
      },

      padding: {
        "70px": "70px",
      },

      gridTemplateColumns: {
        "skills-grid": "repeat(2, 1fr)",
      },
    },
  },
  plugins: [],
};
