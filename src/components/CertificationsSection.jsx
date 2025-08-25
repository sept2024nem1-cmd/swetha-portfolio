import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, CheckCircle } from 'lucide-react';
import EducationItem from './EducationItem';
import SectionTitle from './SectionTitle';

const CertificationsSection = ({ certifications, education }) => (
  <section id="certifications" className="py-16 bg-white dark:bg-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Certifications & Education" />

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-mint p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
            <Award size={28} className="text-blue-600 mr-3" />
            Certifications
          </h3>
          <div className="space-y-6 text-gray-700 dark:text-gray-200">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">{cert.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{cert.provider}</p>
                </div>
              </div>
            ))}
            <div className="flex items-start">
              <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">BEC Certification</h4>
                <p className="text-gray-600 dark:text-gray-300">University of Cambridge</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-sky p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
            <GraduationCap size={28} className="text-blue-600 mr-3" />
            Education
          </h3>
          <div className="space-y-6 text-gray-700 dark:text-gray-200">
            {education.map((edu, index) => (
              <EducationItem key={index} edu={edu} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CertificationsSection;