"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data";

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 40); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-5 bg-primary ml-1 align-middle"
      />
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-10">
      {/* Animated gradient background & abstract floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-accent/5 rounded-full blur-[100px] md:blur-[120px]"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[100px]"
        />

        {/* Floating Abstract Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[10%] w-16 h-16 md:w-20 md:h-20 border border-border/40 rounded-2xl backdrop-blur-sm hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] right-[12%] w-24 h-24 md:w-32 md:h-32 rounded-full border border-accent/10 backdrop-blur-md hidden lg:block"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-12 md:py-0 flex flex-col items-center text-center shrink-0">

        {/* Top badge */}
        <div className="overflow-hidden mb-4 md:mb-6 shrink-0">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="px-5 py-2 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-md text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-muted inline-block shadow-sm">
              Available for new opportunities
            </span>
          </motion.div>
        </div>

        {/* Main Heading with text reveal */}
        <div className="relative mb-4 md:mb-6 shrink-0">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-bold leading-[0.85] tracking-tighter text-foreground"
            >
              GUNJAN
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-bold leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic"
            >
              BISHNOI
            </motion.h1>
          </div>

          {/* Rotating SVG text badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, type: "spring" }}
            className="absolute -top-12 -right-24 hidden lg:flex items-center justify-center w-40 h-40"
          >
            <div className="absolute inset-0 bg-background/50 rounded-full blur-xl -z-10" />
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              viewBox="0 0 100 100"
              className="w-full h-full text-muted overflow-visible"
            >
              <defs>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text fontSize="10.5" fontWeight="bold" letterSpacing="1.8" className="fill-current uppercase">
                <textPath href="#circlePath" startOffset="0%">
                  • Creative Developer • UI Designer
                </textPath>
              </text>
            </motion.svg>
            <div className="absolute w-2 h-2 bg-primary rounded-full" />
          </motion.div>
        </div>

        {/* Tagline / Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl h-[60px] flex items-center justify-center mb-6 md:mb-10 shrink-0"
        >
          <p className="text-lg md:text-2xl text-muted font-light leading-relaxed">
            <TypingText text={siteConfig.tagline} />
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center mb-8 md:mb-16 w-full sm:w-auto shrink-0"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto min-w-[250px] md:min-w-[300px] h-[50px] group relative px-16 md:px-24 bg-primary text-background rounded-full font-bold flex items-center justify-center gap-4 overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full" />
            <span className="relative z-10 whitespace-nowrap">View Projects</span>
            <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto min-w-[250px] md:min-w-[300px] h-[50px] px-16 md:px-24 bg-secondary text-foreground rounded-full font-bold flex items-center justify-center gap-4 hover:bg-secondary/80 hover:scale-105 active:scale-95 transition-all border border-border/50 shrink-0"
          >
            <span className="whitespace-nowrap">Contact Me</span>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex gap-8 items-center mt-12 shrink-0"
        >
          {[
            { icon: FaGithub, href: siteConfig.socials.github },
            { icon: FaLinkedin, href: siteConfig.socials.linkedin }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 flex items-center justify-center bg-secondary/30 border border-border/50 rounded-full text-muted hover:text-primary hover:bg-secondary transition-all shadow-sm shrink-0"
            >
              <item.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Mouse scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 hidden md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
