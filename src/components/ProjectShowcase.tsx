import React from 'react';
import { projects } from '../data/projects';

interface ProjectShowcaseProps {
  onViewProject: (projectId: string) => void;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onViewProject }) => {
  const projectDetails = [
    { label: 'Living Room', area: '24 m²' },
    { label: 'Dining Room', area: '18 m²' },
    { label: 'Master Kitchen', area: '16 m²' },
    { label: 'Office Space', area: '12 m²' },
    { label: 'Master Bedroom', area: '20 m²' },
    { label: 'Guest Bedroom', area: '14 m²' },
    { label: 'Bathroom', area: '9 m²' },
    { label: 'Storage & Utility', area: '8 m²' }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              PROJECT
              <br />
              <span className="text-amber-400">SHOWCASE</span>
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                THE AREA IS 121 M²
              </h3>
              
              <div className="space-y-3">
                {projectDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-300 font-light">{detail.label}</span>
                    <span className="text-white font-medium">{detail.area}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => onViewProject(projects.showcase.id)}
              className="bg-amber-400 text-slate-900 px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-medium"
            >
              VIEW FULL PROJECT
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Floor Plan"
                className="w-full h-80 object-cover rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Interior View"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            
            <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-lg">
              <span className="text-amber-400 text-sm font-light">@creators.designs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;