
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What exactly is an EPiC Accelerator?",
    answer: "An EPiC Accelerator is a 12-week embedded program designed to solve a specific organizational challenge. Unlike traditional consulting or workshops, our accelerators combine hands-on guidance, practical tools, and team development to create lasting change. We work directly with your teams to implement solutions—not just recommend them."
  },
  {
    question: "How are Masterclasses different from Accelerators?",
    answer: "Masterclasses are focused 1-2 day interactive learning sessions that provide specific skills and insights around transformation topics. They serve as either a light-touch entry point for organizations exploring transformation or as complementary skill-building alongside our more comprehensive Accelerator programs."
  },
  {
    question: "Do you work with organizations of all sizes?",
    answer: "Yes, we work with organizations ranging from scaling startups to large enterprises. We tailor our approach to your specific size, culture, and challenges. What's consistent is our focus on creating practical change that's sustainable after we leave."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We've successfully delivered transformations across technology, financial services, healthcare, retail, manufacturing, and professional services. Our methodology is adaptable to various industries because we focus on universal principles of effective transformation while honoring the unique context of your sector."
  },
  {
    question: "How do you measure the success of a transformation initiative?",
    answer: "We establish clear success metrics at the start of every engagement based on your specific goals. These typically include quantitative measures (delivery time, productivity, cost savings) and qualitative outcomes (team engagement, leadership capability, cultural shift). We track these metrics throughout the engagement and provide a final impact assessment."
  }
];

const FAQSection: React.FC = () => {
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50"
      id="faq"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className={cn(
            "mb-6 opacity-0",
            isVisible && "animate-fade-in"
          )}>
            Frequently Asked Questions
          </h2>
          <p className={cn(
            "text-xl text-gray-700 opacity-0",
            isVisible && "animate-fade-in"
          )}
          style={{ animationDelay: '0.2s' }}
          >
            Everything you need to know about our transformation approaches.
          </p>
        </div>

        <div className={cn(
          "max-w-3xl mx-auto opacity-0",
          isVisible && "animate-fade-in"
        )}
        style={{ animationDelay: '0.3s' }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
