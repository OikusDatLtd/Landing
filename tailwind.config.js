module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // This will ensure Tailwind can process your React files
    ],
    theme: {
      extend: {
        fontFamily: {
          polysans: ['polysans', 'sans-serif'],
          lato:['lato','sans-serif'],
        },
        colors: {
          primaryColor: '#12AF9B',
        },
      },
    },
    plugins: [],
  }
  