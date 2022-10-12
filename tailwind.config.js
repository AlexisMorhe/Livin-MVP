/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'chillax': ['Chillax', 'system-ui', 'serif'],
        'rebond': ['rebond', 'system-ui', 'serif'],
        'domaine': ['Domaine Display Narrow Regular', 'serif'],
        'domaine-italic': ['Domaine Display Narrow Regular Italic', 'serif'],
        'domaine-medium': ['Domaine Display Narrow Medium', 'serif'],
        'domaine-medium-italic': ['Domaine Display Narrow Medium Italic', 'serif'],
        'domaine-semibold': ['Domaine Display Narrow Semibold', 'serif'],
        'domaine-semibold-italic': ['Domaine Display Narrow Semibold Italic', 'serif'],
        'domaine-bold': ['Domaine Display Narrow Bold', 'serif'],
        'domaine-bold-italic': ['Domaine Display Narrow Bold Italic', 'serif'],
        'domaine-extrabold': ['Domaine Display Narrow Extrabold', 'serif'],
        'domaine-extrabold-italic': ['Domaine Display Narrow Extrabold Italic', 'serif'],
        'domaine-black': ['Domaine Display Narrow Black', 'serif'],
        'domaine-black-italic': ['Domaine Display Narrow Black Italic', 'serif'],
      },
      colors: {
        'dark': 'rgb(28, 36, 48)',
        'bluey': 'rgb(73, 124, 146)',
        'off-white': 'rgb(244, 244, 244)',
        'darkblue': 'rgb(10, 78, 108)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}