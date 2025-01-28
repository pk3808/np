import { motion } from "framer-motion";

export function Welcome() {
  // Variants for the character-by-character animation of the name
  const nameVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i : number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.2,
        type: "spring",
      },
    }),
  };

  // Name as an array of characters
  const name = "Nure Saba Binte Alam".split("");

  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-8 px-4">
      {/* Animated Image */}
      <motion.img
        src="/n.png"
        alt="React Router Logo"
        className="md:w-[350px] w-[250px] h-[250px] md:h-[350px] shadow-2xl rounded-full "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Description Section */}
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {/* Name Animation */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-pink-300 flex justify-center space-x-1">
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
        </h1>

        {/* Text Description */}
        <p className="mt-4 md:mx-[25%] text-sm md:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
          A student with an unwavering passion for <strong>Software Engineering</strong>,
          <strong> Artificial Intelligence</strong>, and <strong>Data Science</strong>, poised
          to deploy advanced expertise and scholarly insights to address intricate,
          real-world challenges.
        </p>
      </motion.div>
    </main>
  );
}

export default Welcome;