import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollToTopButton = ({ scrollToSection }) => (
  <motion.button
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => scrollToSection('home')}
    className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
    aria-label="Scroll to top"
  >
    <ChevronDown size={24} className="rotate-180" />
  </motion.button>
);

export default ScrollToTopButton;