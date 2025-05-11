
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/95 shadow-md backdrop-blur-sm' : 'py-5 bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/48d45eca-5990-48d0-b05c-50b11048ed5f.png" 
              alt="EPiC Logo" 
              className="h-12 w-auto"
            />
          </Link>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          <nav className={`fixed md:static top-[72px] left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 ${isMenuOpen ? 'max-h-[400px] py-4' : 'max-h-0 md:max-h-full invisible md:visible overflow-hidden md:overflow-visible'}`}>
            <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 px-4 md:px-0">
              <li>
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/transformation-journey" className={`nav-link ${location.pathname === '/transformation-journey' ? 'active' : ''}`}>
                  Transformation Journey
                </Link>
              </li>
              <li>
                <Link to="/accelerators" className={`nav-link ${location.pathname === '/accelerators' ? 'active' : ''}`}>
                  Accelerators
                </Link>
              </li>
              <li>
                <Link to="/why-epic" className={`nav-link ${location.pathname === '/why-epic' ? 'active' : ''}`}>
                  Why EPiC
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link to="/contact" className="bg-gradient-to-r from-epic-blue via-epic-orange to-epic-yellow hover:from-epic-blue/90 hover:via-epic-orange/90 hover:to-epic-yellow/90 text-white border-none">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
