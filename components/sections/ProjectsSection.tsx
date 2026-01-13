'use client';

import { useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { technicalProjects } from '@/lib/data';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'Backend', 'System Analysis', 'Full Stack', 'Data'];

  // Filter projects based on category
  const filteredProjects = selectedCategory === 'All' 
    ? technicalProjects 
    : technicalProjects.filter(p => {
        if (selectedCategory === 'Backend') return p.tech.some(t => ['PHP', 'Laravel', 'C Programming'].includes(t));
        if (selectedCategory === 'System Analysis') return p.tech.includes('System Analysis');
        if (selectedCategory === 'Full Stack') return p.tech.includes('Laravel') || p.tech.includes('HTML/CSS');
        if (selectedCategory === 'Data') return p.tech.includes('Tableau') || p.tech.includes('SPSS');
        return true;
      });

  return (
    <>
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the projects that showcase my passion for backend development and system innovation
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-slate-900/50 text-gray-300 border border-slate-800 hover:border-blue-500/50 hover:text-blue-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-slate-900/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer hover:scale-105"
              >
                {/* Project Image */}
                {project.image ? (
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">See Details</span>
                    </div>
                  </div>
                ) : (
                  <div className="h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="text-6xl">💻</div>
                  </div>
                )}

                {/* Project Info */}
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full mb-3">
                    <span className="text-xs text-blue-400 font-semibold uppercase tracking-wide">
                      {project.tech[0]}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack preview */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-slate-800 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-blue-400">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            {selectedProject.image && (
              <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden rounded-t-3xl">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 hover:bg-slate-800 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all border border-slate-700"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Title & Category */}
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full mb-4">
                  <span className="text-sm text-blue-400 font-semibold uppercase tracking-wide">
                    {selectedProject.subtitle}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></span>
                  Key Features
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {selectedProject.highlights.map((highlight: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></span>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech: string, i: number) => (
                    <div 
                      key={i}
                      className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 px-4 py-3 rounded-xl transition-all hover:scale-105"
                    >
                      <span className="text-sm font-medium text-gray-200 group-hover:text-blue-300 transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {Object.entries(selectedProject.links).map(([key, url]: [string, any]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50"
                  >
                    {key === 'github' ? <Github size={18} /> : <ExternalLink size={18} />}
                    <span className="capitalize">{key}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}