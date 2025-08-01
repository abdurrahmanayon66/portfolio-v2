"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl: string
  githubUrl: string
}

interface ProjectsSectionProps {
  darkMode: boolean
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=200&width=300&text=E-Commerce+Platform",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application built with Next.js and PostgreSQL. Real-time updates and team collaboration features.",
    technologies: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    image: "/placeholder.svg?height=200&width=300&text=Task+Management+App",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with data visualization and automated reporting features.",
    technologies: ["React", "Express.js", "Chart.js", "MongoDB"],
    image: "/placeholder.svg?height=200&width=300&text=Social+Media+Dashboard",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing and management platform with advanced search filters and virtual tour integration.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/placeholder.svg?height=200&width=300&text=Real+Estate+Platform",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsSection({ darkMode }: ProjectsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-l from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => {
                      const colorClasses = [
                        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
                        "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
                        "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
                        "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
                        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
                      ];
                      const color = colorClasses[i % colorClasses.length];
                      return (
                        <Badge key={tech} className={`text-xs ${color}`} variant="secondary">
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
