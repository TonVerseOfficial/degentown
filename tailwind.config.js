/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mario: ['SuperMario246', 'sans-serif'],
        bouncyBlue: ['BouncyBluePersonalBlue', 'sans-serif'],
        bouncyColor: ['BouncyBlueColor', 'sans-serif'],
      },
      colors: {
        'bblue': '#39B7EA',
      },

      backgroundColor: {
        'marquee-gray': 'rgba(37, 43, 59, 0.8)',
      },
    },
  },
  plugins: [],
}

