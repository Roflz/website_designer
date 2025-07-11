'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { heroContent as rawHeroContent } from '../site.config'

type HeroContent = typeof rawHeroContent & {
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
};

const heroContent: HeroContent = rawHeroContent;

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-dark-900 dark:text-white"
          >
            <span className="gradient-text">
              {heroContent.headline}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium"
          >
            {heroContent.subheadline}
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={heroContent.ctaLink}
              className="btn-primary flex items-center gap-2 px-8 py-3 text-lg"
            >
              {heroContent.ctaText}
            </a>
            <a
              href={heroContent.secondaryCtaLink || '#services'}
              className="btn-secondary flex items-center gap-2 px-8 py-3 text-lg"
            >
              {heroContent.secondaryCtaText || 'View Services'}
            </a>
          </motion.div>

          {/* Business Stats / Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center items-center gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5-Star</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Fast</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Turnaround</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero 