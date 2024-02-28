/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'cor-branco' :'#F3F5F9',
        'cor-amarelo' : '#fffbf2',
        'cor-marrom' :'#584d39',
        'cor-azul' : '#3167D9',
        'cor-azul-secundaria': '#68aec7',
        "cor-azul-bg": "#F3F5F9"
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in-out',
        'slideInLeft': 'slide-in-fwd-left .5s ease-in-out'
      },
      fontFamily: {
        'poppins' : ['Poppins','Arial'],
      }
      
    },
  },
  plugins: [],
}