import boiler1 from '@/assets/boiler-1.jpg';
import boiler2 from '@/assets/boiler-2.jpg';
import boiler3 from '@/assets/boiler-3.jpg';

export interface Product {
  id: number;
  name: string;
  description: string;
  power: string;
  efficiency: string;
  price: string;
  image: string;
  category: 'home' | 'industrial';
  isPopular?: boolean;
  detailedDescription: string;
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "EcoHeat Pro 25",
    description: "Kompaktný kotol ideálny pre rodinné domy do 200m²",
    power: "25 kW",
    efficiency: "95%",
    price: "3,499",
    image: boiler1,
    category: "home",
    isPopular: true,
    detailedDescription: "EcoHeat Pro 25 je moderný a kompaktný kotol navrhnutý pre efektívne vykurovanie rodinných domov. Vďaka pokročilej technológii spaľovania dosahuje účinnosť až 95%, čo znamená významné úspory na prevádzkových nákladoch. Intuitívny ovládací panel umožňuje jednoduché nastavenie a monitorovanie prevádzky.",
    features: [
      "Automatické čistenie horákoveho priestoru",
      "Inteligentné riadenie prívodu vzduchu",
      "Tichá prevádzka",
      "Nízka spotreba elektriny",
      "Jednoduchá údržba",
      "Wi-Fi pripojenie a mobilná aplikácia"
    ],
    specifications: [
      { label: "Výkon", value: "25 kW" },
      { label: "Účinnosť", value: "95%" },
      { label: "Kapacita zásobníka", value: "150 kg" },
      { label: "Spotreba peliet", value: "5.5 kg/h" },
      { label: "Rozmery", value: "950 x 550 x 850 mm" },
      { label: "Hmotnosť", value: "185 kg" },
      { label: "Vykurovaná plocha", value: "do 200 m²" },
      { label: "Záruka", value: "5 rokov" }
    ]
  },
  {
    id: 2,
    name: "PowerMax Industrial 100",
    description: "Výkonný systém pre veľké objekty a priemyselné priestory",
    power: "100 kW",
    efficiency: "94%",
    price: "12,999",
    image: boiler2,
    category: "industrial",
    detailedDescription: "PowerMax Industrial 100 je vysoko výkonný kotol určený pre vykurovanie veľkých objektov, priemyselných hál a bytových komplexov. Robustná konštrukcia a kvalitné komponenty zaručujú dlhú životnosť a bezproblémovú prevádzku aj pri náročných prevádzkových podmienkach.",
    features: [
      "Vysoká spoľahlivosť a životnosť",
      "Možnosť pripojenia viacerých zásobníkov",
      "Vzdialené monitorovanie a diagnostika",
      "Automatické čistenie",
      "Nízke emisie",
      "Možnosť kaskádového zapojenia"
    ],
    specifications: [
      { label: "Výkon", value: "100 kW" },
      { label: "Účinnosť", value: "94%" },
      { label: "Kapacita zásobníka", value: "500 kg" },
      { label: "Spotreba peliet", value: "22 kg/h" },
      { label: "Rozmery", value: "1850 x 950 x 1450 mm" },
      { label: "Hmotnosť", value: "680 kg" },
      { label: "Vykurovaná plocha", value: "do 900 m²" },
      { label: "Záruka", value: "3 roky" }
    ]
  },
  {
    id: 3,
    name: "SmartBurn Eco 15",
    description: "Inteligentné riadenie pre maximálnu efektivitu a úsporu",
    power: "15 kW",
    efficiency: "96%",
    price: "2,899",
    image: boiler3,
    category: "home",
    detailedDescription: "SmartBurn Eco 15 je najefektívnejší kotol v našej ponuke s účinnosťou až 96%. Inteligentný systém riadenia automaticky optimalizuje proces spaľovania podľa aktuálnych potrieb, čím minimalizuje spotrebu peliet a maximalizuje úspory. Ideálny pre menšie domy a moderne izolované budovy.",
    features: [
      "Najvyššia účinnosť v triede",
      "Adaptívne riadenie spaľovania",
      "Ekologická prevádzka",
      "Hlasové ovládanie",
      "Prediktívne údržba",
      "Integrácia s smart home systémami"
    ],
    specifications: [
      { label: "Výkon", value: "15 kW" },
      { label: "Účinnosť", value: "96%" },
      { label: "Kapacita zásobníka", value: "100 kg" },
      { label: "Spotreba peliet", value: "3.3 kg/h" },
      { label: "Rozmery", value: "850 x 500 x 750 mm" },
      { label: "Hmotnosť", value: "145 kg" },
      { label: "Vykurovaná plocha", value: "do 150 m²" },
      { label: "Záruka", value: "5 rokov" }
    ]
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};
