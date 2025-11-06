import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-medium' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="font-display text-2xl lg:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              KOTLY NA PELETY<span className="text-accent">.SK</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/produkty" 
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Produkty
            </Link>
            <a 
              href="/#benefits" 
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Prečo Pelety?
            </a>
            <a 
              href="/#about" 
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              O Nás
            </a>

            <Button 
              className="ml-4 bg-gradient-primary hover:opacity-90 transition-opacity btn-premium"
            >
              Kontakt
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/produkty" className="text-sm font-medium hover:text-accent transition-colors">
                Produkty
              </Link>
              <a href="/#benefits" className="text-sm font-medium hover:text-accent transition-colors">
                Prečo Pelety?
              </a>
              <a href="/#about" className="text-sm font-medium hover:text-accent transition-colors">
                O Nás
              </a>
              <Button className="bg-gradient-primary btn-premium">
                Kontakt
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
