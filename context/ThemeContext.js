import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const tema = {
    dark: isDarkMode,
    colors: {
      fundo: isDarkMode ? '#121212' : '#F0F2F5',
      card: isDarkMode ? '#1E1E1E' : '#FFFFFF',
      texto: isDarkMode ? '#FFFFFF' : '#333333',
      subtexto: isDarkMode ? '#A0A0A0' : '#666666',
      primaria: isDarkMode ? '#5C9DFF' : '#003399',
    }
  };

  return (
    <ThemeContext.Provider value={{ tema, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);