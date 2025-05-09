
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface AcceleratorCard {
  title: string;
  description: string;
  tags: string[];
  color: 'blue' | 'orange' | 'yellow' | 'green';
  path: string;
}

const accelerators: AcceleratorCard[] = [
  {
    title: 'Team Alignment',
    description: 'Create high-performing teams with clear purpose and streamlined collaboration.',
    tags: ['Leadership', 'Collaboration', 'Communication'],
    color: 'blue',
    path: '/accelerators/team-alignment'
  },
  {
    title: 'Process Optimization',
    description: 'Identify and eliminate operational friction points to accelerate delivery.',
    tags: ['Efficiency', 'Workflows', 'Automation'],
    color: 'orange',
    path: '/accelerators/process-optimization'
  },
  {
    title: 'Innovation Systems',
    description: 'Build frameworks that turn ideas into validated solutions, faster.',
    tags: ['Creativity', 'Implementation', 'Growth'],
    color: 'yellow',
    path: '/accelerators/innovation-systems'
  },
  {
    title: 'Digital Enablement',
    description: 'Leverage technology to enhance human capability, not replace it.',
    tags: ['Technology', 'Integration', 'Skills'],
    color: 'green',
    path: '/accelerators/digital-enablement'
  },
  {
    title: 'Leadership Coaching',
    description: 'Develop leaders who can navigate complexity and inspire meaningful change.',
    tags: ['Mentoring', 'Strategy', 'Vision'],
    color: 'blue',
    path: '/accelerators/leadership-coaching'
  },
  {
    title: 'Culture Evolution',
    description: 'Shape organizational behaviors that support sustainable transformation.',
    tags: ['Values', 'Behaviors', 'Engagement'],
    color: 'orange',
    path: '/accelerators/culture-evolution'
  },
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

  const getColorClasses = (color: AcceleratorCard['color']) => {
    switch (color) {
      case 'blue':
        return 'border-t-epic-blue hover:shadow-epic-blue/20';
      case 'orange':
        return 'border-t-epic-orange hover:shadow-epic-orange/20';
      case 'yellow':
        return 'border-t-epic-yellow hover:shadow-epic-yellow/20';
      case 'green':
        return 'border-t-epic-green hover:shadow-epic-green/20';
      default:
        return 'border-t-epic-blue hover:shadow-epic-blue/20';
    }
  };

  const getTagColorClasses = (color: AcceleratorCard['color']) => {
    switch (color) {
      case 'blue':
        return 'bg-epic-light-blue text-epic-blue';
      case 'orange':
        return 'bg-epic-light-orange text-epic-orange';
      case 'yellow':
        return 'bg-epic-light-yellow text-epic-yellow';
      case 'green':
        return 'bg-epic-light-green text-epic-green';
      default:
        return 'bg-epic-light-blue text-epic-blue';
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
            "mb-6 opacity-0",
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
                "transition-all duration-500 hover:transform hover:translate-y-[-8px] border-t-4 hover:shadow-xl opacity-0 cursor-pointer",
                getColorClasses(accelerator.color),
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
                  {accelerator.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className={cn(getTagColorClasses(accelerator.color))}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center w-full mt-2">
                  <span className="text-sm text-gray-500">12-week program</span>
                  <ArrowRight size={18} className="text-gray-500" />
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
