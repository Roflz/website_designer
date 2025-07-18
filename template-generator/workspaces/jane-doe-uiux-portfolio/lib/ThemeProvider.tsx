"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { PALETTES, DEFAULT_PALETTE, type Palette } from './palettes';

interface ThemeContextType {
  currentTheme: string;
  setTheme: (themeId: string) => void;
  currentPalette: Palette;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_PALETTE);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const currentPalette = PALETTES.find(p => p.id === currentTheme) || PALETTES[0];

  const setTheme = (themeId: string) => {
    const palette = PALETTES.find(p => p.id === themeId);
    if (palette) {
      // Remove all existing theme classes
      PALETTES.forEach(p => {
        document.documentElement.classList.remove(`theme-${p.id}`);
      });
      // Add the selected theme class
      document.documentElement.classList.add(`theme-${themeId}`);
      setCurrentTheme(themeId);
      localStorage.setItem('color-palette', themeId);
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('dark-mode', newDarkMode.toString());
  };

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('color-palette') || DEFAULT_PALETTE;
    setTheme(savedTheme);

    // Initialize dark mode from localStorage
    const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedDarkMode);
    document.documentElement.classList.toggle('dark', savedDarkMode);
  }, []);

  const value: ThemeContextType = {
    currentTheme,
    setTheme,
    currentPalette,
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider; 