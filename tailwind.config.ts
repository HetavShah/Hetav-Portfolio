/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Noto Sans Devanagari', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
      colors: {
        brand: '#a3bc1a',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '1.5rem',
          lg: '3rem',
        },
      },
    },
  },
  plugins: [],
};
