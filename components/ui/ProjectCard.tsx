import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    highlights: string[];
    links: Record<string, string>;
    image?: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group bg-slate-900/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/20">
      <div className="md:flex">
        {/* Image */}
        {project.image && (
          <div className="md:w-2/5 h-64 md:h-auto bg-gradient-to-br from-slate-800 to-slate-900 flex-shrink-0 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}
        
        {/* Content */}
        <div className="p-8 flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="text-sm text-blue-400 font-medium mb-4">{project.subtitle}</div>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              {Object.entries(project.links).map(([key, url]) => (
                <a 
                  key={key} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500 hover:to-cyan-500 text-blue-300 hover:text-white px-4 py-2 rounded-lg transition-all border border-blue-500/30 hover:border-transparent font-medium"
                >
                  <span className="capitalize">{key}</span>
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
          
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Key Features:</h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span 
                key={i} 
                className="text-xs bg-gradient-to-r from-slate-800 to-slate-900 text-blue-300 px-4 py-2 rounded-full border border-slate-700 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}