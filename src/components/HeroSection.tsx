import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('trust-section');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-90"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-epic-light-blue rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-epic-light-orange rounded-full filter blur-3xl opacity-20 animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      <div className="container-custom z-10">
        <div className="stagger-animation max-w-4xl">
          
          <h1 className="font-extrabold text-left text-transparent bg-clip-text bg-gradient-to-r from-epic-blue via-epic-orange to-epic-yellow mb-6 py-[24px] text-6xl">
            Make transformation, delightful.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl">Thriving in a complex world can be messy, frustrating and challenging. With over 10+ years of experience and over 100+ organisations satisfied around the world, EPiC's bite-sized transformation accelerators aim to do one thing. Delight fast.</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary text-lg group" onClick={() => window.location.href = '/accelerators'}>
              Explore Accelerators
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>

            <Button variant="outline" className="btn-secondary text-lg border-2 group" onClick={() => window.location.href = '/transformation-journey'}>
              How We Work
              <svg className="ml-2 w-5 h-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <button onClick={scrollToNextSection} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-gray-800 transition-colors duration-300" aria-label="Scroll to next section">
        <ArrowDown className="animate-scroll-down" size={28} />
      </button>
    </section>;
};
export default HeroSection;