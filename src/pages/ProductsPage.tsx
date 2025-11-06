import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from '@/data/products';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24 bg-gradient-subtle min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="max-w-3xl mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
              Všetky Produkty
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Kompletný sortiment moderných kotlov na pelety pre domácnosti aj priemyselné použitie. 
              Každý model je starostlivo vybraný pre maximálnu efektivitu a spoľahlivosť.
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

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
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

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Žiadne produkty v tejto kategórii.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
