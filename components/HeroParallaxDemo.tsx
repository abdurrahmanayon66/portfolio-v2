"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "E-Commerce Platform",
    link: "https://shopify.com",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Task Management App",
    link: "https://trello.com",
    thumbnail:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  },
  {
    title: "Social Media Dashboard",
    link: "https://buffer.com",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Real Estate Platform",
    link: "https://zillow.com",
    thumbnail:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "Learning Management System",
    link: "https://moodle.org",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
  },
  {
    title: "Video Streaming Platform",
    link: "https://netflix.com",
    thumbnail:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop",
  },
  {
    title: "Food Delivery App",
    link: "https://doordash.com",
    thumbnail:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
  },
  {
    title: "Weather Dashboard",
    link: "https://weather.com",
    thumbnail:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
  },
  {
    title: "Banking Application",
    link: "https://chase.com",
    thumbnail:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
  },
  {
    title: "Chat Application",
    link: "https://slack.com",
    thumbnail:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
  },
  {
    title: "Project Management Tool",
    link: "https://asana.com",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    title: "Music Streaming App",
    link: "https://spotify.com",
    thumbnail:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
  },
  {
    title: "Fitness Tracking App",
    link: "https://fitbit.com",
    thumbnail:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  },
  {
    title: "Photo Editing Suite",
    link: "https://adobe.com",
    thumbnail:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=400&fit=crop",
  },
  {
    title: "Calendar Scheduler",
    link: "https://calendly.com",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
];
