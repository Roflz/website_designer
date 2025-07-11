'use client'

import { motion } from 'framer-motion'
import { aboutContent } from '../site.config'
import ImageWithEffects from './ImageWithEffects'
import { Users, Award, Globe, Briefcase } from 'lucide-react'

const iconMap = {
  Award,
  Globe,
  Briefcase,
  Users
}

const About = () => {
  const { title, text, image, highlights, mission, companyInfo, cta } = aboutContent
  return (
    <section id="about" className="py-20 bg-background-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            {title && title.split(' ').map((word, i) =>
              word === 'Business' ? <span key={i} className="gradient-text">{word}</span> : word + ' '
            )}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {text}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* About Image */}
            <div className="relative">
              <ImageWithEffects {...image} />
            </div>

            {/* Business Highlights */}
            <div className="card">
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-6">
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights && highlights.map((h, i) => {
                  const Icon = iconMap[h.icon as keyof typeof iconMap] || Award
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <Icon size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{h.subtitle}</p>
                        <p className="font-medium text-dark-900 dark:text-white">{h.title}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Mission and Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-4">
                {mission.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {mission.text}
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                Company Info
              </h3>
              <div className="space-y-2">
                {companyInfo && companyInfo.map((info, i) => {
                  const Icon = iconMap[info.icon as keyof typeof iconMap] || Briefcase
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <Icon size={18} className="text-primary" />
                      <span className="text-dark-900 dark:text-white font-medium">{info.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* CTA */}
            {cta && (
              <div className="flex justify-center lg:justify-start">
                <a href={cta.link} className="btn-primary flex items-center gap-2">
                  {typeof iconMap[cta.icon as keyof typeof iconMap] === 'function' &&
                    iconMap[cta.icon as keyof typeof iconMap]!({ size: 20 })}
                  {cta.text}
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 