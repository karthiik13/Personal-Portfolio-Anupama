import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Github } from 'lucide-react'; // Added Github icon

const ProjectDetail = ({ project, onClose, projects, onSelectProject }) => {
  const [activeSection, setActiveSection] = useState(project.details?.[0]?.section || null);
  const [pdfError, setPdfError] = useState(false); // State to track PDF loading errors

  // Ensure activeSection is valid when the project changes
  useEffect(() => {
    if (project.details?.length > 0) {
      setActiveSection(project.details[0].section);
    }
  }, [project]);

  // Find current project index to enable navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
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

  const renderContent = () => {
    const section = project.details?.find((s) => s.section === activeSection);

    if (!section) {
      return null; // Do not render anything if no valid section is found
    }

    return section.content.map((item, index) => {
      switch (item.type) {
        case 'text':
          return (
            <div key={index} className="mb-6">
              {item.title && <h4 className="text-lg font-semibold mb-2">{item.title}</h4>}
              <p>{item.content}</p>
            </div>
          );
        case 'bulletPoints':
          return (
            <ol key={index} className="list-decimal list-inside mb-6">
              {item.items.map((point, i) => (
                <li key={i} className="text-gray-300 hover:text-white transition-colors">
                  {point}
                </li>
              ))}
            </ol>
          );
        case 'image':
          return (
            <figure key={index} className="text-center mb-6">
              <img
                src={item.src}
                alt={item.alt || 'Image'}
                className="mx-auto rounded-lg shadow-lg max-w-full hover:scale-105 transition-transform"
              />
              {item.caption && (
                <figcaption className="mt-2 text-sm text-gray-400">{item.caption}</figcaption>
              )}
            </figure>
          );
        default:
          return null;
      }
    });
  };

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
          <div className="flex items-center space-x-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-lg transition-transform hover:scale-105"
              >
                <Github size={16} className="mr-2" />
                GitHub
              </a>
            )}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 overflow-y-auto h-[calc(90vh-80px)]"
        >
          <div className="prose prose-invert max-w-none">{renderContent()}</div>
          {/* Embedded PDF Viewer */}
          {project.pdfLink && !pdfError ? (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <iframe
                src={project.pdfLink}
                title="Project PDF"
                className="w-full h-[600px] border-0 rounded-lg shadow-lg"
                allow="fullscreen"
                onError={() => setPdfError(true)} // Handle iframe loading errors
              ></iframe>
            </div>
          ) : (
            <div className="mt-8">
              <p className="text-gray-400 mb-4">
                The PDF could not be displayed. You can download it using the link below:
              </p>
              <a
                href={project.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition-transform hover:scale-105"
              >
                Download PDF
              </a>
            </div>
          )}
        </motion.div>

        {/* Footer with navigation */}
        <div className="flex justify-between items-center p-4 border-t border-gray-700 bg-gray-900">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center text-gray-300 hover:text-white transition-transform hover:scale-105"
          >
            <ArrowLeft size={16} className="mr-2" />
            Previous Project
          </button>
          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center text-gray-300 hover:text-white transition-transform hover:scale-105"
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