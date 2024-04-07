/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  screens: {
    'sm': '600px',
    'md': '768px',
    'lg': '1100px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  theme: {
    extend: {},
    colors: {
      black: '#101012',
      light: '#1E1E1E',
      white: '#FFFFFF',
      primary: '#3366FF'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontWeight: {
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none'
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        '.unset-min-w': {
          'min-width': 'unset'
        },
      })
    })
  ],
}

