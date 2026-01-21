'use client';

import { Github, Linkedin, Mail, Instagram, ChevronDown, ArrowUpRight, Download } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
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

  const cvLink = 'https://drive.google.com/file/d/YOUR_FILE_ID/view';

  const handleDownloadCV = () => {
    window.open(cvLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-24 pb-12 relative overflow-hidden">S
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-sm opacity-40 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-sm opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* ↑ gap-8 lg:gap-12 untuk responsive gap */}
        
        {/* Left: Text Content */}
        <div className="text-left md:text-left space-y-6">
          {/* ↑ Tambahkan space-y-6 untuk consistent vertical spacing */}
          
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-sm font-medium">✨ Welcome to my Portfolio !</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              {/* ↑ Responsive text size: 4xl → 5xl → 6xl */}
              <span className="text-gray-200">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Khoirunnisa Fadilah
              </span>
            </h1>
            
            {/* Typewriter Effect */}
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 min-h-[2.5rem]">
              {/* ↑ Responsive text size: xl → 2xl → 3xl */}
              <TypeAnimation
                sequence={[
                  'Information Systems Undergraduate',
                  2500,
                  'Tech Enthusiast',
                  2500,
                ]}
                wrapper="span"
                speed={30}
                deletionSpeed={20}
                repeat={Infinity}
                cursor={true}
                className="text-transparent bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text"
              />
            </div>
          </div>
          
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
            {/* ↑ Responsive text size */}
            Information Systems Undergraduate specializing in backend development, system analysis, and full-stack solutions. Passionate about building efficient systems and exploring creative design.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            {/* ↑ flex-col di mobile, flex-row di sm+ */}
            {/* ↑ gap-3 di mobile, gap-4 di sm+ */}
            
            {/* Primary CTA - Contact Me */}
            <button 
              onClick={() => onNavigate('contact')}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 flex items-center justify-center gap-2"
            >
              {/* ↑ Responsive padding & justify-center untuk mobile */}
              Get in Touch
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            {/* Secondary CTA - Download CV */}
            <button 
              onClick={handleDownloadCV}
              className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 
                border-2 border-slate-700 hover:border-blue-400 
                bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-sm
                text-gray-300 hover:text-white 
                rounded-xl font-medium 
                transition-all duration-300
                hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* ↑ justify-center untuk mobile */}
              <Download 
                size={20} 
                className="group-hover:animate-bounce transition-transform" 
              />
              <span>Download CV</span>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </button>

            {/* Tertiary CTA - View Projects */}  
            <button 
              onClick={() => onNavigate('projects')}
              className="border-2 border-blue-500/50 hover:border-blue-400 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all backdrop-blur-sm"
            >
              {/* ↑ Responsive padding */}
              View Projects
            </button>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 pt-4">
            {/* ↑ Responsive gap */}
            {socialIcons.map((social, i) => (
              <a 
                key={i}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-slate-900/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 border border-slate-800 hover:border-transparent rounded-xl text-gray-400 hover:text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
              >
                {/* ↑ Responsive size: 44px → 48px */}
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: 3D Photo Frame */}
        <div className="relative flex items-center justify-center mt-8 md:mt-0">
          {/* ↑ mt-8 untuk spacing di mobile, md:mt-0 untuk reset di desktop */}
          
          {/* Main Frame Container */}
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto px-4 sm:px-0">
            {/* ↑ max-w-sm di mobile, max-w-md di sm+ */}
            {/* ↑ px-4 di mobile untuk prevent touching edges */}
            
            {/* 3D Frame */}
            <div 
              className="relative aspect-square rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-sm border-4 border-blue-400/30 shadow-2xl shadow-blue-500/50"
              style={{ 
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
              }}
            >
              {/* ↑ Responsive rounded & padding */}
              
              {/* Inner glow */}
              <div className="absolute inset-4 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl"></div>
              
              {/* Photo */}
              <div className="relative w-full h-full rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                <img 
                  src="/images/profile-photo.jpeg" 
                  alt="Khoirunnisa Fadilah" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Corner decorations */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl blur-md opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl blur-md opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Floating decorative balls */}
            <div className="absolute top-10 -right-6 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50 animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute bottom-20 -left-6 sm:-left-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/50 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/3 -right-4 sm:-right-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full shadow-lg shadow-cyan-500/50 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}></div>
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