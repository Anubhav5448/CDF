import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight">
                MODERN
                <br />
                <span className="text-amber-400">SPACES</span>
              </h1>
              <div className="mt-6 space-y-2">
                <p className="text-xl text-slate-300 font-light tracking-wide">
                  REDEFINING CONTEMPORARY
                </p>
                <p className="text-xl text-slate-300 font-light tracking-wide">
                  LIVING & WORKING
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>TORONTO, CANADA</span>
              <div className="w-16 h-px bg-amber-400"></div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-lg border border-slate-700">
              <img
                src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Interior Design"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Featured Project</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Award-winning residential design combining minimalist aesthetics with 
                functional luxury. Featuring sustainable materials and innovative space planning.
              </p>
              <button className="text-amber-400 hover:text-amber-300 transition-colors duration-200 text-sm font-light tracking-wider">
                VIEW PROJECT →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;