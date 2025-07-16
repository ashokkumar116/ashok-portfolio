import React, { useState } from "react";
import { motion } from "framer-motion";
import ashok from "../assets/images/ash1.jpg";
import Education from "./Education";

const principles = [
    {
        icon: "fa-solid fa-thumbs-up",
        title: "Simplicity",
        desc: "I believe clean and simple design wins",
    },
    {
        icon: "fa-solid fa-people-group",
        title: "Collaboration",
        desc: "I work best when ideas are shared openly",
    },
    {
        icon: "fa-solid fa-arrow-trend-up",
        title: "Growth",
        desc: "I’m always learning something new to level up",
    },
    {
        icon: "fa-solid fa-arrows-to-eye",
        title: "Focus",
        desc: "I take pride in staying on task and finishing strong",
    },
];

const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export const About = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div id="about" className="mt-6 max-md:w-full">
            <motion.h1
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-5xl text-center text-primary font-bold mb-5"
            >
                ABOUT ME
            </motion.h1>

            <div className="abo flex flex-col xl:flex-row max-xl:justify-center max-xl:items-center p-10 max-xl:p-5">
                <motion.div
                    className="left-a flex-1 mb-5 md:mb-3"
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <img
                        src={ashok}
                        alt="Ashok Kumar"
                        className="rounded-md h-130 ml-10 max-xl:ml-2 max-md:h-100 "
                    />
                </motion.div>

                <motion.div
                    className="right-a flex-2 max-2xl:flex-2 2xl:max-3xl:justify-center items-center"
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <p className="text-justify max-lg:w-full max-xl:pl-3 max-2xl:max-2xl:pl-15">
                        I'm a passionate and dedicated Full Stack Developer from
                        a small village in Ariyalur, Tamil Nadu. I hold a
                        Bachelor's degree in Computer Science and Engineering
                        and have hands-on experience in building end-to-end web
                        applications using React.js, Tailwind CSS, Node.js,
                        Express.js, and SQL. I also have experience in Java. I
                        specialize in developing clean, maintainable code and
                        building scalable web solutions that solve real-world
                        problems. Passionate about learning and continuously
                        improving, I’m known for being a quick learner,
                        problem-solver, and team collaborator who thrives in
                        dynamic and challenging environments. Whether it's
                        designing a smooth user experience or writing efficient
                        code, I aim to bring real value to users through my
                        work. I'm currently open to full-time or freelance opportunities. where I
                        can grow as a developer and contribute meaningfully to a
                        team.
                    </p>

                    <motion.h1
                        className="text-2xl text-primary font-bold mt-5 max-xl:pl-3 max-2xl:max-2xl:pl-15"
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        My Work Principles
                    </motion.h1>

                    <div className="principles grid grid-cols-1 sm:grid-cols-2 py-5 gap-5 cursor-pointer max-xl:pl-3 max-2xl:max-2xl:pl-15">
                        {principles.map((item, index) => (
                            <motion.div
                                key={index}
                                className="card-p h-30 max-xl:h-30 max-2xl:h-23 max-2xl:text-sm rounded-md w-full bg-transparent border-2 text-center flex flex-col justify-center items-center hover:scale-105 border-indigo-600 p-3 hover:shadow-xl transition-all duration-300"
                                onMouseOver={() => setHoveredCard(index)}
                                onMouseOut={() => setHoveredCard(null)}
                                variants={fadeUpVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <i
                                    className={`${item.icon} text-xl text-indigo-400 mb-2`}
                                />
                                <span className="font-bold text-indigo-500">
                                    {item.title}
                                </span>
                                {hoveredCard === index && (
                                    <p className="text-sm max-xl:text-sm max-2xl:text-[10px] mt-2 text-gray-400 transition duration-500 ease-in-out">
                                        {item.desc}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="education">
                <Education />
            </div>
        </div>
    );
};
