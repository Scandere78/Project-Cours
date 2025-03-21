/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          'anton': ['Anton', 'sans-serif'],
          'montserrat': ["Montserrat", "sans-serif"],
        },
      },
    },
    plugins: [],
  };