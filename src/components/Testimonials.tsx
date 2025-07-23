import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      project: 'Glasshaven Residence',
      rating: 5,
      text: 'Creator\'s Design Firm transformed our vision into reality beyond our wildest dreams. Their attention to detail and innovative approach to sustainable design created a home that perfectly balances luxury with environmental consciousness.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Business Owner',
      project: 'Modern Loft Conversion',
      rating: 5,
      text: 'The team\'s ability to maximize our compact space while maintaining elegance was remarkable. Every square meter was thoughtfully designed, creating a functional yet beautiful living environment that exceeds our expectations.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      project: 'Commercial Office Space',
      rating: 5,
      text: 'Working with Creator\'s Design Firm was an absolute pleasure. Their collaborative approach and expertise in both architecture and interior design resulted in a space that perfectly reflects our brand identity.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      id: 4,
      name: 'Michael Thompson',
      role: 'Real Estate Developer',
      project: 'Luxury Residential Complex',
      rating: 5,
      text: 'Their innovative design solutions and project management excellence delivered exceptional results on time and within budget. The attention to both aesthetic appeal and functional efficiency is unmatched.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-amber-400 fill-current' : 'text-slate-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            CLIENT
            <br />
            <span className="text-amber-400">TESTIMONIALS</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Hear from our satisfied clients who have experienced the Creator's Design difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-900 rounded-lg p-8 relative group hover:bg-slate-850 transition-colors duration-300"
            >
              <div className="absolute top-6 right-6 text-amber-400/20">
                <Quote size={48} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-slate-400 text-xs">{testimonial.role}</p>
                    <p className="text-amber-400 text-xs font-light">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 text-slate-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;