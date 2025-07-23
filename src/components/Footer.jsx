import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tecture</h3>
            <p>Design Make Dream</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#works" className="hover:text-blue-400">How It Works</a></li>
              <li><a href="#news" className="hover:text-blue-400">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p>Email: info@tecture.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l text-gray-900 w-full" />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Tecture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;