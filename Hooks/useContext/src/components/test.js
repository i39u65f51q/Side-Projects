import React from 'react';
import { useTheme, useToggleTheme } from './Context';

const Test = () => {
  const darkTheme = useTheme();
  const toggleTheme = useToggleTheme();

  return (
    <div>
      <button
        className={` p-1 rounded ${darkTheme ? 'bg-slate-700' : 'bg-red-500'}`}
        onClick={toggleTheme}
      >
        Toggle
      </button>
      <p className={` p-2 my-2 ${darkTheme ? 'bg-slate-700' : 'bg-red-500'}`}>
        useContext ToggleTheme
      </p>
    </div>
  );
};

export default Test;
