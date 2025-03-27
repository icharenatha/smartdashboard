
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'LPMS DCT', path: '/dct' },
    { name: 'LPMS App', path: '/app' },
    { name: 'LPMS AI', path: '/ai' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glassmorphism px-6 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-lpms-blue text-white p-2 rounded-md font-bold">LPMS</div>
          <span className="text-lpms-blue font-semibold text-xl hidden sm:inline-block">Portal</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={cn(
                "font-medium transition-colors hover:text-lpms-green relative px-1",
                location.pathname === item.path ? "text-lpms-green after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-lpms-green" : "text-lpms-blue"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white/90 backdrop-blur-sm z-40 md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-xl font-medium transition-colors hover:text-lpms-green",
                  location.pathname === item.path ? "text-lpms-green" : "text-lpms-blue"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
