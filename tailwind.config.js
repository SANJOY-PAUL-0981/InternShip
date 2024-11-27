/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontfira: ["Fira Code", "Arial", "sans-serif"],
        fontRal: ["Raleway", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}