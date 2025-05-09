
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold">
              <span className="text-epic-blue">EP</span>
              <span className="text-epic-orange">i</span>
              <span className="text-white">C</span>
            </h3>
            <p className="text-gray-300">
              We help ambitious organizations create space for lasting change—through targeted Accelerators and sharp, energizing Masterclasses.
            </p>
          </div>

          <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/accelerators" className="text-gray-300 hover:text-white transition-colors">Accelerators</a>
              </li>
              <li>
                <a href="/why-epic" className="text-gray-300 hover:text-white transition-colors">Why EPiC</a>
              </li>
              <li>
                <a href="/transformation-journey" className="text-gray-300 hover:text-white transition-colors">Transformation Journey</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-semibold text-lg">Our Accelerators</h4>
            <ul className="space-y-2">
              <li>
                <a href="/accelerators/team-alignment" className="text-gray-300 hover:text-white transition-colors">Team Alignment</a>
              </li>
              <li>
                <a href="/accelerators/process-optimization" className="text-gray-300 hover:text-white transition-colors">Process Optimization</a>
              </li>
              <li>
                <a href="/accelerators/innovation-systems" className="text-gray-300 hover:text-white transition-colors">Innovation Systems</a>
              </li>
              <li>
                <a href="/accelerators/digital-enablement" className="text-gray-300 hover:text-white transition-colors">Digital Enablement</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="text-epic-blue mt-1" />
                <span className="text-gray-300">123 Transformation Ave, Innovation City</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-epic-blue mt-1" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-epic-blue mt-1" />
                <a href="mailto:info@epiccompany.com" className="text-gray-300 hover:text-white transition-colors">info@epiccompany.com</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EPiC Company. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
