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
import { Download } from "lucide-react";
import { FiLinkedin, FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import profileImage from "../../images/formal.webp";

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
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
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
    // In a real application, this would download the actual resume file
    alert("Resume download started!");
  };

  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-50">
      <div className="grid lg:grid-cols-2 gap-8 items-center relative z-50">
        {/* Text Content */}
        <motion.div
          className="relative z-50"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
            Full Stack <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
            Enthusiastic developer with hands-on experience building dynamic and
            scalable web applications using modern technologies like Next.js, React,
            TypeScript, and delivering innovative solutions.
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={downloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>

            <div className="flex space-x-4">
              <SocialIconButton Icon={FiGithub} />
              <SocialIconButton Icon={FiLinkedin} />
              <SocialIconButton Icon={FiFacebook} />
              <SocialIconButton Icon={FiInstagram} />
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex justify-center lg:justify-end relative z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="size-64 sm:size-80 lg:size-96 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white">
              <Image
                src={profileImage}
                alt="Portfolio hero image"
                width={384}
                height={384}
                className="w-full h-full rounded-full object-contain"
              />
            </div>
          </div>
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
          height="600"
          width="600"
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

// Reusable social icon button
function SocialIconButton({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="relative size-10 rounded-full border-[2.5px] border-[#6d43eb] group group-hover:border-transparent transition-colors">
      <div className="flex items-center justify-center w-full h-full rounded-full bg-white dark:bg-neutral-900 group-hover:bg-[#6d43eb] transition-colors">
        <button type="button" className="rounded-full w-full h-full bg-transparent hover:bg-transparent flex items-center justify-center">
          <Icon size={20} className="text-[#6d43eb] group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
}
