
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationItem {
  name: string;
  path: string;
}

const navigationItems: NavigationItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Accelerators', path: '/accelerators' },
  { name: 'Why EPiC', path: '/why-epic' },
  { name: 'Transformation Journey', path: '/transformation-journey' },
  { name: 'Contact', path: '/contact' }
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return cn(
      'nav-link',
      isActive ? 'active' : ''
    );
  };

  return (
    <header
      className={cn(
        'fixed w-full top-0 left-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <NavLink 
            to="/" 
            className={cn(
              'text-xl md:text-2xl font-bold font-manrope transition-transform duration-300',
              isScrolled ? 'scale-90' : 'scale-100'
            )}
          >
            <span className="text-epic-blue">EP</span>
            <span className="text-epic-orange">i</span>
            <span className="text-gray-800">C</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={getLinkClass}
              end={item.path === '/'}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <Button 
          className="hidden lg:flex btn-primary"
          onClick={() => window.location.href="/contact"}
        >
          Let's Talk
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white pt-20 px-4 lg:hidden">
            <nav className="flex flex-col space-y-6">
              {navigationItems.map((item) => (
                <NavLink 
                  key={item.path} 
                  to={item.path} 
                  className="text-lg font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button 
                className="btn-primary w-full mt-6"
                onClick={() => {
                  window.location.href="/contact";
                  setIsMobileMenuOpen(false);
                }}
              >
                Let's Talk
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
