const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 text-center border-t border-gray-700">
      <p className="text-sm hover:text-blue-400 transition-colors duration-300">
        &copy; {new Date().getFullYear()} Anupama Sudarsan. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
