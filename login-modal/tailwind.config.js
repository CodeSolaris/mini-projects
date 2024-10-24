/* eslint-disable unicorn/prefer-module */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',

  theme: {
    fontFamily: {
      sans:['Mulish', 'sans-serif'],
      mono: ['Rokkitt', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}