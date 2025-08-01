"use client"

import { Code, Database, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface SkillsSectionProps {
  darkMode: boolean
}

const frontendSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Redux",
  "Vue.js",
]

const backendSkills = ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "JWT", "Prisma"]

const additionalSkills = ["Git", "Docker", "AWS", "Vercel", "Figma", "Postman", "Jest", "Cypress"]

export default function SkillsSection({ darkMode }: SkillsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section id="skills" className={`py-16 h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-l from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 h-full items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Frontend Skills */}
          <motion.div variants={itemVariants} className="flex">
            <Card
              className={`${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"} hover:shadow-lg transition-shadow duration-300 w-full h-full flex flex-col`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Code className="mr-2 h-6 w-6" />
                  Frontend
                </CardTitle>
                <CardDescription>User Interface & Experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Backend Skills */}
          <motion.div variants={itemVariants} className="flex">
            <Card
              className={`${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"} hover:shadow-lg transition-shadow duration-300 w-full h-full flex flex-col`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Database className="mr-2 h-6 w-6" />
                  Backend
                </CardTitle>
                <CardDescription>Server & Database</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="flex">
            <Card
              className={`${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"} hover:shadow-lg transition-shadow duration-300 w-full h-full flex flex-col`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600">
                  <Wrench className="mr-2 h-6 w-6" />
                  Tools & Others
                </CardTitle>
                <CardDescription>Development Tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {additionalSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
