// src/ThemeContext.js
import { createContext, useState, useContext } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create the provider
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Optional: custom hook for easy access
export function useTheme() {
  return useContext(ThemeContext);
}
