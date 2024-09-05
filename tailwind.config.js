/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner-image': "url('/src/Assets/Banner-Image/Banner.png')",
        'about-banner':"url('/src/Assets/Banner-Image/AboutusBnr.png')",
        'about-mobile':"url('/src/Assets/Banner-Image/aboutBnr.png')"

      }),
      fontFamily: {
        signika: ['Signika', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

