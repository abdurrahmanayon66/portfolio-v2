"use client"

import { Download, Eye, FileText, Award, GraduationCap, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface ResumeSectionProps {
  darkMode: boolean
  onDownloadResume: () => void
}

export default function ResumeSection({ darkMode, onDownloadResume }: ResumeSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const floatingIcons = [
    { icon: <FileText className="h-8 w-8" />, color: "text-blue-400", delay: 0, position: "top-20 left-10" },
    { icon: <Award className="h-6 w-6" />, color: "text-yellow-400", delay: 0.5, position: "top-40 right-20" },
    { icon: <GraduationCap className="h-7 w-7" />, color: "text-green-400", delay: 1, position: "bottom-32 left-20" },
    { icon: <Briefcase className="h-6 w-6" />, color: "text-purple-400", delay: 1.5, position: "bottom-20 right-10" }
  ]

  const stats = [
    { number: "3+", label: "Years Experience", icon: <Briefcase className="h-5 w-5" /> },
    { number: "50+", label: "Projects Completed", icon: <FileText className="h-5 w-5" /> },
    { number: "15+", label: "Technologies", icon: <Award className="h-5 w-5" /> },
    { number: "100%", label: "Client Satisfaction", icon: <GraduationCap className="h-5 w-5" /> }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-20 ${item.position}`}
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-6">
            <FileText className="h-4 w-4" />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Resume & Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my professional journey, skills, and achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main resume card */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <div className="w-full h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                  <div className="text-center">
                    <FileText className="h-16 w-16 text-white/60 mx-auto mb-4" />
                    <p className="text-white/80 text-lg font-medium">Resume Preview</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Professional Resume</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Download or view my comprehensive resume showcasing technical expertise, professional experience, and educational achievements.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      onClick={onDownloadResume}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                      Download PDF
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl bg-transparent backdrop-blur-sm"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Online
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + (index * 0.1),
                  ease: "easeOut" as const
                }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white/80">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
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
              <span className="text-gray-300 font-medium">Available for new opportunities</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-gray-300 font-medium">Remote work ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
