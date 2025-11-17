import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-md font-medium text-muted hover:text-white/80 bg-transparent hover:bg-accent-light/20">
                    Produkty
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/kotly"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-md font-medium leading-none">
                              Kotly
                            </div>
                            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Kotly na pelety a drevo
                            </p> */}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/tepelne-cerpadla"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-md font-medium leading-none">
                              Tepelné čerpadlá
                            </div>
                            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Katalóg tepelných čerpadiel
                            </p> */}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              to="/informacie"
              className="text-md font-medium text-muted  hover:text-white/80"
            >
              Informácie
            </Link>
            {/* <a
              href="/#benefits"
              className="text-sm font-medium text-muted transition-colors hover:text-white/80"
            >
              Prečo Pelety?
            </a> */}
            <a
              href="/#configurator"
              className="text-md font-medium  text-muted transition-colors hover:text-white/80"
            >
              Konfigurátor
            </a>

            <Button
              asChild
              className="ml-4  bg-accent-light hover:opacity-90 transition-opacity hover:bg-accent-light/90 hover:text-white hover:scale-105  "
            >
              <Link to="/#contact">Kontakt</Link>
            </Button>
            <Button
              asChild
              className="ml-4  text-[20px] bg-accent-light ml-auto hover:opacity-90 transition-opacity hover:bg-accent-light/90 hover:text-white hover:scale-105  "
            >
              <Link to="tel:+421903468472">+421 903 468 472</Link>
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
              <div className="space-y-2">
                <div className="text-sm font-semibold text-muted">Produkty</div>
                <Link
                  to="/kotly"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted hover:text-white/80 pl-4 block"
                >
                  Kotly
                </Link>
                <Link
                  to="/tepelne-cerpadla"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted hover:text-white/80 pl-4 block"
                >
                  Tepelné čerpadlá
                </Link>
              </div>
              <Link
                to="/informacie"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted  hover:text-white/80"
              >
                Informácie
              </Link>
              <a
                href="/#benefits"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted transition-colors hover:text-white/80"
              >
                Prečo Pelety?
              </a>
              <a
                href="/#configurator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted transition-colors hover:text-white/80"
              >
                Konfigurátor
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
