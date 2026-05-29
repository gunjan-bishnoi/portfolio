"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, LayoutTemplate } from "lucide-react";
import { aboutTags } from "@/components/Helper";
import Image from "next/image";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="pt-16 md:pt-24 w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="text-accent font-bold uppercase tracking-widest text-sm inline-block">
            Behind the Code
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
            About <span className="text-primary italic">Me</span>.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
        >
          {/* Main Bio Card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-secondary/30 backdrop-blur-md border border-border/50 rounded-[2rem] flex flex-col justify-center group hover:bg-secondary/40 transition-colors duration-500 p-6 sm:p-8 md:p-12"
          >
            <div className="mb-8 md:mb-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 md:mb-6">
                I build digital experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">blend aesthetics</span> with performance.
              </h3>
              <p className="text-base md:text-lg text-muted font-light leading-relaxed max-w-2xl">
                Passionate frontend developer focused on building modern, responsive, and visually engaging web applications. Skilled in creating clean user interfaces, smooth animations, and interactive user experiences using modern frontend technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {aboutTags.map((tag) => (
                <span key={tag} className="px-4 py-2 bg-background border border-border/50 rounded-full text-xs font-bold uppercase tracking-widest text-foreground shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Aesthetic Image Card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 lg:col-span-1 row-span-2 relative overflow-hidden rounded-[2rem] bg-secondary border border-border/50 group min-h-[300px] md:min-h-[400px] lg:min-h-full w-full md:w-4/5 lg:w-full mx-auto"
          >
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <Image
              src="/images/about/workspace.jpg"
              alt="Workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
          </motion.div>



        </motion.div>
      </div>
    </section>
  );
};

export default About;
