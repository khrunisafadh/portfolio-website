'use client';

import { useState } from 'react';
import { X, ExternalLink, Award } from 'lucide-react';
import { certificates } from '@/lib/data';
import CertificateCard from '@/components/ui/CertificateCard';

export default function CertificatesSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'technical' | 'organizational'>('all');
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  const categories = [
    { id: 'all' as const, label: 'All' },
    { id: 'technical' as const, label: 'Technical' },
    { id: 'organizational' as const, label: 'Organizational' }
  ];

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <>
      <section id="certificates" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award size={32} className="text-yellow-400" />
            </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional certifications and technical credentials that validate my expertise
            </p>
           <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm rounded-full p-2 border border-slate-800">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/50'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <CertificateCard 
                key={cert.id}
                certificate={cert}
                onClick={() => setSelectedCert(cert)}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredCertificates.length === 0 && (
            <div className="text-center py-16">
              <Award size={64} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400 text-lg">No certificates found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for Certificate Details */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Certificate Image */}
            {selectedCert.image && (
              <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden rounded-t-3xl">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-full h-full object-contain p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 hover:bg-slate-800 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all border border-slate-700"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Title & Issuer */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full mb-4">
                  <Award size={16} className="text-yellow-400" />
                  <span className="text-sm text-yellow-400 font-semibold uppercase tracking-wide">
                    {selectedCert.issuer}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {selectedCert.title}
                </h2>
                
                <p className="text-gray-400 text-sm mb-4">
                  Issued: {selectedCert.date}
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              {/* Skills Covered */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full"></span>
                  Skills Covered
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCert.skills.map((skill, i) => (
                    <div 
                      key={i}
                      className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-yellow-500/50 px-4 py-3 rounded-xl transition-all hover:scale-105"
                    >
                      <span className="text-sm font-medium text-gray-200 group-hover:text-yellow-300 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {selectedCert.credentialUrl && selectedCert.credentialUrl !== '#' && (
                <div className="flex gap-4">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-xl font-medium transition-all shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/50"
                  >
                    <ExternalLink size={18} />
                    <span>View Credential</span>
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