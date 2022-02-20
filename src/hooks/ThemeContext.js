import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { firstTheme, secondTheme } from '../styles/theme';
const ThemeContext = createContext({});

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(firstTheme);

  const toggleTheme = useCallback(() => {
    if (theme.name === 'first') {
      setTheme(secondTheme);
    } else if (theme.name === 'second') {
      setTheme(firstTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
