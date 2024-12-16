import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = [
    { name: 'About ZSS', href: '#about' },
    { name: 'Management Board', href: '#management' },
    { name: 'Sister Companies', href: '#sister-companies' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact', isButton: true },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img className="h-20 w-auto" src="src/assets/ZSSBG.png" alt="ZSS Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-sm font-medium transition-colors duration-200 
                  ${item.isButton 
                    ? 'px-4 py-2 rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-white' 
                    : 'text-gray-700 hover:text-primary'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-200 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  item.isButton
                    ? 'text-primary border-2 border-primary hover:bg-primary hover:text-white'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
