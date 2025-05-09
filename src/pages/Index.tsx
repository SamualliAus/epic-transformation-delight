
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import StrategicOutcomesSection from '../components/StrategicOutcomesSection';
import TransformationJourneySection from '../components/TransformationJourneySection';
import AcceleratorsSection from '../components/AcceleratorsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "EPiC - Make transformation, delightful";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <StrategicOutcomesSection />
      <TransformationJourneySection />
      <AcceleratorsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
