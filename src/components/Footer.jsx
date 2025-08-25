import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = ({ personalInfo }) => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4"></div>
      </div>
    </div>
  </footer>
);

export default Footer;