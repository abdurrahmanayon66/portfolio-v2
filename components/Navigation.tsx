"use client"


import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const MobileNav = dynamic(() => import("./MobileNav"), { ssr: false })

interface NavigationProps {
  darkMode: boolean
  onToggleDarkMode: () => void
}

export default function Navigation({ darkMode, onToggleDarkMode }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md ${darkMode ? "bg-gray-900/80" : "bg-white/80"} border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Abdur Rahman Ayon
          </div>
          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center space-x-6">
            <a href="#home" className="hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
            <Button variant="ghost" size="icon" onClick={onToggleDarkMode} className="rounded-full">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
          {/* Mobile Nav */}
          <div className="sm:hidden flex items-center">
            <MobileNav darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
          </div>
        </div>
      </div>
    </nav>
  )
}
