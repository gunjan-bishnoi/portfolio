"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { journeyData } from "@/components/Helper";

const JourneyItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row md:items-center justify-between w-full mb-12 md:mb-0 last:mb-0 group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

      {/* Glow Timeline Indicator */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center z-20">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_var(--primary)] group-hover:scale-150 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75" />
      </div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full md:w-[45%] flex flex-col pl-16 md:pl-0 pt-1 md:pt-0 items-start text-left ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}
      >
        <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 inline-block bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
          {item.period}
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4 leading-tight group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-muted font-light leading-relaxed bg-secondary/30 backdrop-blur-sm border border-border/50 p-4 rounded-3xl shadow-sm group-hover:shadow-md transition-shadow">
          {item.description}
        </p>
      </motion.div>

      {/* Empty Side for layout balance */}
      <div className="w-[45%] hidden md:block" />

    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="pt-16 md:pt-24 w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-sm inline-block">
            My Path
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter">
            The <span className="text-primary italic">Journey</span>.
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto py-10">

          {/* Central Line Background */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border/40 rounded-full" />

          {/* Animated Central Line Foreground */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-accent to-primary rounded-full z-10 origin-top shadow-[0_0_15px_var(--primary)]"
          />

          {/* Timeline Items */}
          <div className="relative z-20 flex flex-col">
            {journeyData.map((item, index) => (
              <JourneyItem key={item.title} item={item} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
