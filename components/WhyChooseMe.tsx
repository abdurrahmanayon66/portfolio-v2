"use client";

import { Code, Zap, Target, Users, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface WhyChooseMeProps {
  darkMode: boolean;
}

export function WhyChooseMe({ darkMode }: WhyChooseMeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const features = [
    {
      icon: <Code className="h-5 w-5 text-purple-400" />,
      title: "Full-Stack Mastery",
      description: "From pixel-perfect frontends to robust backends, I craft complete digital solutions that scale. Every layer is optimized for performance and user experience."
    },
    {
      icon: <Users className="h-5 w-5 text-purple-400" />,
      title: "User-Centric Design",
      description: "I don't just write code—I solve real problems. Every feature is designed with your users in mind, ensuring intuitive experiences that drive engagement."
    },
    {
      icon: <Target className="h-5 w-5 text-purple-400" />,
      title: "Results-Driven Approach",
      description: "My projects don't just look good—they perform. From increased conversion rates to improved user retention, I deliver measurable business impact."
    },
    {
      icon: <Zap className="h-5 w-5 text-purple-400" />,
      title: "Lightning-Fast Delivery",
      description: "Time is money, and I respect both. My streamlined development process ensures your project launches on schedule without compromising quality."
    },
    {
      icon: <Clock className="h-5 w-5 text-purple-400" />,
      title: "24/7 Support Mindset",
      description: "Your success is my priority. I provide ongoing support and maintenance, ensuring your digital products continue to evolve and perform at their best."
    },
    {
      icon: <Sparkles className="h-5 w-5 text-purple-400" />,
      title: "Cutting-Edge Innovation",
      description: "I stay ahead of the curve with the latest technologies and best practices. Your projects benefit from modern tools and forward-thinking architecture."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-400 mb-2 tracking-wider uppercase">
            Why Choose Me
          </p>
          <div className="w-16 h-px bg-white mx-auto mb-6"></div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            WHY I'M YOUR PERFECT DEVELOPER
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I bring a unique combination of technical expertise, creative problem-solving, and proven results that make me the ideal choice for your next project.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 lg:grid-rows-2 gap-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Card 1 - Large */}
          <motion.div 
            variants={itemVariants}
            className="group md:col-span-7 md:row-span-2"
          >
            <div className={`relative h-full rounded-2xl border border-gray-800 p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] ${
              darkMode ? "bg-gray-900/50" : "bg-gray-800/50"
            }`}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-fit rounded-xl border border-gray-700 bg-gray-800/50 p-3 mb-6 group-hover:border-purple-500/50 transition-colors duration-300">
                  {features[0].icon}
                </div>
                
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {features[0].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {features[0].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Medium */}
          <motion.div 
            variants={itemVariants}
            className="group md:col-span-5 md:row-span-1"
          >
            <div className={`relative h-full rounded-2xl border border-gray-800 p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] ${
              darkMode ? "bg-gray-900/50" : "bg-gray-800/50"
            }`}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-fit rounded-xl border border-gray-700 bg-gray-800/50 p-3 mb-4 group-hover:border-purple-500/50 transition-colors duration-300">
                  {features[1].icon}
                </div>
                
                <div className="space-y-3 flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {features[1].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {features[1].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Medium */}
          <motion.div 
            variants={itemVariants}
            className="group md:col-span-5 md:row-span-1"
          >
            <div className={`relative h-full rounded-2xl border border-gray-800 p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] ${
              darkMode ? "bg-gray-900/50" : "bg-gray-800/50"
            }`}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-fit rounded-xl border border-gray-700 bg-gray-800/50 p-3 mb-4 group-hover:border-purple-500/50 transition-colors duration-300">
                  {features[2].icon}
                </div>
                
                <div className="space-y-3 flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {features[2].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {features[2].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Small */}
          <motion.div 
            variants={itemVariants}
            className="group md:col-span-3 md:row-span-1"
          >
            <div className={`relative h-full rounded-2xl border border-gray-800 p-4 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] ${
              darkMode ? "bg-gray-900/50" : "bg-gray-800/50"
            }`}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-fit rounded-xl border border-gray-700 bg-gray-800/50 p-2 mb-3 group-hover:border-purple-500/50 transition-colors duration-300">
                  {features[3].icon}
                </div>
                
                <div className="space-y-2 flex-1">
                  <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {features[3].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-xs">
                    {features[3].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5 - Small */}
          <motion.div 
            variants={itemVariants}
            className="group md:col-span-3 md:row-span-1"
          >
            <div className={`relative h-full rounded-2xl border border-gray-800 p-4 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] ${
              darkMode ? "bg-gray-900/50" : "bg-gray-800/50"
            }`}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-fit rounded-xl border border-gray-700 bg-gray-800/50 p-2 mb-3 group-hover:border-purple-500/50 transition-colors duration-300">
                  {features[4].icon}
                </div>
                
                <div className="space-y-2 flex-1">
                  <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {features[4].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-xs">
                    {features[4].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 6 - Medium */}
          <motion.div 
            variants={itemVariants}
            className="group md:col-span-6 md:row-span-1"
          >
            <div className={`relative h-full rounded-2xl border border-gray-800 p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] ${
              darkMode ? "bg-gray-900/50" : "bg-gray-800/50"
            }`}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-fit rounded-xl border border-gray-700 bg-gray-800/50 p-3 mb-4 group-hover:border-purple-500/50 transition-colors duration-300">
                  {features[5].icon}
                </div>
                
                <div className="space-y-3 flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {features[5].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {features[5].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-all duration-300 cursor-pointer">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Ready to build something amazing?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 