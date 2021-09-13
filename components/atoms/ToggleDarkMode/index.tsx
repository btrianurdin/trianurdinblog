import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ToggleDarkMode(): JSX.Element {
  const { theme = 'light', setTheme } = useTheme();

  return (
    <div className="fixed top-5 right-5 md:top-12 md:right-12">
      {
        theme
        && (
        <button
          type="button"
          className={`w-10 flex justify-center items-center h-10 p-1 rounded-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-opacity-20 ${theme === 'light' ? 'bg-dark-primary focus:ring-dark-primary' : 'bg-light-primary focus:ring-light-primary'}`}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          { theme === 'light' ? <FiSun className="w-5 h-5 text-light-primary" /> : <FiMoon className="w-5 h-5 text-dark-primary" />}
        </button>
        )
      }
    </div>

  );
}
