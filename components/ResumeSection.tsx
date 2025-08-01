"use client"

import { Download } from "lucide-react"
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
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full text-center" ref={ref}>
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-l from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>
        <motion.div
          className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border rounded-lg p-8 shadow-lg`}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/placeholder.svg?height=400&width=300&text=Resume+Preview"
              alt="Resume Preview"
              className="mx-auto rounded-lg shadow-md max-w-sm"
            />
          </motion.div>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            View my complete professional experience, education, and achievements
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={onDownloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-full font-semibold bg-transparent">
              View Online
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
