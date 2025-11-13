import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    // Add FAQ structured data for SEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Aké sú výhody kotlov na pelety oproti tradičným kotlom?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kotly na pelety ponúkajú až 50% úsporu nákladov na vykurovanie, sú ekologickejšie s minimálnymi emisiami CO2, automaticky sa regulujú a vyžadují minimálnu údržbu. Pelety sú obnoviteľný zdroj energie a ich cena je stabilnejšia ako pri fosílnych palivách.",
          },
        },
        {
          "@type": "Question",
          name: "Koľko stojí inštalácia kotla na pelety?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cena kompletnej inštalácie kotla na pelety závisí od výkonu kotla, typu inštalácie a dodatočných komponentov. Celková investícia sa zvyčajne vráti za 5-7 rokov vďaka úsporám na prevádzkových nákladoch.",
          },
        },
        {
          "@type": "Question",
          name: "Ako často je potrebná údržba kotla na pelety?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Základná údržba zahŕňa vyprázdnenie popola raz týždenne počas vykurovacej sezóny a pravidelné čistenie výmenníka tepla. Profesionálny servis odporúčame raz ročne pred začiatkom vykurovacej sezóny. Moderné kotly majú samoočisťujúce systémy, čo minimalizuje potrebu údržby.",
          },
        },
        {
          "@type": "Question",
          name: "Aká je spotreba peliet a ich cena?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Priemerná spotreba je 1-2 kg peliet na hodinu v závislosti od výkonu kotla. Pre rodinný dom s rozlohou 150 m² potrebujete približne 3-5 ton peliet ročne. Cena peliet sa pohybuje okolo 250-300 EUR za tonu, čo je výrazne lacnejšie ako elektrické vykurovanie alebo zemný plyn.",
          },
        },
        {
          "@type": "Question",
          name: "Potrebujem povolenie na inštaláciu kotla na pelety?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Inštalácia kotla na pelety vyžaduje ohlásenie stavebným úradom a pravidelné kontroly komínom. Náš tím vám pomôže so všetkou potrebnou dokumentáciou a zabezpečíme kompletný servis vrátane kolaudácie a uvedenia do prevádzky.",
          },
        },
        {
          "@type": "Question",
          name: "Môžem kotol na pelety pripojiť k existujúcemu vykurovaciemu systému?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Áno, kotly na pelety možno pripojiť k existujúcim radiátorovým alebo podlahovým vykurovacím systémom. Môžu fungovať aj v kombinácii s iným zdrojom tepla (hybridný systém) alebo s bojlerom na prípravu teplej úžitkovej vody.",
          },
        },
        {
          "@type": "Question",
          name: "Aká je životnosť kotla na pelety?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pri správnej údržbe má kvalitný kotol na pelety životnosť 15-20 rokov. Moderné kotly sú vyrobené z vysoko kvalitných materiálov odolných voči korózii a vysokým teplotám. Všetky naše kotly sú certifikované a majú záručnú a pozáručnú podporu.",
          },
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const faqs = [
    {
      question: "Aké sú výhody kotlov na pelety oproti tradičným kotlom?",
      answer:
        "Kotly na pelety ponúkajú až 50% úsporu nákladov na vykurovanie, sú ekologickejšie s minimálnymi emisiami CO2, automaticky sa regulujú a vyžadují minimálnu údržbu. Pelety sú obnoviteľný zdroj energie a ich cena je stabilnejšia ako pri fosílnych palivách.",
    },
    {
      question: "Koľko stojí inštalácia kotla na pelety?",
      answer:
        "Cena kompletnej inštalácie kotla na pelety závisí od výkonu kotla, typu inštalácie a dodatočných komponentov. Celková investícia sa zvyčajne vráti za 5-7 rokov vďaka úsporám na prevádzkových nákladoch.",
    },
    {
      question: "Ako často je potrebná údržba kotla na pelety?",
      answer:
        "Základná údržba zahŕňa vyprázdnenie popola raz týždenne počas vykurovacej sezóny a pravidelné čistenie výmenníka tepla. Profesionálny servis odporúčame raz ročne pred začiatkom vykurovacej sezóny. Moderné kotly majú samoočisťujúce systémy, čo minimalizuje potrebu údržby.",
    },
    {
      question: "Aká je spotreba peliet a ich cena?",
      answer:
        "Priemerná spotreba je 1-2 kg peliet na hodinu v závislosti od výkonu kotla. Pre rodinný dom s rozlohou 150 m² potrebujete približne 3-5 ton peliet ročne. Cena peliet sa pohybuje okolo 250-300 EUR za tonu, čo je výrazne lacnejšie ako elektrické vykurovanie alebo zemný plyn.",
    },
    {
      question: "Potrebujem povolenie na inštaláciu kotla na pelety?",
      answer:
        "Inštalácia kotla na pelety vyžaduje ohlásenie stavebným úradom a pravidelné kontroly komínom. Náš tím vám pomôže so všetkou potrebnou dokumentáciou a zabezpečíme kompletný servis vrátane kolaudácie a uvedenia do prevádzky.",
    },
    {
      question:
        "Môžem kotol na pelety pripojiť k existujúcemu vykurovaciemu systému?",
      answer:
        "Áno, kotly na pelety možno pripojiť k existujúcim radiátorovým alebo podlahovým vykurovacím systémom. Môžu fungovať aj v kombinácii s iným zdrojom tepla (hybridný systém) alebo s bojlerom na prípravu teplej úžitkovej vody.",
    },
    {
      question: "Aká je životnosť kotla na pelety?",
      answer:
        "Pri správnej údržbe má kvalitný kotol na pelety životnosť 15-20 rokov. Moderne kotly sú vyrobené z vysoko kvalitných materiálov odolných voči korózii a vysokým teplotám. Všetky naše kotly sú certifikované a majú záručnú a pozáručnú podporu.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4 text-foreground text-center">
            Často Kladené Otázky
          </h2>
          <p className="text-lg lg:text-xl text-textSecondary mb-12 text-center">
            Všetko, čo potrebujete vedieť o kotloch na pelety
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-textPrimary text-base lg:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-textSecondary text-sm lg:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
