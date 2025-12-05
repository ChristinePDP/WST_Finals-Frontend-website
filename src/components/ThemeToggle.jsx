import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-300 animate-spin-slow" strokeWidth={2.5} />
      ) : (
        <Moon size={20} className="text-white" strokeWidth={2.5} />
      )}
    </button>
  );
};

export default ThemeToggle;