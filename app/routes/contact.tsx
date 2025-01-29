import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulating email submission (You can integrate with EmailJS or API)
    console.log("Form Data Submitted:", formData);

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 text-pink-900">
      <div className="max-w-5xl mx-auto text-center pt-4">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold font-cursive"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Let's Connect! 🚀
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-10 bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-pink-300 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Name Input */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-full border border-pink-400 text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-full border border-pink-400 text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-pink-400 text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-full transition flex items-center justify-center space-x-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            {isSubmitted ? "Message Sent! 📤" : "Send Message"}
            <FaHeart className="ml-2" />
          </motion.button>
        </motion.form>

        {/* Social Links */}
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
            className="bg-white/50 p-4 rounded-full shadow-lg text-lg font-semibold flex items-center space-x-2 hover:bg-white/70 transition"
          >
            <FaLinkedin className="text-blue-700" /> <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/nuresaba8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/50 p-4 rounded-full shadow-lg text-lg font-semibold flex items-center space-x-2 hover:bg-white/70 transition"
          >
            <FaGithub className="text-gray-700" /> <span>GitHub</span>
          </a>

          {/* Email */}
          <a
            href="mailto:nuresaba686@gmail.com"
            className="bg-white/50 p-4 rounded-full shadow-lg text-lg font-semibold flex items-center space-x-2 hover:bg-white/70 transition"
          >
            <FaEnvelope className="text-red-500" /> <span>Email Me</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
