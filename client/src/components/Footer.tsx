import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary/80 text-white">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-2xl font-bold">
              Mukit Mahdin<span className="text-[#0066FF]">.</span>
            </p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Mukit Mahdin. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
