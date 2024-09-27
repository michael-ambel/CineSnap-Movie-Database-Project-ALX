/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        bg: '#100F10', 
        card: '#161616',
        card_black: '#070708',
        text_m: '#E4E4E4',
        text_main: '#FDFEF5',
        text_red: '#FF0E00',
        text_yelow: '#FFA800',
        green: '#4CBB17',
        inactive: '#797979',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
    },
  },
  plugins: [],
}