/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Social:'hsl(149,26,17)',
        social:'hsl(142,36,22)',
      }
    },
  },
  plugins: [],
}