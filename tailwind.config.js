/* eslint-env node */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {  
        poppins: ['Poppins', 'serif'], 
        hind_siliguri: ['Hind Siliguri', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': 'black',
        'secondary': '#EF4136',
        'tertiary': '#3C0404',
        'fourth': '#300303',
        'fifth': '#6C1F0E',
        'satori': '#C3342B',
      },
    },
  },
}
