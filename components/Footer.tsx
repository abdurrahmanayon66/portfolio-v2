"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface FooterProps {
  darkMode: boolean
}

export default function Footer({ darkMode }: FooterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <footer
      className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${darkMode ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-200"}`}
      ref={ref}
    >
      <motion.div 
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p 
          className="text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © 2024 Full Stack Developer Portfolio. Built with Next.js and Tailwind CSS.
        </motion.p>
      </motion.div>
    </footer>
  )
}
