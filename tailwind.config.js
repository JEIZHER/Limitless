/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'pic01': "url('/pic01.webp')",
        'intro':"url('/intro.svg')",
        'intro2':"url('/fondo-red.webp')"
      },
      colors: {
        primary: '#16425b',
        secundary: '#81c3d7',
        wall: '#d9dcd6',
        accent: '#05fdfe',
        extra: '#3a7ca5'
      }
    },
  },
  plugins: [],
}

