# Theme Variables Guide

This document explains what each CSS variable in the theme system does and how it's used throughout the application.

## CSS Variable Overview

The theme system uses CSS custom properties (variables) to control colors, gradients, and backgrounds. Each variable has a specific purpose and affects different parts of the UI.

## Primary Color Variables

### `--color-primary-from`
- **Purpose**: The starting color for primary gradients and solid primary elements
- **Used for**: 
  - Button gradients (start color)
  - Text highlights
  - Border colors
  - Icon colors
- **Example**: `#2563eb` (blue)

### `--color-primary-to`
- **Purpose**: The ending color for primary gradients
- **Used for**: 
  - Button gradients (end color)
  - Gradient text effects
  - Primary gradient backgrounds
- **Example**: `#a21caf` (purple)

### `--color-primary-from-rgb`
- **Purpose**: RGB version of primary-from for opacity calculations
- **Used for**: 
  - Semi-transparent overlays
  - Border colors with opacity
  - Background colors with transparency
- **Example**: `37, 99, 235` (RGB values for blue)

### `--color-primary-to-rgb`
- **Purpose**: RGB version of primary-to for opacity calculations
- **Used for**: 
  - Gradient overlays with transparency
  - Semi-transparent gradient effects
- **Example**: `162, 28, 175` (RGB values for purple)

## Background Color Variables

### `--color-bg-from`
- **Purpose**: The main background color for the page and primary sections
- **Used for**: 
  - Main page background
  - Primary section backgrounds (Hero, Services, Testimonials, Contact)
  - Default card backgrounds
- **Example**: `#f8fafc` (light gray/white)

### `--color-bg-to`
- **Purpose**: The ending color for main background gradients
- **Used for**: 
  - Main page gradient backgrounds
  - Section gradient backgrounds
  - Subtle background variations
- **Example**: `#e0e7ef` (slightly darker gray)

### `--color-bg-alt-from`
- **Purpose**: The background color for alternate sections
- **Used for**: 
  - Alternate section backgrounds (About, Projects, Process)
  - Card backgrounds
  - Secondary content areas
- **Example**: `#f3f4f6` (slightly different gray)

### `--color-bg-alt-to`
- **Purpose**: The ending color for alternate background gradients
- **Used for**: 
  - Alternate section gradient backgrounds
  - Card gradient backgrounds
  - Secondary gradient effects
- **Example**: `#d1d5db` (darker gray for contrast)

## Dark Mode Variables

Each theme also has dark mode variants (`.dark.theme-*`) that override the light mode values:

### Dark Mode Background Variables
- `--color-bg-from`: Dark main background (e.g., `#10172a`)
- `--color-bg-to`: Dark main gradient end (e.g., `#1a2240`)
- `--color-bg-alt-from`: Dark alternate background (e.g., `#1a2240`)
- `--color-bg-alt-to`: Dark alternate gradient end (e.g., `#232c4d`)

## How Variables Are Applied

### 1. Utility Classes
The theme system provides utility classes that use these variables:

```css
.bg-background {
  background-color: var(--color-bg-from) !important;
}

.bg-background-alt {
  background-color: var(--color-bg-alt-from) !important;
}

.text-primary {
  color: var(--color-primary-from) !important;
}

.bg-gradient-primary {
  background-image: linear-gradient(to right, var(--color-primary-from), var(--color-primary-to)) !important;
}
```

### 2. Component Classes
Components use these variables for styling:

```css
.btn-primary {
  background-image: linear-gradient(to right, var(--color-primary-from), var(--color-primary-to));
}

.card {
  background-color: var(--color-bg-alt-from) !important;
  border: 1px solid rgba(var(--color-primary-from-rgb), 0.1) !important;
}

.gradient-text {
  background-image: linear-gradient(to right, var(--color-primary-from), var(--color-primary-to));
}
```

### 3. Gradient Overlay
The theme wash effect uses RGB variables:

```css
.bg-gradient-background::before {
  background: linear-gradient(
    to bottom,
    rgba(var(--color-primary-from-rgb), 0.08) 0%,
    rgba(var(--color-primary-from-rgb), 0.03) 40%,
    transparent 100%
  );
}
```

## Section Alternation Pattern

The theme system creates alternating section backgrounds:

1. **Hero**: `bg-gradient-background` (main gradient with theme wash)
2. **About**: `bg-background-alt` (alternate background)
3. **Services/Skills**: `bg-background` (main background)
4. **Projects**: `bg-background-alt` (alternate background)
5. **Testimonials/Experience**: `bg-background` (main background)
6. **Process**: `bg-background-alt` (alternate background)
7. **Contact**: `bg-background` (main background)
8. **Footer**: `bg-background` (main background)

## Theme Switching

When a theme is selected:
1. The theme class is added to the `<html>` element (e.g., `theme-blue-purple`)
2. All CSS variables are updated to the new theme's values
3. The entire UI updates automatically due to CSS variable usage
4. The gradient overlay uses the new primary color for the theme wash

## Color Palette Examples

### Blue/Purple Theme
```css
.theme-blue-purple {
  --color-primary-from: #2563eb;    /* Blue */
  --color-primary-to: #a21caf;      /* Purple */
  --color-bg-from: #f8fafc;         /* Light gray */
  --color-bg-alt-from: #f3f4f6;     /* Slightly darker gray */
}
```

### Yellow/Orange Theme
```css
.theme-yellow-orange {
  --color-primary-from: #facc15;    /* Yellow */
  --color-primary-to: #f97316;      /* Orange */
  --color-bg-from: #fefce8;         /* Warm light yellow */
  --color-bg-alt-from: #fef9c3;     /* Warmer yellow */
}
```

This system allows for consistent theming across all components while maintaining flexibility for different color schemes and dark/light mode variations. 