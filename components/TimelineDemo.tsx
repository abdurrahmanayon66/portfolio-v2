"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Zap,
  Sparkles,
  Globe,
  Cpu,
  Code,
  Users,
  GitBranch,
  Wrench,
  Database,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export function TimelineDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const floatingIcons = [
    {
      icon: <Calendar className="h-8 w-8" />,
      color: "text-blue-400",
      delay: 0,
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      color: "text-green-400",
      delay: 0.5,
    },
    {
      icon: <GraduationCap className="h-7 w-7" />,
      color: "text-purple-400",
      delay: 1,
    },
    {
      icon: <Award className="h-6 w-6" />,
      color: "text-yellow-400",
      delay: 1.5,
    },
    { icon: <Zap className="h-7 w-7" />, color: "text-red-400", delay: 2 },
    {
      icon: <Sparkles className="h-6 w-6" />,
      color: "text-pink-400",
      delay: 2.5,
    },
    { icon: <Globe className="h-7 w-7" />, color: "text-cyan-400", delay: 3 },
    { icon: <Cpu className="h-6 w-6" />, color: "text-orange-400", delay: 3.5 },
  ];

  const timelineData = [
    {
      year: "2025 July - Present",
      title: "Full Stack Developer",
      subtitle: "Antopolis",
      description:
        "Developing robust full-stack web applications with a focus on performance, scalability, and user experience. Responsible for both frontend and backend features, including admin dashboards, API integrations, and SEO optimizations.",
      achievements: [
        "Built and maintained dynamic web applications using Next.js, Vite + React, and Express.js",
        "Designed and implemented admin dashboards with Tailwind CSS and shadcn UI",
        "Managed database operations with MongoDB and optimized backend APIs",
        "Enhanced SEO and website performance, improving search visibility and load times",
        "Collaborated with cross-functional teams to deliver 4+ client projects",
      ],
      image: "/timeline/1.svg",
      color: "from-indigo-500 to-purple-500",
    },
    {
      year: "2025 January - March",
      title: "Junior Software Engineer",
      subtitle: "Innovate International Limited",
      description:
        "Worked as a Junior Software Engineer, contributing directly to production-level applications. Focused on building scalable full-stack solutions, improving user experiences, and delivering new product features with modern JavaScript frameworks.",
      achievements: [
        "Delivered end-to-end features using Next.js, Vite + React, and Express.js",
        "Enhanced UI consistency and design systems with Tailwind CSS and shadcn UI",
        "Applied Redux Toolkit for efficient state management across complex projects",
        "Collaborated with cross-functional teams to design and deploy 3+ client solutions",
        "Improved application performance and implemented best coding practices",
      ],
      image: "/timeline/2.svg",
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2024 September - December",
      title: "Software Engineer Intern",
      subtitle: "Innovate International Limited",
      description:
        "Completed a 4-month internship at Innovate International Ltd focusing on full-stack development using the MERN stack and modern frameworks. Gained hands-on experience with building scalable applications and enhancing UI/UX with cutting-edge tools.",
      achievements: [
        "Contributed to 5+ production-level projects",
        "Developed responsive and dynamic UIs with Next.js, Vite + React, Tailwind CSS, and shadcn UI",
        "Implemented state management using Redux Toolkit",
        "Built RESTful APIs with Express.js and MongoDB",
        "Collaborated on debugging, optimization, and feature enhancements",
      ],
      image: "/timeline/3.svg",
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2020-2024",
      title: "Bachelor of Science in Computer Science",
      subtitle: "Independent University, Bangladesh (IUB)",
      description:
        "Completed my BSc in Computer Science with focus on software engineering, data structures, algorithms, and web technologies.",
      achievements: [
        "Data Structures & Algorithms",
        "Software Engineering Principles",
        "Database Management Systems",
        "Web Development Technologies",
        "Final Year Project: Full-Stack Web Application",
      ],
      image: "/timeline/4.svg",
      color: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 0.2, y: 0 },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: item.delay, duration: 0.8 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm mb-6">
            <Calendar className="h-4 w-4" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            My Timeline
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey through my professional growth, from academic foundations
            to current achievements
          </p>
        </motion.div>

        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.1 }}
                  className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                    <div
                      className={`inline-flex items-center gap-3 mb-6 p-3 rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
                    >
                      <Calendar className="h-5 w-5" />
                      <span className="text-xl font-bold">{item.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-purple-300 text-sm font-medium mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-3">
                      {item.achievements.map(
                        (achievement, achievementIndex) => {
                          // Define icons for each achievement based on keywords
                          const getAchievementIcon = (text: string) => {
                            const lowerText = text.toLowerCase();
                            if (
                              lowerText.includes("project") ||
                              lowerText.includes("development")
                            )
                              return <Code className="w-3 h-3" />;
                            if (
                              lowerText.includes("performance") ||
                              lowerText.includes("optimize")
                            )
                              return <Zap className="w-3 h-3" />;
                            if (
                              lowerText.includes("mentor") ||
                              lowerText.includes("collaborat")
                            )
                              return <Users className="w-3 h-3" />;
                            if (
                              lowerText.includes("api") ||
                              lowerText.includes("integration")
                            )
                              return <Globe className="w-3 h-3" />;
                            if (
                              lowerText.includes("git") ||
                              lowerText.includes("agile")
                            )
                              return <GitBranch className="w-3 h-3" />;
                            if (
                              lowerText.includes("bug") ||
                              lowerText.includes("maintenance")
                            )
                              return <Wrench className="w-3 h-3" />;
                            if (
                              lowerText.includes("data") ||
                              lowerText.includes("algorithm")
                            )
                              return <Database className="w-3 h-3" />;
                            if (
                              lowerText.includes("software") ||
                              lowerText.includes("engineering")
                            )
                              return <Cpu className="w-3 h-3" />;
                            if (
                              lowerText.includes("web") ||
                              lowerText.includes("technology")
                            )
                              return <Globe className="w-3 h-3" />;
                            if (
                              lowerText.includes("final") ||
                              lowerText.includes("year")
                            )
                              return <Award className="w-3 h-3" />;
                            return <CheckCircle className="w-3 h-3" />;
                          };

                          return (
                            <motion.div
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={
                                isInView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -20 }
                              }
                              transition={{
                                delay:
                                  index * 0.2 + 0.3 + achievementIndex * 0.1,
                                duration: 0.4,
                              }}
                              className="group/achievement"
                            >
                              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover/achievement:scale-105">
                                <div
                                  className={`w-6 h-6 rounded-md bg-gradient-to-r ${item.color} flex items-center justify-center shadow-md group-hover/achievement:scale-110 transition-transform duration-300`}
                                >
                                  {getAchievementIcon(achievement)}
                                </div>
                                <span className="text-gray-300 text-sm group-hover/achievement:text-white transition-colors duration-300">
                                  {achievement}
                                </span>
                              </div>
                            </motion.div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="relative group">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="w-full h-64 lg:h-80 object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-gray-300 font-medium">
                Continuous Learning
              </span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <span className="text-gray-300 font-medium">
                Professional Growth
              </span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <span className="text-gray-300 font-medium">Future Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
