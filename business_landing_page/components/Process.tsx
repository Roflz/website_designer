'use client'

import { motion } from 'framer-motion'
import { processContent } from '../site.config'
import { Search, ClipboardList, Layout, MessageCircle, Rocket } from 'lucide-react'

const iconMap = { Search, ClipboardList, Layout, MessageCircle, Rocket }

const Process = () => {
  const { title, subtitle, steps } = processContent
  const columns = 5;
  const total = steps.length;
  const useDynamicCols = total < columns;
  const fullRows = Math.floor(total / columns);
  const lastRowCount = total % columns || columns;
  const emptyBefore = Math.floor((columns - lastRowCount) / 2);
  const emptyAfter = columns - lastRowCount - emptyBefore;

  const fullRowsCards = steps.slice(0, fullRows * columns);
  const lastRowCards = steps.slice(fullRows * columns);
  return (
    <section id="process" className="py-20 bg-background-alt">
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
              word === 'Process' ? <span key={i} className="gradient-text">{word}</span> : word + ' '
            )}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div
          className={`grid gap-8 justify-items-center mx-auto ${!useDynamicCols ? 'md:grid-cols-2 lg:grid-cols-5' : ''}`}
          style={useDynamicCols ? { gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` } : {}}
        >
          {/* Render all full rows */}
          {fullRowsCards.map((step, idx) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap] || Search;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card flex flex-col items-center text-center"
              >
                <Icon size={40} className="mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {step.description}
                </p>
                <div className="text-sm text-gray-400 dark:text-gray-500">Step {idx + 1}</div>
              </motion.div>
            );
          })}
          {/* Center the last row (even if it's the only row) */}
          {!useDynamicCols && total >= columns && Array.from({ length: emptyBefore }).map((_, i) => (
            <div key={`empty-before-${i}`} />
          ))}
          {lastRowCards.map((step, idx) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap] || Search;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (fullRows * columns + idx) * 0.1 }}
                viewport={{ once: true }}
                className="card flex flex-col items-center text-center"
              >
                <Icon size={40} className="mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {step.description}
                </p>
                <div className="text-sm text-gray-400 dark:text-gray-500">Step {fullRows * columns + idx + 1}</div>
              </motion.div>
            );
          })}
          {!useDynamicCols && total >= columns && Array.from({ length: emptyAfter }).map((_, i) => (
            <div key={`empty-after-${i}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process 