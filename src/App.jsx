import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;