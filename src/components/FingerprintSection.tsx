
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Fingerprint from './Fingerprint';

const FingerprintSection: React.FC = () => {
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
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      id="fingerprint-section"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className={cn(
            "mb-6 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Your unique transformation fingerprint
          </h2>
          <p className={cn(
            "text-xl text-gray-700 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: '0.2s' }}
          >
            Every organization has its own pattern for success. Explore our strategic outcomes or follow the EPiC transformation journey—both tailored to your unique challenges.
          </p>
        </div>

        <Fingerprint className={cn(
          "opacity-0 transform translate-y-10",
          isVisible && "animate-fade-in"
        )} />
        
        <div className={cn(
          "mt-16 max-w-2xl mx-auto text-center opacity-0",
          isVisible && "animate-fade-in"
        )}
        style={{ animationDelay: '0.4s' }}
        >
          <p className="text-gray-600 italic">
            "The fingerprint visualization helped us understand both where we needed to go and how to get there. It's a powerful metaphor for our unique transformation path."
          </p>
          <p className="mt-3 font-semibold">— Sarah Johnson, CTO at InnoTech</p>
        </div>
      </div>
    </section>
  );
};

export default FingerprintSection;
