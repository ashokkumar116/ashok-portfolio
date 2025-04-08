import {
    FiEdit,
    FiChevronDown,
    FiTrash,
    FiShare,
    FiPlusSquare,
    FiHome,
    FiUser,
  } from "react-icons/fi";
  import { FaBrain } from "react-icons/fa";
  import { FaHouse } from "react-icons/fa6";
  import { FaUser } from "react-icons/fa";
  import { FaFileCode } from "react-icons/fa6";
  import { FaEnvelope } from "react-icons/fa";





  import { motion } from "framer-motion";
  import { Dispatch, SetStateAction, useState } from "react";
  
  const StaggeredDropDown = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="absolute md:fixed p-8 pb-56 flex items-center justify-center right-0 top-[-15px] md:hidden">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-700 hover:bg-indigo-600 transition-colors"
          >
            <span className="font-medium text-sm">MENU</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-gray-900 shadow-xl absolute top-[130%] left-[50%] w-48 overflow-hidden"
          >
            <a href="#"><Option  setOpen={setOpen} Icon={FaHouse} text="Home" ></Option></a>
            <a href="#about"><Option  setOpen={setOpen} Icon={FaUser} text="About" /></a>
            <a href="#skills"><Option  setOpen={setOpen} Icon={FaBrain} text="Skills" /></a>
            <a href="#projects"><Option setOpen={setOpen} Icon={FaFileCode} text="Projects" /></a>
            <a href="#contact"><Option setOpen={setOpen} Icon={FaEnvelope} text="Contact" /></a>
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({ text, Icon, setOpen }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-gray-800 text-primary hover:text-indigo-600 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };
  
  export default StaggeredDropDown;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };