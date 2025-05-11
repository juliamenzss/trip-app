/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc97c2', 
        secondary: '#c77daf',
        background: '#f4efec',
        text: '#1F2937', 
        redColor: '#F85572', 
      },
    },
  },
  plugins: [],
}
