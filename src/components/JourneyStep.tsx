
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface Accelerator {
  name: string;
  color: 'blue' | 'orange' | 'yellow' | 'green';
  description: string;
  category: 'Make More' | 'Spend Less' | 'Build Culture';
}

export interface JourneyStepProps {
  level: number;
  title: string;
  description: string;
  extendedDescription: string;
  accelerators: Accelerator[];
  targetAudience: string;
  color: string;
  baseColorClass: string;
  textColorClass: string;
  isActive: boolean;
  progress: number; // 0-1 representing progress through this step
}

const JourneyStep: React.FC<JourneyStepProps> = ({
  level,
  title,
  description,
  extendedDescription,
  accelerators,
  targetAudience,
  color,
  baseColorClass,
  textColorClass,
  isActive,
  progress,
}) => {
  // Helper functions for colors
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
  
  const getCategoryColorClass = (category: string): string => {
    switch (category) {
      case 'Make More': return 'from-epic-blue/20 to-epic-blue/10 border-epic-blue/30';
      case 'Spend Less': return 'from-epic-yellow/20 to-epic-yellow/10 border-epic-yellow/30';
      case 'Build Culture': return 'from-epic-green/20 to-epic-green/10 border-epic-green/30';
      default: return 'from-epic-blue/20 to-epic-blue/10 border-epic-blue/30';
    }
  };

  return (
    <div className={cn(
      "relative flex items-start transition-all duration-500",
      isActive && "journey-step-active"
    )}>
      {/* Circle indicator with dynamic color and transition */}
      <div className={cn(
        "absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full border-2 z-10 transition-all duration-500",
        isActive ? 
          `scale-125 ${baseColorClass} border-transparent` : 
          "bg-white border-gray-200"
      )}>
        <div className={cn(
          "w-4 h-4 rounded-full transition-all duration-500",
          isActive ? "scale-100 bg-white" : "scale-0"
        )} />
      </div>
      
      <div className="ml-16 max-w-3xl">
        <span className={cn(
          "text-sm font-medium transition-colors duration-300", 
          textColorClass
        )}>
          Level {level}
        </span>
        
        <h3 className={cn(
          "text-2xl font-bold mb-2 transition-colors duration-300", 
          textColorClass
        )}>
          {title}
        </h3>
        
        <p className="text-lg font-semibold text-gray-800 mb-3">
          {description}
        </p>
        
        <p className="text-gray-600 mb-4">
          {extendedDescription}
        </p>
        
        <div className="mt-4 mb-4">
          <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">
            Accelerators to {level === 1 ? "start with" : level === 2 ? "explore" : level === 3 ? "apply" : "launch"}:
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {accelerators.map((accelerator, accIndex) => (
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
                        className="ml-2 text-xs text-epic-blue hover:text-epic-orange inline-flex items-center group"
                      >
                        Learn more 
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300 inline-block ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-sm text-gray-500 italic">{targetAudience}</p>
      </div>
    </div>
  );
};

export default JourneyStep;
