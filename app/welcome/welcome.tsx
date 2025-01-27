import { motion } from "framer-motion";

export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-8 px-4">
      {/* Animated Image */}
      <motion.img
        src="/n.png"
        alt="React Router Logo"
        className="md:w-[350px] w-[250px] h-[250px] md:h-[350px]  shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Description Section */}
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold dark:text-gray-100">
          Nure Saba Binte Alam
        </h1>
        <p className="mt-2 md:mx-[30%] text-sm md:text-base dark:text-gray-300 leading-relaxed">
          A student with an unwavering passion for <strong>Software Engineering</strong>, 
          <strong>Artificial Intelligence</strong>, and <strong>Data Science</strong>, poised 
          to deploy advanced expertise and scholarly insights to address intricate, 
          real-world challenges.
        </p>
      </motion.div>
    </main>
  );
}

export default Welcome;