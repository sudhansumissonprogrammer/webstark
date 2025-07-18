import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, ShoppingCart, Briefcase, Info, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/', icon: Code },
  { 
    name: 'Services', 
    path: '#', 
    icon: Code,
    dropdown: [
      { name: 'Website Development', path: '/services/website-development' },
      { name: 'E-commerce Solutions', path: '/services/ecommerce' },
      { name: 'Portfolio Creation', path: '/services/portfolio-creation' },
    ]
  },
  { name: 'Work', path: '/work', icon: Briefcase },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Contact', path: '/contact', icon: Mail },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServicesMenu = () => setServicesOpen(!isServicesOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  }

  const navLinkClasses = ({ isActive }) =>
    `text-lg font-medium transition-colors duration-300 ${
      isActive ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'
    }`;
  
  const mobileNavLinkClasses = ({ isActive }) =>
    `block py-3 text-2xl font-semibold transition-colors duration-300 ${
      isActive ? 'text-teal-400' : 'text-gray-100 hover:text-teal-400'
    }`;


  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="https://www.flaticon.com/free-icons/code" title="code icons"></a>
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="public/asset/image.png" alt="Webstark Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-white">WEBSTARK</span>
          </NavLink>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="relative" onMouseEnter={toggleServicesMenu} onMouseLeave={toggleServicesMenu}>
                  <button className="text-lg font-medium text-gray-300 hover:text-teal-400 flex items-center">
                    {link.name}
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-2 w-64 bg-gray-800 rounded-lg shadow-xl p-2"
                      >
                        {link.dropdown.map(item => (
                           <NavLink
                           key={item.name}
                           to={item.path}
                           className="block px-4 py-2 text-gray-300 hover:bg-gray-700/50 hover:text-teal-400 rounded-md"
                           onClick={closeMenu}
                         >
                           {item.name}
                         </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
              <NavLink key={link.name} to={link.path} className={navLinkClasses}>
                {link.name}
              </NavLink>
              )
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
             <Button asChild className="hidden lg:inline-flex bg-teal-500 hover:bg-teal-600 text-white font-bold">
               {newFunction()}
            </Button>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-sm"
          >
            <nav className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link) => (
                 link.dropdown ? (
                  <div key={link.name}>
                    <button onClick={toggleServicesMenu} className="text-2xl font-semibold text-gray-100 hover:text-teal-400 flex items-center">
                      {link.name}
                    </button>
                    {isServicesOpen && (
                      <div className="mt-2 flex flex-col items-center space-y-2">
                        {link.dropdown.map(item => (
                          <NavLink key={item.name} to={item.path} className={mobileNavLinkClasses} onClick={closeMenu}>
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                <NavLink key={link.name} to={link.path} className={mobileNavLinkClasses} onClick={closeMenu}>
                  {link.name}
                </NavLink>
                )
              ))}
              <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white font-bold mt-4" onClick={closeMenu}>
               <NavLink to="/contact">start Your Project</NavLink>
             </Button>
<Button asChild className="bg-teal-500 hover:bg-teal-600 text-white font-bold mt-4" onClick={closeMenu}>
               <NavLink to="/contact">Start Your Project</NavLink>
             </Button>
              
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
  function newFunction() {
  return (
    <a
      href="https://wa.me/919692282485?text=Hi,%20I%27m%20interested%20in%20your%20services!"
      target="_blank"
      rel="noopener noreferrer"
    >
      Start Your Project
    </a>
  );
}
  
};

export default Header;