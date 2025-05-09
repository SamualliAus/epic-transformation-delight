
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Circle, Flag, Award, Star } from 'lucide-react';

interface JourneyStep {
  level: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const journeySteps: JourneyStep[] = [
  {
    level: 1,
    title: 'Awareness',
    description: "Surface what's holding you back. Start moving again.",
    icon: <Circle className="w-8 h-8 text-epic-blue" />
  },
  {
    level: 2,
    title: 'Culture',
    description: 'Align beliefs, behaviours and delivery.',
    icon: <Flag className="w-8 h-8 text-epic-orange" />
  },
  {
    level: 3,
    title: 'Efficiencies',
    description: 'Redesign your ways of working to reduce friction.',
    icon: <Award className="w-8 h-8 text-epic-yellow" />
  },
  {
    level: 4,
    title: 'Optimisation',
    description: 'Scale what works. Multiply your impact.',
    icon: <Star className="w-8 h-8 text-epic-green" />
  }
];

const TransformationJourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const sectionTop = rect.top;
        const viewportHeight = window.innerHeight;
        
        if (sectionTop <= viewportHeight && sectionTop > -sectionHeight) {
          const progress = Math.min(
            1, 
            Math.max(
              0, 
              (viewportHeight - sectionTop) / (viewportHeight + sectionHeight - 200)
            )
          );
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="transformation-journey" 
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-epic-light-blue rounded-full filter blur-3xl opacity-10 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-epic-light-orange rounded-full filter blur-3xl opacity-10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className={cn(
            "mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Your EPiC Journey
          </h2>
          <p className={cn(
            "text-xl text-gray-700 mb-12 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: '0.2s' }}
          >
            Change isn't one-size-fits-all. We meet you where you are.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gray-200">
            <div
              ref={lineRef}
              className="bg-gradient-to-b from-epic-blue via-epic-orange to-epic-green w-full"
              style={{ 
                height: `${scrollProgress * 100}%`, 
                transition: 'height 0.3s ease-out' 
              }}
            />
          </div>

          <div className="space-y-16 overflow-x-auto pb-6">
            {journeySteps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative flex items-start opacity-0",
                  isVisible && "animate-fade-in"
                )}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className={cn(
                  "absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-gray-200 z-10 transition-transform duration-300",
                  scrollProgress > (index / journeySteps.length) && "scale-125 border-epic-blue"
                )}>
                  <div className={cn(
                    "opacity-0",
                    scrollProgress > (index / journeySteps.length) && "animate-scale-in"
                  )}>
                    {step.icon}
                  </div>
                </div>
                
                <div className="ml-16">
                  <span className="text-sm font-medium text-epic-blue">Level {step.level}</span>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile horizontal scroll version */}
        <div className="lg:hidden mt-16 overflow-x-auto pb-6">
          <div className="flex space-x-6 min-w-max px-4">
            {journeySteps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative w-72 p-6 border rounded-lg shadow-sm opacity-0",
                  isVisible && "animate-fade-in"
                )}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 mr-4">
                    {step.icon}
                  </div>
                  <span className="text-sm font-medium text-epic-blue">Level {step.level}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationJourneySection;
