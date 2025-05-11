
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import TransformationJourneySection from '../components/TransformationJourneySection';

const TransformationJourney: React.FC = () => {
  useEffect(() => {
    document.title = "EPiC - Transformation Journey";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 animated-gradient-text">The EPiC Transformation Journey</h1>
            <p className="text-xl text-gray-700">
              Our structured approach guides organizations through a proven transformation path, 
              delivering clarity and momentum at every step.
            </p>
          </div>
        </div>
      </section>

      <TransformationJourneySection />

      <CTASection />
      <Footer />
    </div>
  );
};

export default TransformationJourney;
