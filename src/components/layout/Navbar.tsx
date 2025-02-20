import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-white">
              CyberDefense
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Services
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Call-to-Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center transition-colors"
            >
              Get Started
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Services
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Case Studies
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </a>
              <a
                href="#"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors"
              >
                Get Started
                <ChevronRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;