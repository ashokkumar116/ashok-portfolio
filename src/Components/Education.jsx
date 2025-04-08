import React from "react";
import { IoSchool } from "react-icons/io5";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Education = () => {
    return (
        <>  
            <motion.h1
                className="text-3xl text-center text-primary font-bold mb-8"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                EDUCATIONAL QUALIFICATIONS
            </motion.h1>

            <div className="education flex flex-wrap justify-center items-center max-md:flex-col max-md:space-y-7 max-md:justify-center max-md:items-center max-md:space-x-0 mb-10">
                <motion.div
                    className="ecard"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <IoSchool className="eicon" /> 
                    <h3 className="etitle"> B.E COMPUTER SCIENCE & ENGINEERING</h3>
                    <p className="ep">DHANALAKSHMI SRINIVASAN ENGINEERING COLLEGE</p>
                    <p className="ep"> 2020 - 2024 | 87%</p>
                </motion.div>

                <motion.div
                    className="ecard"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <FaSchoolFlag className="eicon" />
                    <h3 className="etitle">Higher Secondary School Certificate</h3>
                    <p className="ep"> DHANALAKSHMI SRINIVASAN HIGHER SECONDARY SCHOOL</p>
                    <p className="ep"> 2019 - 2020 | 76% </p>
                </motion.div>

                <motion.div
                    className="ecard"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <FaSchool className="eicon" />
                    <h3 className="etitle"> Secondary School Leaving Certificate</h3>
                    <p className="ep"> ADITYA BIRLA MATRICULATION SCHOOL</p>
                    <p className="ep"> 2017 - 2018 | 90% </p>
                </motion.div>
            </div>
        </>
    );
};

export default Education;
