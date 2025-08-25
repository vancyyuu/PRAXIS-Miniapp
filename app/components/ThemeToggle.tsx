// components/ThemeToggle.tsx
import { FaSun, FaMoon } from 'react-icons/fa';
import useTheme from '@/app/hooks/useTheme';

export default function ThemeToggle() {
  const [isDarkMode, toggleTheme] = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-praxis-blue-800 dark:text-praxis-blue-400 bg-praxis-bg-light-900 dark:bg-praxis-bg-dark-700 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}