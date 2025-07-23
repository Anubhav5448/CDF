import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Tecture</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#works" className="hover:text-blue-600">How It Works</a></li>
            <li><a href="#news" className="hover:text-blue-600">News</a></li>
          </ul>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;