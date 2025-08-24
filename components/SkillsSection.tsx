"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Code, Database, Wrench, Zap, Sparkles, Globe, Shield, Cpu,
  Smartphone, Palette, Cloud, GitBranch
} from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    skills: ["React", "Next.js", "TypeScript", "React Query", "Tailwind CSS", "Redux Toolkit", "Zustand", "Shadcn UI"]
  },
  {
    name: "Backend",
    icon: <Database className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "JWT", "Prisma"]
  },
  {
    name: "Tools & DevOps",
    icon: <Wrench className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    skills: ["Git", "Socket.io", "JWT", "Zod", "Postman"]
  }
]

const floatingIcons = [
  { icon: <Zap className="h-8 w-8" />, color: "text-yellow-400", delay: 0 },
  { icon: <Sparkles className="h-6 w-6" />, color: "text-purple-400", delay: 0.5 },
  { icon: <Globe className="h-7 w-7" />, color: "text-blue-400", delay: 1 },
  { icon: <Shield className="h-6 w-6" />, color: "text-green-400", delay: 1.5 },
  { icon: <Cpu className="h-7 w-7" />, color: "text-red-400", delay: 2 },
  { icon: <Smartphone className="h-6 w-6" />, color: "text-indigo-400", delay: 2.5 },
  { icon: <Palette className="h-7 w-7" />, color: "text-pink-400", delay: 3 },
  { icon: <Cloud className="h-6 w-6" />, color: "text-cyan-400", delay: 3.5 },
  { icon: <GitBranch className="h-7 w-7" />, color: "text-orange-400", delay: 4 }
]

const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  },
  item: {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  },
  floating: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }
}

const skillIcons: Record<string, React.ReactNode> = {
  "React": <Code className="w-4 h-4" />, "Next.js": <Code className="w-4 h-4" />, "TypeScript": <Code className="w-4 h-4" />, "JavaScript": <Code className="w-4 h-4" />,
  "HTML5": <Code className="w-4 h-4" />, "CSS3": <Palette className="w-4 h-4" />, "Tailwind CSS": <Palette className="w-4 h-4" />, "Redux": <Database className="w-4 h-4" />, "Vue.js": <Code className="w-4 h-4" />,
  "Node.js": <Cpu className="w-4 h-4" />, "Express.js": <Cpu className="w-4 h-4" />, "MongoDB": <Database className="w-4 h-4" />, "PostgreSQL": <Database className="w-4 h-4" />,
  "REST APIs": <Globe className="w-4 h-4" />, "GraphQL": <Globe className="w-4 h-4" />, "JWT": <Shield className="w-4 h-4" />, "Prisma": <Database className="w-4 h-4" />,
  "Git": <GitBranch className="w-4 h-4" />, "Docker": <Cloud className="w-4 h-4" />, "AWS": <Cloud className="w-4 h-4" />, "Vercel": <Cloud className="w-4 h-4" />,
  "Figma": <Palette className="w-4 h-4" />, "Postman": <Globe className="w-4 h-4" />, "Jest": <Zap className="w-4 h-4" />, "Cypress": <Zap className="w-4 h-4" />
}

const FloatingIcon = ({ icon, color, delay, isInView }: any) => (
  <motion.div
    className={`absolute ${color} opacity-20`}
    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
    variants={variants.floating}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay }}
  >
    {icon}
  </motion.div>
)

const SkillItem = ({ skill, index, categoryIndex }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={index !== undefined ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
    transition={{ delay: 0.5 + (categoryIndex * 0.2) + (index * 0.05), duration: 0.4 }}
    className="group/skill"
  >
    <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover/skill:scale-105">
      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg group-hover/skill:scale-110 transition-transform duration-300`}>
        {skillIcons[skill.name] || <Code className="w-4 h-4" />}
      </div>
      <span className="text-gray-200 text-lg font-medium group-hover/skill:text-white transition-colors duration-300">{skill.name}</span>
    </div>
  </motion.div>
)

const SkillCard = ({ category, index, isInView }: any) => (
  <motion.div variants={variants.item} className="group relative">
    <div className={`relative h-full rounded-3xl ${category.bgColor} ${category.borderColor} border backdrop-blur-sm p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      <div className="relative z-10">
        <div className={`inline-flex items-center gap-3 mb-6 p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
          {category.icon}
          <span className="text-xl font-bold">{category.name}</span>
        </div>
        <div className="space-y-4">
          {category.skills.map((skill: string, skillIndex: number) => (
            <SkillItem key={skill} skill={{ name: skill, color: category.color }} index={skillIndex} categoryIndex={index} />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const bottomShowcase = [
    { color: "bg-green-400", label: "Always Learning", delay: 0 },
    { color: "bg-blue-400", label: "Industry Best Practices", delay: 0.5 },
    { color: "bg-purple-400", label: "Modern Technologies", delay: 1 }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((icon, index) => <FloatingIcon key={index} {...icon} isInView={isInView} />)}
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mastery across the full development stack, from pixel-perfect interfaces to robust backend systems
          </p>
        </motion.div>

        <motion.div className="grid lg:grid-cols-3 gap-8 mb-16" variants={variants.container} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {skillCategories.map((category, index) => <SkillCard key={category.name} category={category} index={index} isInView={isInView} />)}
        </motion.div>

        <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 1 }}>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            {bottomShowcase.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${item.color} animate-pulse`} style={{ animationDelay: `${item.delay}s` }}></div>
                <span className="text-gray-300 font-medium">{item.label}</span>
                {index < bottomShowcase.length - 1 && <div className="w-px h-6 bg-white/20"></div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
