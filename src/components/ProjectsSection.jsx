import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ProjectsSection = ({ experience }) => {
  // Let's highlight a few key projects from experience
  const projects = experience.slice(0, 3).map(exp => ({
    title: exp.project || `${exp.company} Project`,
    company: exp.client || exp.company,
    role: exp.role,
    description: exp.description,
    outcomes: exp.achievements || []
  }));

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" />
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`overflow-hidden hover:shadow-xl transition-shadow flex flex-col ${index % 3 === 0 ? 'card-sunset' : index % 3 === 1 ? 'card-mint' : 'card-lavender'}`}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <Briefcase size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{project.company}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.role}</p>
                <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
                {project.outcomes.length > 0 && (
                  <div className="mt-auto pt-2">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
                    <ul className="space-y-1">
                      {project.outcomes.slice(0, 2).map((outcome, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;