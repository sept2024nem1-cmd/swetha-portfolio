import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ContactSection = ({ personalInfo }) => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  return (
  <section id="contact" className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Let's Connect" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Get In Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail size={20} className="text-blue-600 mr-3" />
              <span className="text-gray-700">{personalInfo.email}</span>
            </div>
            <div className="flex items-center">
              <Phone size={20} className="text-blue-600 mr-3" />
              <span className="text-gray-700">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="text-blue-600 mr-3" />
              <span className="text-gray-700">{personalInfo.location}</span>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent('Hello from your portfolio')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card gradient-border p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Principles I Work By</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-200 list-disc pl-5">
            <li>Ship with confidence: tests are a safety net, not a bottleneck.</li>
            <li>Focus on user impact: severity is about customers, not just counts.</li>
            <li>Prevent > detect: quality gates early in CI save release time.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);
}

export default ContactSection;