// Theme Library Type Definitions

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface Theme {
  id: string;
  name: string;
  type: 'bg' | 'fg';
  colors: ColorPalette;
  description?: string;
}

export interface Palette {
  id: string;
  name: string;
  description: string;
  bgThemes: Theme[];
  fgThemes: Theme[];
  preview: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface ThemeContextType {
  currentTheme: string;
  setTheme: (themeId: string) => void;
  currentPalette: Palette;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
} 