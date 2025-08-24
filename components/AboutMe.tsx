"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import OrbitingCircles from "./OrbitingCircles";
import { Sparkles, Target, Code, Zap } from "lucide-react";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const highlights = [
    {
      icon: <Code className="h-5 w-5 text-purple-400" />,
      text: "5+ years of coding excellence"
    },
    {
      icon: <Target className="h-5 w-5 text-purple-400" />,
      text: "50+ successful projects delivered"
    },
    {
      icon: <Zap className="h-5 w-5 text-purple-400" />,
      text: "24/7 commitment to innovation"
    },
    {
      icon: <Sparkles className="h-5 w-5 text-purple-400" />,
      text: "Always learning, always growing"
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 px-4 lg:px-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        className="relative mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          variants={leftVariants}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Orbiting Circles */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            variants={leftVariants}
          >
            <div className="relative">
              <OrbitingCircles />
              {/* Additional Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            variants={rightVariants}
          >
            {/* Main Description */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Crafting Digital Excellence, One Line at a Time
              </h3>
              
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer who transforms complex problems into elegant, scalable solutions. 
                With expertise spanning modern web technologies, I don't just write code—I architect experiences that captivate users and drive business growth.
              </p>
              
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                My journey in software development has been fueled by an insatiable curiosity and a commitment to excellence. 
                From crafting pixel-perfect interfaces to building robust server architectures, I bring a holistic approach to every project.
              </p>
              
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                <span className="text-purple-400 font-semibold">What sets me apart?</span> I'm not just a developer—I'm a problem solver who understands business needs, 
                a collaborator who thrives in team environments, and an innovator who stays ahead of technology trends.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-lg hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <span className="text-gray-300 font-medium">{highlight.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="pt-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-xl backdrop-blur-sm">
                <p className="text-xl lg:text-2xl font-bold text-white mb-2">
                  Ready to bring your vision to life?
                </p>
                <p className="text-gray-300 text-lg">
                  Let's collaborate and create something extraordinary together. 
                  <span className="text-purple-400 font-semibold"> Your success is my mission.</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
