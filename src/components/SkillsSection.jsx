import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import SectionTitle from './SectionTitle';

const SkillsSection = ({ coreSkills, certifications }) => (
  <section id="skills" className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Skills & Expertise" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreSkills.map(({ category, skills }, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-6 hover:shadow-lg transition-shadow glass-card`}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-200">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 glass-card p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Certifications</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-white/10 rounded-lg p-4 shadow-md">
              <Code size={32} className="text-blue-600 mx-auto mb-2" />
              <p className="font-semibold text-gray-900 dark:text-gray-100">{cert.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{cert.provider}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;