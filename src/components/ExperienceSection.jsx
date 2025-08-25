import React from 'react';
import ExperienceItem from './ExperienceItem';
import SectionTitle from './SectionTitle';

const ExperienceSection = ({ experience }) => (
  <section id="experience" className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Work Experience" />
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;