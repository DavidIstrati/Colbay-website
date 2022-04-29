module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'spaceGrotesk': ['"Space Grotesk"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('tailwindcss-neumorphism')],
}
