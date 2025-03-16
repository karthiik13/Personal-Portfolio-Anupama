import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -300px 0px",
      }
    );

    ["about", "projects", "skills", "certifications", "contact"].forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-3 md:p-4 transition-all duration-300 ease-in-out ${
        isVisible
          ? "translate-y-0 bg-gray-900/70 backdrop-blur-md border-b border-gray-700 shadow-lg"
          : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-gray-100 text-xl md:text-2xl font-bold tracking-tight hover:text-blue-400 transition-colors">
          Anupama Sudarsan
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 md:gap-8">
          {["about", "projects", "skills", "certifications", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className={`text-gray-400 hover:text-blue-400 transition-colors duration-200 relative cursor-pointer ${
                  activeSection === section ? "text-blue-400" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span
                  className={`absolute left-0 bottom-[-4px] h-[2px] bg-blue-400 transition-transform duration-300 ${
                    activeSection === section ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-100 hover:text-blue-400 transition-colors"
          >
            ☰
          </button>
          {isMenuOpen && (
            <ul className="absolute top-12 left-0 w-full bg-gray-900 shadow-lg flex flex-col items-center gap-4 py-4">
              {["about", "projects", "skills", "certifications", "contact"].map((section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-gray-400 hover:text-blue-400 transition-colors duration-200 relative cursor-pointer ${
                      activeSection === section ? "text-blue-400" : ""
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
