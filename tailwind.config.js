/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#1E6F9F',
        'blue': '#4EA8DE',
        'purple-dark': '#5E60CE',
        'purple': '#8284FA',
        'my-gray-700': '#0D0D0D',
        'my-gray-600': '#1A1A1A',
        'my-gray-500': '#262626',
        'my-gray-400': '#333333',
        'my-gray-300': '#808080',
        'my-gray-200': '#D9D9D9',
        'my-gray-100': '#F2F2F2',
        'danger': '#E25858',
      },
      fontFamily: {
        inter: ['Inter', 'serif'],
      },
    },
  },
  plugins: [],
}