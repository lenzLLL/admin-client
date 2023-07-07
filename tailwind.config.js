/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainColor: '#34495e',
        secondaryColor: '#F0F0F0',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
        linkColor:"#2980b9",
        gray:"#f1f1f1"
      
      },
      height:{
        minheight:"calc(100vh-80px)",
        420:"420px",
        370:"370px",
        80:"80px",
        60:"60px",
        520:"520px",
        50:"125px"
      },
      width:{
        620:"620px",
        60:"230px",
        100:"100px",
        400:"400px",
        250:"250px",
        500:"520px"
      },
    
      fontSize:{
        50:"50px",
        18:"18px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
