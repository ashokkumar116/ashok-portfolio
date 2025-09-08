import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {RiTailwindCssFill} from "react-icons/ri";
import {FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs} from "react-icons/fa";
import {RiJavaLine} from "react-icons/ri";
import {IoLogoJavascript} from "react-icons/io5";
import {SiMysql} from "react-icons/si";
import {SiExpress} from "react-icons/si";
import {SiPrimereact} from "react-icons/si";
import {SiNetlify} from "react-icons/si";
import {SiRender} from "react-icons/si";
import {SiClevercloud} from "react-icons/si";
import {SiCloudinary} from "react-icons/si";
import {SiChartdotjs} from "react-icons/si";
import {FaCpanel} from "react-icons/fa";
import {SiDaisyui} from "react-icons/si";
import {VscVscode} from "react-icons/vsc";
import {SiIntellijidea} from "react-icons/si";
import {SiPostman} from "react-icons/si";
import {FaChartPie} from "react-icons/fa";
import {TbBrandReactNative} from "react-icons/tb";
import {PiWindFill} from "react-icons/pi";
import {SiTypescript} from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {SiWebstorm} from "react-icons/si";
import {SiExpo} from "react-icons/si";


const skills = [
    // ===== Frontend =====
    {
        category: "Frontend",
        title: "React.js",
        icon: FaReact,
        desc: "Proficient in building dynamic, component-based UIs with state management, hooks, routing, and API integration.",
    },
    {
        category: "Frontend",
        title: "Tailwind CSS",
        icon: RiTailwindCssFill,
        desc: "Skilled in responsive, utility-first UI designs with scalable and maintainable code structures.",
    },
    {
        category: "Frontend",
        title: "HTML5",
        icon: FaHtml5,
        desc: "Proficient Creating semantic, accessible, and SEO-friendly web pages.",
    },
    {
        category: "Frontend",
        title: "CSS3",
        icon: FaCss3Alt,
        desc: "Skilled in Designing elegant layouts with Flexbox, Grid, and responsive media queries.",
    },
    {
        category: "Frontend",
        title: "JavaScript",
        icon: IoLogoJavascript,
        desc: "Strong in core JavaScript concepts, DOM manipulation, events, and interactivity.",
    },

    // ===== UI Design =====

    {
        category: "UI Design",
        title: "PrimeReact",
        icon: SiPrimereact,
        desc: "Experienced in using PrimeReact UI components for building modern, responsive interfaces.",
    },
    {
        category: "UI Design",
        title: "DaisyUI",
        icon: SiDaisyui,
        desc: "Experienced in using DaisyUI to quickly build Tailwind-based components with consistent design.",
    },
    {
        category: "UI Design",
        title: "Chart.js",
        icon: SiChartdotjs,
        desc: "Skilled in Creating interactive and responsive data visualizations with Chart.js.",
    },
    {
        category: "UI Design",
        title: "Recharts",
        icon: FaChartPie,
        desc: "Skilled in Creating interactive and responsive data visualizations with Recharts.",
    },


    // ===== Backend =====
    {
        category: "Backend",
        title: "Node.js",
        icon: FaNodeJs,
        desc: "Proficient in Building scalable backends with REST APIs, authentication, file handling, and async operations.",
    },
    {
        category: "Backend",
        title: "Express.js",
        icon: SiExpress,
        desc: "Skilled in API routing, middleware, JWT auth with cookies, file uploads, and production-ready backend features.",
    },

    // ===== Database =====
    {
        category: "Database",
        title: "MySQL",
        icon: SiMysql,
        desc: "Proficient in DDL, DML, and DQL with efficient query writing including JOINs and indexing.",
    },
    {
        category: "Database",
        title: "MongoDB",
        icon: SiMongodb,
        desc: "Experienced in using MongoDB, a NoSQL database, for designing flexible schemas, handling large datasets, and building scalable applications with Mongoose integration.",

    },

    //App Development
    {
        category: "App Development",
        title: "React Native ",
        icon: TbBrandReactNative,
        desc: "Skilled in developing cross-platform mobile applications with React Native, leveraging components, navigation, state management, and seamless API integration.",
    },
    {
        category: "App Development",
        title: "Expo",
        icon:SiExpo,
        desc: "Proficient in using Expo for React Native development, enabling rapid mobile app builds with streamlined setup, over-the-air updates, device APIs, and easy deployment.",
    },
    {
        category: "App Development",
        title: "NativeWind",
        icon: PiWindFill,
        desc: "Experienced in styling React Native apps using NativeWind, enabling utility-first design with Tailwind CSS classes for responsive, consistent, and scalable UI development.",
    },


    // ===== Deployment Tools =====
    {
        category: "Deployment",
        title: "Netlify",
        icon: SiNetlify,
        desc: "Skilled in Frontend hosting for React apps with Git-based deployment, Continuous Integration and fast CDN.",
    },
    {
        category: "Deployment",
        title: "Render",
        icon: SiRender,
        desc: "Proficient in Backend server hosting for Node.js APIs with Git deployment, SSL support, and managed services.",
    },
    {
        category: "Deployment",
        title: "Cloudinary",
        icon: SiCloudinary,
        desc: "Skilled in Media asset storage with automatic optimization, resizing, and global CDN delivery.",
    },
    {
        category: "Deployment",
        title: "Clever Cloud",
        icon: SiClevercloud,
        desc: "Knowledge in hosting scalable and secure MySQL databases for production workloads.",
    },
    {
        category: "Deployment",
        title: "cPanel",
        icon: FaCpanel,
        desc: "Experience in deploying full-stack apps using cPanel with database integration and custom domains.",
    },

    // ===== Programming Languages =====

    {
        category: "Programming Languages",
        title: "TypeScript",
        icon: SiTypescript,
        desc: "Proficient in using TypeScript for building scalable and maintainable applications with static typing, interfaces, generics, and improved developer tooling.",
    },
    {
        category: "Programming Languages",
        title: "Java",
        icon: RiJavaLine,
        desc: "Good understanding of OOP concepts, arrays, strings, and exception handling.",
    },

    // ===== Version Control Tools =====

    {
        category: "Version Control",
        title: "Git & GitHub",
        icon: FaGitAlt,
        desc: "Skilled in Version control, branching, merging, and collaborative workflows.",
    },

    // ===== Development Tools =====

    {
        category: "Tools",
        title: "VS Code",
        icon: VscVscode,
        desc: "Primary code editor with extensions for frontend and backend development.",
    },
    {
        category: "Tools",
        title: "WebStorm",
        icon: SiWebstorm,
        desc: "Skilled in using WebStorm IDE for efficient Web development, leveraging features like intelligent code completion, debugging, version control, and integrated tools."
    },
    {
        category: "Tools",
        title: "IntelliJ IDEA",
        icon: SiIntellijidea,
        desc: "Java development IDE for OOP projects with advanced debugging tools.",
    },
    {
        category: "Tools",
        title: "Postman",
        icon: SiPostman,
        desc: "API testing and debugging for backend development workflows.",
    }
];


