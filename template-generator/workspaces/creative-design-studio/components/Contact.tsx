'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { contactContent } from '../site.config'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const iconMap = { Mail, Phone, MapPin, Clock }

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { title, subtitle, infoTitle, infoText, contactInfo, map, form } = contactContent

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', service: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-background">
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
              (word === 'Free' || word === 'Quote')
                ? <span key={i} className="gradient-text">{word}</span>
                : word
            ).reduce((acc, curr, i, arr) =>
              i < arr.length - 1 ? [...acc, curr, ' '] : [...acc, curr], [])}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
                {infoTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                {infoText}
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="divide-y divide-gray-200 dark:divide-dark-700">
              {contactInfo.map((info, index) => {
                const Icon = iconMap[info.icon as keyof typeof iconMap] || Mail
                return (
                  <div
                    key={info.title}
                    className="flex items-center gap-4 py-4 group"
                  >
                    <Icon size={24} className="text-primary group-hover:text-primary/80 transition-colors duration-200" />
                    <div>
                      <h4 className="font-semibold text-dark-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Map Placeholder */}
            <div className="card mt-8">
              <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">{map.label}</h4>
              <div className="w-full h-48 bg-gray-200 dark:bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-500">
                {map.placeholder}
              </div>
            </div>
          </motion.div>

          {/* Contact/Quote Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
                {form.submitText}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                    {form.successTitle}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {form.successText}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-900 dark:text-white mb-2">
                        {form.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-dark-900 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-900 dark:text-white mb-2">
                        {form.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-dark-900 dark:text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-dark-900 dark:text-white mb-2">
                      {form.serviceLabel}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-dark-900 dark:text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="web">Website Design & Development</option>
                      <option value="branding">Branding & Logo Design</option>
                      <option value="ecommerce">E-Commerce Solutions</option>
                      <option value="seo">SEO & Digital Marketing</option>
                      <option value="content">Content Creation</option>
                      <option value="support">Ongoing Support & Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-900 dark:text-white mb-2">
                      {form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-dark-900 dark:text-white"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary flex items-center gap-2"
                    disabled={isSubmitting}
                  >
                    <Send size={20} />
                    {form.submitText}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 