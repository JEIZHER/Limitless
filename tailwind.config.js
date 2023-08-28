/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'pic01': "url('pic01.jpg')",
      }
    },
  },
  plugins: [],
}

