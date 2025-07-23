import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'INTENDED DESIGN',
      description: 'Home Architecture is a full-service design firm providing, master planning, urban design.'
    },
    {
      number: '02',
      title: 'LAMBSCAPE DESIGN',
      description: 'Home Architecture is a full-service design firm providing, master planning, urban design.'
    },
    {
      number: '03',
      title: 'URBAN DESIGN',
      description: 'Home Architecture is a full-service design firm providing, master planning, urban design.'
    },
    {
      number: '04',
      title: 'HOTEL DESIGN',
      description: 'Home Architecture is a full-service design firm providing, master planning, urban design.'
    }
  ];

  return (
    <section id="works" className="py-16 px-6 md:px-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">HOW IT WORKS</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <span className="text-2xl font-bold block mb-4">{step.number}</span>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;