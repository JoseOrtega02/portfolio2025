/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
black:"#2C2C2C",
white:"#F7F7F7",
accent:"#5794F4"
    },
    fontFamily:{
      merriweatherSans:["Merriweather Sans", "serif"],
      istokWeb:["Istok Web","serif"],
      slabo:["Slabo 13px","serif"]
    },
    extend: {},
  },
  plugins: [],
}

