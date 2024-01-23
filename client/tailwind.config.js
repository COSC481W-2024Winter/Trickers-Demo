/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'custom-size' : '40px',
      },
      backgroundColor: {
        'custom-bg-color': '#ECE6C2',
      }
    },
  },
  plugins: [],
}

