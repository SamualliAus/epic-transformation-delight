
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  color: 'blue' | 'orange' | 'yellow' | 'green';
}

const testimonials: Testimonial[] = [
  {
    quote: "EPiC's team alignment accelerator completely transformed how our departments collaborate. In just 3 months, we've cut meeting time by 30% and improved project delivery times.",
    name: "Alex Richardson",
    title: "CTO",
    company: "TechStream, Inc.",
    initials: "AR",
    color: "blue",
  },
  {
    quote: "The process optimization work we did with EPiC helped us identify bottlenecks we didn't even know existed. Our team is now delivering value 40% faster with half the stress.",
    name: "Maya Johnson",
    title: "Head of Operations",
    company: "Elevate Group",
    initials: "MJ",
    color: "orange",
  },
  {
    quote: "What makes EPiC different is how they make transformation energizing rather than draining. Their masterclasses kept our team engaged while the accelerator program drove real results.",
    name: "Daniel Park",
    title: "VP of Product",
    company: "InnovateCorp",
    initials: "DP",
    color: "yellow",
  },
];

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const getAvatarColorClasses = (color: Testimonial['color']) => {
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
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="testimonials"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className={cn(
            "mb-6 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            What our clients say
          </h2>
          <p className={cn(
            "text-xl text-gray-700 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: '0.2s' }}
          >
            Hear from teams who have experienced the EPiC difference and transformed their organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={cn(
                "transition-all duration-500 hover:transform hover:translate-y-[-8px] hover:shadow-lg opacity-0",
                isVisible && "animate-scale-in"
              )}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <CardHeader>
                <div className="flex items-start">
                  <div className="text-5xl text-epic-blue mr-2 mt-1">"</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className={getAvatarColorClasses(testimonial.color)}>
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
