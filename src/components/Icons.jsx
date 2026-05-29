"use client";

import { motion } from "framer-motion";

export const RotatingBadgeIcon = ({ className }) => (
  <motion.svg
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    viewBox="0 0 100 100"
    className={className}
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
);
