
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { ChartBar, Layers, Users } from 'lucide-react';

interface OutcomeCard {
  title: string;
  color: 'blue' | 'yellow' | 'green';
  icon: React.ReactNode;
  description: string;
  accelerators: string[];
}

const outcomes: OutcomeCard[] = [
  {
    title: 'Make More',
    color: 'blue',
    icon: <ChartBar className="w-8 h-8 text-epic-blue" />,
    description: 'Unlock value through smarter product strategy and scalable growth.',
    accelerators: ['Sharp Strategy', 'Real AI', 'Hidden Gold']
  },
  {
    title: 'Spend Less',
    color: 'yellow',
    icon: <Layers className="w-8 h-8 text-epic-yellow" />,
    description: 'Cut waste, align effort, and free your teams to move faster.',
    accelerators: ['Value Flow', 'Confident Delivery', 'Smart Structure']
  },
  {
    title: 'Build Culture',
    color: 'green',
    icon: <Users className="w-8 h-8 text-epic-green" />,
    description: 'Elevate how your people work, lead, and grow together.',
    accelerators: ['Team OS', 'Culture Ignition', 'Lead Boldly']
  }
];

const StrategicOutcomesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getColorClasses = (color: OutcomeCard['color']) => {
    switch (color) {
      case 'blue':
        return 'border-t-epic-blue hover:shadow-epic-blue/20';
      case 'yellow':
        return 'border-t-epic-yellow hover:shadow-epic-yellow/20';
      case 'green':
        return 'border-t-epic-green hover:shadow-epic-green/20';
      default:
        return 'border-t-epic-blue hover:shadow-epic-blue/20';
    }
  };

  const scrollToAccelerator = (name: string) => {
    const element = document.getElementById('accelerators');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Future enhancement: add highlighting for specific accelerator
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="strategic-outcomes" 
      className="py-20 bg-white"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className={cn(
            "mb-4 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            What Makes EPiC Different
          </h2>
          <p className={cn(
            "text-xl text-gray-700 mb-10 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: '0.2s' }}
          >
            We don't do frameworks. We unlock progress—through 9 powerful Accelerators tied to the outcomes that matter most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <Card 
              key={index} 
              className={cn(
                "transition-all duration-500 hover:transform hover:translate-y-[-5px] border-t-4 hover:shadow-xl opacity-0 cursor-default",
                getColorClasses(outcome.color),
                isVisible && "animate-fade-in-right"
              )}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="p-6">
                <div className="mb-4 rounded-full w-16 h-16 flex items-center justify-center bg-gray-50 group-hover:animate-pulse-soft">
                  {outcome.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{outcome.title}</h3>
                <p className="text-gray-600 mb-4">{outcome.description}</p>
                <div className="flex flex-col space-y-1">
                  {outcome.accelerators.map((accelerator, accIndex) => (
                    <button 
                      key={accIndex}
                      className="text-left text-sm font-medium text-epic-blue hover:text-epic-orange transition-colors flex items-center"
                      onClick={() => scrollToAccelerator(accelerator)}
                    >
                      <span className="mr-1">→</span>
                      {accelerator}
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicOutcomesSection;
