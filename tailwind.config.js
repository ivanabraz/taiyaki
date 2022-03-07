const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'black-background': "url('https://firebasestorage.googleapis.com/v0/b/taiyaki-85b82.appspot.com/o/background-black.png?alt=media&token=5b236dda-a755-426e-9670-808d61aded0a')",
        'flying-taiyaki': "url('https://firebasestorage.googleapis.com/v0/b/taiyaki-85b82.appspot.com/o/background-flying-taiyaki.png?alt=media&token=7c6b6509-d71b-4f0a-afc2-dee30f64e163')",

      }
    },
  },
  plugins: [
  ],
}