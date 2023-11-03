/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black1d: "#1D1D1D",
      },
      fontFamily: {
        inter: ["inter"],
        figtree: ["figtree"],
        roboto: ["roboto"],
        prata: ["Prata"],
      },
      boxShadow: {},
      backgroundImage: {
        'heroBg': "url('./assets/images/bg3.jpg')"
      }
    },
  },
  plugins: [],
}

