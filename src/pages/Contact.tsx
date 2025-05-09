
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "EPiC - Contact Us";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you'd submit the form data to your backend here
    
    toast.success("Thank you for reaching out! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Let's Talk</h1>
            <p className="text-xl text-gray-700">
              Ready to make transformation delightful? Get in touch with our team to discuss 
              how we can help your organization create space for lasting change.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8 opacity-0 animate-fade-in-right">
              <h2 className="text-3xl font-bold">Get in touch</h2>
              <p className="text-lg text-gray-700">
                Fill out the form and one of our transformation specialists will get back to you 
                within one business day to schedule a discovery call.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@company.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="ACME Inc." required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">I'm interested in</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="accelerator">EPiC Accelerator</SelectItem>
                      <SelectItem value="masterclass">Masterclass</SelectItem>
                      <SelectItem value="consultation">Initial Consultation</SelectItem>
                      <SelectItem value="other">Something Else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your transformation needs or challenges" 
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full">Send Message</Button>
              </form>
            </div>
            
            <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gray-50 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin size={24} className="text-epic-blue shrink-0" />
                    <div>
                      <h4 className="font-semibold">Our Location</h4>
                      <p className="text-gray-600">123 Transformation Ave, Innovation City, CA 94103</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Phone size={24} className="text-epic-blue shrink-0" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Mail size={24} className="text-epic-blue shrink-0" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">info@epiccompany.com</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Clock size={24} className="text-epic-blue shrink-0" />
                    <div>
                      <h4 className="font-semibold">Working Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <p className="text-gray-600">Map Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
