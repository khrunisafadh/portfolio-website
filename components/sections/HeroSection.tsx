'use client';

import { Github, Linkedin, Mail, Instagram, ChevronDown, ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/lib/data';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const socialIcons = [
    { icon: Github, url: socialLinks.github },
    { icon: Linkedin, url: socialLinks.linkedin },
    { icon: Mail, url: `mailto:${socialLinks.email}` },
    { icon: Instagram, url: socialLinks.instagram }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-sm opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-sm opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <div className="text-left md:text-left">
          <div className="mb-8">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-sm font-medium">✨ Welcome to my Portfolio !</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-gray-200">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Khoirunnisa Fadilah
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold mb-6">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Backend Developer
              </span>
              <span className="text-gray-400"> & </span>
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                System Analyst
              </span>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
            Information Systems student specializing in backend development, system analysis, and full-stack solutions. Passionate about building efficient systems and exploring creative design.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <button 
              onClick={() => onNavigate('contact')}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-2"
            >
              Get in Touch
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => onNavigate('projects')}
              className="border-2 border-blue-500/50 hover:border-blue-400 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 px-8 py-4 rounded-xl font-medium transition-all backdrop-blur-sm"
            >
              View Projects
            </button>
          </div>
          
          <div className="flex gap-4">
            {socialIcons.map((social, i) => (
              <a 
                key={i}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-slate-900/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 border border-slate-800 hover:border-transparent rounded-xl text-gray-400 hover:text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: 3D Photo Frame */}
        <div className="relative hidden md:block">
          {/* Main Frame Container */}
          <div className="relative w-full max-w-md mx-auto">
            {/* 3D Frame */}
            <div 
              className="relative aspect-square rounded-[3rem] p-8 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-sm border-4 border-blue-400/30 shadow-2xl shadow-blue-500/50"
              style={{ 
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
              }}
            >
              {/* Inner glow */}
              <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl"></div>
              
              {/* Photo placeholder */}
              <div className="relative w-full h-full rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                <img 
                src="/images/profile-photo.jpeg" 
                alt="Khoirunnisa Fadilah" 
                className="w-full h-full object-cover"
/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                  </div>
                </div>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl blur-md opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl blur-md opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Floating decorative balls */}
            <div className="absolute top-10 -right-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50 animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-20 -left-8 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/50 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/3 -right-6 w-8 h-8 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full shadow-lg shadow-cyan-500/50 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="mx-auto text-blue-400/50" />
      </div>
    </section>
  );
}