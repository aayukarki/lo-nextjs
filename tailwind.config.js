/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1560px',
    },
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      fontFamily: {
        'articulat': ["articulat-cf", "sans-serif"],
        'articulat-heavy': ["articulat-heavy-cf", "sans-serif"],
        'lumios': ["lumios-brush", "sans-serif"],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#320873',
        'secondary': '#F33829',
        'quaternary': '#D5FAD7',
        'light': '#4B208D',
        'lightpurple': '#C8A9F9',
      },
    },
  },
  plugins: [],
};
