/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // font family used
        monsterrat: ['var(--font-monsterrat)', ...fontFamily.sans],
      },
      colors: {
        // colors used
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96', // 240,86,199
        primaryDark: '#58E6D9', // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 30s linear 1s',
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px);',
      },
    },
  },
  plugins: [],
};
