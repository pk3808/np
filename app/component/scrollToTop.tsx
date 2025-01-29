import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle Scroll Event
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-pink-500 text-white p-4 rounded-full shadow-lg transition ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.75 }}
      whileHover={{ scale: 1.1 }}
    >
      <FaChevronUp className="w-5 h-5" />
    </motion.button>
  );
};

export default ScrollToTop;
