'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projectsContent } from '../site.config'
import { ExternalLink, Eye } from 'lucide-react'

const iconMap = { Eye }

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const { title, subtitle, filters, caseStudies, cta } = projectsContent
  const filteredStudies = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.category === activeFilter)

  const columns = 3;
  const total = filteredStudies.length;
  const useDynamicCols = total < columns;
  const fullRows = Math.floor(total / columns);
  const lastRowCount = total % columns || columns;
  const emptyBefore = Math.floor((columns - lastRowCount) / 2);
  const emptyAfter = columns - lastRowCount - emptyBefore;

  const fullRowsCards = filteredStudies.slice(0, fullRows * columns);
  const lastRowCards = filteredStudies.slice(fullRows * columns);

  return (
    <section id="projects" className="py-20 bg-background-alt">
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
              (word === 'Client' || word === 'Work')
                ? <span key={i} className="gradient-text">{word}</span>
                : word
            ).reduce((acc, curr, i, arr) =>
              i < arr.length - 1 ? [...acc, curr, ' '] : [...acc, curr], [])}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary transition-colors duration-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div
          className={`grid gap-8 justify-items-center mx-auto ${!useDynamicCols ? 'md:grid-cols-2 lg:grid-cols-3' : ''}`}
          style={useDynamicCols ? { gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` } : {}}
        >
          {/* Render all full rows */}
          {fullRowsCards.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              {/* Case Study Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href="#contact"
                    className="p-3 bg-white rounded-full hover:bg-primary-50 transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="text-dark-900" />
                  </a>
                </div>
                {study.results && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.results}
                  </div>
                )}
              </div>

              {/* Case Study Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Center the last row */}
          {!useDynamicCols && total >= columns && Array.from({ length: emptyBefore }).map((_, i) => (
            <div key={`empty-before-${i}`} />
          ))}
          {lastRowCards.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (fullRows * columns + idx) * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              {/* Case Study Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href="#contact"
                    className="p-3 bg-white rounded-full hover:bg-primary-50 transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="text-dark-900" />
                  </a>
                </div>
                {study.results && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.results}
                  </div>
                )}
              </div>

              {/* Case Study Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
          {!useDynamicCols && total >= columns && Array.from({ length: emptyAfter }).map((_, i) => (
            <div key={`empty-after-${i}`} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href={cta.link} className="btn-primary mx-auto gap-2">
            {typeof iconMap[cta.icon as keyof typeof iconMap] === 'function' &&
              iconMap[cta.icon as keyof typeof iconMap]!({ size: 20 })}
            {cta.text}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 