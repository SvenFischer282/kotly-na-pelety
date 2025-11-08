import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    if (location.pathname == "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-accent backdrop-blur-md shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="font-display text-2xl lg:text-3xl font-bold text-muted ">
              KOTLY NA PELETY<span className="text-muted">.SK</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/produkty"
              className="text-sm font-medium text-muted  hover:text-white/80"
            >
              Produkty
            </Link>
            <a
              href="/#benefits"
              className="text-sm font-medium text-muted transition-colors hover:text-white/80"
            >
              Prečo Pelety?
            </a>
            <a
              href="/#about"
              className="text-sm font-medium  text-muted transition-colors hover:text-white/80"
            >
              O Nás
            </a>

            <Button
              asChild
              className="ml-4  bg-accent-light hover:opacity-90 transition-opacity hover:bg-accent-light/90 hover:text-white hover:scale-105  "
            >
              <Link to="/#contact">Kontakt</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-muted hover:bg-accent-light transition-colors"
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
            <div className="flex flex-col space-y-4 pt-3 border-t">
              <Link
                to="/produkty"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted transition-colors hover:text-white/80"
              >
                Produkty
              </Link>
              <a
                href="/#benefits"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted transition-colors hover:text-white/80"
              >
                Prečo Pelety?
              </a>
              <a
                href="/#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted transition-colors hover:text-white/80"
              >
                O Nás
              </a>
              <Button
                asChild
                className="ml-4  bg-accent-light hover:opacity-90 transition-opacity hover:bg-accent-light/90 hover:text-white hover:scale-105  "
              >
                <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Kontakt
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
