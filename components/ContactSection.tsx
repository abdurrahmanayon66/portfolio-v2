"use client"

import React from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface ContactSectionProps {
  darkMode: boolean
  formData: {
    name: string
    email: string
    message: string
  }
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function ContactSection({ darkMode, formData, onInputChange, onSubmit }: ContactSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="contact" className={`py-16 h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto w-full" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-l from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Let's discuss your next project or opportunity</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span>your.email@example.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <span>Available for remote work worldwide</span>
              </motion.div>
            </div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h4 className="text-lg font-semibold mb-4">Experience Highlights</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• 6 months of international development experience</li>
                <li>• Full-stack web application development</li>
                <li>• Modern JavaScript frameworks and libraries</li>
                <li>• Database design and optimization</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={onInputChange}
                  required
                  className={`${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={onInputChange}
                  required
                  className={`${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={onInputChange}
                  required
                  rows={5}
                  className={`${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
