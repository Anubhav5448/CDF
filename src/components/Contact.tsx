import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: '123 Design Avenue, Toronto, ON M5V 3A8' },
    { icon: Phone, label: 'Phone', value: '+1 (416) 555-0123' },
    { icon: Mail, label: 'Email', value: 'hello@creatorsdesign.com' },
    { icon: Clock, label: 'Hours', value: 'Mon-Fri 9:00 AM - 6:00 PM' }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            GET IN
            <br />
            <span className="text-amber-400">TOUCH</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to transform your space? Let's discuss your vision and 
            create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-amber-400 p-3 rounded-lg">
                    <info.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{info.label}</h3>
                    <p className="text-slate-400">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Creator's?</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Award-winning design excellence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Sustainable & innovative solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Personalized client experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>End-to-end project management</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-white font-medium mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors duration-200"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Architecture</option>
                  <option value="interior">Interior Design</option>
                  <option value="renovation">Renovation</option>
                  <option value="consultation">Design Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your vision, timeline, and any specific requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-400 text-slate-900 py-4 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-bold text-lg"
              >
                START YOUR PROJECT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;