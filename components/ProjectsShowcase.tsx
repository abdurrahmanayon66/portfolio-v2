"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  content: () => React.ReactNode;
}

interface ProjectsShowcaseProps {
  darkMode: boolean;
}

export function ProjectsShowcase({ darkMode }: ProjectsShowcaseProps) {
  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, callback]);
  };

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-l from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-50"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active ? (
            <div className="fixed inset-0 grid place-items-center z-[100] p-4">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white dark:bg-gray-800 rounded-full h-10 w-10 shadow-lg"
                onClick={() => setActive(null)}
              >
                <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </motion.button>
              
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-4xl h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
              >
                <motion.div layoutId={`image-${active.title}-${id}`} className="relative">
                  <img
                    width={400}
                    height={300}
                    src={active.image}
                    alt={active.title}
                    className="w-full h-80 lg:h-96 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>

                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start p-6">
                    <div className="flex-1">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-gray-600 dark:text-gray-400 text-sm"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                                         <motion.div
                       layoutId={`button-${active.title}-${id}`}
                       className="flex gap-2 ml-4"
                     >
                       <a
                         href={active.liveUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="px-6 py-3 text-sm rounded-full font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-colors flex items-center gap-2"
                       >
                         <ExternalLink className="h-4 w-4" />
                         View Project
                       </a>
                       <a
                         href={active.githubUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="px-6 py-3 text-sm rounded-full font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-2"
                       >
                         <Github className="h-4 w-4" />
                         Code
                       </a>
                     </motion.div>
                  </div>

                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {active.technologies.map((tech, index) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 relative">
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4">
                        Project Details
                      </h4>
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-h-60 overflow-y-auto pr-2"
                      >
                        {active.content()}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        <div className="max-w-4xl mx-auto w-full space-y-4">
          {projects.map((project, index) => (
            <motion.div
              layoutId={`card-${project.title}-${id}`}
              key={`card-${project.title}-${id}`}
              onClick={() => setActive(project)}
              className={`p-6 flex flex-col md:flex-row justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 rounded-2xl cursor-pointer transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                darkMode ? "bg-gray-900" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-6 flex-col md:flex-row items-center md:items-start">
                <motion.div layoutId={`image-${project.title}-${id}`}>
                  <img
                    width={120}
                    height={120}
                    src={project.image}
                    alt={project.title}
                    className="h-24 w-24 md:h-20 md:w-20 rounded-xl object-cover object-center shadow-lg"
                  />
                </motion.div>
                <div className="text-center md:text-left">
                  <motion.h3
                    layoutId={`title-${project.title}-${id}`}
                    className="font-bold text-gray-800 dark:text-gray-200 text-lg mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${project.description}-${id}`}
                    className="text-gray-600 dark:text-gray-400 text-sm mb-3"
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <motion.div
                layoutId={`button-${project.title}-${id}`}
                className="mt-4 md:mt-0"
              >
                <button className="px-6 py-3 text-sm rounded-full font-semibold bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-purple-600 transition-all duration-300 flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Project
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects: Project[] = [
  {
    title: "Emerald Restaurants",
    description: "Emerald Group of Restaurants began its journey with Thai Emerald...",
    technologies: ["Next.js", "Tailwind", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    liveUrl: "https://emerald-restaurants.com",
    githubUrl: "https://github.com/yourusername/emerald-restaurants",
    content: () => (
      <div className="space-y-4">
        <p>
          This project showcases modern web development practices with a focus on user experience and performance. Built with cutting-edge technologies and best practices to deliver a seamless digital experience.
        </p>
        <p>
          The Emerald Restaurants platform features a comprehensive restaurant management system, including online ordering, table reservations, and an admin dashboard for restaurant owners. The application is built with a responsive design that works seamlessly across all devices.
        </p>
        <p>
          Key features include real-time order tracking, payment integration with multiple gateways, customer reviews and ratings, and an intuitive menu management system. The platform also includes analytics and reporting tools to help restaurant owners optimize their operations.
        </p>
      </div>
    ),
  },
  {
    title: "TechFlow Dashboard",
    description: "A comprehensive analytics dashboard for modern businesses...",
    technologies: ["React", "TypeScript", "D3.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    liveUrl: "https://techflow-dashboard.com",
    githubUrl: "https://github.com/yourusername/techflow-dashboard",
    content: () => (
      <div className="space-y-4">
        <p>
          TechFlow Dashboard is a powerful analytics platform designed for modern businesses. It provides real-time insights into key performance indicators, user behavior, and business metrics through interactive visualizations and customizable reports.
        </p>
        <p>
          The dashboard features advanced data visualization capabilities using D3.js, real-time data streaming, and customizable widgets. Users can create personalized dashboards, set up automated alerts, and export reports in multiple formats.
        </p>
        <p>
          Built with React and TypeScript for type safety, the application includes features like user authentication, role-based access control, and integration with popular data sources and APIs.
        </p>
      </div>
    ),
  },
  {
    title: "EcoTracker Mobile App",
    description: "Sustainable living made easy with our environmental impact tracker...",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    liveUrl: "https://ecotracker-app.com",
    githubUrl: "https://github.com/yourusername/ecotracker",
    content: () => (
      <div className="space-y-4">
        <p>
          EcoTracker is a mobile application designed to help users track and reduce their environmental impact. The app provides personalized recommendations for sustainable living practices and tracks progress towards environmental goals.
        </p>
        <p>
          Features include carbon footprint calculation, sustainable product recommendations, community challenges, and educational content about environmental conservation. The app uses gamification elements to encourage user engagement and behavior change.
        </p>
        <p>
          Built with React Native and Expo for cross-platform compatibility, the app integrates with wearable devices and smart home systems to automatically track environmental impact metrics.
        </p>
      </div>
    ),
  },
  {
    title: "SecureVault Banking",
    description: "Next-generation digital banking platform with advanced security...",
    technologies: ["Next.js", "PostgreSQL", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    liveUrl: "https://securevault-banking.com",
    githubUrl: "https://github.com/yourusername/securevault",
    content: () => (
      <div className="space-y-4">
        <p>
          SecureVault is a modern digital banking platform that prioritizes security and user experience. The platform offers comprehensive banking services including account management, fund transfers, investment options, and financial planning tools.
        </p>
        <p>
          Security features include multi-factor authentication, biometric login, real-time fraud detection, and end-to-end encryption. The platform is built with microservices architecture for scalability and reliability.
        </p>
        <p>
          The application includes advanced features like AI-powered financial insights, automated savings recommendations, and integration with external financial services and APIs.
        </p>
      </div>
    ),
  },
  {
    title: "ArtGallery VR",
    description: "Immersive virtual reality art gallery experience...",
    technologies: ["Unity", "C#", "Oculus SDK", "WebGL"],
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    liveUrl: "https://artgallery-vr.com",
    githubUrl: "https://github.com/yourusername/artgallery-vr",
    content: () => (
      <div className="space-y-4">
        <p>
          ArtGallery VR is an immersive virtual reality application that allows users to explore art galleries and museums from anywhere in the world. The platform provides high-quality 3D scans of artwork and interactive exhibits.
        </p>
        <p>
          Users can navigate through virtual galleries, interact with artwork, attend virtual exhibitions, and even create their own virtual art spaces. The platform supports multiple VR headsets and includes social features for shared experiences.
        </p>
        <p>
          Built with Unity and C#, the application features realistic lighting, spatial audio, and haptic feedback for an authentic gallery experience. The platform also includes tools for artists and curators to showcase their work.
        </p>
      </div>
    ),
  },
]; 