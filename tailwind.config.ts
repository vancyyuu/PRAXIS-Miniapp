// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'praxis-bg-dark': {
          '50': '#f7f7f7',
          '100': '#e6e6e6',
          '200': '#d9d9d9', // Slightly lighter for main text
          '300': '#c2c2c2',
          '400': '#a8a8a8',
          '500': '#8f8f8f',
          '600': '#767676',
          '700': '#5d5d5d',
          '800': '#444444',
          '900': '#2b2b2b',
          '950': '#1c1c1c', // A tiny bit lighter for background
        },
        'praxis-bg-light': {
          '50': '#171717',
          '100': '#262626',
          '200': '#323232',
          '300': '#414141',
          '400': '#525252',
          '500': '#696969',
          '600': '#888888',
          '700': '#b0b0b0',
          '800': '#d0d0d0',
          '900': '#e7e7e7',
          '950': '#f5f5f5',
        },
        'praxis-blue': {
          '50': '#eef2ff',
          '100': '#e0e7ff',
          '200': '#c7d2fe',
          '300': '#a5b4fc',
          '400': '#818cf8',
          '500': '#6366f1',
          '600': '#4f46e5',
          '700': '#4338ca',
          '800': '#3730a3',
          '900': '#312e81',
          '950': '#1e1b4b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}