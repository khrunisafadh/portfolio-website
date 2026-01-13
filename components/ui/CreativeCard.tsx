interface CreativeCardProps {
  project: {
    id: string;
    title: string;
    type: string;
    description: string;
    tools: string[];
    image?: string;
    link?: string;
  };
}

export default function CreativeCard({ project }: CreativeCardProps) {
  return (
    <div className="group bg-slate-900/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20">
      {project.image && (
        <div className="w-full h-56 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="p-8">
        <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full mb-4">
          <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wide">{project.type}</span>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <span 
              key={i} 
              className="text-xs bg-gradient-to-r from-slate-800 to-slate-900 text-purple-300 px-4 py-2 rounded-full border border-slate-700 font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}