/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        'extra': "5em",
        'circle' : "50%"
      },
    },
  },
  plugins: [],
}
