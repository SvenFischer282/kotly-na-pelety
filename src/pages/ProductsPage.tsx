import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProductsPage = () => {

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
                key={product.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
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
