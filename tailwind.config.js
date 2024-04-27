/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      franklin: ["Libre Franklin", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      cursive: ["Cedarville Cursive", "cursive"],
      
    },
 
  
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "synthwave"],
  },
}

