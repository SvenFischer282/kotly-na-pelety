import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import BoilerConfigurator from '@/components/BoilerConfigurator';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import InstagramFeed from '@/components/InstagramFeed';
import { ContactForm } from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Kotly na Pelety a Tepelné Čerpadlá - Moderné Vykurovanie | KOTLY NA PELETY.SK</title>
        <meta name="description" content="Moderné kotly na pelety, drevo a tepelné čerpadlá pre efektívne a ekologické vykurovanie. Široký výber kvalitných produktov s profesionálnou inštaláciou a servisom." />
        <link rel="canonical" href="https://kotlynapelety.sk/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Products />
        <BoilerConfigurator />
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
