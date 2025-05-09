
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { cn } from '@/lib/utils';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

interface ValueProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const whyValues: ValueProps[] = [
  {
    title: "Embedded Approach",
    description: "We work alongside your teams, not just advising from the sidelines. This creates deeper understanding and more sustainable change.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-epic-blue",
  },
  {
    title: "Practical Solutions",
    description: "We focus on real outcomes, not theoretical models. Every intervention is tailored to your context and designed for immediate impact.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 8.5L12 15L18.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-epic-orange",
  },
  {
    title: "Human-Centered",
    description: "We believe successful transformation happens through people, not despite them. We create energizing experiences that engage hearts and minds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M16 8.00002C16 12.4183 12.4183 16 8.00002 16C3.58172 16 0 12.4183 0 8.00002C0 3.58172 3.58172 0 8.00002 0C12.4183 0 16 3.58172 16 8.00002Z" transform="translate(4 4)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.9 9.9C9.9 12.1591 8.0591 14 5.8 14C3.5409 14 1.7 12.1591 1.7 9.9C1.7 7.6409 3.5409 5.8 5.8 5.8C8.0591 5.8 9.9 7.6409 9.9 9.9Z" transform="translate(6.2 6.2)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-epic-yellow",
  },
];

const WhyEPiC: React.FC = () => {
  useEffect(() => {
    document.title = "EPiC - Why Choose Us";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Why Choose EPiC</h1>
            <p className="text-xl text-gray-700">
              Our approach to transformation combines deep expertise, practical methods, 
              and a human-centered focus to deliver lasting change that energizes rather than drains.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            {whyValues.map((value, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className={cn(
                  "mb-6 p-4 rounded-full",
                  value.color === "text-epic-blue" ? "bg-epic-light-blue" : 
                  value.color === "text-epic-orange" ? "bg-epic-light-orange" : 
                  "bg-epic-light-yellow"
                )}>
                  <div className={cn(
                    "w-16 h-16 flex items-center justify-center",
                    value.color
                  )}>
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 opacity-0 animate-fade-in-right">
              <h2>Our Transformation Philosophy</h2>
              <p className="text-lg text-gray-700">
                At EPiC, we believe transformation should be delightful, not draining. Too often, change initiatives add complexity and burnout rather than creating clarity and momentum.
              </p>
              <p className="text-lg text-gray-700">
                Our approach creates space for lasting change by focusing on three key principles:
              </p>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-epic-blue mr-2">✓</span>
                  <span>Simplifying complexity through clear models and frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-epic-blue mr-2">✓</span>
                  <span>Energizing teams through collaborative, purpose-driven work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-epic-blue mr-2">✓</span>
                  <span>Building capability that remains long after we've gone</span>
                </li>
              </ul>
            </div>
            <div className="relative opacity-0 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-epic-blue/20 via-epic-orange/20 to-epic-yellow/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-epic-light-blue rounded-full opacity-30 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-epic-light-orange rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default WhyEPiC;
