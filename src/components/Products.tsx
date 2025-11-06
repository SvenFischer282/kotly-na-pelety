import { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import boiler1 from '@/assets/boiler-1.jpg';
import boiler2 from '@/assets/boiler-2.jpg';
import boiler3 from '@/assets/boiler-3.jpg';

const products = [
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
  {
    id: 3,
    name: "SmartBurn Eco 15",
    description: "Inteligentné riadenie pre maximálnu efektivitu a úsporu",
    power: "15 kW",
    efficiency: "96%",
    price: "2,899",
    image: boiler3,
    category: "home",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Náš Sortiment
            <span className="block text-accent mt-2">Prémiových Kotlov</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Objavte našu starostlivo vyberanú kolekciu moderných kotlov na pelety. 
            Každý model je navrhnutý pre maximálnu efektivitu a spolehlivosť.
          </p>
        </div>

        {/* Filter Tabs */}
        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveCategory}>
          <TabsList className="inline-flex h-auto p-1 bg-secondary/50 backdrop-blur-sm rounded-xl shadow-soft">
            <TabsTrigger 
              value="all" 
              className="px-6 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              Všetky Produkty
            </TabsTrigger>
            <TabsTrigger 
              value="home" 
              className="px-6 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              Domáce Kotly
            </TabsTrigger>
            <TabsTrigger 
              value="industrial" 
              className="px-6 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              Priemyselné Kotly
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Product Grid */}
        <div className="asymmetric-grid animate-fade-in-up">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Nenašli ste to, čo hľadáte? Kontaktujte nás pre individuálne riešenie.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-light text-accent-foreground btn-premium px-8"
          >
            Kontaktovať Odborníka
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
