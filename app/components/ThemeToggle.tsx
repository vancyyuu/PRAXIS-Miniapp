// components/ThemeToggle.tsx
"use client";

import useTheme from '@/app/hooks/useTheme'; // <-- Update the path if needed
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-praxis-blue-800 hover:text-white transition-colors duration-300">
      {theme === 'dark' ? 
        <FaSun className="w-5 h-5 text-praxis-bg-dark-200" /> : 
        <FaMoon className="w-5 h-5 text-praxis-bg-light-200" />
      }
    </button>
  );
}