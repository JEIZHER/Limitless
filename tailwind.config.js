/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'pic01': "url('asset/pic01.jpg')",
        'intro':"url('asset/intro.svg')"
      }
    },
  },
  plugins: [],
}

