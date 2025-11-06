import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBoiler from '@/assets/hero-boiler.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Ekologické
                <br />
                <span className="text-accent">Vykurovanie</span>
                <br />
                Pre Váš Domov
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed">
                Moderné kotly na pelety s vysokou účinnosťou a minimálnymi prevádzkovými nákladmi.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/produkty">
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-lg px-8 h-14 btn-premium shadow-medium"
                >
                  Zobraziť Produkty
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 text-lg px-8 h-14 hover:bg-secondary"
              >
                Kontaktovať Nás
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl lg:text-5xl font-bold font-display text-primary mb-1">50%</div>
                <div className="text-sm text-muted-foreground">Úspora nákladov</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold font-display text-primary mb-1">96%</div>
                <div className="text-sm text-muted-foreground">Účinnosť</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold font-display text-primary mb-1">0</div>
                <div className="text-sm text-muted-foreground">CO₂ emisie</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-up lg:block hidden">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={heroBoiler} 
                alt="Moderný kotol na pelety" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
