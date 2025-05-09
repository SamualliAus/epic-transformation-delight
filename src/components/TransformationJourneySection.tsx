import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Circle, Flag, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JourneyStep {
  level: number;
  title: string;
  description: string;
  extendedDescription: string;
  accelerators: Array<{
    name: string;
    color: 'blue' | 'orange' | 'yellow' | 'green';
    description: string;
  }>;
  targetAudience: string;
  icon: React.ReactNode;
}

const journeySteps: JourneyStep[] = [{
  level: 1,
  title: "Awareness",
  description: "When you're overloaded, unclear, or unable to move.",
  extendedDescription: "You know something's not working—but it's hard to see why. This is where we help you surface the root issues, remove blockers, and start flowing again.",
  accelerators: [
    { name: "Value Flow", color: "orange", description: "Unclog bottlenecks so value moves freely." },
    { name: "Team OS", color: "green", description: "Turn group potential into team performance." }
  ],
  targetAudience: "Perfect for teams overloaded with work, unclear priorities, or disconnected delivery.",
  icon: <Circle className="w-8 h-8 text-epic-blue" />
}, {
  level: 2,
  title: "Culture",
  description: "When your values, behaviours, and outcomes don't align.",
  extendedDescription: "This is where you rewire how your people show up—together. It's about reigniting shared purpose, improving leadership, and building rituals that make culture contagious.",
  accelerators: [
    { name: "Sharp Strategy", color: "blue", description: "Make smarter product bets, faster." },
    { name: "Culture Ignition", color: "green", description: "Align beliefs and rituals so people lead the change." },
    { name: "Confident Delivery", color: "yellow", description: "Get the right things done, reliably." }
  ],
  targetAudience: "For organisations struggling with misalignment, inconsistent leadership, or low trust in delivery.",
  icon: <Flag className="w-8 h-8 text-epic-orange" />
}, {
  level: 3,
  title: "Efficiencies",
  description: "When the way you work no longer works.",
  extendedDescription: "You're making progress, but there's friction—silos, handoffs, shadow work. Now's the time to redesign structures and empower your leaders and teams to scale impact.",
  accelerators: [
    { name: "Smart Structure", color: "yellow", description: "Rebuild how you work to match what you want to achieve." },
    { name: "Lead Boldly", color: "green", description: "Help leaders step up and shape what's next." }
  ],
  targetAudience: "For teams bogged down in bureaucracy, duplicated effort, or unclear ownership.",
  icon: <Award className="w-8 h-8 text-epic-yellow" />
}, {
  level: 4,
  title: "Optimisation",
  description: "When you're ready to scale what works—and unlock what's hidden.",
  extendedDescription: "You've built the foundation. Now it's about deepening your advantage—by aligning around real value and safely scaling innovation like AI.",
  accelerators: [
    { name: "Real AI", color: "blue", description: "Scale AI safely, not speculatively." },
    { name: "Hidden Gold", color: "blue", description: "Find untapped value in the work you already do." }
  ],
  targetAudience: "Ideal for orgs with solid fundamentals who want to shift from good to great.",
  icon: <Star className="w-8 h-8 text-epic-green" />
}];

const TransformationJourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    
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
          // Improved calculation for more accurate progress based on viewport position
          const progress = Math.min(1, Math.max(0, 
            (viewportHeight - sectionTop) / (viewportHeight + sectionHeight * 0.7)
          ));
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

  // Helper function for color classes
  const getColorClass = (color: string): string => {
    switch (color) {
      case 'blue': return 'text-epic-blue';
      case 'orange': return 'text-epic-orange';
      case 'yellow': return 'text-epic-yellow';
      case 'green': return 'text-epic-green';
      default: return 'text-epic-blue';
    }
  };

  const getColorEmoji = (color: string): string => {
    switch (color) {
      case 'blue': return '🔵';
      case 'orange': return '🔶';
      case 'yellow': return '🟡';
      case 'green': return '🟢';
      default: return '⚪';
    }
  };

  return <section ref={sectionRef} id="transformation-journey" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-epic-light-blue rounded-full filter blur-3xl opacity-10 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-epic-light-orange rounded-full filter blur-3xl opacity-10 animate-spin-slow" style={{
        animationDirection: 'reverse',
        animationDuration: '25s'
      }}></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
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
            Transformation is never one-size-fits-all. That's why we meet you where you are.
            Whether you're feeling stuck, sensing friction, or striving to scale, EPiC gives you a map, and the right hands-on guidance to move forward with clarity and confidence.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gray-200">
            <div ref={lineRef} className="bg-gradient-to-b from-epic-blue via-epic-orange to-epic-green w-full" style={{
            height: `${scrollProgress * 100}%`,
            transition: 'height 0.5s ease-out'
          }} />
          </div>

          <div className="space-y-24 pb-16">
            {journeySteps.map((step, index) => <div key={index} className={cn("relative flex items-start opacity-0", isVisible && "animate-fade-in")} style={{
            animationDelay: `${0.2 * index}s`
          }}>
                <div className={cn("absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-gray-200 z-10 transition-transform duration-300", scrollProgress > index / journeySteps.length * 0.8 && "scale-125 border-epic-blue")}>
                  <div className={cn("opacity-0 transform scale-0", scrollProgress > index / journeySteps.length * 0.8 && "opacity-100 scale-100 transition-all duration-500")}>
                    {step.icon}
                  </div>
                </div>
                
                <div className="ml-16 max-w-3xl">
                  <span className="text-sm font-medium text-epic-blue">Level {step.level}</span>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-lg font-semibold text-gray-800 mb-3">{step.description}</p>
                  <p className="text-gray-600 mb-4">{step.extendedDescription}</p>
                  
                  <div className="mt-4 mb-4">
                    <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Accelerators to {index === 0 ? "start with" : index === 1 ? "explore" : index === 2 ? "apply" : "launch"}:</h4>
                    <ul className="space-y-2 mb-4">
                      {step.accelerators.map((accelerator, accIndex) => (
                        <li key={accIndex} className="flex items-start">
                          <span className="mr-2">{getColorEmoji(accelerator.color)}</span>
                          <div>
                            <span className={`font-medium ${getColorClass(accelerator.color)}`}>{accelerator.name}</span>
                            <span className="mx-2">–</span>
                            <span className="text-gray-600">{accelerator.description}</span>
                            <Link 
                              to="/accelerators" 
                              className="ml-2 text-sm text-epic-blue hover:text-epic-orange inline-flex items-center"
                            >
                              Learn more →
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-sm text-gray-500 italic">{step.targetAudience}</p>
                  
                  {index < journeySteps.length - 1 && (
                    <div className="mt-8 border-t border-gray-200 w-1/2 opacity-50"></div>
                  )}
                </div>
              </div>)}
          </div>
        </div>

        {/* Mobile horizontal scroll version */}
        <div className="lg:hidden mt-16 overflow-x-auto pb-12">
          <div className="flex space-x-6 min-w-max px-4">
            {journeySteps.map((step, index) => <div key={index} className={cn("relative w-80 p-6 border rounded-lg shadow-sm opacity-0", isVisible && "animate-fade-in")} style={{
            animationDelay: `${0.2 * index}s`
          }}>
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 mr-4">
                    {step.icon}
                  </div>
                  <span className="text-sm font-medium text-epic-blue">Level {step.level}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700 font-medium mb-2">{step.description}</p>
                <p className="text-gray-600 mb-4 text-sm">{step.extendedDescription}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">Accelerators:</h4>
                  <ul className="space-y-1 text-sm">
                    {step.accelerators.map((acc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-1">{getColorEmoji(acc.color)}</span>
                        <span className={`font-medium ${getColorClass(acc.color)}`}>{acc.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to="/accelerators" 
                  className="text-sm text-epic-blue hover:text-epic-orange inline-flex items-center mt-2"
                >
                  Explore these accelerators →
                </Link>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};

export default TransformationJourneySection;
