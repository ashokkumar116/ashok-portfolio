import React from "react";
import {backInOut, motion} from 'motion/react'
import StaggeredDropDown from "./StaggeredDropDown";
import {
    FiHome,
    FiUser,
  } from "react-icons/fi";

export const Navbar = () => {
    return (
        <>
            <motion.nav 
            
            initial={{
                y:-70
            }}

            animate={{
                y:0
            }}

            transition={{
                duration:1,
                ease:backInOut
            }}

            className="flex backdrop-blur-[10px] justify-between items-center block space-x-3 shadow-xl/20 z-[50] p-4 bg-transparent border-b-2 border-gray-800 fixed max-md:fixed top-0 w-[100%] align-center max-md:dropdown max-md:w-full">
                <div className="logo flex items-center">
                    <a href="#"><h1 className="text-[clamp(1.5rem,2cqw,5rem)] font-bold text-center text-primary">ASHOK KUMAR P</h1></a>
                </div>
                <ul className="flex space-x-3 justify-center items-center text-primary font-medium hidden md:flex max-md:dropdown-content">
                    <a
                        href="#"
                        className="cursor-pointer flex justify-center items-center inline-block text-white-500 hover:text-indigo-600 hover:scale-[1.05] hover:bg-gray-800 p-2 rounded-md transition"
                    >
                        <i class="fa-solid fa-house"></i>
                        &nbsp; HOME
                    </a>
                    <a
                        href="#about"
                        className="cursor-pointer flex justify-center items-center inline-block text-white-500 hover:text-indigo-600 hover:scale-[1.05] hover:bg-gray-800 p-2 rounded-md transition"
                    >
                        <i class="fa-solid fa-address-card"></i>
                        &nbsp; ABOUT
                    </a>
                    <a
                        href="#skills"
                        className="cursor-pointer flex justify-center items-center inline-block text-white-500 hover:text-indigo-600 hover:scale-[1.05] hover:bg-gray-800 p-2 rounded-md transition"
                    >
                        <i class="fa-solid fa-brain"></i>
                        &nbsp; SKILLS
                    </a>
                    <a
                        href="#projects"
                        className="cursor-pointer flex justify-center items-center inline-block text-white-500 hover:text-indigo-600 hover:scale-[1.05] hover:bg-gray-800 p-2 rounded-md transition"
                    >
                        <i class="fa-solid fa-file-code"></i>
                        &nbsp; PROJECTS
                    </a>
                    <a
                        href="#contact"
                        className="cursor-pointer flex justify-center items-center inline-block text-white-500 hover:text-indigo-600 hover:scale-[1.05] hover:bg-gray-800 p-2 rounded-md transition"
                    >
                        <i class="fa-solid fa-envelope"></i>
                        &nbsp; CONTACT
                    </a>
                    
                </ul>
                <StaggeredDropDown />
            </motion.nav>
        </>
    );
};
