import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, List } from "lucide-react";
import { getAllProducts } from "../storefrontApi";
import { CatalogClient } from "../components/CatalogClient";

// Mock data per i prodotti
const products = [
  {
    id: 1,
    name: "Gelato Pistacchio Siciliano",
    description:
      "Cremoso gelato al pistacchio con pistacchi siciliani DOP, dal sapore intenso e autentico.",
    price: 4.5,
    image: "🍧",
    category: "Classici",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 2,
    name: "Stracciatella Artigianale",
    description:
      "La classica stracciatella con scaglie di cioccolato fondente belga finemente distribuite.",
    price: 4.2,
    image: "🍨",
    category: "Classici",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 3,
    name: "Nocciola Piemonte IGP",
    description:
      "Gelato cremoso alle nocciole piemontesi IGP, tostate e macinate al momento.",
    price: 4.8,
    image: "🌰",
    category: "Premium",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 4,
    name: "Fragola Bio",
    description:
      "Fresco gelato alla fragola con fragole biologiche italiane, senza coloranti artificiali.",
    price: 4.0,
    image: "🍓",
    category: "Frutta",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 5,
    name: "Cioccolato Fondente 70%",
    description:
      "Intenso gelato al cioccolato fondente con cacao ecuadoriano al 70%, per i veri intenditori.",
    price: 5.2,
    image: "🍫",
    category: "Premium",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 6,
    name: "Limone Sfusato Amalfitano",
    description:
      "Sorbetto al limone con limoni sfusati della costiera amalfitana, rinfrescante e naturale.",
    price: 3.8,
    image: "🍋",
    category: "Sorbetti",
    rating: 4.6,
    inStock: false,
  },
  {
    id: 7,
    name: "Vaniglia Bourbon",
    description:
      "Cremoso gelato alla vaniglia con baccelli di vaniglia bourbon del Madagascar.",
    price: 4.3,
    image: "🌟",
    category: "Classici",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 8,
    name: "Menta e Cioccolato",
    description:
      "Fresco gelato alla menta con scaglie di cioccolato fondente, perfetto per l'estate.",
    price: 4.4,
    image: "🌿",
    category: "Speciali",
    rating: 4.4,
    inStock: true,
  },
];

const categories = [
  "Tutti",
  "Classici",
  "Premium",
  "Frutta",
  "Sorbetti",
  "Speciali",
];

const Catalog = async () => {
  const response = await getAllProducts();
  return <CatalogClient response={response} />;
};

export default Catalog;
