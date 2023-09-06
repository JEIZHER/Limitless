/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'pic01': "url('assets/pic01.jpg')",
        'intro':"url('assets/intro.svg')"
      }
    },
  },
  plugins: [],
}

