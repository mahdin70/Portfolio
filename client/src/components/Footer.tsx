import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-white">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-2xl font-bold">
              Mukit Mahdin<span className="text-[#0066FF]">.</span>
            </p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Mukit Mahdin. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0066FF] transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0066FF] transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://mukitmahdin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0066FF] transition-colors"
            >
              <BiWorld />
            </a>
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0066FF] transition-colors"
            >
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
