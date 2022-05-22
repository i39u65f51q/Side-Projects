import React, { useContext, useState } from 'react';

// darkTheme of useState
const ThemeContext = React.createContext();
//Customize Hook return 'ThemeContext'
export function useTheme() {
  return useContext(ThemeContext);
}
// ToggleThem Function
const ThemeUpdatedContext = React.createContext();
//Customize Hook return 'ThemeUpdatedContext'
export function useToggleTheme() {
  return useContext(ThemeUpdatedContext);
}

const UseContext = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    return setDarkTheme(function (prev) {
      return (prev = !prev);
    });
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdatedContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdatedContext.Provider>
    </ThemeContext.Provider>
  );
};
export default UseContext;
