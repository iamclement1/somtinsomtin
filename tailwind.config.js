module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': "sans-serif",
      'roboto': [ "Roboto", 'sans-serif']
    },
    extend: {
      colors: {
        "dark-red": "#8b0000",
        "light-white": "rgba(255,255,255,0.18)",
        "dark-purple": "#081a51",
      },
    },
  },
  plugins: [],
}