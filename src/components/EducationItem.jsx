import React from 'react';

const EducationItem = ({ edu, index }) => (
  <div key={index} className="border-l-4 border-blue-600 pl-4">
    <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
    <p className="text-gray-600">{edu.institution}</p>
    <p className="text-gray-500 text-sm">{edu.period} • {edu.grade}</p>
  </div>
);

export default EducationItem;