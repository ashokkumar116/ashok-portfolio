import React from 'react';
import { motion } from 'framer-motion';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt,FaNodeJs } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";


const skills = [
  {
    title: "React.js",
    icon: FaReact,
    desc: "Proficient in React.js for building dynamic, component-based user interfaces. Skilled in state management, hooks, routing, and integrating APIs.",
  },
  {
    title: "Tailwind CSS",
    icon: RiTailwindCssFill,
    desc: "Experienced in Tailwind CSS for responsive, utility-first UI designs with scalable code structures.",
  },
  {
    title: "Node.Js",
    icon: FaNodeJs,
    desc: "Capable of building scalable backends with RESTful APIs, authentication, file handling, and async operations.",
  },
  {
    title: "Express.Js",
    icon: SiExpress,
    desc: "Skilled in API routing , managing protected routes, middleware, JWT auth with cookies, file uploads, and custom error handling in production-ready backend features.",
  },
  {
    title: "Java",
    icon: RiJavaLine,
    desc: "Skilled in Java with OOP concepts, exception handling, and string/array manipulation.",
  },
  {
    title: "HTML",
    icon: FaHtml5,
    desc: "Proficient in HTML5 for semantic, accessible, and structured web content.",
  },
  {
    title: "CSS",
    icon: FaCss3Alt,
    desc: "Skilled in CSS with flexbox, grid, and responsive media queries for elegant layouts.",
  },
  {
    title: "Javascript",
    icon: IoLogoJavascript,
    desc: "Strong in JavaScript functions, arrays, DOM manipulation for interactivity.",
  },
  {
    title: "SQL",
    icon: SiMysql,
    desc: "Strong in SQL - DDL, DML, DQL including SELECT, WHERE, ORDER BY, JOINs.",
  },
  {
    title: "GIT",
    icon: FaGitAlt,
    desc: "Version control with Git & GitHub. Managing branches, merge conflicts, and commits.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export const Skills = () => {
  return (
    <div id="skills">
      <motion.h1
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        custom={0}
      >
        SKILLS
      </motion.h1>

      <div className="skill-cards flex flex-wrap items-center justify-center p-5 gap-5 max-md:grid-cols-1">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={index}
              className="scard group w-64 h-40 perspective"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
            
                <div className="absolute w-full h-full backface-hidden bg-transparent shadow-md rounded-md flex flex-col justify-center items-center p-4">
                  <IconComponent className="text-4xl text-primary mb-2" />
                  <h3 className="etitle text-center">{skill.title}</h3>
                </div>
                <div className="absolute text-justify w-full h-full backface-hidden rotate-y-180 bg-indigo-800 text-white-800 shadow-md rounded-md p-4 text-sm flex items-center justify-center text-center max-md:text-[12px] ">
                  <p>{skill.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
