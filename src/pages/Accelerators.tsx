
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AcceleratorsSection from '../components/AcceleratorsSection';
import CTASection from '../components/CTASection';

const Accelerators: React.FC = () => {
  useEffect(() => {
    document.title = "EPiC - Our Accelerators";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">EPiC Accelerators</h1>
            <p className="text-xl text-gray-700">
              Our 12-week programs are designed to solve specific challenges with your teams. 
              Each accelerator combines hands-on guidance, practical tools, and team development 
              to create lasting change that sticks.
            </p>
          </div>
        </div>
      </section>

      <AcceleratorsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Accelerators;
