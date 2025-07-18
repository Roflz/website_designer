"use client";

import { useState, useEffect } from 'react'
import { PALETTES, getBackgroundThemes, getForegroundThemes, DEFAULT_BG_THEME, DEFAULT_FG_THEME } from './palettes'

export default function ColorPaletteSwitcher() {
  const [selectedBgTheme, setSelectedBgTheme] = useState<string>(DEFAULT_BG_THEME)
  const [selectedFgTheme, setSelectedFgTheme] = useState<string>(DEFAULT_FG_THEME)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Load saved preferences
    const savedBg = localStorage.getItem('bg-theme') || DEFAULT_BG_THEME
    const savedFg = localStorage.getItem('fg-theme') || DEFAULT_FG_THEME

    setSelectedBgTheme(savedBg)
    setSelectedFgTheme(savedFg)

    // Apply saved themes
    applyThemes(savedBg, savedFg)
  }, [])

  const applyThemes = (bgTheme: string, fgTheme: string) => {
    // Remove all theme classes
    document.documentElement.classList.remove(...getBackgroundThemes().map(p => p.bgTheme!))
    document.documentElement.classList.remove(...getForegroundThemes().map(p => p.fgTheme!))

    // Add the selected background theme
    const bgThemeClass = getBackgroundThemes().find(p => p.id === bgTheme)?.bgTheme
    if (bgThemeClass) {
      document.documentElement.classList.add(bgThemeClass)
    }

    // Add the selected foreground theme
    const fgThemeClass = getForegroundThemes().find(p => p.id === fgTheme)?.fgTheme
    if (fgThemeClass) {
      document.documentElement.classList.add(fgThemeClass)
    }
  }

  const handleBgSelect = (id: string) => {
    setSelectedBgTheme(id)
    localStorage.setItem('bg-theme', id)
    applyThemes(id, selectedFgTheme)
  }

  const handleFgSelect = (id: string) => {
    setSelectedFgTheme(id)
    localStorage.setItem('fg-theme', id)
    applyThemes(selectedBgTheme, id)
  }

  const backgroundThemes = getBackgroundThemes()
  const foregroundThemes = getForegroundThemes()

  const currentBgTheme = backgroundThemes.find(p => p.id === selectedBgTheme)
  const currentFgTheme = foregroundThemes.find(p => p.id === selectedFgTheme)

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-2 py-1 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Choose color palette"
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span 
              className={`w-4 h-4 rounded-full border border-gray-300 dark:border-dark-700 ${currentBgTheme?.className}`} 
              title="Background"
            />
            <span 
              className={`w-4 h-4 rounded-full border border-gray-300 dark:border-dark-700 ${currentFgTheme?.className}`} 
              title="Accent"
            />
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Theme
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <div className="space-y-4">
              {/* Background Themes */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Background</h3>
                <div className="grid grid-cols-2 gap-2">
                  {backgroundThemes.map(palette => (
                    <button
                      key={palette.id}
                      className={`flex items-center gap-2 px-3 py-2 rounded text-sm hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${selectedBgTheme === palette.id ? 'font-semibold bg-gray-100 dark:bg-dark-700' : ''}`}
                      onClick={() => handleBgSelect(palette.id)}
                    >
                      <span 
                        className={`w-4 h-4 rounded-full border border-gray-300 dark:border-dark-700 ${palette.className}`} 
                        title="Background colors"
                      />
                      <span>{palette.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Foreground Themes */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Accent Colors</h3>
                <div className="grid grid-cols-2 gap-2">
                  {foregroundThemes.map(palette => (
                    <button
                      key={palette.id}
                      className={`flex items-center gap-2 px-3 py-2 rounded text-sm hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${selectedFgTheme === palette.id ? 'font-semibold bg-gray-100 dark:bg-dark-700' : ''}`}
                      onClick={() => handleFgSelect(palette.id)}
                    >
                      <span 
                        className={`w-4 h-4 rounded-full border border-gray-300 dark:border-dark-700 ${palette.className}`} 
                        title="Accent colors"
                      />
                      <span>{palette.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 