import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroInterior from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroInterior}
          alt="Luxusný interiér s kotlom"
          className="w-full h-full object-cover"
        />
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="space-y-8 animate-fade-in-up text-white">
            {/* Heading */}
            <div className="space-y-6">
              <h1 className="font-display text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                Vykurovanie
                <br />
                {/* <span className="text-accent">Budúcnosti</span> */}
                Budúcnosti
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-lg">
                Moderné kotly na pelety.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/produkty">
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-white/90 text-base px-10 h-12 font-medium"
                >
                  Produkty
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 text-base px-10 h-12"
              >
                Kontakt
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
