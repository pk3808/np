import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "~/component/navbar";

// Define Project Type
type Project = {
  title: string;
  tech: string[];
  description: string;
  link: string;
};

// Project Data
export const projects: Project[] = [
  {
    title: "Visa System",
    tech: ["ASP.NET", "C#"],
    description: "A visa system for scheduling and managing visa appointments.",
    link: "https://github.com/nuresaba8/VisaSystem.git",
  },
  {
    title: "Blogging Platform",
    tech: ["ASP.NET MVC", "Entity Framework"],
    description: "A blogging platform for users to view, write, and manage posts.",
    link: "https://github.com/nuresaba8/BloggingPlatform.git",
  },
  {
    title: "News Management System",
    tech: ["ASP.NET", "C#", "Entity Framework"],
    description: "An API-based system for managing and searching news articles.",
    link: "https://github.com/nuresaba8/NewsPaper.git",
  },
  {
    title: "Restaurant Billing System",
    tech: ["C#", "SQL Server", "WinForms", "PHP", "MySQL"],
    description: "A desktop app for managing menu items and generating sales reports.",
    link: "https://github.com/nuresaba8/Resturant-Billing-System.git",
  },
  {
    title: "Entrepreneurial Idea Showcase",
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeORM", "JWT"],
    description: "A platform for entrepreneurs to submit and manage startup ideas.",
    link: "https://github.com/nuresaba8/Entrepreneurial-Idea-.git",
  },
  {
    title: "Tour & Travel Website",
    tech: ["HTML", "PHP", "CSS", "JS", "AJAX", "JSON"],
    description: "A web app for booking flights, hotels, and managing travel plans.",
    link: "https://github.com/nuresaba8/Tour-Travel-Website.git",
  },
];

// Tech Categories for Filtering
const techCategories = ["All", "ASP.NET", "C#", "React", "Next.js", "SQL", "PHP"] as const;
type TechFilter = (typeof techCategories)[number];

// Project Card Component (Typed Props)
const ProjectCard: React.FC<Project> = ({ title, tech, description, link }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t, index) => (
          <span key={index} className="bg-pink-500 text-white px-3 py-1 text-xs font-semibold rounded-lg">
            {t}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-pink-600 hover:underline"
      >
        View Project →
      </a>
    </motion.div>
  );
};

// Main Projects Component
const Projects: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechFilter>("All");

  // Filter Projects
  const filteredProjects =
    selectedTech === "All" ? projects : projects.filter((p) => p.tech.includes(selectedTech));

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800  px-6">
      <Navbar />
      <div className="max-w-6xl mx-auto py-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mt-6 gap-4">
          {techCategories.map((tech) => (
            <button
              key={tech}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedTech === tech
                  ? "bg-white text-gray-900"
                  : "bg-pink-600 text-white hover:bg-pink-700"
              }`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
