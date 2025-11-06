import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
          <a href="/" className="flex items-center space-x-2 group">
            <div className="font-display text-2xl lg:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              KOTLY NA PELETY<span className="text-accent">.SK</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-secondary/50 data-[state=open]:bg-secondary/50">
                    Produkty
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="#"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/80"
                          >
                            <div className="text-sm font-medium leading-none">Domáce Kotly</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Pre rodinné domy a menšie priestory
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="#"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/80"
                          >
                            <div className="text-sm font-medium leading-none">Priemyselné Kotly</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Vysoká kapacita pre veľké objekty
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="#"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/80"
                          >
                            <div className="text-sm font-medium leading-none">Príslušenstvo</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Zásobníky, pelety a ďalšie doplnky
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a 
                    href="#benefits" 
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/50 focus:bg-secondary/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Prečo Pelety?
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a 
                    href="#about" 
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/50 focus:bg-secondary/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    O Nás
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
              <a href="#products" className="text-sm font-medium hover:text-accent transition-colors">
                Produkty
              </a>
              <a href="#benefits" className="text-sm font-medium hover:text-accent transition-colors">
                Prečo Pelety?
              </a>
              <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
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
