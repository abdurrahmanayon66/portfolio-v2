"use client";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import image from "../images/formal.webp";
import Image from "next/image";

interface HeroSectionProps {
  onDownloadResume: () => void;
}

export default function HeroSection({ onDownloadResume }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="size-32 sm:size-40 lg:size-64 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white">
                <Image
                  src={image}
                  alt="Portfolio hero image"
                  width={160}
                  height={160}
                  className="w-full h-full rounded-full object-contain"
                />
              </div>
            </div>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                "Hi, I'm Ayon!",
                2000,
                "Full Stack Developer",
                2000,
                "Software Engineer",
                2000,
                "Next.js, React, TypeScript",
                2000,
                "Redux, Tailwind CSS, Shadcn UI",
                2000,
                "Express.js, REST API, GraphQL",
                2000,
                "Prisma, Socket.io, OAuth 2.0",
                2000,
                "MySQL, MongoDB, PostgreSQL",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"
            />
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Enthusiastic developer with hands-on experience building dynamic and
            scalable web applications and delivering modern solutions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={onDownloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
