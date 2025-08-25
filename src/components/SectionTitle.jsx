import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-[pulse_2s_ease-in-out_infinite]"></div>
  </motion.div>
);

export default SectionTitle;