import boiler1 from "@/assets/boiler-1.jpg";
import boiler2 from "@/assets/boiler-2.jpg";
import boiler3 from "@/assets/boiler-3.jpg";
import petite from "@/assets/petite6.png";
import futura_evo_9 from "@/assets/futura_evo_9.png";
import heroBoiler from "@/assets/hero-boiler.jpg";
import heroInterior from "@/assets/hero-interior.jpg";

export interface Product {
  product_id: number;
  name: string;
  rating: number | null;
  description: string;
  category: string;
  power_total_max_kw: number | null;
  power_total_min_kw: number | null;
  power_nominal_max_kw: number | null;
  power_nominal_min_kw: number | null;
  efficiency_max_percent: number | null;
  efficiency_min_percent: number | null;
  pellet_consumption_max_kg_h: number | null;
  pellet_consumption_min_kg_h: number | null;
  heating_volume_m3: number | null;
  exhaust_diameter_mm: number | null;
  air_inlet_diameter_mm: number | null;
  pellet_tank_capacity_kg: number | null;
  weight_kg: number | null;
  dimensions_mm_WxDxH: string | null;
  electrical_power_max_w: number | null;
  electrical_power_min_w: number | null;
  energy_class: string | null;
  price_eur: number;
  image: string;
  images?: string[];
  water_heating: boolean | null;
}

export const products: Product[] = [
  {
    product_id: 1,
    name: "Petite",
    rating: 4.5,
    description: "Kompaktná kachle na pelety ideálna pre malé priestory",
    category: "home",
    power_total_max_kw: 7,
    power_total_min_kw: 2.5,
    power_nominal_max_kw: 7,
    power_nominal_min_kw: 2.5,
    efficiency_max_percent: 89.8,
    efficiency_min_percent: 85,
    pellet_consumption_max_kg_h: 2.5,
    pellet_consumption_min_kg_h: 2,
    heating_volume_m3: 145,
    exhaust_diameter_mm: 80,
    air_inlet_diameter_mm: 50,
    pellet_tank_capacity_kg: 10,
    weight_kg: 46,
    dimensions_mm_WxDxH: "430 x 430 x 765",
    electrical_power_max_w: 350,
    electrical_power_min_w: 50,
    energy_class: "A+",
    price_eur: 1499,
    image: petite,
    images: [petite, boiler1, boiler2, heroInterior],
    water_heating: false,
  },
  {
    product_id: 2,
    name: "Futura Evo 9",
    rating: 4.8,
    description:
      "Moderná 5-hviezdičková kachle na pelety pre stredné priestory",
    category: "home",
    power_total_max_kw: 9,
    power_total_min_kw: 3,
    power_nominal_max_kw: 9,
    power_nominal_min_kw: 3,
    efficiency_max_percent: 95,
    efficiency_min_percent: 90,
    pellet_consumption_max_kg_h: 2,
    pellet_consumption_min_kg_h: 0.7,
    heating_volume_m3: 200,
    exhaust_diameter_mm: 80,
    air_inlet_diameter_mm: 50,
    pellet_tank_capacity_kg: 16,
    weight_kg: 100,
    dimensions_mm_WxDxH: "500 x 500 x 900",
    electrical_power_max_w: 400,
    electrical_power_min_w: 60,
    energy_class: "A++",
    price_eur: 2000,
    image: futura_evo_9,
    images: [futura_evo_9, boiler3, heroBoiler, boiler2],
    water_heating: false,
  },
  {
    product_id: 3,
    name: "Ermetica 98 Cast Round 8",
    rating: 4.9,
    description: "Hermetická kachle na pelety s okrúhlym liatinovým dizajnom",
    category: "home",
    power_total_max_kw: 8,
    power_total_min_kw: 2.8,
    power_nominal_max_kw: 8,
    power_nominal_min_kw: 2.8,
    efficiency_max_percent: 98,
    efficiency_min_percent: 93,
    pellet_consumption_max_kg_h: 1.8,
    pellet_consumption_min_kg_h: 0.65,
    heating_volume_m3: 195,
    exhaust_diameter_mm: 80,
    air_inlet_diameter_mm: 60,
    pellet_tank_capacity_kg: 15,
    weight_kg: 120,
    dimensions_mm_WxDxH: "500 x 520 x 1080",
    electrical_power_max_w: 380,
    electrical_power_min_w: 55,
    energy_class: "A+++",
    price_eur: 1800,
    image: futura_evo_9,
    images: [futura_evo_9, heroInterior, boiler1, heroBoiler],
    water_heating: false,
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.product_id === id);
};
