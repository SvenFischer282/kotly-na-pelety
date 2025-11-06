import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import boiler1 from '@/assets/boiler-1.jpg';
import boiler2 from '@/assets/boiler-2.jpg';
import boiler3 from '@/assets/boiler-3.jpg';

const featuredProducts = [
  {
    id: 1,
    name: "EcoHeat Pro 25",
    description: "Kompaktný kotol ideálny pre rodinné domy do 200m²",
    power: "25 kW",
    efficiency: "95%",
    price: "3,499",
    image: boiler1,
    category: "home",
    isPopular: true,
  },
  {
    id: 2,
    name: "PowerMax Industrial 100",
    description: "Výkonný systém pre veľké objekty a priemyselné priestory",
    power: "100 kW",
    efficiency: "94%",
    price: "12,999",
    image: boiler2,
    category: "industrial",
  },
];

const Products = () => {

  return (
    <section id="products" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Vybrané Kotly
            <span className="block text-accent mt-2">Z Nášho Sortimentu</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Objavte naše najpredávanejšie modely kotlov na pelety pre váš domov alebo priemyselné priestory.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* CTA to All Products */}
        <div className="text-center animate-fade-in">
          <Link to="/produkty">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 btn-premium px-8"
            >
              Zobraziť Všetky Produkty
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
