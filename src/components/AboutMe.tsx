import { motion } from 'framer-motion';
import React from 'react';

const AboutMe = () => {
  return (
    <div id="about" className="relative w-full bg-gray-900 py-20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-12">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-blue-400"
          >
            About Me
          </motion.h2>

          {/* Text Content */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-100 leading-relaxed mb-6"
          >
            I'm a passionate <span className="text-blue-400">Data Analyst</span> with a strong background in 
            Power BI, SQL, and data visualization. I love transforming complex data into meaningful insights 
            that help businesses make better decisions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-100 leading-relaxed mb-6"
          >
            With experience in creating interactive dashboards and conducting in-depth analysis, I've helped 
            businesses uncover hidden patterns and improve operational efficiency. My focus is on delivering 
            clean, insightful, and actionable data solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-100 leading-relaxed mb-6"
          >
            Currently, I'm expanding my expertise in Python and predictive analytics to tackle more complex 
            data challenges and stay ahead in the industry.
          </motion.p>

          {/* Call to Action */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gray-100 px-8 py-3 text-lg font-semibold text-gray-900 transition-all hover:bg-gray-300 relative overflow-hidden group"
          >
            <span className="relative z-10">See My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
