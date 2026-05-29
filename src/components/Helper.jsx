import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const techStack = [
  { name: "React", category: "Frontend", level: 95 },
  { name: "Next.js", category: "Framework", level: 90 },
  { name: "JavaScript", category: "Core", level: 92 },
  { name: "Tailwind CSS", category: "Styling", level: 95 },
  { name: "Framer Motion", category: "Animations", level: 88 },

  { name: "Git", category: "Tools", level: 90 },
];

export const projectData = [
  {
    id: 1,
    title: "Web Chat App",
    description: "Modern chat interface with responsive UI, search functionality, and smooth frontend interactions.",
    image: "/images/projects/chat-app.jpg",
    link: "https://web-chat-eosin-six.vercel.app/",
    github: "https://github.com/gunjanbishnoi/web-chat-app",
    tech: ["React", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Trump Dog",
    description: "A playful landing page for a meme coin project with vibrant design and custom animations.",
    image: "/images/projects/trump-dog.jpg",
    link: "https://trump-rose.vercel.app/",
    github: "https://github.com/gunjanbishnoi/trump-rose",
    tech: ["Next.js", "Framer Motion", "Vanilla CSS"],
  },
  {
    id: 3,
    title: "Time Waste Analyzer",
    description: "Productivity-focused application for analyzing time usage with modern dashboard UI.",
    image: "/images/projects/time-analyzer.jpg",
    link: "http://time-waste-analyzer.vercel.app/",
    github: "https://github.com/gunjanbishnoi/time-waste-analyzer",
    tech: ["JavaScript", "Chart.js", "Tailwind CSS"],
  },
];

export const journeyData = [
  {
    title: "Frontend Learning Journey",
    period: "Phase 01",
    description: "Started the journey into web development, mastering the core fundamentals of HTML, CSS, and modern JavaScript to build rock-solid foundations.",
  },
  {
    title: "Technologies Explored",
    period: "Phase 02",
    description: "Dived deep into modern frameworks and tools, focusing heavily on React, Next.js, and Tailwind CSS to create dynamic, scalable, and responsive user interfaces.",
  },
  {
    title: "Project-Building Experience",
    period: "Phase 03",
    description: "Applied theoretical knowledge into practice by architecting real-world applications, focusing on state management, backend integration, and clean code principles.",
  },
  {
    title: "Continuous Learning Mindset",
    period: "Phase 04",
    description: "Constantly evolving with the ever-changing frontend landscape, exploring new libraries like Framer Motion, and adopting industry best practices for UI/UX polish.",
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const aboutTags = [
  'Frontend Development',
  'UI/UX Design',
  'Performance Optimization',
  'Creative Animations'
];
