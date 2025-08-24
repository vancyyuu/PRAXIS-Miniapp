// app/hooks/useTheme.ts
import { useState, useEffect } from 'react';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's system preference on initial load
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = storedTheme === 'dark' || (storedTheme === null && mediaQuery.matches);
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    // Apply the 'dark' class and save preference to localStorage
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return [isDarkMode, toggleTheme] as const;
};

export default useTheme;