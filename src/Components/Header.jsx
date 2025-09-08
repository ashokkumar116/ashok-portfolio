import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/ASHOK KUMAR P RESUME.pdf";

const roles = [
    "Full Stack Developer",
    "Mobile App Developer",
    "MERN Stack Developer",
    "React Native Developer",
    "Front End Developer",
    "React.js Developer",
    "Back End Developer",
    "Node.js Developer",
];

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const Header = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    if (currentRoleIndex >= roles.length) {
      setCurrentRoleIndex(0);
    }
  }, [roles.length]);

  return (
    <div className="hero h-[90vh] flex items-center justify-center text-center px-5 bg-transparent max-md:h-[85vh]">
      <motion.div
        className="flex flex-col space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={itemVariants}
          className="text-[clamp(1.25rem,3cqw,5rem)] text-gray-200"
        >
          Hi There!
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-[clamp(2rem,7cqw,5rem)] font-bold"
        >
          I'M{" "}
          <span className="text-primary drop-shadow-lg">ASHOK KUMAR P</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="h-10 relative">
          <AnimatePresence mode="wait">
            {roles[currentRoleIndex] && (
              <motion.p
                key={roles[currentRoleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-[clamp(1.2rem,2.4cqw,2rem)] text-gray-200 max-w-xl mx-auto w-full uppercase"
              >
                {roles[currentRoleIndex]}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 mt-6 max-md:flex-col max-md:space-y-5"
        >
          <a href={resume} download="ASHOK KUMAR P RESUME">
            <button className="btn btn-primary px-6 py-2 text-white rounded-lg shadow-lg hover:bg-primary/90 transition">
              Download Resume
            </button>
          </a>
          <a href="mailto:ashokkumarpandian7@gmail.com">
            <button className="btn px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">
              Hire Me
            </button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
