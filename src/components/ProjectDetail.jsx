import React from 'react';
import { motion } from 'framer-motion';

const ProjectDetail = ({ project, onClose, projects, onSelectProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900/90 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full h-full overflow-auto"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-300 mb-4 hover:text-purple-400 transition-colors duration-300"
          onClick={onClose}
        >
          Close
        </motion.button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-gray-100 mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
              >
                GitHub <span>→</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
              >
                Live Demo <span>→</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {project.images?.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="rounded-lg shadow-lg w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
