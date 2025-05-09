
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const CTASection: React.FC = () => {
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
      className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
      id="cta"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-epic-light-blue rounded-full filter blur-3xl opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-epic-light-yellow rounded-full filter blur-3xl opacity-20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={cn(
            "mb-6 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Ready to create space for change?
          </h2>
          <p className={cn(
            "text-xl text-gray-700 mb-10 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: '0.2s' }}
          >
            Start your transformation journey with EPiC today. Book a discovery call to discuss your unique challenges, or download our program guide to learn more.
          </p>

          <div className={cn(
            "flex flex-col sm:flex-row gap-6 justify-center opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: '0.4s' }}
          >
            <Button 
              className="btn-primary text-lg relative group overflow-hidden"
              onClick={() => window.location.href = '/contact'}
            >
              <span className="relative z-10">Book a Discovery Call</span>
              <span className="absolute inset-0 bg-epic-blue group-hover:animate-pulse-soft z-0"></span>
            </Button>

            <Button 
              variant="outline" 
              className="btn-secondary text-lg flex items-center group"
              onClick={() => window.location.href = '#'}
            >
              <Download className="mr-2" size={18} />
              Download Program Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
