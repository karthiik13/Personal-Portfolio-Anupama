import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-gray-900">
      {/* Floating Background Animation */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row h-full items-center justify-center px-4 lg:px-12">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:w-1/2 mb-8 lg:mb-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] mx-auto"
          >
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"
              style={{ padding: '4px' }}
            >
              <img
                src="/images/profile.jpeg"
                alt="Anupama Sudarsan"
                className="rounded-full w-full h-full object-cover bg-gray-900 shadow-2xl 
                             ring-4 ring-blue-500/50 hover:ring-blue-400/80 
                             transition-all duration-300 
                             hover:shadow-blue-400/50"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Left Side Content */}
        <div className="text-center lg:text-left text-gray-100 lg:w-3/5">
          {/* Name and Type Animation - Fixed height and overflow handling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            {/* Fixed height container to prevent layout shifts */}
            <div className="h-16 md:h-24 lg:h-32 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  "Hello, I'm Anupama Sudarsan ",
                  1000,
                  "Data Analyst | Problem Solver ",
                  1000,
                  "Power BI | SQL | Python | Excel",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                className="text-3xl md:text-5xl lg:text-6xl font-bold inline-block"
                style={{
                  color: '#FFFFFF',
                  whiteSpace: 'normal', // Allow wrapping on small screens
                  maxWidth: '100%',     // Ensure text doesn't overflow container
                  lineHeight: 1.2,      // Better line height for multi-line text
                }}
              />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-lg md:text-xl px-2 md:px-0"
          >
            Patterns, puzzles, and possibilities - decoded
          </motion.p>

          {/* Download Resume Button */}
          <motion.a
            href="/resume.pdf"
            download="Anupama_Sudarsan_Resume.pdf"
            whileHover={{
              scale: 1.05, // Reduced scale effect for better mobile experience
              boxShadow: '0px 0px 20px rgba(59, 130, 246, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gray-100 px-6 md:px-8 py-3 text-sm md:text-lg font-semibold text-gray-900 transition-all hover:bg-gray-300 relative overflow-hidden group mb-8 inline-block"
          >
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-40 transition-opacity" />
          </motion.a>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 md:gap-6 justify-center lg:justify-start"
          >
            <a
              href="https://www.linkedin.com/in/anupama-sudarsan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://github.com/AnupamaSudarsan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl md:text-3xl" />
            </a>
            <a
              href="mailto:anupamasudarsan.13@gmail.com"
              className="text-gray-100 hover:text-red-400 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <MdEmail className="text-2xl md:text-3xl" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;