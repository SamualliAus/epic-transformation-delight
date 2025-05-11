
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface AcceleratorCard {
  title: string;
  description: string;
  category: 'Make More' | 'Spend Less' | 'Build Culture';
  color: 'blue' | 'yellow' | 'green';
  path: string;
}

// Updated accelerator data to match those in the TransformationJourneySection
const accelerators: AcceleratorCard[] = [
  {
    title: 'Sharp Strategy',
    description: 'Make smarter product bets, faster.',
    category: 'Make More',
    color: 'blue',
    path: '/accelerators/sharp-strategy'
  },
  {
    title: 'Value Flow',
    description: 'Unclog bottlenecks so value moves freely.',
    category: 'Spend Less',
    color: 'yellow',
    path: '/accelerators/value-flow'
  },
  {
    title: 'Team OS',
    description: 'Turn group potential into team performance.',
    category: 'Build Culture',
    color: 'green',
    path: '/accelerators/team-os'
  },
  {
    title: 'Confident Delivery',
    description: 'Get the right things done, reliably.',
    category: 'Spend Less',
    color: 'yellow',
    path: '/accelerators/confident-delivery'
  },
  {
    title: 'Culture Ignition',
    description: 'Align beliefs and rituals so people lead the change.',
    category: 'Build Culture',
    color: 'green',
    path: '/accelerators/culture-ignition'
  },
  {
    title: 'Real AI',
    description: 'Scale AI safely, not speculatively.',
    category: 'Make More',
    color: 'blue',
    path: '/accelerators/real-ai'
  },
  {
    title: 'Hidden Gold',
    description: 'Find untapped value in the work you already do.',
    category: 'Make More',
    color: 'blue',
    path: '/accelerators/hidden-gold'
  },
  {
    title: 'Smart Structure',
    description: 'Rebuild how you work to match what you want to achieve.',
    category: 'Spend Less',
    color: 'yellow',
    path: '/accelerators/smart-structure'
  },
  {
    title: 'Lead Boldly',
    description: 'Help leaders step up and shape what's next.',
    category: 'Build Culture',
    color: 'green',
    path: '/accelerators/lead-boldly'
  }
];

const AcceleratorsSection: React.FC = () => {
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

  // Get category-specific gradient styles
  const getCategoryGradientClasses = (category: AcceleratorCard['category']) => {
    switch (category) {
      case 'Make More':
        return 'from-epic-blue to-epic-blue/60 hover:from-epic-blue/80 hover:to-epic-blue/40';
      case 'Spend Less':
        return 'from-epic-yellow to-epic-yellow/60 hover:from-epic-yellow/80 hover:to-epic-yellow/40';
      case 'Build Culture':
        return 'from-epic-green to-epic-green/60 hover:from-epic-green/80 hover:to-epic-green/40';
      default:
        return 'from-epic-blue to-epic-blue/60 hover:from-epic-blue/80 hover:to-epic-blue/40';
    }
  };

  // Get category-specific gradient styles for the border
  const getCategoryBorderGradient = (category: AcceleratorCard['category']) => {
    switch (category) {
      case 'Make More':
        return 'border-t-[#0EA5E9]';
      case 'Spend Less':
        return 'border-t-[#FEC84B]';
      case 'Build Culture':
        return 'border-t-[#4ADE80]';
      default:
        return 'border-t-[#0EA5E9]';
    }
  };

  // Get tag color classes with gradients
  const getTagGradientClasses = (category: AcceleratorCard['category']) => {
    switch (category) {
      case 'Make More':
        return 'bg-gradient-to-r from-epic-light-blue to-epic-blue/20 text-epic-blue';
      case 'Spend Less':
        return 'bg-gradient-to-r from-epic-light-yellow to-epic-yellow/20 text-epic-yellow';
      case 'Build Culture':
        return 'bg-gradient-to-r from-epic-light-green to-epic-green/20 text-epic-green';
      default:
        return 'bg-gradient-to-r from-epic-light-blue to-epic-blue/20 text-epic-blue';
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="accelerators" 
      className="py-20 bg-white"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className={cn(
            "mb-6 opacity-0 animated-gradient-text",
            isVisible && "animate-fade-in"
          )}>
            Our 3-Month Problem-Solving Incubators
          </h2>
          <p className={cn(
            "text-xl text-gray-700 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: '0.2s' }}
          >
            Each Accelerator is a 12-week embedded program designed to solve a specific problem with your teams—fast. These are not workshops. They're guided interventions that generate clarity, unblock momentum, and create change that sticks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {accelerators.map((accelerator, index) => (
            <Card 
              key={index} 
              className={cn(
                "transition-all duration-500 hover:transform hover:translate-y-[-8px] border-t-4 hover:shadow-xl opacity-0 cursor-pointer bg-gradient-to-br from-white to-gray-50",
                getCategoryBorderGradient(accelerator.category),
                isVisible && "animate-scale-in"
              )}
              style={{ animationDelay: `${0.1 * index}s` }}
              onClick={() => window.location.href = accelerator.path}
            >
              <CardHeader>
                <CardTitle>{accelerator.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{accelerator.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className={cn(getTagGradientClasses(accelerator.category))}>
                    {accelerator.category}
                  </Badge>
                </div>
                <div className="flex justify-between items-center w-full mt-2">
                  <span className="text-sm text-gray-500">12-week program</span>
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r", 
                    getCategoryGradientClasses(accelerator.category)
                  )}>
                    <ArrowRight size={18} className="text-white" />
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcceleratorsSection;
