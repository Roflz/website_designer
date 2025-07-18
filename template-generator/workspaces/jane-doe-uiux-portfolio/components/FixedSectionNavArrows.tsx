"use client"
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const ARROW_BTN_CLASSES = "p-2 rounded-full bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm border border-gray-200 dark:border-dark-700 pointer-events-auto"
const ICON_CLASSES = "text-gray-600 dark:text-gray-300"

const SECTIONS = [
  { id: 'home', up: null, down: 'about' },
  { id: 'about', up: 'home', down: 'skills' },
  { id: 'skills', up: 'about', down: 'projects' },
  { id: 'projects', up: 'skills', down: 'experience' },
  { id: 'experience', up: 'projects', down: 'contact' },
  { id: 'contact', up: 'experience', down: null },
]

function getCurrentSection() {
  let current = SECTIONS[0]
  for (const section of SECTIONS) {
    const el = document.getElementById(section.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= window.innerHeight * 0.3) {
        current = section
      }
    }
  }
  return current
}

export default function FixedSectionNavArrows() {
  const [current, setCurrent] = useState(SECTIONS[0])

  useEffect(() => {
    const onScroll = () => {
      setCurrent(getCurrentSection())
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (sectionId: string | null) => {
    if (!sectionId) return
    const el = document.getElementById(sectionId)
    if (el) {
      const header = document.querySelector('header') as HTMLElement | null
      const headerHeight = header ? header.offsetHeight : 0
      // Use offsetTop for more reliable positioning
      const top = el.offsetTop - headerHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  // Only show up arrow after hero section
  const showUp = current.id !== 'home'
  // Only show down arrow if not in last section
  const showDown = current.down !== null

  return (
    <>
      {/* Up Arrow (top center, just below navbar) */}
      {showUp && (
        <div className="max-w-7xl mx-auto fixed left-0 right-0 flex justify-center z-50 pointer-events-none" style={{ top: 80 }}>
          <motion.button
            aria-label="Scroll up"
            onClick={() => scrollToSection(current.up)}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={ARROW_BTN_CLASSES}
          >
            <ChevronUp size={24} className={ICON_CLASSES} />
          </motion.button>
        </div>
      )}
      {/* Down Arrow (bottom center) */}
      {showDown && (
        <div className="max-w-7xl mx-auto fixed left-0 right-0 flex justify-center z-50 pointer-events-none" style={{ bottom: 32 }}>
          <motion.button
            aria-label="Scroll down"
            onClick={() => scrollToSection(current.down)}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={ARROW_BTN_CLASSES}
          >
            <ChevronDown size={24} className={ICON_CLASSES} />
          </motion.button>
        </div>
      )}
    </>
  )
} 