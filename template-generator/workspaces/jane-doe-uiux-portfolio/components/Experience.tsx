'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink, ChevronDown } from 'lucide-react'
import { experienceSection } from '../site.config'

import { useState } from 'react'

const Experience = () => {
  const experience = experienceSection || {};
  const heading = experience.heading || 'Work Experience';
  const subheading = experience.subheading || '';
  const workExperience = experience.workExperience || [];
  const education = experience.education || [];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {experienceSection.subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={24} className="text-primary" />
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => {
                const [showInfo, setShowInfo] = useState(false)
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card relative"
                  >
                    {/* Timeline Line */}
                    {index < workExperience.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-16 bg-gray-200 dark:bg-dark-600" />
                    )}

                    <div className="flex gap-4">
                      {/* Timeline Dot */}
                      <div className="w-4 h-4 bg-primary-600 rounded-full mt-2 flex-shrink-0" />

                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xl font-semibold text-dark-900 dark:text-white">
                              {job.title}
                            </h4>
                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <div className="flex items-center gap-1">{job.company}</div>
                              <div className="flex items-center gap-1">{job.location}</div>
                              <div className="flex items-center gap-1">{job.period}</div>
                            </div>
                          </div>
                          <button
                            aria-label={showInfo ? 'Hide info' : 'Show info'}
                            onClick={() => setShowInfo((v) => !v)}
                            className={`transition-transform duration-200 ml-2 p-1 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 focus:outline-none focus:ring-2 focus:ring-primary-400 ${showInfo ? 'rotate-180' : ''}`}
                          >
                            <ChevronDown size={22} className="text-gray-500 dark:text-gray-300" />
                          </button>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {showInfo && (
                          <>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {job.description}
                            </p>
                            {/* Achievements */}
                            {job.achievements && (
                              <div className="space-y-2">
                                <h5 className="font-medium text-dark-900 dark:text-white">Key Achievements:</h5>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                  {job.achievements.map((achievement, idx) => (
                                    <li key={idx}>{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={24} className="text-primary" />
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => {
                const [showInfo, setShowInfo] = useState(false)
                return (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card relative"
                  >
                    {/* Timeline Line */}
                    {index < education.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-16 bg-gray-200 dark:bg-dark-600" />
                    )}

                    <div className="flex gap-4">
                      {/* Timeline Dot */}
                      <div className="w-4 h-4 bg-primary-600 rounded-full mt-2 flex-shrink-0" />

                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xl font-semibold text-dark-900 dark:text-white">
                              {edu.degree}
                            </h4>
                            {edu.minors && edu.minors.length > 0 && (
                              <div className="text-sm text-primary-700 dark:text-primary-300 font-medium mt-1">
                                Minors: {edu.minors.join(', ')}
                              </div>
                            )}
                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <div className="flex items-center gap-1">{edu.school}</div>
                              <div className="flex items-center gap-1">{edu.location}</div>
                              <div className="flex items-center gap-1">{edu.period}</div>
                            </div>
                          </div>
                          <button
                            aria-label={showInfo ? 'Hide info' : 'Show info'}
                            onClick={() => setShowInfo((v) => !v)}
                            className={`transition-transform duration-200 ml-2 p-1 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 focus:outline-none focus:ring-2 focus:ring-primary-400 ${showInfo ? 'rotate-180' : ''}`}
                          >
                            <ChevronDown size={22} className="text-gray-500 dark:text-gray-300" />
                          </button>
                        </div>
                        {edu.technologies && edu.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {edu.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        {showInfo && (
                          <>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-2">
                              {edu.description}
                            </p>
                            {edu.gpa && (
                              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                GPA: {edu.gpa}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Certifications
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 card"
            >
              <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                Certifications
              </h4>
              <div className="space-y-3">
                {[
                  'AWS Certified Solutions Architect',
                  'Google Cloud Professional Developer',
                  'Certified Scrum Master (CSM)',
                  'Microsoft Azure Developer Associate'
                ].map((cert, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                    <ExternalLink size={16} className="text-primary" />
                  </div>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience 