"use client";
import type React from "react";
import { useState } from "react";

// Import components
import Navigation from "@/components/Navigation";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import AboutMe from "@/components/AboutMe";
import SkillsSection from "@/components/SkillsSection";
import { TimelineDemo } from "@/components/TimelineDemo";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import ContactSection from "@/components/ContactSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const downloadResume = () => {
    // In a real application, this would download the actual resume file
    alert("Resume download started!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation />
      <section id="home">
        <HeroParallaxDemo />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <ProjectsShowcase />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <TimelineDemo />
      <section id="resume">
        <ResumeSection onDownloadResume={downloadResume} />
      </section>
      <WhyChooseMe />
      <section id="contact">
        <ContactSection
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </section>
      <Footer />
    </div>
  );
}
