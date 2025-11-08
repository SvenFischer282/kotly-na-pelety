import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
