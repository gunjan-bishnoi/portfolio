"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update CSS variables for spotlight effect
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON" || e.target.closest("button")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Spotlight Effect */}
      <div className="spotlight hidden lg:block" />

      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full z-[9999] pointer-events-none mix-blend-difference hidden lg:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 4 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.5 }}
      />

      {/* Outer Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-primary rounded-full z-[9998] pointer-events-none hidden lg:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200, mass: 1 }}
      />
    </>
  );
};

export default CustomCursor;
