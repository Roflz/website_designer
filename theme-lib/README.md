# Theme Library

A comprehensive, reusable theme system for React applications with dynamic color palette switching, dark mode support, and CSS variable-based theming.

## Features

- 🎨 **6 Pre-built Color Palettes**: Blue/Purple, Yellow/Orange, Red/Pink, Teal/Cyan, Green, Rose/Orange
- 🌙 **Dark Mode Support**: Each palette has light and dark variants
- ⚡ **Instant Theme Switching**: Real-time color changes across the entire application
- 💾 **Persistent Storage**: Remembers user's theme preference
- 🎯 **CSS Variables**: Dynamic theming with CSS custom properties
- 🛠️ **TypeScript Support**: Full type safety and IntelliSense
- 📱 **Responsive Design**: Works seamlessly across all device sizes

## Quick Start

### 1. Import Theme CSS

Add the theme CSS to your project's global styles:

```css
/* In your globals.css or main CSS file */
@import '../theme-lib/src/theme.css';
```

### 2. Import and Use Components

```tsx
import { ColorPaletteSwitcher } from '../theme-lib/src';

function Header() {
  return (
    <header>
      <ColorPaletteSwitcher />
      {/* Your other header content */}
    </header>
  );
}
```

### 3. Use Theme Utility Classes

```tsx
function Button() {
  return (
    <button className="btn-primary">
      Primary Button
    </button>
  );
}

function Card() {
  return (
    <div className="card">
      <h2 className="gradient-text">Gradient Text</h2>
      <p className="text-primary">Primary colored text</p>
    </div>
  );
}
```

## Available Palettes

| Palette | Primary Colors | Light Background | Dark Background |
|---------|----------------|------------------|-----------------|
| Blue/Purple | Blue to Purple | Light Gray | Dark Blue |
| Yellow/Orange | Yellow to Orange | Light Yellow | Dark Gray |
| Red/Pink | Red to Pink | Light Red | Dark Gray |
| Teal/Cyan | Teal to Cyan | Light Teal | Dark Gray |
| Green | Green to Emerald | Light Green | Dark Gray |
| Rose/Orange | Rose to Orange | Light Rose | Dark Gray |

## Components

### ColorPaletteSwitcher

A dropdown component that allows users to switch between different color palettes.

```tsx
import { ColorPaletteSwitcher } from '../theme-lib/src';

<ColorPaletteSwitcher />
```

**Features:**
- Visual palette preview with color dots
- Dropdown menu with all available themes
- Automatic localStorage persistence
- Responsive design (hides "Theme" text on small screens)

## Utility Classes

### Text Colors
- `.text-primary` - Primary theme color
- `.gradient-text` - Gradient text using primary colors

### Backgrounds
- `.bg-primary` - Primary theme color background
- `.bg-gradient-primary` - Gradient background using primary colors
- `.bg-background` - Main background color
- `.bg-background-alt` - Alternative background color
- `.bg-gradient-background` - Gradient background
- `.bg-gradient-background-alt` - Alternative gradient background

### Borders
- `.border-primary` - Primary theme color border

## Component Classes

### Buttons
- `.btn-primary` - Primary button with gradient background
- `.btn-secondary` - Secondary button with transparent background and primary border

### Cards
- `.card` - Styled card with theme-aware background and border

## API Reference

### Palette Interface

```typescript
interface Palette {
  id: string;
  label: string;
  colors: {
    primary: string;
    secondary: string;
    bg: string;
    bgAlt: string;
    bgDark: string;
    bgAltDark: string;
  };
  className: string;
}
```

### Utility Functions

```typescript
// Apply a specific theme
applyTheme(themeId: string): void

// Get the currently active theme
getCurrentTheme(): string

// Initialize theme from localStorage
initializeTheme(): void

// Get palette by ID
getPaletteById(id: string): Palette | undefined

// Get default palette
getDefaultPalette(): Palette
```

## Customization

### Adding New Palettes

1. **Add to `palettes.ts`:**
```typescript
{
  id: 'custom-theme',
  label: 'Custom Theme',
  colors: {
    primary: '#your-primary-color',
    secondary: '#your-secondary-color',
    bg: '#your-light-bg',
    bgAlt: '#your-light-alt-bg',
    bgDark: '#your-dark-bg',
    bgAltDark: '#your-dark-alt-bg',
  },
  className: 'bg-gradient-to-r from-[#your-primary] to-[#your-secondary]'
}
```

2. **Add CSS variables to `theme.css`:**
```css
.theme-custom-theme {
  --color-primary-from: #your-primary-color;
  --color-primary-to: #your-secondary-color;
  --color-primary-from-rgb: r, g, b;
  --color-primary-to-rgb: r, g, b;
  --color-bg-from: #your-light-bg;
  --color-bg-to: #your-light-bg-gradient;
  --color-bg-alt-from: #your-light-alt-bg;
  --color-bg-alt-to: #your-light-alt-bg-gradient;
}
.dark.theme-custom-theme {
  --color-bg-from: #your-dark-bg;
  --color-bg-to: #your-dark-bg-gradient;
  --color-bg-alt-from: #your-dark-alt-bg;
  --color-bg-alt-to: #your-dark-alt-bg-gradient;
}
```

### Customizing Component Styles

Override the component classes in your project's CSS:

```css
/* Custom button styles */
.btn-primary {
  @apply text-white font-bold py-3 px-6 rounded-full;
  background-image: linear-gradient(to right, var(--color-primary-from), var(--color-primary-to));
}

/* Custom card styles */
.card {
  @apply rounded-2xl shadow-2xl p-8;
  background-color: var(--color-bg-alt-from) !important;
  border: 2px solid rgba(var(--color-primary-from-rgb), 0.2) !important;
}
```

## How to Add Your Brand Colors (Custom Palette)

You can easily add your own brand colors to the palette switcher by editing a single file and adding a CSS class.

### 1. Open `theme-lib/src/palettes.ts`

At the top, you’ll find a template and instructions. Just copy the template and add your palette to the `PALETTES` array.

#### Example: Add a Custom Palette
Paste this object into the `PALETTES` array (either as a background or foreground theme):

```typescript
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
}
```
- Change the colors to match your brand.
- Use a unique `id` (e.g., `bg-yourbrand` or `fg-yourbrand`).
- `className` is for the gradient preview in the palette switcher.
- `bgTheme` or `fgTheme` should match a CSS class in your theme.css (see next step).

### 2. Add the CSS Class for Your Theme

In `theme-lib/src/theme.css`, add:

```css
.bg-theme-mybrand {
  --color-bg-from: #f7fff7;
  --color-bg-to: #e0fbfc;
  --color-bg-alt-from: #e0fbfc;
  --color-bg-alt-to: #b2f7ef;
}
.dark.bg-theme-mybrand {
  --color-bg-from: #22223b;
  --color-bg-to: #4a4e69;
  --color-bg-alt-from: #4a4e69;
  --color-bg-alt-to: #9a8c98;
}
```
- The class name must match the `bgTheme` or `fgTheme` property in your palette object.
- These CSS variables control the actual background colors for your theme.

### 3. Save and Restart

After saving, restart your dev server. Your new palette will appear in the palette switcher and apply your custom colors!

## Integration Examples

### Next.js Project

```