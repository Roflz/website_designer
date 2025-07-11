"use client"
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const ARROW_BTN_CLASSES = "p-2 rounded-full bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm border border-gray-200 dark:border-dark-700 mx-auto block"
const ICON_CLASSES = "text-gray-600 dark:text-gray-300"

export function SectionUpArrow({ upTarget }: { upTarget: string }) {
  return (
    <motion.button
      aria-label="Scroll up"
      onClick={() => {
        const el = document.getElementById(upTarget)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={ARROW_BTN_CLASSES}
    >
      <ChevronUp size={24} className={ICON_CLASSES} />
    </motion.button>
  )
}

export function SectionDownArrow({ downTarget }: { downTarget: string }) {
  return (
    <motion.button
      aria-label="Scroll down"
      onClick={() => {
        const el = document.getElementById(downTarget)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={ARROW_BTN_CLASSES}
    >
      <ChevronDown size={24} className={ICON_CLASSES} />
    </motion.button>
  )
}
 