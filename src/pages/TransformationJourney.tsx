
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Fingerprint from '../components/Fingerprint';
import { cn } from '@/lib/utils';
import CTASection from '../components/CTASection';

const TransformationJourney: React.FC = () => {
  useEffect(() => {
    document.title = "EPiC - Transformation Journey";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">The EPiC Transformation Journey</h1>
            <p className="text-xl text-gray-700">
              Our structured approach guides organizations through a proven transformation path, 
              delivering clarity and momentum at every step.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <Fingerprint className="mb-16" />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 opacity-0 animate-fade-in-right">
                  <h3 className="text-2xl font-bold text-epic-blue">1. Discover & Analyze</h3>
                  <p className="text-gray-700">
                    We begin by deeply understanding your organization's unique context, challenges, and aspirations. 
                    Through assessments, interviews, and data analysis, we identify the specific transformation needs 
                    and establish baseline metrics.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-epic-blue mr-2">•</span>
                      <span>Organizational readiness assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-epic-blue mr-2">•</span>
                      <span>Stakeholder interviews and workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-epic-blue mr-2">•</span>
                      <span>Current state process mapping</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg opacity-0 animate-fade-in-left">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Discovery phase" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1 opacity-0 animate-fade-in-right">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Design phase" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-4 order-1 md:order-2 opacity-0 animate-fade-in-left">
                  <h3 className="text-2xl font-bold text-epic-orange">2. Design & Develop</h3>
                  <p className="text-gray-700">
                    Based on insights from the discovery phase, we co-create transformation strategies that align with your 
                    business goals. We design targeted interventions and build the capabilities needed for successful implementation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-epic-orange mr-2">•</span>
                      <span>Targeted intervention design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-epic-orange mr-2">•</span>
                      <span>Capability building workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-epic-orange mr-2">•</span>
                      <span>Future state roadmapping</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 opacity-0 animate-fade-in-right">
                  <h3 className="text-2xl font-bold text-epic-yellow">3. Implement & Measure</h3>
                  <p className="text-gray-700">
                    We work alongside your teams to execute the transformation initiatives, providing hands-on guidance and 
                    support. Throughout implementation, we continuously measure progress and adjust based on feedback and outcomes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-epic-yellow mr-2">•</span>
                      <span>Guided implementation support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-epic-yellow mr-2">•</span>
                      <span>Real-time feedback loops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-epic-yellow mr-2">•</span>
                      <span>Progress tracking and reporting</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg opacity-0 animate-fade-in-left">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Implementation phase" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1 opacity-0 animate-fade-in-right">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Sustain phase" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-4 order-1 md:order-2 opacity-0 animate-fade-in-left">
                  <h3 className="text-2xl font-bold text-epic-green">4. Sustain</h3>
                  <p className="text-gray-700">
                    The final phase focuses on embedding new practices into your organization's DNA. We help establish 
                    governance frameworks, knowledge transfer, and continuous improvement mechanisms to ensure the 
                    transformation endures long after our engagement ends.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-epic-green mr-2">•</span>
                      <span>Sustainability planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-epic-green mr-2">•</span>
                      <span>Leadership capability development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-epic-green mr-2">•</span>
                      <span>Long-term impact assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default TransformationJourney;
