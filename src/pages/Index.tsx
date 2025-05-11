
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
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
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
