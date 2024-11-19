import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/JCN0G7p/logo-portfolio.jpg"
            alt="Logo"
            className="w-16 h-16 mr-2 rounded-2xl"
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className="hidden md:flex md:space-x-4">
          <li>
            <a
              href="#"
              className={`block py-2 px-4 text-white ${
                activeLink === 'home' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`block py-2 px-4 text-white ${
                activeLink === 'about' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`block py-2 px-4 text-white ${
                activeLink === 'projects' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`block py-2 px-4 text-white ${
                activeLink === 'skills' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleLinkClick('skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`block py-2 px-4 text-white ${
                activeLink === 'contact' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </a>
          </li>
          
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden absolute bg-gray-800 w-full left-0 top-16 transition-transform duration-300 ease-in-out">
          <li>
            <a
              href="#"
              className={`block py-2 px-4 text-white ${
                activeLink === 'home' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`block py-2 px-4 text-white ${
                activeLink === 'about' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`block py-2 px-4 text-white ${
                activeLink === 'projects' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`block py-2 px-4 text-white ${
                activeLink === 'skills' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleLinkClick('skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`block py-2 px-4 text-white ${
                activeLink === 'contact' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </a>
          </li>
          
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
