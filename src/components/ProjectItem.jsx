import React from 'react'

const ProjectItem = ({ title, description, image, technologies, liveUrl, githubUrl, featured }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${featured ? 'md:col-span-2' : ''}`}>
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-4xl text-gray-400">
            {featured ? '🚀' : '💻'}
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded font-medium transition-colors"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-center py-2 px-4 rounded font-medium transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem

