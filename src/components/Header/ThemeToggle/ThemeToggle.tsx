import { useState } from 'react';

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      className='text-2xl m-2 outline-none data-[focus-visible]:outline-2 data-[focus-visible]:outline-slate-100 data-[focus-visible]:outline-solid'
      onClick={() => {
        setDarkMode(!darkMode);
        if (darkMode) {
          document.documentElement.classList.remove('dark');
        } else {
          document.documentElement.classList.add('dark');
        }
      }}
    >
      {darkMode ? (
        <span className='fill-yellow-500'>🌞</span>
      ) : (
        <span className='text-gray-800'>🌙</span>
      )}
    </button>
  );
};
