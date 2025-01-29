import React, { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-500 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-white font-bold text-xl">My Website</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-pink-200 font-medium">
            Home
          </a>
          <a href="#about" className="text-white hover:text-pink-200 font-medium">
            About
          </a>
          <a href="#projects" className="text-white hover:text-pink-200 font-medium">
            Projects
          </a>
          <a href="#contact" className="text-white hover:text-pink-200 font-medium">
            Contact
          </a>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
      {isOpen && (
        <div className="md:hidden bg-pink-400 space-y-2 px-4 pb-3">
          <a href="#home" className="block text-white hover:text-pink-200 font-medium">
            Home
          </a>
          <a href="#about" className="block text-white hover:text-pink-200 font-medium">
            About
          </a>
          <a href="#projects" className="block text-white hover:text-pink-200 font-medium">
            Projects
          </a>
          <a href="#contact" className="block text-white hover:text-pink-200 font-medium">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
