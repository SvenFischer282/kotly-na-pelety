import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import InstagramFeed from '@/components/InstagramFeed';
import { ContactForm } from '@/components/ContactForm';
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
        <InstagramFeed />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
