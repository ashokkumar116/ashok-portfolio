import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import weather from "../assets/images/weather.png";
import qrcode from "../assets/images/qrcode.png";
import tictactoe from "../assets/images/tictactoe.png";
import memory from "../assets/images/memory.png";
import notesApp from "../assets/images/NotesApp.jpeg"
import TaskPilot from "../assets/images/TaskPilot.jpeg"

const projects = [
  {
    title: "Employee Task Management System",
    description:
      "A role-based full-stack application for managing employees, assigning tasks, and tracking progress. Features authentication, image upload, protected routes, dynamic roles/positions, and charts for data visualization.",
    category: "Full Stack",
    image: TaskPilot,
    tech: ["React.js", "PrimeReact", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "JWT", "Multer", "Chart.js"],
    github: "https://github.com/ashokkumar116/employee_task_management_system",
    live: "https://taskpilot-by-ashok-kumar-p.netlify.app",
  },
  {
    title: "Modern Notes Taking App",
    description:
      "A full-stack notes app with user authentication (JWT + cookies), allowing users to create, update, and delete notes. Includes protected routes and a rich text editor.",
    category: "Full Stack",
    image: notesApp,
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "JWT", "Cookies", "Multer"],
    github: "https://github.com/ashokkumar116/modern_notes_app",
    live: "https://notes-app-by-ashok.netlify.app",
  },
  {
    title: "Weather App",
    description:
      "A weather forecasting app that fetches real-time weather information using OpenWeatherMap API. Displays temperature, humidity, and weather conditions for any city entered by the user.",
    category: "API",
    image: weather,
    tech: ["React", "Tailwind", "API"],
    github: "https://github.com/ashokkumar116/weather-app",
    live: "https://weather-app-by-ashok.netlify.app",
  },
  {
    title: "QR Code Generator",
    description:
      "Generates dynamic QR codes based on the input text or link provided by the user. Built with basic web technologies and uses a public QR code API.",
    category: "API",
    image: qrcode,
    tech: ["React", "Tailwind", "API"],
    github: "https://github.com/ashokkumar116/qr-code-generator",
    live: "https://qr-code-generator-by-ashok.netlify.app",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A simple and responsive 2-player game of Tic Tac Toe. Implements game logic with winning condition checks and restart option.",
    category: "Games",
    image: tictactoe,
    tech: ["React", "Tailwind"],
    github: "https://github.com/ashokkumar116/tic-tac-toe-game",
    live: "https://tic-tac-toe-by-ashok.netlify.app",
  },
  {
    title: "Memory Game",
    description:
      "A card-flipping memory game with timer, sound effects, and scoring system. Difficulty levels and high score are saved using localStorage.",
    category: "Games",
    image: memory,
    tech: ["React", "Tailwind", "localStorage"],
    github: "https://github.com/ashokkumar116/memory-game",
    live: "https://memory-game-by-ashok.netlify.app",
  },
];

const categories = ["All","Full Stack", "API", "Games"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalData, setModalData] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-10 px-5 bg-transparent relative">
      <h2 className="text-4xl font-bold text-center text-primary mb-8">
        My Projects
      </h2>

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

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setModalData(project)}
              className="cursor-pointer bg-transparent border-2 border-primary shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300 hover:scale-105"
            >
              <div className="overflow-hidden rounded-md mb-4">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary text-white-700 px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                  
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

  
      <AnimatePresence>
        {modalData && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 max-md:w-full max-md:p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalData(null)}
          >
            <motion.div
              className="bg-gray-900 max-w-lg w-full rounded-xl p-6 shadow-lg relative z-10 max-md:w-full border-1 border-gray-500"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalData(null)}
                className="hover:cursor-pointer absolute top-3 right-4 text-lg font-bold text-gray-500 hover:text-red-500"
              >
                &times;
              </button>
              <img
                src={modalData.image}
                alt={modalData.title}
                className="rounded-md mb-4 w-full h-76 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{modalData.title}</h3>
              <p className="text-white-700 mb-4">{modalData.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {modalData.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary text-white-700 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={modalData.github}
                  target="_blank"
                  className=" btn btn-primary"
                >
                  GitHub
                </a>
                {modalData.live && modalData.live !== "#" && (
                  <a
                    href={modalData.live}
                    target="_blank"
                    className="btn btn-success"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
