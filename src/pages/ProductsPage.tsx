import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

// import { products } from "@/data/products";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { error } from "console";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("products").select();

      if (error) {
        throw new Error("err: " + error);
      } else {
        setProducts(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24 bg-gradient-subtle min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="max-w-3xl mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
              {/* Všetky Produkty */}
              <span className="block mt-2">Kotly Na Pelety</span>
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed">
              Kompletný sortiment moderných kotlov na pelety pre domácnosti aj
              priemyselné použitie. Každý model je starostlivo vybraný pre
              maximálnu efektivitu a spoľahlivosť.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {products.map((product, index) => (
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
                  image={product.image}
                  rating={product.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
