
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

type JourneyStepData = {
  level: number;
  title: string;
  description: string;
  extendedDescription: string;
  accelerators: {
    name: string;
    color: 'blue' | 'orange' | 'yellow' | 'green';
    description: string;
    category: 'Make More' | 'Spend Less' | 'Build Culture';
  }[];
  targetAudience: string;
  color: string;
  baseColorClass: string;
  textColorClass: string;
  gradientClass: string;
};

const journeySteps: JourneyStepData[] = [
  {
    level: 1,
    title: "Awareness",
    description: "When you're overloaded, unclear, or unable to move.",
    extendedDescription: "You know something's not working—but it's hard to see why. This is where we help you surface the root issues, remove blockers, and start flowing again.",
    accelerators: [
      { name: "Value Flow", color: "yellow", description: "Unclog bottlenecks so value moves freely.", category: "Spend Less" },
      { name: "Team OS", color: "green", description: "Turn group potential into team performance.", category: "Build Culture" }
    ],
    targetAudience: "Perfect for teams overloaded with work, unclear priorities, or disconnected delivery.",
    color: "#0EA5E9", // Blue
    baseColorClass: "bg-epic-blue",
    textColorClass: "text-epic-blue",
    gradientClass: "bg-gradient-to-r from-epic-blue to-epic-blue/70"
  },
  {
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
    textColorClass: "text-epic-orange",
    gradientClass: "bg-gradient-to-r from-epic-orange to-epic-orange/70"
  },
  {
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
    textColorClass: "text-epic-yellow",
    gradientClass: "bg-gradient-to-r from-epic-yellow to-epic-yellow/70"
  },
  {
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
    textColorClass: "text-epic-green",
    gradientClass: "bg-gradient-to-r from-epic-green to-epic-green/70"
  }
];

const TransformationJourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleStepClick = useCallback((index: number) => {
    if (index === activeStep) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveStep(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 300);
  }, [activeStep]);

  // Helper function for color classes with gradients
  const getColorGradientClass = (color: string): string => {
    switch (color) {
      case 'blue': return 'bg-gradient-to-r from-epic-blue to-epic-blue/70 text-white';
      case 'orange': return 'bg-gradient-to-r from-epic-orange to-epic-orange/70 text-white';
      case 'yellow': return 'bg-gradient-to-r from-epic-yellow to-epic-yellow/70 text-white';
      case 'green': return 'bg-gradient-to-r from-epic-green to-epic-green/70 text-white';
      default: return 'bg-gradient-to-r from-epic-blue to-epic-blue/70 text-white';
    }
  };
  
  const getTextColorClass = (color: string): string => {
    switch (color) {
      case 'blue': return 'text-epic-blue';
      case 'orange': return 'text-epic-orange';
      case 'yellow': return 'text-epic-yellow';
      case 'green': return 'text-epic-green';
      default: return 'text-epic-blue';
    }
  };
  
  const getCategoryGradientClass = (category: string): string => {
    switch (category) {
      case 'Make More': return 'from-epic-blue/20 to-epic-blue/5 border-epic-blue/30';
      case 'Spend Less': return 'from-epic-yellow/20 to-epic-yellow/5 border-epic-yellow/30';
      case 'Build Culture': return 'from-epic-green/20 to-epic-green/5 border-epic-green/30';
      default: return 'from-epic-blue/20 to-epic-blue/5 border-epic-blue/30';
    }
  };
  
  const getCategoryBadgeGradient = (category: string): string => {
    switch (category) {
      case 'Make More': return 'bg-gradient-to-r from-epic-light-blue to-epic-blue/20 text-epic-blue';
      case 'Spend Less': return 'bg-gradient-to-r from-epic-light-yellow to-epic-yellow/20 text-epic-yellow';
      case 'Build Culture': return 'bg-gradient-to-r from-epic-light-green to-epic-green/20 text-epic-green';
      default: return 'bg-gradient-to-r from-epic-light-blue to-epic-blue/20 text-epic-blue';
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="transformation-journey" 
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
            "mb-4 animated-gradient-text inline-block",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            Your EPiC Journey
          </h2>
          <p className={cn(
            "text-xl text-gray-700 mb-12",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
          style={{ animationDelay: '0.2s' }}
          >
            Transformation is never one-size-fits-all. That's why we meet you where you are.
            Whether you're feeling stuck, sensing friction, or striving to scale, EPiC gives you a map, and the right hands-on guidance to move forward with clarity and confidence.
          </p>
        </div>

        {/* Journey Navigator - Interactive Path */}
        <div className={cn(
          "max-w-5xl mx-auto mb-20 relative",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}
        style={{ animationDelay: '0.3s' }}>
          <div className="flex justify-between items-center relative">
            {/* Path line with gradient */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-100 rounded-full -translate-y-1/2 z-0">
              <div 
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 bg-gradient-to-r from-epic-blue via-epic-orange to-epic-green"
                style={{
                  width: `${(activeStep + 1) / journeySteps.length * 100}%`,
                }}
              ></div>
            </div>
            
            {/* Journey steps as nodes */}
            {journeySteps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "w-14 h-14 rounded-full relative z-10 flex items-center justify-center cursor-pointer transition-all duration-300",
                  index <= activeStep ? step.gradientClass : "bg-white border-2 border-gray-200",
                  index === activeStep && "scale-125 shadow-lg",
                )}
                onClick={() => handleStepClick(index)}
              >
                <div className={cn(
                  "text-lg font-bold",
                  index <= activeStep ? "text-white" : step.textColorClass
                )}>
                  {step.level}
                </div>
                
                <div className="absolute -bottom-8 text-sm font-medium whitespace-nowrap">
                  <span className={step.textColorClass}>{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active step details */}
        <div className="max-w-5xl mx-auto">
          <div 
            className={cn(
              "transition-all duration-300 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100",
              isAnimating ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"
            )}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Content */}
              <div className="flex-1">
                <div className={cn(
                  "inline-block px-3 py-1 rounded-full text-sm font-medium mb-3",
                  journeySteps[activeStep].gradientClass
                )}>
                  Level {journeySteps[activeStep].level}
                </div>
                
                <h3 className={cn("text-3xl font-bold mb-4", journeySteps[activeStep].textColorClass)}>
                  {journeySteps[activeStep].title}
                </h3>
                
                <p className="text-xl font-medium text-gray-800 mb-4">
                  {journeySteps[activeStep].description}
                </p>
                
                <p className="text-gray-600 mb-6">
                  {journeySteps[activeStep].extendedDescription}
                </p>
                
                <p className="text-sm text-gray-500 italic mb-6">
                  {journeySteps[activeStep].targetAudience}
                </p>
              </div>
              
              {/* Accelerators */}
              <div className="lg:w-2/5">
                <h4 className="text-sm uppercase font-semibold text-gray-500 mb-4 tracking-wider">
                  Recommended Accelerators
                </h4>
                
                <div className="space-y-4">
                  {journeySteps[activeStep].accelerators.map((accelerator, accIndex) => (
                    <Link 
                      to="/accelerators" 
                      key={accIndex}
                      className={cn(
                        "block p-4 rounded-lg border bg-gradient-to-br transition-all duration-300",
                        getCategoryGradientClass(accelerator.category),
                        "hover:shadow-md transform hover:translate-x-1"
                      )}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className={cn("font-medium", getTextColorClass(accelerator.color))}>
                            {accelerator.name}
                          </span>
                          <p className="text-gray-600 text-sm mt-1">
                            {accelerator.description}
                          </p>
                        </div>
                        <Badge variant="secondary" className={cn(
                          "ml-2 shrink-0",
                          getCategoryBadgeGradient(accelerator.category)
                        )}>
                          {accelerator.category}
                        </Badge>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <span className="text-xs text-epic-blue flex items-center gap-1 group">
                          Learn more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Link 
                    to="/accelerators"
                    className="text-sm text-epic-blue hover:text-epic-orange flex items-center gap-1 font-medium"
                  >
                    View all accelerators <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey progress indicator */}
        <div className="max-w-sm mx-auto mt-12 flex justify-between">
          {journeySteps.map((step, index) => (
            <button
              key={index}
              onClick={() => handleStepClick(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeStep ? 
                  step.gradientClass : 
                  "bg-gray-200 hover:bg-gray-300"
              )}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationJourneySection;
