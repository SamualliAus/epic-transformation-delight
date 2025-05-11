
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import JourneyStep, { JourneyStepProps } from './JourneyStep';

type JourneyStepData = Omit<JourneyStepProps, 'isActive' | 'progress'>;

const journeySteps: JourneyStepData[] = [
  {
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
    textColorClass: "text-epic-orange"
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
    textColorClass: "text-epic-yellow"
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
    textColorClass: "text-epic-green"
  }
];

const TransformationJourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [stepVisibility, setStepVisibility] = useState<boolean[]>(
    Array(journeySteps.length).fill(false)
  );

  // Calculate active step progress
  const calculateStepProgress = useCallback((scrollProg: number, index: number) => {
    const totalSteps = journeySteps.length;
    const stepSize = 1 / totalSteps;
    const stepStart = index * stepSize;
    const stepEnd = (index + 1) * stepSize;
    
    if (scrollProg < stepStart) return 0;
    if (scrollProg > stepEnd) return 1;
    
    return (scrollProg - stepStart) / stepSize;
  }, []);

  // Memoize the scroll handler to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const sectionTop = rect.top;
      const viewportHeight = window.innerHeight;
      
      // Only update if section is in view
      if (sectionTop <= viewportHeight && sectionTop > -sectionHeight) {
        // Calculate progress based on viewport position
        const calculatedProgress = Math.min(
          1, 
          Math.max(0, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight * 0.7))
        );
        
        setScrollProgress(calculatedProgress);
        
        // Calculate active step - ensure it's always valid
        const newActiveIndex = Math.min(
          journeySteps.length - 1,
          Math.max(0, Math.floor(calculatedProgress * journeySteps.length))
        );
        
        setActiveStepIndex(newActiveIndex);
        
        // Update step visibility
        setStepVisibility(prev => {
          const newVisibility = [...prev];
          for (let i = 0; i <= newActiveIndex; i++) {
            newVisibility[i] = true;
          }
          return newVisibility;
        });
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Initial scroll handling when section becomes visible
          handleScroll();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Add throttled scroll event listener
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', scrollListener, { passive: true });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', scrollListener);
    };
  }, [handleScroll]);

  // Safely get gradient style for the line
  const getLineGradientStyle = () => {
    try {
      // Ensure journeySteps exists and has items
      if (!journeySteps || journeySteps.length === 0) {
        return {
          background: '#0EA5E9', // Default blue
          height: '0%'
        };
      }
      
      // Calculate progress values
      const totalSteps = journeySteps.length;
      const stepProgress = scrollProgress * totalSteps;
      
      // Get current and next indices
      const currentIndex = Math.min(Math.floor(stepProgress), totalSteps - 1);
      const nextIndex = Math.min(currentIndex + 1, totalSteps - 1);
      
      // Fraction between current and next
      const progressBetweenSteps = stepProgress - currentIndex;
      
      // Get colors safely with defaults
      const currentColor = journeySteps[currentIndex]?.color || '#0EA5E9';
      const nextColor = journeySteps[nextIndex]?.color || currentColor;
      
      let backgroundStyle;
      
      // Simple gradient or solid color
      if (currentIndex === nextIndex) {
        backgroundStyle = currentColor;
      } else {
        backgroundStyle = `linear-gradient(to bottom, 
          ${currentColor} 0%, 
          ${currentColor} ${(1 - progressBetweenSteps) * 100}%, 
          ${nextColor} 100%)`;
      }
      
      return {
        background: backgroundStyle,
        height: `${Math.min(100, scrollProgress * 100)}%`
      };
    } catch (error) {
      console.error("Error in gradient calculation:", error);
      return {
        background: '#0EA5E9',
        height: '0%'
      };
    }
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
            "mb-4 opacity-0 animated-gradient-text inline-block",
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
                className={cn(
                  "opacity-0", 
                  isVisible && "animate-fade-in",
                  stepVisibility[index] ? "opacity-100" : "opacity-40"
                )} 
                style={{
                  animationDelay: `${0.2 * index}s`,
                  transition: "opacity 0.5s ease-out"
                }}
              >
                <JourneyStep 
                  {...step} 
                  isActive={index <= activeStepIndex} 
                  progress={calculateStepProgress(scrollProgress, index)}
                />
                
                {index < journeySteps.length - 1 && (
                  <div className="mt-8 border-t border-gray-200 w-1/2 opacity-50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationJourneySection;
