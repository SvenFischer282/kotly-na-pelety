import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import petite from "@/assets/petite6.png";
import futura_evo_9 from "@/assets/futura_evo_9.png";

const featuredProducts = [
  {
    id: 1,
    name: "Petite",
    description:
      "Kompaktná kachle na pelety ideálna pre malé priestory do 145 m²",
    power: "7 kW",
    efficiency: "89,8%",
    price: "1,499",
    image: petite,
    category: "home",
    isPopular: true,
  },
  {
    id: 2,
    name: "Futura Evo 9",
    description:
      "Moderná 5-hviezdičková kachle na pelety pre stredné priestory",
    power: "9 kW",
    efficiency: "95%",
    price: "2,000",
    image: futura_evo_9,
    category: "home",
    isPopular: false,
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
          <p className="text-lg text-textSecondary leading-relaxed">
            Objavte naše najpredávanejšie modely kotlov na pelety pre váš domov
            alebo priemyselné priestory.
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
