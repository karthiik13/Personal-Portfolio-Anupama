import React from 'react';
import { FaAward, FaExternalLinkAlt, FaClock } from 'react-icons/fa';

interface Certification {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  imageUrl: string;
  credentialUrl: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: 'aws-sa',
    title: 'AWS Solutions Architect Associate',
    organization: 'Amazon Web Services',
    issueDate: 'Dec 2023',
    credentialId: 'AWS-SAA-00001',
    imageUrl: '/images/certifications/aws-sa.png',
    credentialUrl: 'https://www.credly.com/your-badge',
    skills: ['AWS', 'Cloud Architecture', 'Infrastructure']
  },
  // Add more certifications here
];

const CertificationCard = ({ cert }: { cert: Certification }) => (
  <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div className="relative h-48 w-full bg-gray-50 dark:bg-gray-900 p-4">
      <img
        src={cert.imageUrl}
        alt={`${cert.title} certification badge`}
        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
    
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {cert.title}
      </h3>
      
      <div className="flex items-center text-gray-600 dark:text-gray-300">
        <FaAward className="mr-2" />
        <span>{cert.organization}</span>
      </div>

      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <FaClock className="mr-2" />
        <span>Issued: {cert.issueDate}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {cert.skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          ID: {cert.credentialId}
        </span>
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
        >
          Verify
          <FaExternalLinkAlt className="ml-2 h-3 w-3" />
        </a>
      </div>
    </div>
  </div>
);

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Industry-recognized certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
