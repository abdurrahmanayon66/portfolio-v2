"use client"

import { Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ResumeSectionProps {
  darkMode: boolean
  onDownloadResume: () => void
}

export default function ResumeSection({ darkMode, onDownloadResume }: ResumeSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center min-h-screen">
      <div className="container mx-auto max-w-4xl text-center" ref={ref}>
        <div className="mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Resume
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            View my complete professional experience, education, and achievements
          </motion.p>
        </div>
        <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
          <CardContent className="p-12">
            <motion.div
              className="w-40 h-56 mx-auto mb-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="/placeholder.svg?height=400&width=300&text=Resume+Preview"
                alt="Resume Preview"
                className="w-36 h-52 object-cover rounded-xl shadow-md bg-white"
              />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">Professional Resume</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Download or view my comprehensive resume showcasing my technical skills, professional experience, and educational background in software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onDownloadResume}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full bg-transparent"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Online
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
