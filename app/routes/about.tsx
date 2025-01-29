import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          I am <span className="font-bold">Nure Saba Binte Alam</span>, an aspiring Computer Science student
          passionate about <strong>Software Engineering</strong>, <strong>Artificial Intelligence</strong>,
          and <strong>Data Science</strong>. I am eager to leverage my expertise to solve complex, real-world
          challenges and contribute meaningfully to the tech industry.
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {["C++", "Java", "C#", "PHP", "Python", "React", "Next.js", "NestJS", "SQL", "TypeScript"].map(
            (skill, index) => (
              <motion.div
                key={index}
                className="bg-white/20 backdrop-blur-lg p-4 rounded-lg shadow-lg text-center text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            )
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 bg-white/20 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center text-lg text-gray-100"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <p className="text-lg">
            🎓 <strong>Bachelor of Science in Computer Science & Engineering</strong>
          </p>
          <p>📍 American International University-Bangladesh (2022-Present)</p>
          <p>📊 <strong>CGPA: 3.97</strong></p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nure-saba"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-4 rounded-lg shadow-lg text-lg font-semibold hover:bg-white/30 transition"
          >
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/nuresaba8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 p-4 rounded-lg shadow-lg text-lg font-semibold hover:bg-white/30 transition"
          >
            GitHub
          </a>

          {/* Email */}
          <a
            href="mailto:nuresaba686@gmail.com"
            className="bg-white/20 p-4 rounded-lg shadow-lg text-lg font-semibold hover:bg-white/30 transition"
          >
            Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
