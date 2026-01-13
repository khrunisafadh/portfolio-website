'use client';

import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { creativeProjects } from '@/lib/data';

export default function CreativeSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'UI/UX Design', 'Visual Design', 'Video Editing'];

  // Filter projects based on category
  const filteredProjects = selectedCategory === 'All' 
    ? creativeProjects 
    : creativeProjects.filter(p => p.type.includes(selectedCategory === 'Video Editing' ? 'Video' : selectedCategory.replace(' Design', '')));

  return (
    <>
      <section id="creative" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Creative Portfolio
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the creative projects that showcase my passion for design and visual innovation
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
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-slate-900/50 text-gray-300 border border-slate-800 hover:border-purple-500/50 hover:text-purple-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-slate-900/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer hover:scale-105"
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
                  <div className="h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <div className="text-6xl">🎨</div>
                  </div>
                )}

                {/* Project Info */}
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-3">
                    <span className="text-xs text-purple-400 font-semibold uppercase tracking-wide">
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tools preview */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 2).map((tool, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-slate-800 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 2 && (
                      <span className="text-xs text-purple-400">+{project.tools.length - 2}</span>
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
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-4">
                  <span className="text-sm text-purple-400 font-semibold uppercase tracking-wide">
                    {selectedProject.type}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tools & Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></span>
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tools.map((tool: string, i: number) => (
                    <div 
                      key={i}
                      className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-purple-500/50 px-4 py-3 rounded-xl transition-all hover:scale-105"
                    >
                      <span className="text-sm font-medium text-gray-200 group-hover:text-purple-300 transition-colors">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {selectedProject.link && (
                <div className="flex gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50"
                  >
                    <ExternalLink size={18} />
                    <span>View Project</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}