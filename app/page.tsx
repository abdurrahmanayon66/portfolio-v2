"use client"

import type React from "react"
import { useState } from "react"

// Import components
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"
import ResumeSection from "@/components/ResumeSection"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const downloadResume = () => {
    // In a real application, this would download the actual resume file
    alert("Resume download started!")
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <Navigation darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <HeroSection onDownloadResume={downloadResume} />
      <SkillsSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <ContactSection 
        darkMode={darkMode} 
        formData={formData} 
        onInputChange={handleInputChange} 
        onSubmit={handleSubmit} 
      />
      <ResumeSection darkMode={darkMode} onDownloadResume={downloadResume} />
      <Footer darkMode={darkMode} />
    </div>
  )
}
