import React, { useRef, useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';

interface JourneyStep {
  level: number;
  title: string;
  description: string;
  extendedDescription: string;
  accelerators: Array<{
    name: string;
    color: 'blue' | 'orange' | 'yellow' | 'green';
    description: string;
    category: 'Make More' | 'Spend Less' | 'Build Culture';
  }>;
  targetAudience: string;
  color: string;
  baseColorClass: string;
  textColorClass: string;
}

const journeySteps: JourneyStep[] = [{
  level: 1,
  title: "Awareness",
  description: "When you're overloaded, unclear, or unable to move.",
  extendedDescription: "You know something's not working—but it's hard to see why. This is where we help you surface the root issues, remove blockers, and start flowing again.",
  accelerators: [
    { name: "Value Flow", color: "orange", description: "Unclog bottlenecks so value moves freely.", category: "Spend Less" },
    { name: "Team OS", color: "green", description: "Turn group potential into team performance.", category: "Build Culture" }
  ],
  targetAudience: "Perfect for teams overloaded with work, unclear priorities, or disconnected delivery.",
  color: "#0EA5E9", // Blue
  baseColorClass: "bg-epic-blue",
  textColorClass: "text-epic-blue"
}, {
  level: 2,
  title: "Culture",
  description: "When your values, behaviours, and outcomes don't align.",
  extendedDescription: "This is where you rewire how your people show up—together. It's about reigniting shared purpose, improving leadership, and building rituals that make culture contagious.",
  accelerators: [
    { name: "Sharp Strategy", color: "blue", description: "Make smarter product bets, faster.", category: "Make More" },
    { name: "Culture Ignition", color: "green", description: "Align beliefs and rituals so people lead the change.", category: "Build Culture" },
    { name: "Confident Delivery", color: "yellow", description: "Get the right things done, reliably.", category: "Spend Less" }
  ],
  targetAudience: "For organisations struggling with misalignment, inconsistent leadership, or low trust in delivery.",
  color: "#F97316", // Coral/Orange
  baseColorClass: "bg-epic-orange",
  textColorClass: "text-epic-orange"
}, {
  level: 3,
  title: "Efficiencies",
  description: "When the way you work no longer works.",
  extendedDescription: "You're making progress, but there's friction—silos, handoffs, shadow work. Now's the time to redesign structures and empower your leaders and teams to scale impact.",
  accelerators: [
    { name: "Smart Structure", color: "yellow", description: "Rebuild how you work to match what you want to achieve.", category: "Spend Less" },
    { name: "Lead Boldly", color: "green", description: "Help leaders step up and shape what's next.", category: "Build Culture" }
  ],
  targetAudience: "For teams bogged down in bureaucracy, duplicated effort, or unclear ownership.",
  color: "#FEC84B", // Yellow
  baseColorClass: "bg-epic-yellow",
  textColorClass: "text-epic-yellow"
}, {
  level: 4,
  title: "Optimisation",
  description: "When you're ready to scale what works—and unlock what's hidden.",
  extendedDescription: "You've built the foundation. Now it's about deepening your advantage—by aligning around real value and safely scaling innovation like AI.",
  accelerators: [
    { name: "Real AI", color: "blue", description: "Scale AI safely, not speculatively.", category: "Make More" },
    { name: "Hidden Gold", color: "blue", description: "Find untapped value in the work you already do.", category: "Make More" }
  ],
  targetAudience: "Ideal for orgs with solid fundamentals who want to shift from good to great.",
  color: "#4ADE80", // Green
  baseColorClass: "bg-epic-green",
  textColorClass: "text-epic-green"
}];

const TransformationJourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [stepVisibility, setStepVisibility] = useState<boolean[]>(Array(journeySteps.length).fill(false));

  // Memoize the scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
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
        
        // Determine active step based on scroll position
        const newActiveIndex = Math.min(
          journeySteps.length - 1,
          Math.floor(progress * journeySteps.length)
        );
        setActiveStepIndex(newActiveIndex);
        
        // Update individual step visibility with a more efficient approach
        const newStepVisibility = [...stepVisibility];
        let hasChanges = false;
        
        document.querySelectorAll('[data-step-index]').forEach((el) => {
          const stepIndex = parseInt((el as HTMLElement).dataset.stepIndex || '0', 10);
          const stepRect = el.getBoundingClientRect();
          const isStepVisible = stepRect.top < viewportHeight * 0.8 && stepRect.bottom > viewportHeight * 0.2;
          
          if (newStepVisibility[stepIndex] !== isStepVisible) {
            newStepVisibility[stepIndex] = isStepVisible;
            hasChanges = true;
          }
        });
        
        // Only update state if there are actual changes
        if (hasChanges) {
          setStepVisibility(newStepVisibility);
        }
      }
    }
  }, [stepVisibility.length]); // Only depends on the length of stepVisibility

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
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial call to set initial values
    handleScroll();
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); // Add handleScroll to dependency array

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
  
  // Get the category class for accelerator cards
  const getCategoryColorClass = (category: string): string => {
    switch (category) {
      case 'Make More': return 'from-epic-blue/20 to-epic-blue/10 border-epic-blue/30';
      case 'Spend Less': return 'from-epic-yellow/20 to-epic-yellow/10 border-epic-yellow/30';
      case 'Build Culture': return 'from-epic-green/20 to-epic-green/10 border-epic-green/30';
      default: return 'from-epic-blue/20 to-epic-blue/10 border-epic-blue/30';
    }
  };

  // Get current line color based on active step with transition effect
  const getLineGradientStyle = () => {
    // Make sure we have journeySteps and valid indices before proceeding
    if (!journeySteps.length) {
      return {
        background: '#0EA5E9', // Default to blue if no steps
        height: '0%',
        transition: 'height 0.3s ease-out, background 0.5s ease-in-out'
      };
    }
    
    // Create a smooth gradient transition between colors based on scroll progress
    const totalSteps = journeySteps.length;
    const stepProgress = scrollProgress * totalSteps;
    const currentIndex = Math.min(Math.floor(stepProgress), totalSteps - 1);
    const nextIndex = Math.min(totalSteps - 1, currentIndex + 1);
    const progressBetweenSteps = stepProgress - currentIndex;
    
    let gradientStyle;
    
    // Safety checks to prevent undefined access
    if (currentIndex < 0 || currentIndex >= totalSteps) {
      gradientStyle = journeySteps[0].color; // Fallback to first step color
    } else if (currentIndex === nextIndex) {
      // If we're at the last step, just use that color
      gradientStyle = journeySteps[currentIndex].color;
    } else {
      // Interpolate between current and next color
      gradientStyle = `linear-gradient(to bottom, 
        ${journeySteps[currentIndex].color} 0%, 
        ${journeySteps[currentIndex].color} ${(1 - progressBetweenSteps) * 100}%, 
        ${journeySteps[nextIndex].color} 100%)`;
    }

    return {
      background: gradientStyle,
      height: `${Math.max(0, Math.min(100, scrollProgress * 100))}%`,
      transition: 'height 0.3s ease-out, background 0.5s ease-in-out'
    };
  };

  return (
    <section 
      ref={sectionRef} 
      id="transformation-journey" 
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-epic-light-blue rounded-full filter blur-3xl opacity-10 animate-spin-slow"></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-epic-light-orange rounded-full filter blur-3xl opacity-10 animate-spin-slow" 
          style={{
            animationDirection: 'reverse',
            animationDuration: '25s'
          }}
        ></div>
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
          {/* Vertical connecting line with enhanced animation */}
          <div className="absolute left-4 top-8 bottom-8 w-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              ref={lineRef} 
              className="absolute left-0 bottom-0 w-full transition-all duration-500 ease-in-out"
              style={getLineGradientStyle()} 
            />
          </div>

          <div className="space-y-24 pb-16">
            {journeySteps.map((step, index) => (
              <div 
                key={index} 
                data-step-index={index}
                className={cn(
                  "relative flex items-start opacity-0", 
                  isVisible && "animate-fade-in"
                )} 
                style={{
                  animationDelay: `${0.2 * index}s`
                }}
              >
                {/* Circle indicator with dynamic color and transition */}
                <div 
                  className={cn(
                    "absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full border-2 z-10 transition-all duration-500",
                    scrollProgress > index / journeySteps.length ? 
                      `scale-125 ${step.baseColorClass} border-transparent` : 
                      "bg-white border-gray-200"
                  )}
                >
                  <div className={cn(
                    "w-4 h-4 rounded-full transition-all duration-500",
                    scrollProgress > index / journeySteps.length ? 
                      "scale-100 bg-white" : "scale-0"
                  )} />
                </div>
                
                <div className="ml-16 max-w-3xl">
                  <span className={cn(
                    "text-sm font-medium transition-colors duration-300", 
                    step.textColorClass
                  )}>
                    Level {step.level}
                  </span>
                  
                  <h3 className={cn(
                    "text-2xl font-bold mb-2 transition-colors duration-300", 
                    step.textColorClass
                  )}>
                    {step.title}
                  </h3>
                  
                  <p className="text-lg font-semibold text-gray-800 mb-3">
                    {step.description}
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    {step.extendedDescription}
                  </p>
                  
                  <div className="mt-4 mb-4">
                    <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">
                      Accelerators to {index === 0 ? "start with" : index === 1 ? "explore" : index === 2 ? "apply" : "launch"}:
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {step.accelerators.map((accelerator, accIndex) => (
                        <div 
                          key={accIndex}
                          className={cn(
                            "p-4 rounded-lg border bg-gradient-to-br transition-all duration-500 hover:shadow-md",
                            getCategoryColorClass(accelerator.category),
                            "transform hover:scale-[1.02] cursor-pointer"
                          )}
                        >
                          <div className="flex items-start space-x-2">
                            <span className="mt-1">{getColorEmoji(accelerator.color)}</span>
                            <div>
                              <span className={`font-medium ${getColorClass(accelerator.color)}`}>
                                {accelerator.name}
                              </span>
                              <p className="text-gray-600 text-sm mt-1">
                                {accelerator.description}
                              </p>
                              <div className="mt-2">
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/50 border border-gray-200 inline-block">
                                  {accelerator.category}
                                </span>
                                <Link 
                                  to="/accelerators" 
                                  className="ml-2 text-xs text-epic-blue hover:text-epic-orange inline-flex items-center"
                                >
                                  Learn more →
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500 italic">{step.targetAudience}</p>
                  
                  {index < journeySteps.length - 1 && (
                    <div className="mt-8 border-t border-gray-200 w-1/2 opacity-50"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationJourneySection;
