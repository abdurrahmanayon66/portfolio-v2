"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiMail,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

export function FloatingNavigation() {
  const navLinks = [
    {
      title: "Home",
      icon: (
        <FiHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "About",
      icon: (
        <FiUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Skills",
      icon: (
        <FiCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Projects",
      icon: (
        <FiBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Resume",
      icon: (
        <FiFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#resume",
    },
    {
      title: "Contact",
      icon: (
        <FiMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock
        items={navLinks}
        desktopClassName="bg-gray-900/80 backdrop-blur-md border border-gray-700/50"
        mobileClassName="translate-y-2"
      />
    </nav>
  );
}

export function SocialFloatingDock() {
  const socialLinks = [
    {
      title: "GitHub",
      icon: (
        <FiGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/abdurrahmanayon66",
    },
    {
      title: "LinkedIn",
      icon: (
        <FiLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/abdur-rahman-ayon-407289316/",
    },
    {
      title: "Facebook",
      icon: (
        <FiFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/abdurrahman.ayon.1",
    },
    {
      title: "Instagram",
      icon: (
        <FiInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/heavy__breather__/",
    },
  ];

  return (
    <div className="flex justify-center">
      <FloatingDock
        items={socialLinks}
        desktopClassName="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30"
        mobileClassName=""
      />
    </div>
  );
}
