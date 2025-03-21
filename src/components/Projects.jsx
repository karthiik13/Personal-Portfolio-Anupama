import { useState } from 'react';
import { motion } from 'framer-motion';
import projects from '../data/ProjectData';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleCloseDetail = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              className="relative bg-gray-800 rounded-lg p-8 shadow-xl cursor-pointer group overflow-hidden"
              onClick={() => handleProjectClick(project)}
            >
              <motion.div
                layoutId={`project-${project.id}`}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {selectedProject && (
          <motion.div
            layoutId={`project-${selectedProject.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectDetail
              project={selectedProject}
              onClose={handleCloseDetail}
              projects={projects}
              onSelectProject={handleProjectClick}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
