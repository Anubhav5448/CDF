import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProjectShowcase from './components/ProjectShowcase';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { projects } from './data/projects';

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProject = (projectId: string) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getProjectData = (projectId: string) => {
    if (projectId === projects.featured.id) return projects.featured;
    if (projectId === projects.showcase.id) return projects.showcase;
    return projects.featured; // fallback
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero onViewProject={handleViewProject} />
      <About />
      <Services />
      <ProjectShowcase onViewProject={handleViewProject} />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={getProjectData(selectedProject)}
        />
      )}
    </div>
  );
}

export default App;