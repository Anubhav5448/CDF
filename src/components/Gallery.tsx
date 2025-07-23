import React from 'react';

const Gallery: React.FC = () => {
  const galleryImages = [
    'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1396119/pexels-photo-1396119.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2724751/pexels-photo-2724751.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            GALLERY
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore our collection of award-winning projects that showcase 
            innovative design and architectural excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-amber-400 text-amber-400 px-8 py-3 rounded-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-200 font-medium">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;