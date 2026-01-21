interface CertificateCardProps {
  certificate: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    skills: string[];
    image: string;
    credentialUrl: string;
    category: 'technical' | 'organizational';
  };
  onClick: () => void;
}

export default function CertificateCard({ certificate, onClick }: CertificateCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-slate-900/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-yellow-500/50 transition-all hover:shadow-2xl hover:shadow-yellow-500/20 cursor-pointer hover:scale-105"
    >
      {/* Certificate Image/Preview */}
      <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
        {certificate.image ? (
          <>
            <img 
              src={certificate.image} 
              alt={certificate.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                View Certificate
              </span>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
          </div>
        )}
      </div>

      {/* Certificate Info */}
      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full mb-3">
          <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wide">
            {certificate.issuer}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all line-clamp-2">
          {certificate.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4">
          {certificate.date}
        </p>

        {/* Skills preview */}
        <div className="flex flex-wrap gap-2">
          {certificate.skills.slice(0, 2).map((skill, i) => (
            <span 
              key={i} 
              className="text-xs bg-slate-800 text-gray-300 px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
          {certificate.skills.length > 2 && (
            <span className="text-xs text-yellow-400">+{certificate.skills.length - 2}</span>
          )}
        </div>
      </div>
    </div>
  );
}