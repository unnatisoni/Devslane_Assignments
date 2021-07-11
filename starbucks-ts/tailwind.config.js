module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '9.5' : '38rem',
        '5.6' : '1.4rem',
        '6.4' : '1.6rem',
        '13' : "0.8125",
        '32' : '2rem'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'green' : "#1e3932"
       }),
       colors:{
         primary :{
           100 : "#f1f8f6",
           200 : "#d4e9e2",
           300 : "#008248",
           400 : "#1e3932",
         },
         pink : "#f3f1e7",
         gray : "rgba(0,0,0,.87)"
        
       },
       padding : {
         four_three : '133%'
       },
       fontFamily: {
         sans: "Helvetica Neue,Helvetica,Arial,sans-serif"
       },
       spacing: {
        '6.4' : '1.6rem',
        '72' : '4.5rem'
       },

      backgroundImage : {
        star : "url('https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg')",
        BigStar : "url('https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png')"
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