const cardVariants = {
    hidden: {opacity: 0, y: 50},
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {delay: i * 0.1, duration: 0.6, ease: 'easeOut'},
    }),
};

export const Skills = () => {

    const categories = ["All", ...new Set(skills.map(skill => skill.category))];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredSkills =
        selectedCategory === "All"
            ? skills
            : skills.filter(
                (skill) => skill.category === selectedCategory
            );

    return (
        <div>

            <div id="skills">

                <motion.h1
                    className="title"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    variants={cardVariants}
                    custom={0}
                >
                    SKILLS
                </motion.h1>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm hover:cursor-pointer font-medium border-1 border-primary ${
                                selectedCategory === category
                                    ? " bg-indigo-600 text-white"
                                    : "bg-transparent text-white-600"
                            } transition duration-300`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="skill-cards flex flex-wrap items-center justify-center p-5 gap-5 max-md:grid-cols-1">
                    {filteredSkills.map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                className="scard group w-64 h-40 perspective"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                custom={index}
                            >
                                <div
                                    className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

                                    <div
                                        className="absolute w-full h-full backface-hidden bg-transparent shadow-md rounded-md flex flex-col justify-center items-center p-4">
                                        <IconComponent className="text-4xl text-primary mb-2"/>
                                        <h3 className="etitle text-center">{skill.title}</h3>
                                    </div>
                                    <div
                                        className="absolute text-justify w-full h-full backface-hidden rotate-y-180 bg-indigo-800 text-white-800 shadow-md rounded-md p-4 text-sm flex items-center justify-center text-center max-md:text-[12px] ">
                                        <p>{skill.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
