import boiler1 from "@/assets/boiler-1.jpg";
import boiler2 from "@/assets/boiler-2.jpg";
import boiler3 from "@/assets/boiler-3.jpg";
import petite from "@/assets/petite6.png";
import futura_evo_9 from "@/assets/futura_evo_9.png";

export interface Product {
  id: number;
  name: string;
  description: string;
  power: string;
  efficiency: string;
  price: string;
  image: string;
  category: "home" | "industrial";
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
    name: "Petite ",
    description:
      "Kompaktná kachle na pelety ideálna pre malé priestory do 145 m²",
    power: "7 kW",
    efficiency: "89,8%",
    price: "1,499",
    image: petite,
    category: "home",
    isPopular: true,
    detailedDescription:
      "Táto kachle bola navrhnutá pre umiestnenie v malých priestoroch: malá veľkosť a moderný dizajn ju robia perfektnou pre akýkoľvek typ prostredia. Nerezová oceľ pokrýva kompaktnú štruktúru kachlí, ktorá sa perfektne prispôsobí akémukoľvek štýlu domácnosti a stane sa súčasťou interiérového dizajnu. Voliteľné Wi-Fi umožňuje ovládanie kachlí na diaľku.",
    features: [
      "Liata železná horáková misa",
      "Oceľová spaľovacia komora",
      "Diaľkové ovládanie",
      "Voliteľné Wi-Fi pripojenie",
      "Tichá prevádzka",
    ],
    specifications: [
      { label: "Výkon", value: "7 kW" },
      { label: "Účinnosť", value: "89,8%" },
      { label: "Kapacita zásobníka", value: "10 kg" },
      { label: "Spotreba peliet", value: "1.34 kg/h" },
      { label: "Rozmery", value: "430 x 430 x 765 mm" },
      { label: "Hmotnosť", value: "46 kg" },
      { label: "Vykurovaná plocha", value: "do 145 m²" },
      { label: "Záruka", value: "2 roky" },
    ],
  },
  {
    id: 2,
    name: "Futura Evo 9",
    description:
      "Moderná 5-hviezdičková kachle na pelety pre stredné priestory",
    power: "9 kW",
    efficiency: "95%",
    price: "2,000",
    image: futura_evo_9,
    category: "home",
    isPopular: false,
    detailedDescription:
      "Futura Evo 9 je 5-hviezdičková vzduchová kachle na pelety s dvojitými dverami, horným alebo zadným výstupom dymu. Obsahuje liatu železnú horákovú misu a oceľovú spaľovaciu komoru. Tichá prevádzka a voliteľný osobný digitálny panel.",
    features: [
      "Dvojité dvere",
      "Horný alebo zadný výstup dymu",
      "Liata železná horáková misa",
      "Oceľová spaľovacia komora",
      "Tichá prevádzka",
      "Voliteľný digitálny panel",
      "Diaľkové ovládanie na dotyk",
    ],
    specifications: [
      { label: "Výkon", value: "9 kW" },
      { label: "Účinnosť", value: "95%" },
      { label: "Kapacita zásobníka", value: "16 kg" },
      { label: "Spotreba peliet", value: "2 kg/h" },
      { label: "Rozmery", value: "500 x 500 x 900 mm" },
      { label: "Hmotnosť", value: "100 kg" },
      { label: "Vykurovaná plocha", value: "do 200 m²" },
      { label: "Záruka", value: "5 rokov" },
    ],
  },
  {
    id: 3,
    name: "Ermetica 98 Cast Round 8",
    description: "Hermetická kachle na pelety s okrúhlym liatinovým dizajnom",
    power: "8 kW",
    efficiency: "98%",
    price: "1,800",
    image: futura_evo_9,
    category: "home",
    isPopular: true,
    detailedDescription:
      "98 Cast Round spája praktickosť a funkčnosť modelu 98 Cast Iron s estetikou a dizajnom modelu 98 Redonda. Kombinuje efektivitu liatiny s moderným okrúhlym tvarom. Inovatívny koaxiálny systém umožňuje prívod vzduchu a výstup dymu súčasne.",
    features: [
      "Prirodzená konvekcia na úrovni 1",
      "Predné vetranie",
      "Horná koaxiálna rúra",
      "Liata železná horáková misa",
      "Odnímateľná rukoväť",
      "Tichá prevádzka",
      "Keramická zapaľovacia sviečka",
    ],
    specifications: [
      { label: "Výkon", value: "8 kW" },
      { label: "Účinnosť", value: "98%" },
      { label: "Kapacita zásobníka", value: "15 kg" },
      { label: "Spotreba peliet", value: "1.8 kg/h" },
      { label: "Rozmery", value: "500 x 520 x 1080 mm" },
      { label: "Hmotnosť", value: "120 kg" },
      { label: "Vykurovaná plocha", value: "do 195 m²" },
      { label: "Záruka", value: "5 rokov" },
    ],
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};
