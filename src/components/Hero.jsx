import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">DESIGN MAKE DREAM</h2>
        <p className="text-xl mb-8">$700</p>
        <p className="text-lg font-semibold mb-8">Gain in Exam 2</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;