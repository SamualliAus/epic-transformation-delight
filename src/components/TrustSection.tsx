
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const logoPlaceholders = [
  { name: 'Company 1', delay: 0 },
  { name: 'Company 2', delay: 0.1 },
  { name: 'Company 3', delay: 0.2 },
  { name: 'Company 4', delay: 0.3 },
  { name: 'Company 5', delay: 0.4 },
  { name: 'Company 6', delay: 0.5 },
];

const TrustSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="trust-section" ref={sectionRef} className="py-16 bg-white">
      <div className="container-custom">
        <h3 className="text-center text-2xl font-bold text-gray-800 mb-10">
          Trusted by teams transforming how they work—for good.
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logoPlaceholders.map((logo, index) => (
            <div
              key={index}
              className={cn(
                "bg-gray-100 rounded-lg h-20 flex items-center justify-center opacity-0",
                isVisible && "animate-fade-in"
              )}
              style={{ 
                animationDelay: `${logo.delay}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="text-gray-500 font-medium hover:text-epic-blue transition-colors duration-300">
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
