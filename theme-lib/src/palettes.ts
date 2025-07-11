/**
 * =============================
 *  HOW TO ADD YOUR BRAND COLORS
 * =============================
 *
 * 1. Copy the template below.
 * 2. Paste it into the PALETTES array (below the existing palettes).
 * 3. Change the id, label, and color values to match your brand.
 * 4. Save and restart the dev server to see your new palette in the switcher!
 *
 * ---
 * Example Palette Template:
 * {
 *   id: 'yourbrand',
 *   label: 'Your Brand',
 *   type: 'background' | 'foreground',
 *   colors: {
 *     primary: '#HEX',
 *     secondary: '#HEX',
 *     bg: '#HEX',
 *     bgAlt: '#HEX',
 *     bgDark: '#HEX',
 *     bgAltDark: '#HEX',
 *   },
 *   className: 'bg-gradient-to-r from-... to-...',
 *   bgTheme?: 'bg-theme-yourbrand', // for background themes
 *   fgTheme?: 'fg-theme-yourbrand', // for foreground themes
 * },
 *
 * - Use a unique id (e.g., 'bg-yourbrand' or 'fg-yourbrand').
 * - Pick colors that match your brand (use https://coolors.co or similar tools).
 * - className is for the gradient preview in the palette switcher.
 * - bgTheme/fgTheme should match a CSS class in your theme.css (optional for advanced users).
 *
 * Need help? Contact the developer or see the README for more info.
 */

export interface Palette {
  id: string;
  label: string;
  type: 'background' | 'foreground';
  colors: {
    primary: string;
    secondary: string;
    bg: string;
    bgAlt: string;
    bgDark: string;
    bgAltDark: string;
  };
  className: string;
  bgTheme?: string;
  fgTheme?: string;
}

export const PALETTES: Palette[] = [
  // Background Themes
  {
    id: 'bg-neutral',
    label: 'Neutral',
    type: 'background',
    colors: {
      primary: '#2563eb',
      secondary: '#a21caf',
      bg: '#f9fafb',
      bgAlt: '#f3f4f6',
      bgDark: '#111827',
      bgAltDark: '#1f2937',
    },
    className: 'bg-gradient-to-r from-gray-400 to-gray-600',
    bgTheme: 'bg-theme-neutral'
  },
  {
    id: 'bg-warm',
    label: 'Warm',
    type: 'background',
    colors: {
      primary: '#2563eb',
      secondary: '#a21caf',
      bg: '#fefce8',
      bgAlt: '#fef9c3',
      bgDark: '#1a1813',
      bgAltDark: '#232016',
    },
    className: 'bg-gradient-to-r from-yellow-300 to-orange-300',
    bgTheme: 'bg-theme-warm'
  },
  {
    id: 'bg-mybrand',
    label: 'My Brand',
    type: 'background',
    colors: {
      primary: '#ff6f61',      // Your brand's main color
      secondary: '#2ec4b6',    // Your brand's accent color
      bg: '#f7fff7',           // Light background
      bgAlt: '#e0fbfc',        // Light alt background
      bgDark: '#22223b',       // Dark background
      bgAltDark: '#4a4e69',    // Dark alt background
    },
    className: 'bg-gradient-to-r from-pink-400 to-teal-400',
    bgTheme: 'bg-theme-mybrand'
  },
  {
    id: 'bg-cool',
    label: 'Cool',
    type: 'background',
    colors: {
      primary: '#2563eb',
      secondary: '#a21caf',
      bg: '#f0fdf4',
      bgAlt: '#ecfdf5',
      bgDark: '#142019',
      bgAltDark: '#1c2a22',
    },
    className: 'bg-gradient-to-r from-green-300 to-teal-300',
    bgTheme: 'bg-theme-cool'
  },
  {
    id: 'bg-soft',
    label: 'Soft',
    type: 'background',
    colors: {
      primary: '#2563eb',
      secondary: '#a21caf',
      bg: '#fdf2f8',
      bgAlt: '#fdf2f8',
      bgDark: '#18181b',
      bgAltDark: '#232326',
    },
    className: 'bg-gradient-to-r from-pink-300 to-purple-300',
    bgTheme: 'bg-theme-soft'
  },

  // Foreground Themes
  {
    id: 'fg-blue',
    label: 'Blue',
    type: 'foreground',
    colors: {
      primary: '#2563eb',
      secondary: '#a21caf',
      bg: '#f9fafb',
      bgAlt: '#f3f4f6',
      bgDark: '#111827',
      bgAltDark: '#1f2937',
    },
    className: 'bg-gradient-to-r from-blue-500 to-purple-600',
    fgTheme: 'fg-theme-blue'
  },
  {
    id: 'fg-green',
    label: 'Green',
    type: 'foreground',
    colors: {
      primary: '#22c55e',
      secondary: '#059669',
      bg: '#f9fafb',
      bgAlt: '#f3f4f6',
      bgDark: '#111827',
      bgAltDark: '#1f2937',
    },
    className: 'bg-gradient-to-r from-green-500 to-emerald-600',
    fgTheme: 'fg-theme-green'
  },
  {
    id: 'fg-orange',
    label: 'Orange',
    type: 'foreground',
    colors: {
      primary: '#f97316',
      secondary: '#ea580c',
      bg: '#f9fafb',
      bgAlt: '#f3f4f6',
      bgDark: '#111827',
      bgAltDark: '#1f2937',
    },
    className: 'bg-gradient-to-r from-orange-500 to-red-600',
    fgTheme: 'fg-theme-orange'
  },
  {
    id: 'fg-red',
    label: 'Red',
    type: 'foreground',
    colors: {
      primary: '#ef4444',
      secondary: '#dc2626',
      bg: '#f9fafb',
      bgAlt: '#f3f4f6',
      bgDark: '#111827',
      bgAltDark: '#1f2937',
    },
    className: 'bg-gradient-to-r from-red-500 to-pink-600',
    fgTheme: 'fg-theme-red'
  },
  {
    id: 'fg-purple',
    label: 'Purple',
    type: 'foreground',
    colors: {
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      bg: '#f9fafb',
      bgAlt: '#f3f4f6',
      bgDark: '#111827',
      bgAltDark: '#1f2937',
    },
    className: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    fgTheme: 'fg-theme-purple'
  },
  {
    id: 'fg-teal',
    label: 'Teal',
    type: 'foreground',
    colors: {
      primary: '#14b8a6',
      secondary: '#0d9488',
      bg: '#f9fafb',
      bgAlt: '#f3f4f6',
      bgDark: '#111827',
      bgAltDark: '#1f2937',
    },
    className: 'bg-gradient-to-r from-teal-500 to-cyan-600',
    fgTheme: 'fg-theme-teal'
  }
];

export const DEFAULT_BG_THEME = 'bg-neutral';
export const DEFAULT_FG_THEME = 'fg-blue';

export const getPaletteById = (id: string): Palette | undefined => {
  return PALETTES.find(palette => palette.id === id);
};

export const getDefaultBgTheme = (): Palette => {
  return getPaletteById(DEFAULT_BG_THEME) || PALETTES[0];
};

export const getDefaultFgTheme = (): Palette => {
  return getPaletteById(DEFAULT_FG_THEME) || PALETTES[4];
};

export const getBackgroundThemes = (): Palette[] => {
  return PALETTES.filter(palette => palette.type === 'background');
};

export const getForegroundThemes = (): Palette[] => {
  return PALETTES.filter(palette => palette.type === 'foreground');
}; 