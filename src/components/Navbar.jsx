"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "Home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = navLinks.find((l) => l.href === `#${section}`)?.name || "Home";
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Check system preference
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
        isScrolled
          ? "bg-background/70 backdrop-blur-xl py-3 border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
          : "bg-transparent py-6"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity z-[102]"
        >
          GB<span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 lg:gap-4 xl:gap-8">
          <div className="flex items-center gap-1 lg:gap-3 bg-secondary/50 p-1 rounded-full border border-border/50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={cn(
                  "relative px-2 md:px-3 lg:px-5 xl:px-7 py-2 text-[9px] lg:text-[11px] xl:text-[12px] font-bold tracking-widest uppercase transition-colors rounded-full",
                  activeSection === link.name ? "text-primary" : "text-muted hover:text-foreground"
                )}
              >
                {activeSection === link.name && (
                  <motion.div
                    layoutId="activeSectionIndicator"
                    className="absolute inset-0 bg-background rounded-full shadow-sm border border-border/50 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-secondary/50 border border-border/50 hover:bg-secondary text-muted hover:text-foreground transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-primary text-background rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 sm:gap-4 md:hidden z-[102]">
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 bg-primary text-background rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] whitespace-nowrap"
          >
            Let's Talk
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary/50 border border-border/50 text-muted hover:text-foreground transition-all shrink-0"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Animated Hamburger Menu */}
          <button
            className="relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] rounded-full bg-secondary/50 border border-border/50 overflow-hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-[2px] bg-foreground block rounded-full"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-[2px] bg-foreground block rounded-full"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-[2px] bg-foreground block rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { delay: 0.2, duration: 0.3 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-[101] flex flex-col items-center justify-center md:hidden pt-24 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-3 sm:gap-5 w-full px-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  key={link.name}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter transition-colors block py-1.5",
                      activeSection === link.name ? "text-primary" : "text-muted hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 sm:mt-6 w-full max-w-xs sm:hidden"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 sm:py-4 bg-primary text-background rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-xl"
                >
                  Let's Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
