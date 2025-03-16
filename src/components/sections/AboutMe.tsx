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
           Welcome to my little corner of the digital world! 
           I’m Anupama—a curious explorer of data, always looking for the patterns, stories, and insights hidden beneath the surface. 
           Numbers may seem cold at first, but I believe they tell a story, and I love bringing those stories to life.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-100 leading-relaxed mb-6"
          >
            With a background in Business Analytics, Operations, and Data Science, I enjoy working across different areas—visualization, reporting, process optimization, and strategy. 
            My approach isn’t just about crunching numbers; it’s about understanding the why behind them and finding creative ways to make data more meaningful.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-100 leading-relaxed mb-6"
          >
            This portfolio is more than just a collection of projects—it’s a reflection of my journey, growth, and the joy of discovery. 
            Feel free to explore, and if something resonates with you, let’s connect!
          </motion.p>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
