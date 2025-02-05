/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors:{
        primary: '#f59e8b',
        secondary: '#ec4899'
      }
    },
  },
  plugins: [],
}

