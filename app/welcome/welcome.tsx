import { motion } from "framer-motion";

export function Welcome() {
  // Animation Variants
  const nameVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, type: "spring" },
    }),
  };

  const name = "Nure Saba Binte Alam".split("");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-4 ">
      {/* Animated Image with Glow Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.img
          src="/n.png"
          alt="Profile Picture"
          className="md:w-[300px] w-[200px] h-[200px] md:h-[300px] rounded-full shadow-2xl "
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 w-full h-full rounded-full bg-white/10 blur-lg"></div>
      </motion.div>

      {/* Name Animation */}
      <motion.h1
        className="mt-6 text-2xl md:text-4xl font-extrabold flex justify-center space-x-1 tracking-wider"
        initial="hidden"
        animate="visible"
      >
        {name.map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Glassmorphism Effect for Description */}
      <motion.div
        className="md:w-[50%] bg-white/5 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center text-white text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p>
          A student with an unwavering passion for{" "}
          <strong>Software Engineering</strong>,
          <strong> Artificial Intelligence</strong>, and{" "}
          <strong>Data Science</strong>, poised to deploy advanced expertise and
          scholarly insights to address intricate, real-world challenges.
        </p>
      </motion.div>

      {/* Download Resume Button */}
      <motion.a
        href="/resume.pdf"
        download
        className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </motion.a>
    </main>
  );
}

export default Welcome;
