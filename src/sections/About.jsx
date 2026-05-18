"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, LayoutTemplate } from "lucide-react";
import { aboutTags } from "@/components/Helper";

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
    <section id="about" className="py-24 md:py-32 w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl px-8 md:px-16 lg:px-24">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-28 text-center"
        >
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 inline-block">
            Behind the Code
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
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
            style={{ padding: '2rem' }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-secondary/30 backdrop-blur-md border border-border/50 rounded-[4rem] flex flex-col justify-center group hover:bg-secondary/40 transition-colors duration-500"
          >
            <div className="mb-16 px-10">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                I build digital experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">blend aesthetics</span> with performance.
              </h3>
              <p className="text-lg text-muted font-light leading-relaxed max-w-2xl">
                Passionate frontend developer focused on building modern, responsive, and visually engaging web applications. Skilled in creating clean user interfaces, smooth animations, and interactive user experiences using modern frontend technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 px-10">
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
            className="col-span-1 row-span-2 relative overflow-hidden rounded-[2rem] bg-secondary border border-border/50 group min-h-[300px] md:min-h-full"
          >
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop"
              alt="Workspace"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
          </motion.div>



        </motion.div>
      </div>
    </section>
  );
};

export default About;
