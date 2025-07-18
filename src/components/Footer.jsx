import React from 'react';
import { NavLink } from 'react-router-dom';
import { Code, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter size={20} />, href: 'https://twitter.com' },
    { icon: <Github size={20} />, href: 'https://github.com' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <NavLink to="/" className="flex items-center space-x-2 mb-4">
              
                          <img src="public/asset/image.png" alt="Webstark Logo" className="h-8 w-8" />

              <span className="text-2xl font-bold text-white">Webstark</span>
            </NavLink>
            <p className="text-gray-400 text-center md:text-left">
              Transforming Ideas into Digital Experiences.
            </p>
            <p className="text-gray-500 mt-2 text-center md:text-left">Bhubaneswar, Odisha, India</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-semibold text-white mb-4">Quick Links</p>
            <ul className="space-y-2 text-center">
              <li><NavLink to="/services/website-development" className="text-gray-400 hover:text-teal-400 transition-colors">Website Development</NavLink></li>
              <li><NavLink to="/services/ecommerce" className="text-gray-400 hover:text-teal-400 transition-colors">E-commerce Solutions</NavLink></li>
              <li><NavLink to="/services/portfolio-creation" className="text-gray-400 hover:text-teal-400 transition-colors">Portfolio Creation</NavLink></li>
              <li><NavLink to="/work" className="text-gray-400 hover:text-teal-400 transition-colors">Our Work</NavLink></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
             <p className="font-semibold text-white mb-4">Connect With Us</p>
             <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
             <p className="text-gray-400 mt-4">contact@webstark.in</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700/50 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} webstark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;