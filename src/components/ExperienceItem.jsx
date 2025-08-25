import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar } from 'lucide-react';

const ExperienceItem = ({ experience, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="card-lavender p-8 hover:shadow-xl transition-shadow"
  >
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{experience.role}</h3>
        <p className="text-xl text-blue-600 dark:text-blue-400">{experience.company}</p>
        {experience.client && <p className="text-gray-600 dark:text-gray-300">Client: {experience.client}</p>}
        {experience.project && <p className="text-gray-600 dark:text-gray-300">Project: {experience.project}</p>}
        {experience.clients && <p className="text-gray-600 dark:text-gray-300">Clients: {experience.clients}</p>}
      </div>
      <div className="flex items-center text-gray-600 mt-2 lg:mt-0">
        <Calendar size={16} className="mr-2" />
        <span>{experience.period}</span>
      </div>
    </div>
    <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">{experience.description}</p>
    {experience.achievements && (
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
        <ul className="space-y-1">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </motion.div>
);

export default ExperienceItem;