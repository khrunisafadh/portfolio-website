export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 text-gray-300 leading-relaxed text-lg mb-12">
          <p className="backdrop-blur-sm bg-slate-900/30 p-6 rounded-2xl border border-slate-800">
            I'm an undergraduate Information Systems student at UPN "Veteran" Jakarta with a strong focus on backend development, system design, and data-driven solutions. Currently maintaining a GPA of 3.89/4.00 while actively contributing to campus organizations.
          </p>
          <p className="backdrop-blur-sm bg-slate-900/30 p-6 rounded-2xl border border-slate-800">
            My technical foundation spans full-stack development with expertise in Laravel, PHP, and database management. I've built production-ready applications including content management systems, inventory tracking solutions, and data analytics dashboards.
          </p>
          <p className="backdrop-blur-sm bg-slate-900/30 p-6 rounded-2xl border border-slate-800">
            As Vice Head of Communication & Information Bureau at the Faculty Student Senate, I bridge technical skills with leadership and public communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all hover:shadow-xl hover:shadow-blue-500/20">
            <h3 className="font-bold text-xl text-blue-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Education
            </h3>
            <div className="space-y-2">
              <div className="font-semibold text-white">UPN "Veteran" Jakarta</div>
              <div className="text-gray-400">B.S. Information Systems</div>
              <div className="text-blue-300 font-medium">GPA: 3.89/4.00 | 2023 - Present</div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
            <h3 className="font-bold text-xl text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              Current Role
            </h3>
            <div className="space-y-2">
              <div className="font-semibold text-white">Student Senate FIK UPNVJ</div>
              <div className="text-gray-400">Vice Head of Communication & Information Bureau</div>
              <div className="text-cyan-300 font-medium">2025 - Present</div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Organization & Event Experience
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
             {/* Experience Item 1 */}
              <div className="group relative">
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 transform md:-translate-x-2 z-10"></div>
                <div className="absolute left-2 md:left-1/2 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent"></div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-12 pl-12 md:pl-0">
                  <div className="md:text-right md:pr-16">
                      <h4 className="text-xl font-bold text-white mb-1">Senat FIK UPNVJ</h4>
                      <p className="text-blue-400 font-medium mb-2">2024 - 2025</p>
                    </div>
                <div className="md:pl-16">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
                    <h5 className="font-bold text-blue-300 mb-2">Vice Head of Communication & Information Bureau (2025)</h5>
                    <p className="text-gray-400 text-sm mb-4">Supporting internal and external communication strategies, supervising publications, maintaining consistent branding, and collaborating across divisions for clear professional communication.</p>  
                    <h5 className="font-bold text-blue-300 mb-2 mt-6">Communication Officer (2024)</h5>
                    <p className="text-gray-400 text-sm">Managed content planning, publication schedules, and digital communication for faculty senate activities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="group relative">
              <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 transform md:-translate-x-2 z-10"></div>
              <div className="absolute left-2 md:left-1/2 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-12 pl-12 md:pl-0">
                <div className="md:text-right md:pr-16">
                  <h4 className="text-xl font-bold text-white mb-1">PEMIRA FIK UPNVJ</h4>
                  <p className="text-blue-400 font-medium mb-2">2023 & 2025</p>
                </div>
                <div className="md:pl-16">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
                    <h5 className="font-bold text-blue-300 mb-2">Head of Public Relations, Publication & Documentation (2025)</h5>
                    <p className="text-gray-400 text-sm mb-4">Supporting internal and external communication strategies, supervising publications and maintaining consistent branding across divisions, and coordinating with divisions for clear and professional communication.</p>
                     <h5 className="font-bold text-blue-300 mb-2">Public Relations, Publication & Documentation Committee (2023)</h5>
                    <p className="text-gray-400 text-sm mb-4">Handled event communication, content creation, and documentation for faculty election activities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="group relative">
              <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 transform md:-translate-x-2 z-10"></div>
              <div className="absolute left-2 md:left-1/2 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-12 pl-12 md:pl-0">
                <div className="md:text-right md:pr-16">
                  <h4 className="text-xl font-bold text-white mb-1">Thalassic - SMA Esport Event</h4>
                  <p className="text-blue-400 font-medium mb-2">2023</p>
                </div>
                <div className="md:pl-16">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
                    <h5 className="font-bold text-blue-300 mb-2">Staff of Mobile Legend Division</h5>
                    <p className="text-gray-400 text-sm">Served as main contact person, handled participant communication, created tournament brackets, managed schedules, and coordinated livestreams.</p>
                  </div>
                </div>
              </div>
            </div>

            

            {/* Experience Item 4 */}
            <div className="group relative">
              <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 transform md:-translate-x-2 z-10"></div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-12 pl-12 md:pl-0">
                <div className="md:text-right md:pr-16">
                  <h4 className="text-xl font-bold text-white mb-1">KPPF Photography Club</h4>
                  <p className="text-blue-400 font-medium mb-2">2023</p>
                </div>
                <div className="md:pl-16">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
                    <h5 className="font-bold text-blue-300 mb-2">Secretary & Public Relations Division</h5>
                    <p className="text-gray-400 text-sm">Managed administrative tasks and external communications for the photography club.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}