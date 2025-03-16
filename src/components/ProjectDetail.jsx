import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectDetail = ({ project, onClose, projects, onSelectProject }) => {
  const [activeSection, setActiveSection] = useState('introduction');
  
  // Example project details structure - you'll need to add this data to your projects array
  const projectSections = {
    introduction: {
      title: 'Introduction',
      content: project.description,
    },
    methodology: {
      title: 'Methodology',
      content: 'Detailed explanation of the methods used in this project...',
      images: [
        { src: '/api/placeholder/800/500', alt: 'Methodology diagram', caption: 'Fig 1: Project methodology overview' }
      ]
    },
    results: {
      title: 'Results',
      content: 'The key findings from this analysis include...',
      images: [
        { src: '/api/placeholder/800/500', alt: 'Results chart', caption: 'Fig 2: Key metrics visualization' },
        { src: '/api/placeholder/800/500', alt: 'Results data', caption: 'Fig 3: Detailed outcomes' }
      ]
    },
    conclusion: {
      title: 'Conclusion',
      content: 'In conclusion, this project demonstrated...'
    }
  };

  // Find current project index to enable navigation
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row h-[calc(90vh-80px)]">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-900 p-4 overflow-y-auto">
            <nav>
              <ul>
                {Object.entries(projectSections).map(([key, section]) => (
                  <li key={key} className="mb-2">
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === key
                          ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white'
                          : 'text-gray-300 hover:bg-gray-800'
                      }`}
                      onClick={() => setActiveSection(key)}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 pt-4 border-t border-gray-700">
              <div className="text-sm text-gray-400 mb-2">Project Tools:</div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4">
                {projectSections[activeSection].title}
              </h3>
              <p className="mb-6">{projectSections[activeSection].content}</p>
              
              {/* Images section */}
              {projectSections[activeSection].images && (
                <div className="mt-8 space-y-6">
                  {projectSections[activeSection].images.map((image, index) => (
                    <figure key={index} className="text-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="mx-auto rounded-lg shadow-lg max-w-full"
                      />
                      <figcaption className="mt-2 text-sm text-gray-400">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer with navigation */}
        <div className="flex justify-between items-center p-4 border-t border-gray-700 bg-gray-900">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Previous Project
          </button>
          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            Next Project
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;