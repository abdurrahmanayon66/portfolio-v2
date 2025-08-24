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

export function SocialFloatingDock() {
  const socialLinks = [
    {
      title: "GitHub",
      icon: (
        <FiGithub className="h-full w-full" />
      ),
      href: "https://github.com/abdurrahmanayon66",
    },
    {
      title: "LinkedIn",
      icon: (
        <FiLinkedin className="h-full w-full" />
      ),
      href: "https://www.linkedin.com/in/abdur-rahman-ayon-407289316/",
    },
    {
      title: "Facebook",
      icon: (
        <FiFacebook className="h-full w-full" />
      ),
      href: "https://www.facebook.com/abdurrahman.ayon.1",
    },
    {
      title: "Instagram",
      icon: (
        <FiInstagram className="h-full w-full" />
      ),
      href: "https://www.instagram.com/heavy__breather__/",
    },
  ];

  return (
    <div className="flex justify-center">
      <FloatingDock
        items={socialLinks}
        desktopClassName=""
        mobileClassName=""
      />
    </div>
  );
}
