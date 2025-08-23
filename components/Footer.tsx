"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Abdur Rahman Ayon</h3>
          <p className="text-gray-400">Full Stack Developer & Software Engineer</p>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-400 text-sm">
            © 2024 Full Stack Developer Portfolio. Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
