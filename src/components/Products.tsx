import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Products = () => {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // 1️⃣ Fetch your product rows
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(2);

      if (error) {
        console.error("Error fetching products:", error);
        return;
      }

      if (!data) return;

      // 2️⃣ Generate public image URLs from Supabase Storage
      const productsWithImages = data.map((product) => {
        // If your table stores the path like "products/futura_evo_9.png"
        const { data: urlData } = supabase.storage
          .from("images") // bucket name in Supabase Storage
          .getPublicUrl(product.image); // field from DB that stores image path

        return {
          ...product,
          image: urlData.publicUrl, // Add the public URL for use in <img src={image} />
        };
      });

      // 3️⃣ Update state
      setFeaturedProducts(productsWithImages);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16 animate-fade-in">
            <h2 className="text-4xl text-accent lg:text-5xl font-display font-bold mb-4">
              Vybrané Kotly
              <span className="block text-accent mt-2">Z Nášho Sortimentu</span>
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              Objavte naše najpredávanejšie modely kotlov na pelety pre váš domov
              alebo priemyselné priestory.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-fade-in">
          <h2 className="text-4xl text-accent lg:text-5xl font-display font-bold mb-4">
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
              key={product.product_id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard
                product_id={product.product_id}
                name={product.name}
                description={product.description}
                power_nominal_max_kw={product.power_nominal_max_kw}
                efficiency_max_percent={product.efficiency_max_percent}
                price_eur={product.price_eur}
                image={product.image} // ✅ now a valid public URL
                rating={product.rating}
              />
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
