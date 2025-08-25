import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle } from 'lucide-react';

// Minimal inline SVG avatar (data URI) used as a reliable default
const defaultAvatar =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#93c5fd"/>
        <stop offset="100%" stop-color="#c7d2fe"/>
      </linearGradient>
    </defs>
    <rect width="256" height="256" fill="url(#g)"/>
    <circle cx="128" cy="96" r="48" fill="#fff"/>
    <rect x="48" y="160" width="160" height="56" rx="28" fill="#fff"/>
  </svg>`);

const HeroSection = ({ personalInfo, scrollToSection }) => (
  <section id="home" className="pt-24 pb-12 bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[50vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gradient mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl lg:text-3xl text-blue-600 mb-4">
            {personalInfo.title}
          </h2>
          <p className="text-xl text-gray-700 mb-8 whitespace-nowrap overflow-hidden text-ellipsis md:whitespace-normal">
            {personalInfo.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Let's Connect
            </button>
            <a
              href="/resume.pdf"
              download
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 lg:mt-0 flex justify-center"
        >
          <div className="relative">
            {/* Decorative animated blobs */}
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-blue-300/30 blur-2xl animate-pulse" aria-hidden="true"></div>
            <div className="absolute -bottom-6 -right-8 w-36 h-36 rounded-full bg-indigo-300/30 blur-2xl animate-[float_6s_ease-in-out_infinite]" aria-hidden="true"></div>

            <img
              src={personalInfo?.profileImage || defaultAvatar}
              alt={`${personalInfo.name} Profile`}
              className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
              onError={(e) => {
                e.currentTarget.src = defaultAvatar;
              }}
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg z-20">
              <CheckCircle size={32} className="text-green-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;