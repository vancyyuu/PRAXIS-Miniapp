import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // <-- New: Enable dark mode via a class
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'praxis-bg-dark': {
          '50': '#f5f5f5',
          '100': '#e7e7e7',
          '200': '#d0d0d0',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#696969',
          '600': '#525252',
          '700': '#414141',
          '800': '#323232',
          '900': '#262626',
          '950': '#171717',
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
export default config;
