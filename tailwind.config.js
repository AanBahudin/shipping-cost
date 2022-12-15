/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#4D6CFA',
        'dark': '#28262C',
        'heading_dark_one': '#A1A6B4',
        'heading_dark_two': '#DDE3E4',
        'heading_one': '#EAFFFD',
        'heading_two': '#FBFBFB'
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'play': ['Play', 'sans-serif']
      }
    },
  },
  plugins: [],
}