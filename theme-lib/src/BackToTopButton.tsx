"use client";
import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

const ARROW_BTN_CLASSES = "p-3 rounded-full bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm border border-gray-200 dark:border-dark-700 fixed bottom-8 right-8 z-50 pointer-events-auto"
const ICON_CLASSES = "text-gray-600 dark:text-gray-300"

export default function BackToTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const el = document.getElementById('home')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!show) return null
  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className={ARROW_BTN_CLASSES}
    >
      <ChevronUp size={24} className={ICON_CLASSES} />
    </button>
  )
} 