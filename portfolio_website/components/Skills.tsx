'use client'

import { motion } from 'framer-motion'
import { Code, Database, Smartphone, Cloud, Palette, Settings } from 'lucide-react'
import { skillsSection } from '../site.config'
import { useEffect, useState } from 'react';

const Skills = () => {
  const skillCategories = skillsSection.skillCategories

  // Centering logic for the last row of skill categories
  const columns = 3;
  const skillTotal = skillCategories.length;
  const fullRows = Math.floor(skillTotal / columns);
  const lastRowCount = skillTotal % columns || columns;
  const emptyBefore = Math.floor((columns - lastRowCount) / 2);
  const emptyAfter = columns - lastRowCount - emptyBefore;
  const fullRowsCards = skillCategories.slice(0, fullRows * columns);
  const lastRowCards = skillCategories.slice(fullRows * columns);

  // Responsive columns for additional skills
  function useResponsiveColumns() {
    const [columns, setColumns] = useState(2);
    useEffect(() => {
      function updateColumns() {
        if (window.innerWidth >= 1024) {
          setColumns(6);
        } else if (window.innerWidth >= 768) {
          setColumns(4);
        } else {
          setColumns(2);
        }
      }
      updateColumns();
      window.addEventListener('resize', updateColumns);
      return () => window.removeEventListener('resize', updateColumns);
    }, []);
    return columns;
  }
  const addColumns = useResponsiveColumns();
  const addSkills = skillsSection.additionalSkills;
  const addTotal = addSkills.length;
  const addFullRows = Math.floor(addTotal / addColumns);
  const addLastRowCount = addTotal % addColumns || addColumns;
  const addEmptyBefore = Math.floor((addColumns - addLastRowCount) / 2);
  const addEmptyAfter = addColumns - addLastRowCount - addEmptyBefore;
  const addFullRowsCards = addSkills.slice(0, addFullRows * addColumns);
  const addLastRowCards = addSkills.slice(addFullRows * addColumns);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            {skillsSection.heading.split(' ').map((word, i) =>
              word === 'Skills' ? <span key={i} className="gradient-text">{word}</span> : word + ' '
            )}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {skillsSection.subheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Render all full rows */}
          {fullRowsCards.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon size={24} className="text-primary" />
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-dark-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-primary h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
          {/* Center the last row */}
          {Array.from({ length: emptyBefore }).map((_, i) => (
            <div key={`empty-before-${i}`} />
          ))}
          {lastRowCards.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (fullRows * columns + categoryIndex) * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon size={24} className="text-primary" />
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: ((fullRows * columns + categoryIndex) * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-dark-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: ((fullRows * columns + categoryIndex) * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-primary h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
          {Array.from({ length: emptyAfter }).map((_, i) => (
            <div key={`empty-after-${i}`} />
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 card"
        >
          <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6 text-center">
            Additional Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Render all full rows */}
            {addFullRowsCards.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.05) }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-dark-700 rounded-lg px-4 py-2 text-center"
              >
                <span className="text-sm font-medium text-dark-900 dark:text-white">
                  {skill}
                </span>
              </motion.div>
            ))}
            {/* Center the last row */}
            {Array.from({ length: addEmptyBefore }).map((_, i) => (
              <div key={`add-empty-before-${i}`} />
            ))}
            {addLastRowCards.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + ((addFullRows * addColumns + index) * 0.05) }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-dark-700 rounded-lg px-4 py-2 text-center"
              >
                <span className="text-sm font-medium text-dark-900 dark:text-white">
                  {skill}
                </span>
              </motion.div>
            ))}
            {Array.from({ length: addEmptyAfter }).map((_, i) => (
              <div key={`add-empty-after-${i}`} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 