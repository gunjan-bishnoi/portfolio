"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import React, { useState } from "react";

import { projectData } from "@/components/Helper";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full rounded-[2rem] bg-secondary/30 backdrop-blur-xl border border-border/50 p-6 md:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 cursor-pointer shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-shadow duration-500"
    >
      {/* Project Image Area (Expand on Hover) */}
      <motion.div
        layout
        className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-secondary relative flex-shrink-0 shadow-inner"
        style={{ transform: "translateZ(30px)" }} // 3D Pop out effect
      >
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full relative"
        >
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-0" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover block"
          />
        </motion.div>

        {/* Floating View Project Button overlay on image */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-background text-primary rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md"
        >
          <ArrowUpRight size={24} />
        </motion.a>
      </motion.div>

      {/* Project Info Area */}
      <motion.div
        className="w-full flex flex-col justify-center"
        style={{ transform: "translateZ(20px)" }} // Slight 3D Pop out
      >
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-background border border-border/50 shadow-sm rounded-full text-foreground">
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-lg text-muted font-light leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Expanded Action Buttons (Slide up on hover effect) */}
        <div className="flex flex-wrap gap-4 mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-background rounded-full text-sm font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-md"
          >
            Live Demo
            <ArrowUpRight size={18} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" style={{ paddingTop: '5rem', paddingBottom: '5rem' }} className="w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl px-8 md:px-16 lg:px-24">

        {/* Section Header */}
        <div className="mb-28 md:mb-32 text-center relative z-10">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-6 inline-block">
            Selected Works
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Digital <span className="text-primary italic">Creations</span>.
          </h2>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-12 lg:gap-24" style={{ perspective: "1000px" }}>
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
