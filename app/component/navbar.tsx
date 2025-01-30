import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-purple-500 shadow-md ">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Branding */}
        <h1 className="text-white font-extrabold text-2xl tracking-wide">My Portfolio</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <a
              key={index}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-white text-lg font-medium transition hover:text-pink-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-pink-500 text-white space-y-2 px-6 pb-4 pt-2 rounded-b-lg shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block text-lg font-medium py-2 transition hover:text-pink-300"
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
