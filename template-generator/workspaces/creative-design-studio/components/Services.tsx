'use client'

import { motion } from 'framer-motion'
import { servicesContent } from '../site.config'
import { Code, PenTool, ShoppingCart, TrendingUp, FileText, LifeBuoy } from 'lucide-react'

const iconMap = { Code, PenTool, ShoppingCart, TrendingUp, FileText, LifeBuoy }

const Services = () => {
  const { title, subtitle, services, cta } = servicesContent
  const columns = 3;
  const total = services.length;
  const useDynamicCols = total < columns;
  const fullRows = Math.floor(total / columns);
  const lastRowCount = total % columns || columns;
  const emptyBefore = Math.floor((columns - lastRowCount) / 2);
  const emptyAfter = columns - lastRowCount - emptyBefore;

  const fullRowsCards = services.slice(0, fullRows * columns);
  const lastRowCards = services.slice(fullRows * columns);
  return (
    <section id="services" className="py-20 bg-background">
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
              word === 'Services' ? <span key={i} className="gradient-text">{word}</span> : word + ' '
            )}
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
          {fullRowsCards.map((service, idx) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Code;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card flex flex-col items-center text-center"
              >
                <Icon size={40} className="mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
          {/* Center the last row */}
          {!useDynamicCols && total >= columns && Array.from({ length: emptyBefore }).map((_, i) => (
            <div key={`empty-before-${i}`} />
          ))}
          {lastRowCards.map((service, idx) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Code;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (fullRows * columns + idx) * 0.1 }}
                viewport={{ once: true }}
                className="card flex flex-col items-center text-center"
              >
                <Icon size={40} className="mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
          {!useDynamicCols && total >= columns && Array.from({ length: emptyAfter }).map((_, i) => (
            <div key={`empty-after-${i}`} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href={cta.link} className="btn-primary mx-auto gap-2">
            {cta.text}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 