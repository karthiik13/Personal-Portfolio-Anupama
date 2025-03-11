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
      <div className="relative z-10 flex h-full items-center justify-center px-4 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-[1600px]">
          {/* Left Side Content */}
          <div className="text-center lg:text-left text-gray-100 lg:w-3/5">
            {/* Name and Type Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-5xl font-bold md:text-7xl lg:min-w-[950px]" // Increased width
            >
              <TypeAnimation
                sequence={[
                  "Hello, I'm Anupama Sudarsan",
                  1000,
                  "I'm a Data Analyst",
                  1000,
                  "Based in Dubai, UAE",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{
                  display: 'inline-block',
                  color: '#3B82F6', // Primary color
                  whiteSpace: 'nowrap', // Prevents text wrapping
                }}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-xl md:text-2xl"
            >
              Data Analyst | Problem Solver | Tech Enthusiast
            </motion.p>

            {/* Download Resume Button */}
            <motion.a
              href="/resume.pdf"
              download="Anupama_Sudarsan_Resume.pdf"
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 0px 20px rgba(59, 130, 246, 0.8)',
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gray-100 px-8 py-3 text-lg font-semibold text-gray-900 transition-all hover:bg-gray-300 relative overflow-hidden group mb-8 inline-block"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-40 transition-opacity" />
            </motion.a>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-100 hover:text-red-400 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <MdEmail size={30} />
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block lg:w-1/2 pl-8"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-[450px] h-[450px] mx-auto"
            >
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"
                style={{ padding: '4px' }}
              >
                <img
                  src="/src/assets/profile.jpeg"
                  alt="Anupama Sudarsan"
                  className="rounded-full w-full h-full object-cover bg-gray-900 shadow-2xl 
                             ring-4 ring-blue-500/50 hover:ring-blue-400/80 
                             transition-all duration-300 
                             hover:shadow-blue-400/50"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
