import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">CyberDefense Solutions</h3>
            <p className="text-slate-400 mb-6">
              Empowering enterprises with cutting-edge security solutions to protect their digital assets.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Subscribe to Our Newsletter</h4>
            <p className="text-slate-400 mb-6">
              Stay updated with the latest security trends, product updates, and industry insights.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-slate-800 rounded-l-lg border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} CyberDefense Solutions. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;