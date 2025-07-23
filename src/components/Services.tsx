import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'INTERIOR DESIGN',
      description: 'Elegant interiors that elevate your lifestyle with premium materials and timeless aesthetics.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: '02',
      title: 'ARCHITECTURAL PLANNING',
      description: 'Smart, refined layouts that seamlessly harmonize with the natural landscape.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: '03',
      title: 'CUSTOM DESIGN',
      description: 'Timeless architecture blending form, function, and sophisticated design.',
      image: 'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: '04',
      title: 'SPACE OPTIMIZATION',
      description: 'Purposeful interiors designed for flow, balance, and spatial luxury.',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            OUR SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-6xl font-bold text-amber-400 leading-none">
                    {service.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;