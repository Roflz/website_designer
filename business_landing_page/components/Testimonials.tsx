'use client'

import { motion } from 'framer-motion'
import { testimonialsContent } from '../site.config'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  const { title, subtitle, testimonials } = testimonialsContent
  const columns = 3;
  const total = testimonials.length;
  const useDynamicCols = total < columns;
  const fullRows = Math.floor(total / columns);
  const lastRowCount = total % columns || columns;
  const emptyBefore = Math.floor((columns - lastRowCount) / 2);
  const emptyAfter = columns - lastRowCount - emptyBefore;

  const fullRowsCards = testimonials.slice(0, fullRows * columns);
  const lastRowCards = testimonials.slice(fullRows * columns);
  return (
    <section id="testimonials" className="py-20 bg-background">
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
              (word === 'Clients' || word === 'Say')
                ? <span key={i} className="gradient-text">{word}</span>
                : word
            ).reduce((acc, curr, i, arr) =>
              i < arr.length - 1 ? [...acc, curr, ' '] : [...acc, curr], [])}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div
          className={`grid gap-8 justify-items-center mx-auto ${!useDynamicCols ? 'md:grid-cols-2 lg:grid-cols-3' : ''}`}
          style={useDynamicCols ? { gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` } : {}}
        >
          {/* Render all full rows */}
          {fullRowsCards.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center"
            >
              <Quote size={32} className="mb-4 text-primary" />
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                “{testimonial.quote}”
              </p>
              <div className="font-semibold text-dark-900 dark:text-white">{testimonial.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</div>
            </motion.div>
          ))}
          {/* Center the last row */}
          {!useDynamicCols && total >= columns && Array.from({ length: emptyBefore }).map((_, i) => (
            <div key={`empty-before-${i}`} />
          ))}
          {lastRowCards.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (fullRows * columns + idx) * 0.1 }}
              viewport={{ once: true }}
              className="card flex flex-col items-center text-center"
            >
              <Quote size={32} className="mb-4 text-primary" />
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                “{testimonial.quote}”
              </p>
              <div className="font-semibold text-dark-900 dark:text-white">{testimonial.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</div>
            </motion.div>
          ))}
          {!useDynamicCols && total >= columns && Array.from({ length: emptyAfter }).map((_, i) => (
            <div key={`empty-after-${i}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 