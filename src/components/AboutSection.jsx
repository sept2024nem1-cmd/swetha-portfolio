import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const AboutSection = ({ professionalSummary, coreSkills }) => (
  <section id="about" className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="About Me" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Professional Summary</h3>
          <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed whitespace-pre-line">
            {professionalSummary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Core Skills</h3>
          <div className="space-y-4">
            {coreSkills.map((group, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{group.category}</h4>
                <div className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-200">
                  {group.skills.map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;