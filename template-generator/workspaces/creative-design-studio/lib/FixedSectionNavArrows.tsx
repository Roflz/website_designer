"use client"
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const ARROW_BTN_CLASSES = "p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 pointer-events-auto"
const ICON_CLASSES = "text-gray-600 dark:text-gray-300"

export interface SectionNav {
  id: string
  up: string | null
  down: string | null
}

function getCurrentSection(sections: SectionNav[]) {
  let current = sections[0]
  console.log('getCurrentSection called with sections:', sections)
  for (const section of sections) {
    const el = document.getElementById(section.id)
    console.log(`Looking for section ${section.id}:`, el)
    if (el) {
      const rect = el.getBoundingClientRect()
      console.log(`Section ${section.id} rect:`, rect)
      if (rect.top <= window.innerHeight * 0.3) {
        current = section
        console.log(`Setting current to ${section.id}`)
      }
    }
  }
  console.log('Returning current section:', current)
  return current
}

export default function FixedSectionNavArrows({ sections }: { sections: SectionNav[] }) {
  const [current, setCurrent] = useState(sections[0])

  useEffect(() => {
    const onScroll = () => {
      setCurrent(getCurrentSection(sections))
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  const scrollToSection = (sectionId: string | null) => {
    console.log('scrollToSection called with:', sectionId)
    if (!sectionId) {
      console.log('sectionId is null, returning')
      return
    }
    const el = document.getElementById(sectionId)
    console.log('Found element:', el)
    if (el) {
      const header = document.querySelector('header') as HTMLElement | null
      const headerHeight = header ? header.offsetHeight : 0
      const top = el.offsetTop - headerHeight
      console.log('Scrolling to top:', top)
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const showUp = current.up !== null
  const showDown = current.down !== null

  return (
    <>
      {showUp && (
        <div className="max-w-7xl mx-auto fixed left-0 right-0 flex justify-center z-50 pointer-events-none" style={{ top: 80 }}>
          <motion.button
            aria-label="Scroll up"
            onClick={() => {
              console.log('Up button clicked!')
              console.log('current.up:', current.up)
              scrollToSection(current.up)
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={ARROW_BTN_CLASSES}
          >
            <ChevronUp size={24} className={ICON_CLASSES} />
          </motion.button>
        </div>
      )}
      {showDown && (
        <div className="max-w-7xl mx-auto fixed left-0 right-0 flex justify-center z-50 pointer-events-none" style={{ bottom: 32 }}>
          <motion.button
            aria-label="Scroll down"
            onClick={() => {
              console.log('Down button clicked!')
              console.log('current.down:', current.down)
              scrollToSection(current.down)
            }}
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