import { ArrowRight, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBoiler from '@/assets/hero-boiler.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBoiler} 
          alt="Moderný kotol na pelety" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Prémiové Vykurovacie Systémy</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight">
              Efektivita
              <br />
              <span className="text-accent">Spaľovania.</span>
              <br />
              Inovácia
              <br />
              Vykurovania.
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-white/90 max-w-xl leading-relaxed">
              Ekologické a úsporné vykurovanie pre váš domov. Ušetrite až 50% na nákladoch 
              oproti tradičným systémom.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/produkty">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-white text-lg px-8 py-6 btn-premium shadow-glow"
                >
                  Prehľad Produktov
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 btn-premium"
              >
                <Calculator className="mr-2 w-5 h-5" />
                Vypočítať Úsporu
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl lg:text-4xl font-bold font-display text-accent">50%</div>
                <div className="text-sm text-white/80 mt-1">Úspora nákladov</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold font-display text-accent">95%</div>
                <div className="text-sm text-white/80 mt-1">Efektivita</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold font-display text-accent">CO₂</div>
                <div className="text-sm text-white/80 mt-1">Neutrálne</div>
              </div>
            </div>
          </div>

          {/* Right side - decorative element for larger screens */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
