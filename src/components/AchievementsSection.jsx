import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

const AchievementsSection = ({ achievementsList }) => (
  <section id="achievements" className="py-16 bg-transparent dark:bg-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Achievements & Publications" />

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-rose shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Awards & Recognition</h3>
          <div className="space-y-4">
            {achievementsList.slice(0, 4).map((achievement, index) => (
              <div key={index} className="flex items-start text-gray-700 dark:text-gray-200">
                <Award size={20} className="text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-sunset shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Continuous Learning</h3>
          <div className="flex items-start mb-4 text-gray-700 dark:text-gray-200">
            <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <p>{achievementsList[4]}</p>
          </div>
          <div className="flex items-start text-gray-700 dark:text-gray-200">
            <ExternalLink size={20} className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Dynamic Open Flow Controlled Optical Packet Switching (OPS) Network
              </h4>
              <p className="mb-4">
                Research paper published on providing efficient data transfer without internet connection
                by using optical packet switching concept.
              </p>
              <a
                href={"https://ieeexplore.ieee.org/abstract/document/7000533"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-flex items-center"
              >
                View Publication
                <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;