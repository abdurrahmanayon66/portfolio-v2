"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LuDownload } from "react-icons/lu";
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[330dvh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-10"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const downloadResume = () => {
    alert("Resume download started!");
  };
  return (
    <div className="max-w-7xl relative mx-auto py-24 md:py-24 px-4 w-full left-0 top-0 z-50">
      <div className="flex flex-col items-center justify-center text-center relative z-50">
        <motion.div
          className="relative z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            Abdur Rahman Ayon
            <br />
            <span className="text-4xl md:text-6xl block mt-4 font-bold text-white">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "Software Engineer",
                  1500,
                  "Clean UI & Elegant Code",
                  1500,
                  "Intuitive Web Experiences",
                  1500,
                  "Optimized & Scalable Apps",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl mt-8 text-gray-300 font-medium">
            I build scalable web solutions with a focus on clean architecture,
            elegant UI, and smooth user experiences. Code with purpose, design
            with care.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={downloadResume}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <LuDownload className="mr-2 h-12 w-12" />
              Download Resume
            </Button>
            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/abdurrahmanayon66"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white text-2xl shadow-lg hover:scale-110 transition-all duration-200"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com/in/abdurrahmanayon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white text-2xl shadow-lg hover:scale-110 transition-all duration-200"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://facebook.com/abdurrahmanayon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white text-2xl shadow-lg hover:scale-110 transition-all duration-200"
              >
                <FiFacebook />
              </a>
              <a
                href="https://instagram.com/abdurrahmanayon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white text-2xl shadow-lg hover:scale-110 transition-all duration-200"
              >
                <FiInstagram />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
