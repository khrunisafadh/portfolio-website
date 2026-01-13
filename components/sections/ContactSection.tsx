import { Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { socialLinks } from '@/lib/data';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm open to internship opportunities, collaboration, and interesting projects. Feel free to reach out!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a 
            href={`mailto:${socialLinks.email}`}
            className="group bg-slate-900/40 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-cyan-500/20 p-8 rounded-2xl transition-all border border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <Mail size={36} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <div className="font-bold text-lg mb-2 text-white">Email</div>
            <div className="text-sm text-gray-400 group-hover:text-blue-300 transition-colors">{socialLinks.email}</div>
          </a>
          
          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-slate-900/40 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-cyan-500/20 p-8 rounded-2xl transition-all border border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <Linkedin size={36} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <div className="font-bold text-lg mb-2 text-white">LinkedIn</div>
            <div className="text-sm text-gray-400 group-hover:text-blue-300 transition-colors">Connect with me</div>
          </a>
          
          <a 
            href={socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-slate-900/40 backdrop-blur-sm hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/20 p-8 rounded-2xl transition-all border border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20"
          >
            <Github size={36} className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <div className="font-bold text-lg mb-2 text-white">GitHub</div>
            <div className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">View my code</div>
          </a>
          
          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-slate-900/40 backdrop-blur-sm hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 p-8 rounded-2xl transition-all border border-slate-800 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <Instagram size={36} className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <div className="font-bold text-lg mb-2 text-white">Instagram</div>
            <div className="text-sm text-gray-400 group-hover:text-purple-300 transition-colors">Follow my journey</div>
          </a>
        </div>
        
        <div className="text-sm text-gray-500">
          © 2026 Khoirunnisa Fadilah. All rights reserved.
        </div>
        <div className="text-sm font-bold text-white-500">
          Created by Khoirunnisa Fadilah
        </div>
      </div>
    </section>
  );
}