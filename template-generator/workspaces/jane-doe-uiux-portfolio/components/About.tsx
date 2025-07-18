'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail, Phone, Globe } from 'lucide-react'
import { aboutSection } from '../site.config'

const About = () => {
  const about = aboutSection || {};
  const heading = about.heading || 'About Me';
  const subheading = about.subheading || '';
  const personalInfo = about.personalInfo || [];
  const profileImage = about.profileImage || { src: '', alt: '' };
  const profileBadge = about.profileBadge || '';
  const whoIAm = about.whoIAm || { heading: '', paragraphs: [] };
  const whatIDo = about.whatIDo || { heading: '', skills: [] };
  const downloadCV = about.downloadCV || { label: '', icon: null, href: '' };

  return (
    <section id="about" className="py-20 bg-background-alt mt-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            {heading.split(' ').map((word, i) =>
              word === 'Me' ? <span key={i} className="gradient-text">{word}</span> : word + ' '
            )}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
                  <User size={120} className="text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">5+</span>
              </div>
            </div>

            {/* Personal Information */}
            <div className="card">
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-6">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    {info.label === 'Email' ? (
                      <>
                        <info.icon size={20} className="text-primary" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-primary transition-colors font-medium text-dark-900 dark:text-white"
                          >
                            {info.value}
                          </a>
                        </div>
                      </>
                    ) : info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 underline hover:text-primary transition-colors"
                        style={{ fontWeight: 500 }}
                      >
                        <info.icon size={20} className="text-primary" />
                        {info.label}
                      </a>
                    ) : (
                      <>
                        <info.icon size={20} className="text-primary" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                          <span className="font-medium text-dark-900 dark:text-white">{info.value}</span>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-4">
                {whoIAm.heading}
              </h3>
              {whoIAm.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>

            {/* Skills Preview */}
            <div className="card">
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                {whatIDo.heading}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {whatIDo.skills.map((skill, i) => (
                  <div className="space-y-2" key={skill.title}>
                    <h4 className="font-medium text-dark-900 dark:text-white">{skill.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="/cv.pdf"
                download
                className="btn-primary flex items-center gap-2"
              >
                {downloadCV.icon && <downloadCV.icon size={20} />}
                {downloadCV.label}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 