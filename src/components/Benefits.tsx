import {
  Leaf,
  TrendingDown,
  Zap,
  Shield,
  Clock,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Ekologické",
    description:
      "CO₂ neutrálne vykurovanie z obnoviteľných zdrojov. Prispejte k ochrane životného prostredia.",
    color: "text-primary",
  },
  {
    icon: TrendingDown,
    title: "Úspora",
    description:
      "Ušetrite až 50% na nákladoch oproti tradičným palivám. Nízke prevádzkové náklady.",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "Vysoká Účinnosť",
    description:
      "Až 96% účinnosť spaľovania znamená minimálne straty a maximálny výkon.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Spoľahlivosť",
    description:
      "Prémiová kvalita komponentov garantuje dlhú životnosť a bezproblémovú prevádzku.",
    color: "text-accent",
  },
  {
    icon: Clock,
    title: "Automatizácia",
    description:
      "Inteligentné riadenie a automatické dávkovanie peliet pre váš komfort.",
    color: "text-primary",
  },
  {
    icon: Headphones,
    title: "Podpora",
    description:
      "Odborná pomoc pri výbere, inštalácii aj servisnej podpore kedykoľvek potrebujete.",
    color: "text-accent",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
            Prečo si vybrať
            <span className="block mt-2">Kotly na Pelety?</span>
          </h2>
          <p className="text-lg text-textPrimary leading-relaxed">
            Moderné, efektívne a ekologické vykurovanie, ktoré šetrí vašu
            peňaženku aj životné prostredie.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-card hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="inline-flex w-16 h-16 rounded-xl bg-gradient-primary items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold mb-3 text-textPrimary">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-textSecondary">
                  {benefit.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-accent opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-subtle rounded-3xl p-12 shadow-soft animate-fade-in">
          <h3 className="text-3xl font-display font-bold mb-4 text-foreground">
            Máte otázky?
          </h3>
          <p className="text-lg text-textPrimary mb-8 max-w-2xl mx-auto">
            Naši odborníci vám radi pomôžu vybrať správny kotol pre váš domov a
            vypočítať vašu potenciálnu úsporu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+421903468472"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity btn-premium shadow-medium"
            >
              <Headphones className="mr-2 w-5 h-5" />
              +421 903 468 472
            </a>
            <a
              href="mailto:info@kotlynapelety.sk"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary-dark transition-colors btn-premium"
            >
              kotlynapelety@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
