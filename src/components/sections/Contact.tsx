import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });
    
    try {
      const response = await fetch("https://formspree.io/f/meoaoayv", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Message sent successfully!" }
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error);
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." }
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300">
            Have a question or want to work together?
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center space-x-8 mb-12">
            <a 
              href="https://github.com/AnupamaSudarsan" 
              className="text-3xl text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/anupama-sudarsan/" 
              className="text-3xl text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:anupamasudarsan.13@gmail.com" 
              className="text-3xl text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-gray-800 rounded-xl p-8 shadow-lg">
            {status.info.msg && (
              <div className={`text-center p-4 rounded-lg ${status.info.error ? 'bg-red-900 text-red-100' : 'bg-green-900 text-green-100'}`}>
                {status.info.msg}
              </div>
            )}
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white transition-colors duration-300"
                required
                disabled={status.submitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white transition-colors duration-300"
                required
                disabled={status.submitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white transition-colors duration-300"
                required
                disabled={status.submitting}
              />
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50"
            >
              {status.submitting ? 'Sending...' : status.submitted ? 'Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;