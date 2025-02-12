module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // This will ensure Tailwind can process your React files
    ],
    theme: {
      extend: {
        fontFamily: {
          custom: ['Lato'],
          custom2:['PolySans'],
        },
        colors: {
          primaryColor: '#12AF9B',
        },
      },
    },
    plugins: [],
  }
  