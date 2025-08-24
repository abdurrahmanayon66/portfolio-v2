"use client"

import React from "react"
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Sparkles, Zap, Code, CheckCircle, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
// Removed custom Input and Textarea components; using native HTML fields
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface ContactSectionProps {
  formData: {
    name: string
    email: string
    message: string
  }
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function ContactSection({ formData, onInputChange, onSubmit }: ContactSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const floatingIcons = [
    { icon: <Mail className="h-8 w-8" />, color: "text-blue-400", delay: 0 },
    { icon: <MessageSquare className="h-6 w-6" />, color: "text-green-400", delay: 0.5 },
    { icon: <Globe className="h-7 w-7" />, color: "text-purple-400", delay: 1 },
    { icon: <Sparkles className="h-6 w-6" />, color: "text-yellow-400", delay: 1.5 },
    { icon: <Zap className="h-7 w-7" />, color: "text-red-400", delay: 2 },
    { icon: <Phone className="h-6 w-6" />, color: "text-pink-400", delay: 2.5 }
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "abdurrahmanayon66@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "01997642649",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Available for on-site or remote work",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const highlights = [
    "1+ year of professional development experience",
    "Full-stack web application development",
    "Modern JavaScript frameworks and libraries",
    "Database design and optimization"
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 0.2, y: 0 }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: item.delay, duration: 0.8 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full" ref={ref}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-6">
            <MessageSquare className="h-4 w-4" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.4 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${info.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{info.title}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                Experience Highlights
              </h3>
                             <div className="space-y-4">
                 {highlights.map((highlight, index) => {
                   // Define icons for each highlight based on keywords
                   const getHighlightIcon = (text: string) => {
                     const lowerText = text.toLowerCase()
                     if (lowerText.includes('international') || lowerText.includes('experience')) return <Globe className="w-3 h-3" />
                     if (lowerText.includes('full-stack') || lowerText.includes('application')) return <Code className="w-3 h-3" />
                     if (lowerText.includes('javascript') || lowerText.includes('framework')) return <Zap className="w-3 h-3" />
                     if (lowerText.includes('database') || lowerText.includes('optimization')) return <Database className="w-3 h-3" />
                     return <CheckCircle className="w-3 h-3" />
                   }
                   
                   return (
                     <motion.div
                       key={highlight}
                       initial={{ opacity: 0, x: -20 }}
                       animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                       transition={{ delay: 0.6 + (index * 0.1), duration: 0.4 }}
                       className="group/highlight"
                     >
                       <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover/highlight:scale-105">
                         <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-md group-hover/highlight:scale-110 transition-transform duration-300 mt-1">
                           {getHighlightIcon(highlight)}
                         </div>
                         <span className="text-gray-300 leading-relaxed group-hover/highlight:text-white transition-colors duration-300">{highlight}</span>
                       </div>
                     </motion.div>
                   )
                 })}
               </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                  <Send className="h-6 w-6 text-white" />
                </div>
                Send Message
              </h3>
              
              <form onSubmit={onSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={onInputChange}
                    required
                    className="bg-transparent border-cyan-400 text-white placeholder-gray-400 rounded-md h-12 backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-0 focus-visible:outline-purple-400 focus-visible:outline-1 px-4 w-full"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={onInputChange}
                    required
                    className="bg-transparent border-cyan-400 text-white placeholder-gray-400 rounded-md h-12 backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-0 focus-visible:outline-purple-400 focus-visible:outline-1 px-4 w-full"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={onInputChange}
                    required
                    rows={5}
                    className="bg-transparent py-4 border-cyan-400 text-white placeholder-gray-400 rounded-md backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-0 focus-visible:outline-purple-400 focus-visible:outline-1 resize-none px-4 w-full"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-gray-300 font-medium">Quick Response</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-gray-300 font-medium">24/7 Available</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-gray-300 font-medium">Free Consultation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
