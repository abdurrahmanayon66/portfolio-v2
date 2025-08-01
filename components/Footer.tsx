"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface FooterProps {
  darkMode: boolean
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`${darkMode ? "bg-[#111828] text-white" : "bg-gray-50 text-gray-900"} py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto max-w-6xl text-center">
        <div className="mb-6">
          <h3 className={`text-2xl font-bold mb-2 ${darkMode ? "bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent" : "bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"}`}>Abdur Rahman Ayon</h3>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>Full Stack Developer & Software Engineer</p>
        </div>
        <div className={`${darkMode ? "border-t border-gray-800" : "border-t border-gray-200"} pt-6`}>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} text-sm`}>
            © 2024 Full Stack Developer Portfolio. Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
