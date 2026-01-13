import { creativeProjects } from '@/lib/data';
import CreativeCard from '@/components/ui/CreativeCard';

export default function CreativeSection() {
  return (
    <section id="creative" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Creative Portfolio
          </h2>
          <p className="text-gray-400 text-lg">UI/UX Design, Visual Content & Media Production</p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {creativeProjects.map((project) => (
            <CreativeCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}