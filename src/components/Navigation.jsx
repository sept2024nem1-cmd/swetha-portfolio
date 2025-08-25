import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Menu as MenuIcon, Sun, Moon } from 'lucide-react';

const Navigation = ({ activeSection, setIsMenuOpen, isMenuOpen, scrollToSection, personalInfo }) => {
  const navItems = ['home', 'about', 'experience', 'skills', 'highlights', 'projects', 'case-studies', 'tooling', 'certifications', 'achievements', 'contact'];

  const [isDesktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-bold text-gray-900"
          >
            <Sparkles size={22} className="text-blue-600" />
            <span>My Portfolio</span>
          </motion.div>

          {/* Theme toggle */}
          <button
            onClick={() => {
              setDark(!dark);
              const root = document.documentElement;
              if (!dark) root.classList.add('dark'); else root.classList.remove('dark');
            }}
            className="hidden md:inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-gray-200 text-sm hover:bg-gray-50 mr-2"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
            <span>{dark ? 'Light' : 'Dark'}</span>
          </button>

          {/* Desktop Menu as dropdown */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setDesktopMenuOpen(!isDesktopMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 text-sm hover:bg-gray-50"
                aria-haspopup="true"
                aria-expanded={isDesktopMenuOpen}
              >
                <MenuIcon size={16} />
                <span>Menu</span>
              </button>
              {isDesktopMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900/95 shadow-lg rounded-md border border-gray-100 dark:border-slate-800 p-2 grid grid-cols-2 gap-1 z-50">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => { scrollToSection(item); setDesktopMenuOpen(false); }}
                      className={`text-left px-2 py-1.5 rounded capitalize text-sm hover:bg-gray-50 dark:hover:bg-slate-800 ${
                        activeSection === item ? 'text-blue-600 font-semibold' : 'text-gray-700 dark:text-gray-200'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-3 grid grid-cols-2 gap-1"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-1.5 capitalize text-gray-700 hover:text-blue-600 text-[13px]"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;