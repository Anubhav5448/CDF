import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">WELCOME TO ABOUT US</h2>
        <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
          Autogrammes are made to transport supply by auto travel customer intensified transport sales modules, present and allow us run maps and maintain four clients. To these meetings to make an impact with design.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Enthe Space Designs</h3>
            <p>It is a long-established fact that a master will be distracted by the readable height.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Eden Home Styling</h3>
            <p>It is a long-established fact that a master will be distracted by the readable height.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-semibold">News Details: 1)</p>
        </div>
      </div>
    </section>
  );
};

export default About;