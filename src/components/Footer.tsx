import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold">C</span>
              </div>
              <span className="text-white font-light">Creator's Design Firm</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Transforming spaces through innovative architecture and interior design. 
              Creating extraordinary environments that inspire and elevate.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-slate-400 hover:text-amber-400 transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Interior Design</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Architectural Planning</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Custom Design</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Space Optimization</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Project Management</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-amber-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors duration-200">Portfolio</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Press</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Info</h3>
            <div className="space-y-3 text-slate-400 text-sm">
              <p>123 Design Avenue<br />Toronto, ON M5V 3A8</p>
              <p>+1 (416) 555-0123</p>
              <p>hello@creatorsdesign.com</p>
              <p className="text-amber-400">Mon-Fri 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Creator's Design Firm. All rights reserved.
            </p>
            <div className="flex space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;