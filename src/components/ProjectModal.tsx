import React from 'react';
import { X, Calendar, MapPin, Users, Square } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    location: string;
    year: string;
    area: string;
    client: string;
    description: string;
    features: string[];
    images: string[];
    floorPlan?: string;
    roomDetails?: Array<{
      name: string;
      area: string;
    }>;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>

        <div className="inline-block w-full max-w-6xl my-8 overflow-hidden text-left align-middle transition-all transform bg-slate-800 shadow-xl rounded-2xl">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-slate-900/50 rounded-full hover:bg-slate-900/70 transition-colors duration-200"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div>
                <div className="mb-6">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {project.images.slice(1, 5).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} ${index + 2}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
                  <p className="text-slate-300 leading-relaxed">{project.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <p className="text-white font-medium">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <div>
                      <p className="text-slate-400 text-sm">Year</p>
                      <p className="text-white font-medium">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Square className="w-5 h-5 text-amber-400" />
                    <div>
                      <p className="text-slate-400 text-sm">Total Area</p>
                      <p className="text-white font-medium">{project.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-amber-400" />
                    <div>
                      <p className="text-slate-400 text-sm">Client</p>
                      <p className="text-white font-medium">{project.client}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.roomDetails && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Room Details</h3>
                    <div className="space-y-2">
                      {project.roomDetails.map((room, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-slate-700">
                          <span className="text-slate-300">{room.name}</span>
                          <span className="text-white font-medium">{room.area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.floorPlan && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Floor Plan</h3>
                    <img
                      src={project.floorPlan}
                      alt="Floor Plan"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;