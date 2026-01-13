import { technicalProjects } from '@/lib/data';
import ProjectCard from '@/components/ui/ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Technical Projects
          </h2>
          <p className="text-gray-400 text-lg">Backend Development, System Analysis & Data Solutions</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="space-y-8">
          {technicalProjects.map((project: any, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}