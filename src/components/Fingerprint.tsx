
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FingerprintProps {
  className?: string;
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  content: {
    title: string;
    description: string;
    link?: string;
  };
}

const Fingerprint: React.FC<FingerprintProps> = ({ className }) => {
  const [mode, setMode] = useState<'outcomes' | 'journey'>('outcomes');
  const [isAnimated, setIsAnimated] = useState(false);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    content: {
      title: '',
      description: '',
    },
  });

  const fingerprintRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsAnimated(true);
          }, 300);
        }
      },
      { threshold: 0.2 }
    );

    if (fingerprintRef.current) {
      observer.observe(fingerprintRef.current);
    }

    return () => {
      if (fingerprintRef.current) {
        observer.unobserve(fingerprintRef.current);
      }
    };
  }, []);

  const handlePathHover = (
    e: React.MouseEvent<SVGPathElement>,
    content: { title: string; description: string; link?: string }
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setTooltip({
      visible: true,
      x,
      y,
      content,
    });
  };

  const handlePathLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'outcomes' ? 'journey' : 'outcomes'));
  };

  // Data for the interactive paths
  const pathData = {
    outcomes: [
      {
        id: 'blue-line',
        path: 'M80,190 Q180,70 300,120',
        color: 'text-epic-blue',
        strokeWidth: 12,
        content: {
          title: 'High-Performance Teams',
          description: 'Build teams that collaborate better and deliver faster.',
          link: '/accelerators/teams',
        },
      },
      {
        id: 'orange-line',
        path: 'M170,60 Q230,190 350,180',
        color: 'text-epic-orange',
        strokeWidth: 12,
        content: {
          title: 'Operational Excellence',
          description: 'Streamline workflows and eliminate bottlenecks.',
          link: '/accelerators/operations',
        },
      },
      {
        id: 'yellow-line',
        path: 'M140,290 Q220,220 290,270',
        color: 'text-epic-yellow',
        strokeWidth: 12,
        content: {
          title: 'Innovation Gateway',
          description: 'Create space for ideas and accelerate validation.',
          link: '/accelerators/innovation',
        },
      },
      {
        id: 'green-line',
        path: 'M310,260 Q330,180 290,140',
        color: 'text-epic-green',
        strokeWidth: 12,
        content: {
          title: 'Digital Transformation',
          description: 'Implement technology that enhances human capabilities.',
          link: '/accelerators/digital',
        },
      },
      {
        id: 'blue-line-2',
        path: 'M90,130 Q140,220 230,260',
        color: 'text-epic-blue',
        strokeWidth: 12,
        content: {
          title: 'Leadership Development',
          description: 'Empower leaders to drive meaningful change.',
          link: '/accelerators/leadership',
        },
      },
      {
        id: 'orange-line-2',
        path: 'M220,320 Q260,280 310,310',
        color: 'text-epic-orange',
        strokeWidth: 12,
        content: {
          title: 'Cultural Alignment',
          description: 'Foster a culture where transformation thrives.',
          link: '/accelerators/culture',
        },
      },
    ],
    journey: [
      {
        id: 'level1-1',
        path: 'M80,190 Q180,70 300,120',
        color: 'text-epic-blue',
        strokeWidth: 12,
        content: {
          title: 'Discover',
          description: 'Identify your transformation needs and goals.',
          link: '/transformation-journey/discover',
        },
        level: 1,
      },
      {
        id: 'level1-2',
        path: 'M170,60 Q230,190 350,180',
        color: 'text-epic-blue',
        strokeWidth: 12,
        content: {
          title: 'Analyze',
          description: 'Deep dive into processes and pain points.',
          link: '/transformation-journey/analyze',
        },
        level: 1,
      },
      {
        id: 'level2-1',
        path: 'M140,290 Q220,220 290,270',
        color: 'text-epic-orange',
        strokeWidth: 12,
        content: {
          title: 'Design',
          description: 'Create targeted intervention strategies.',
          link: '/transformation-journey/design',
        },
        level: 2,
      },
      {
        id: 'level2-2',
        path: 'M310,260 Q330,180 290,140',
        color: 'text-epic-orange',
        strokeWidth: 12,
        content: {
          title: 'Develop',
          description: 'Build capabilities and prepare for implementation.',
          link: '/transformation-journey/develop',
        },
        level: 2,
      },
      {
        id: 'level3-1',
        path: 'M90,130 Q140,220 230,260',
        color: 'text-epic-yellow',
        strokeWidth: 12,
        content: {
          title: 'Implement',
          description: 'Execute transformation initiatives with teams.',
          link: '/transformation-journey/implement',
        },
        level: 3,
      },
      {
        id: 'level3-2',
        path: 'M220,320 Q260,280 310,310',
        color: 'text-epic-yellow',
        strokeWidth: 12,
        content: {
          title: 'Measure',
          description: 'Track progress and adjust based on outcomes.',
          link: '/transformation-journey/measure',
        },
        level: 3,
      },
      {
        id: 'level4-1',
        path: 'M250,170 Q270,210 290,200',
        color: 'text-epic-green',
        strokeWidth: 12,
        content: {
          title: 'Sustain',
          description: 'Embed practices for lasting transformation.',
          link: '/transformation-journey/sustain',
        },
        level: 4,
      },
    ],
  };

  // Filter paths based on current mode
  const currentPaths = pathData[mode];

  return (
    <div className={cn("relative", className)}>
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 p-1 rounded-lg">
          <button
            className={cn(
              "px-4 py-2 rounded-md transition-all",
              mode === 'outcomes'
                ? "bg-white shadow-md text-epic-blue"
                : "text-gray-600 hover:bg-gray-200"
            )}
            onClick={() => setMode('outcomes')}
          >
            Strategic Outcomes
          </button>
          <button
            className={cn(
              "px-4 py-2 rounded-md transition-all",
              mode === 'journey'
                ? "bg-white shadow-md text-epic-blue"
                : "text-gray-600 hover:bg-gray-200"
            )}
            onClick={() => setMode('journey')}
          >
            EPiC Journey
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-md mx-auto">
        {mode === 'journey' && (
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 space-y-6 opacity-0 animate-fade-in-right" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-epic-blue mr-3"></div>
              <span className="font-medium">Level 1: Explore</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-epic-orange mr-3"></div>
              <span className="font-medium">Level 2: Design</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-epic-yellow mr-3"></div>
              <span className="font-medium">Level 3: Execute</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-epic-green mr-3"></div>
              <span className="font-medium">Level 4: Sustain</span>
            </div>
          </div>
        )}

        <svg
          ref={fingerprintRef}
          viewBox="0 0 400 400"
          className="w-full max-w-md mx-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Keyhole shape in center */}
          <circle cx="200" cy="200" r="30" fill="#FEF9C3" className="animate-pulse-soft" />
          <path
            d="M200,190 L200,210 Q210,215 210,205 L210,195 Q210,185 200,190 Z"
            fill="#F97316"
          />

          {/* Fingerprint lines */}
          {currentPaths.map((item) => (
            <path
              key={item.id}
              d={item.path}
              stroke="currentColor"
              className={cn(
                "fingerprint-line transition-all duration-300",
                item.color,
                isAnimated && "animate"
              )}
              strokeWidth={item.strokeWidth}
              fill="none"
              strokeLinecap="round"
              onMouseEnter={(e) => handlePathHover(e, item.content)}
              onMouseLeave={handlePathLeave}
              style={{ animationDelay: `${Math.random() * 0.5 + 0.1}s` }}
            />
          ))}
        </svg>

        {tooltip.visible && (
          <div
            className="absolute bg-white p-4 rounded-lg shadow-lg max-w-xs z-10 transform -translate-x-1/2 animate-scale-in"
            style={{
              left: `${tooltip.x}px`,
              top: `${tooltip.y - 120}px`,
            }}
          >
            <h4 className="font-bold text-lg">{tooltip.content.title}</h4>
            <p className="text-gray-600 text-sm mt-1">{tooltip.content.description}</p>
            {tooltip.content.link && (
              <a
                href={tooltip.content.link}
                className="text-epic-blue hover:underline text-sm mt-2 inline-block"
              >
                Learn more →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Fingerprint;
