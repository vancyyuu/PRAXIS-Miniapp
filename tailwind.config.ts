// tailwind.config.js
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'praxis-bg-light': {
          950: '#f8fafc',
          900: '#f1f5f9',
          800: '#e2e8f0',
          700: '#cbd5e1',
          600: '#94a3b8',
          500: '#64748b',
          400: '#475569',
          300: '#334155',
          200: '#1e293b',
          100: '#0f172a',
          50: '#020617',
        },
        'praxis-bg-dark': {
          950: '#111925',
          900: '#1b2837',
          800: '#2f3e4e',
          700: '#415264',
          600: '#758aa1',
          500: '#a3b6cc',
          400: '#e2e8f0', // Very light gray for descriptions
          300: '#e6e9ee',
          200: '#f0f4f9', // Very light gray for primary text
          100: '#f6f8fb',
          50: '#ffffff',
        },
        'praxis-blue': {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
    },
  },
  plugins: [],
};

export default config;