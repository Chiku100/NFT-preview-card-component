/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'body': ['Outfit', 'sans-serif'],
    },
    extend: {
      colors: {
        'regal-blue': 'hsl(216, 50%, 16%)',
      },
    },
  },
  plugins: [],
}
