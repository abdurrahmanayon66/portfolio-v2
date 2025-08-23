"use client"

import dynamic from "next/dynamic"

const MobileNav = dynamic(() => import("./MobileNav"), { ssr: false })

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Abdur Rahman Ayon
          </div>
          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center space-x-6">
            <a href="#home" className="text-gray-200 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#skills" className="text-gray-200 hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-200 hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-200 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
          {/* Mobile Nav */}
          <div className="sm:hidden flex items-center">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  )
}
