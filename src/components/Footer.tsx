import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const Footer = () => {
  const { setShowBanner } = useCookieConsent();
  return (
    <footer className=" bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">
              KOTLY NA PELETY<span className="">.SK</span>
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Váš partner pre efektívne a ekologické vykurovanie. Prémiové kotly
              na pelety s profesionálnym servisom.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kotlynapelety.sk"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Produkty</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/products"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Kotly
                </a>
              </li>

              <li>
                <a
                  href="https://briketyruf.sk"
                  target="_blank"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Pelety
                </a>
              </li>
            </ul>
          </div>

          {/* Information
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Informácie</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  O Nás
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Prečo Pelety?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Referencie
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Servis
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <a
                    href="tel:+421903468472"
                    className="hover:text-accent transition-colors block"
                  >
                    +421 903 468 472
                  </a>
                  <span className="text-sm text-primary-foreground/60">
                    Po-Pia 8:00-17:00
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@kotlynapelety.sk"
                  className="hover:text-accent transition-colors"
                >
                  kotlynapelety@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <address className="not-italic text-primary-foreground/80">
                  Slovenská 256
                  <br />
                  05 321 Markušovce
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-sm text-primary-foreground/60">
                © {new Date().getFullYear()} KOTLY NA PELETY.SK. Všetky práva
                vyhradené.
              </p>
              <p className="text-sm text-primary-foreground/60">
                Created by{" "}
                <a
                  href="https://www.linkedin.com/in/sven-fischer-202235347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors underline"
                >
                  Sven Fischer
                </a>
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="/privacy-policy"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Ochrana údajov
              </a>

              <button
                onClick={() => setShowBanner(true)}
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
