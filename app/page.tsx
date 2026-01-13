'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CreativeSection from '@/components/sections/CreativeSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <HeroSection onNavigate={scrollToSection} />
      <AboutSection />
      <ProjectsSection />
      <CreativeSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}