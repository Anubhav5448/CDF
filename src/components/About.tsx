import React from 'react';
import { Award, Users, Clock, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Globe, value: '25+', label: 'Countries Served' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              ABOUT
              <br />
              <span className="text-amber-400">CREATORS</span>
            </h2>
            
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                Creator's Design Firm stands at the forefront of contemporary architecture 
                and interior design, crafting spaces that inspire and elevate the human experience.
              </p>
              
              <p>
                With over 15 years of expertise, our team of visionary architects and designers 
                specializes in creating bespoke solutions that seamlessly blend functionality 
                with aesthetic excellence. From luxury residences to commercial spaces, we 
                transform ideas into extraordinary realities.
              </p>
              
              <p>
                Our commitment to sustainable design practices and innovative use of materials 
                has earned us recognition across the industry, establishing us as leaders in 
                modern architectural design.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About Us"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;