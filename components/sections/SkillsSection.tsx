import { skills } from '@/lib/data';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all">
            <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Backend & Programming
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-gradient-to-r from-slate-800 to-slate-900 text-gray-200 px-4 py-2 rounded-xl text-sm font-medium border border-slate-700 hover:border-blue-500/50 hover:text-blue-300 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all">
            <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-gradient-to-r from-slate-800 to-slate-900 text-gray-200 px-4 py-2 rounded-xl text-sm font-medium border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all">
            <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              System Analysis & Data
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.analysis.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-gradient-to-r from-slate-800 to-slate-900 text-gray-200 px-4 py-2 rounded-xl text-sm font-medium border border-slate-700 hover:border-blue-500/50 hover:text-blue-300 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all">
            <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              Development Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-gradient-to-r from-slate-800 to-slate-900 text-gray-200 px-4 py-2 rounded-xl text-sm font-medium border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 transition-all">
            <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Design & Creative Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.creative.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-gradient-to-r from-slate-800 to-slate-900 text-gray-200 px-4 py-2 rounded-xl text-sm font-medium border border-slate-700 hover:border-purple-500/50 hover:text-purple-300 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}