"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/10"
          initial={{ x: `${particle.x}%`, y: `${particle.y}%` }}
          animate={{
            x: [`${particle.x}%`, `${(particle.x + 10) % 100}%`, `${particle.x}%`],
            y: [`${particle.y}%`, `${(particle.y + 10) % 100}%`, `${particle.y}%`],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
