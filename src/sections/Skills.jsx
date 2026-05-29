"use client";

import { motion } from "framer-motion";
import { techStack } from "@/components/Helper";

const skillsWithProficiency = techStack;

const Skills = () => {
  // Duplicate skills for the infinite marquee
  const marqueeItems = [...techStack, ...techStack, ...techStack];

  return (
    <section id="skills" className="pt-4 md:pt-8 w-full relative overflow-x-hidden flex flex-col items-center">

      {/* 1. Marquee - Independent of constrained grid */}
      <div className="relative w-full overflow-hidden mb-4 md:mb-8 py-4 flex items-center bg-background/50 backdrop-blur-sm border-y border-border/20">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap w-fit"
        >
          {marqueeItems.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-transparent px-8 sm:px-12 md:px-20 opacity-30 hover:opacity-80 transition-opacity"
              style={{ WebkitTextStroke: "1.5px var(--foreground)" }}
            >
              {skill.name}
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. Constrained Grid Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="mb-12 md:mb-16 text-center relative z-10">
          <span className="text-accent font-bold uppercase tracking-widest text-sm inline-block">
            Technical Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            My <span className="text-primary italic">Expertise</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsWithProficiency.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-secondary/20 backdrop-blur-md border border-border/50 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl flex flex-col justify-between transition-all duration-300 p-6 sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">
                    {skill.category}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{skill.name}</h3>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-muted font-medium text-sm">Proficiency</span>
                    <div className="text-muted font-bold text-lg">
                      {skill.level}%
                    </div>
                  </div>

                  <div className="w-full h-2 bg-border/40 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 + index * 0.1 }}
                      className="h-full bg-primary relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-full group-hover:animate-shimmer" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
