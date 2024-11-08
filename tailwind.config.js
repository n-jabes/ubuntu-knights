/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-shadow': 'pulse-shadow 1.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-shadow': {
          '0%, 100%': { boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 25px 10px rgba(255, 255, 255, 1)' },
        },
      },
      colors: {
        gray: {
          200: '#D5DAE1',
        },
        black: {
          DEFAULT: '#000',
          500: '#1D2235',
        },
        blue: {
          500: '#2b77e7',
        },
      },
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
