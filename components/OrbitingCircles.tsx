"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Zap, Smartphone, Palette, Cloud, GitBranch, Cpu, Shield } from "lucide-react";
import img from "../images/formal.webp"
import Image from "next/image";

const OrbitingCircles = () => {
  const techIcons = [
    { Icon: Code, color: "text-blue-400", label: "Frontend" },
    { Icon: Database, color: "text-green-400", label: "Database" },
    { Icon: Globe, color: "text-purple-400", label: "Web" },
    { Icon: Zap, color: "text-yellow-400", label: "Performance" },
    { Icon: Smartphone, color: "text-pink-400", label: "Mobile" },
    { Icon: Palette, color: "text-orange-400", label: "Design" },
    { Icon: Cloud, color: "text-cyan-400", label: "Cloud" },
    { Icon: GitBranch, color: "text-red-400", label: "Version Control" },
  ];

  const orbitVariants = {
    orbit: {
      rotate: 360,
      transition: {
        duration: 20,
        ease: "linear" as const,
        repeat: Infinity,
      },
    },
  };

  const reverseOrbitVariants = {
    orbit: {
      rotate: -360,
      transition: {
        duration: 25,
        ease: "linear" as const,
        repeat: Infinity,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
      <div className="relative w-[28rem] h-[28rem] lg:w-[36rem] lg:h-[36rem]">
      {/* Center Profile Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
              <Image
                src={img}
                alt="Abdur Rahman Ayon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse"></div>
        </div>
      </div>

      {/* First Orbit - Outer */}
      <motion.div
        className="absolute inset-0 border border-purple-500/20 rounded-full"
        variants={orbitVariants}
        animate="orbit"
      >
          {techIcons.slice(0, 4).map((tech, index) => {
            const angle = (index * 90) - 45;
            const radius = 300;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={tech.label}
              className="absolute w-12 h-12 lg:w-14 lg:h-14 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center shadow-lg"
              style={{
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
              }}
              variants={iconVariants}
              whileHover="hover"
              animate={{
                rotate: -360,
                transition: {
                  duration: 20,
                  ease: "linear" as const,
                  repeat: Infinity,
                },
              }}
            >
              <tech.Icon className={`w-6 h-6 lg:w-7 lg:h-7 ${tech.color}`} />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Second Orbit - Inner */}
      <motion.div
        className="absolute inset-8 border border-blue-500/20 rounded-full"
        variants={reverseOrbitVariants}
        animate="orbit"
      >
          {techIcons.slice(4, 8).map((tech, index) => {
            const angle = (index * 90);
            const radius = 180;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={tech.label}
              className="absolute w-10 h-10 lg:w-12 lg:h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center shadow-lg"
              style={{
                left: `calc(50% + ${x}px - 20px)`,
                top: `calc(50% + ${y}px - 20px)`,
              }}
              variants={iconVariants}
              whileHover="hover"
              animate={{
                rotate: 360,
                transition: {
                  duration: 25,
                  ease: "linear" as const,
                  repeat: Infinity,
                },
              }}
            >
              <tech.Icon className={`w-5 h-5 lg:w-6 lg:h-6 ${tech.color}`} />
            </motion.div>
          );
        })}
      </motion.div>

  {/* Floating Particles removed as requested */}
    </div>
  );
};

export default OrbitingCircles;
