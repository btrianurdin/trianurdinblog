import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { FiSun, FiMoon } from 'react-icons/fi';

export default function DarkModeToggle(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const [defTheme, setDefTheme] = useState('light');

  useEffect(() => {
    setDefTheme(`${theme}`);
  }, [theme]);

  return (
    <button
      type="button"
      className={`w-10 flex justify-center items-center h-10 p-1 rounded-full cursor-pointer ${defTheme === 'light' ? 'bg-dark-primary' : 'bg-light-primary'}`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      { defTheme === 'light' ? <FiSun className="w-5 h-5 text-light-primary" /> : <FiMoon className="w-5 h-5 text-dark-primary" />}
    </button>
  );
}
