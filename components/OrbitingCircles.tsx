"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "../images/formal.webp";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiReactquery,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiRedux,
} from "react-icons/si";

const OrbitingCircles = () => {
  const techIcons = [
    { Icon: SiNextdotjs, color: "#ffffff", label: "Next.js" }, // Black
    { Icon: SiReact, color: "#61DAFB", label: "React" }, // React Blue
    { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" }, // Tailwind Cyan
    { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" }, // TS Blue
    { Icon: SiExpress, color: "#808080", label: "Express.js" }, // Gray
    { Icon: SiReactquery, color: "#FF4154", label: "React Query" }, // Red/Pink
    { Icon: SiPostgresql, color: "#336791", label: "PostgreSQL" }, // PG Blue
    { Icon: SiMongodb, color: "#47A248", label: "MongoDB" }, // Green
    { Icon: SiGraphql, color: "#E10098", label: "GraphQL" }, // Pink
    { Icon: SiRedux, color: "#764ABC", label: "Redux Toolkit" }, // Purple
  ];

  const orbitVariants = {
    orbit: {
      rotate: 360,
      transition: { duration: 20, ease: "linear" as const, repeat: Infinity },
    },
  };

  const reverseOrbitVariants = {
    orbit: {
      rotate: -360,
      transition: { duration: 25, ease: "linear" as const, repeat: Infinity },
    },
  };

  const iconVariants = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative w-[28rem] h-[28rem] lg:w-[36rem] lg:h-[36rem]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-48 h-48 lg:w-[320px] lg:h-[320px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
              <Image
                src={img}
                alt="Abdur Rahman Ayon"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Outer Orbit */}
      <motion.div
        className="absolute inset-8 border border-purple-500/20 rounded-full"
        variants={orbitVariants}
        animate="orbit"
      >
        {techIcons.slice(0, 5).map((tech, index) => {
          const angle = index * 72 - 36;
          const radius = 265;
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
                  ease: "linear",
                  repeat: Infinity,
                },
              }}
            >
              <tech.Icon
                className="w-7 h-7 lg:w-8 lg:h-8"
                style={{ color: tech.color }}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Inner Orbit */}
      <motion.div
        className="absolute inset-24 border border-blue-500/20 rounded-full"
        variants={reverseOrbitVariants}
        animate="orbit"
      >
        {techIcons.slice(5, 10).map((tech, index) => {
          const angle = index * 72;
          const radius = 200;
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
                  ease: "linear",
                  repeat: Infinity,
                },
              }}
            >
              <tech.Icon
                className="w-6 h-6 lg:w-7 lg:h-7"
                style={{ color: tech.color }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default OrbitingCircles;
