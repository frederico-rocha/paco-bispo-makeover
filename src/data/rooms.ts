import loft1Asset from "@/assets/loft-1.jpg.asset.json";
const loftHero = loft1Asset.url;
const loftGallery = [loft1Asset.url];
import penthouse0534Asset from "@/assets/penthouse-053-4.jpg.asset.json";
import penthouse061Asset from "@/assets/penthouse-061.jpg.asset.json";
import penthouse065Asset from "@/assets/penthouse-065.jpg.asset.json";
import penthouse071Asset from "@/assets/penthouse-071.jpg.asset.json";
import penthouse062Asset from "@/assets/penthouse-062.jpg.asset.json";
import penthouse057Asset from "@/assets/penthouse-057.jpg.asset.json";
const penthouseHero = penthouse0534Asset.url;
const penthouseGallery = [
  penthouse061Asset.url,
  penthouse065Asset.url,
  penthouse071Asset.url,
  penthouse062Asset.url,
  penthouse057Asset.url,
];
import standard0262Asset from "@/assets/standard-026-2.jpg.asset.json";
import standard0272Asset from "@/assets/standard-027-2.jpg.asset.json";
import standard0302Asset from "@/assets/standard-030-2.jpg.asset.json";
import standard0312Asset from "@/assets/standard-031-2.jpg.asset.json";
const standardHero = standard0272Asset.url;
const standardGallery = [
  standard0262Asset.url,
  standard0302Asset.url,
  standard0312Asset.url,
];
import superior0322Asset from "@/assets/superior-032-2.jpg.asset.json";
import superior0342Asset from "@/assets/superior-034-2.jpg.asset.json";
import superior0372Asset from "@/assets/superior-037-2.jpg.asset.json";
import superior069Asset from "@/assets/superior-069.jpg.asset.json";
import superior072Asset from "@/assets/superior-072.jpg.asset.json";
import superior075Asset from "@/assets/superior-075.jpg.asset.json";
import superior079Asset from "@/assets/superior-079.jpg.asset.json";
import superior046Asset from "@/assets/superior-046.jpg.asset.json";
import superior052Asset from "@/assets/superior-052.jpg.asset.json";
import superior039Asset from "@/assets/superior-039.jpg.asset.json";
import superior121Asset from "@/assets/superior-121.jpg.asset.json";
import superior043Asset from "@/assets/superior-043.jpg.asset.json";
import superior044Asset from "@/assets/superior-044.jpg.asset.json";
const superiorHero = superior039Asset.url;
const superiorGallery = [
  superior039Asset.url,
  superior0322Asset.url,
  superior0342Asset.url,
  superior0372Asset.url,
  superior069Asset.url,
  superior072Asset.url,
  superior075Asset.url,
  superior079Asset.url,
  superior046Asset.url,
  superior052Asset.url,
  superior121Asset.url,
  superior043Asset.url,
  superior044Asset.url,
];
import deluxe1Asset from "@/assets/deluxe-102_1.jpg.asset.json";
import deluxeWc1Asset from "@/assets/deluxe-102_wc1.jpg.asset.json";
import deluxe017Asset from "@/assets/deluxe-017.jpg.asset.json";
import deluxe019Asset from "@/assets/deluxe-019-2.jpg.asset.json";
import deluxe023Asset from "@/assets/deluxe-023.jpg.asset.json";
import deluxe024Asset from "@/assets/deluxe-024.jpg.asset.json";
import deluxe084Asset from "@/assets/deluxe-084.jpg.asset.json";
import deluxe125Asset from "@/assets/deluxe-125.jpg.asset.json";
const deluxeHero = deluxe1Asset.url;
const deluxeGallery = [
  deluxe1Asset.url,
  deluxe017Asset.url,
  deluxe019Asset.url,
  deluxeWc1Asset.url,
  deluxe023Asset.url,
  deluxe024Asset.url,
  deluxe125Asset.url,
  deluxe084Asset.url,
];

export type Room = {
  slug: string;
  name: string;
  count: string;
  short: string;
  hero: string;
  gallery: string[];
  guests: string;
  bed: string;
  description: string[];
  amenities: string[];
};

const commonAmenities = [
  "Wi-Fi de alta velocidade",
  "Ar condicionado",
  "Pavimento radiante na casa de banho",
  "Amenities de banho",
  "Roupão de banho turco",
  "Cofre",
  "Mini-bar",
  "Chaleira",
];

export const rooms: Room[] = [
  {
    slug: "standard",
    name: "Standard",
    count: "Ponto de partida",
    short: "Um refúgio simples e acolhedor, ideal para estadias curtas.",
    hero: standardHero,
    gallery: standardGallery,
    guests: "2 hóspedes",
    bed: "Cama king-size",
    description: [
      "O quarto Standard é o ponto de partida da casa: espaço acolhedor, luz natural e um enquadramento sereno sobre o pátio interior.",
      "Um refúgio simples e acolhedor, ideal para estadias curtas em Sintra.",
    ],
    amenities: commonAmenities,
  },
  {
    slug: "deluxe",
    name: "Deluxe",
    count: "Um passo a cima",
    short:
      "Um espaço tranquilo e confortável, pensado para proporcionar uma estadia agradável e especial.",
    hero: deluxeHero,
    gallery: deluxeGallery,
    guests: "2 hóspedes",
    bed: "Cama king-size",
    description: [
      "Um espaço tranquilo e confortável, pensado para proporcionar uma estadia agradável e especial.",
      "Restauradas a partir das alas originais do palacete setecentista, as suítes Deluxe conservam tectos altos, soalhos largos em pinho e detalhes em azulejo do século XVIII.",
    ],
    amenities: commonAmenities,
  },
  {
    slug: "superior",
    name: "Superior",
    count: "Uma experiência Superior",
    short: "Mais espaço, mais conforto, uma experiência Superior.",
    hero: superiorHero,
    gallery: superiorGallery,
    guests: "2 hóspedes",
    bed: "Cama king-size",
    description: [
      "Um passo acima do Standard, o quarto Superior oferece mais área, uma zona de estar e vista sobre o jardim.",
      "Mais espaço, mais conforto — uma experiência Superior, sem renunciar à discrição da casa.",
    ],
    amenities: commonAmenities,
  },
  {
    slug: "penthouse",
    name: "Penthouse",
    count: "O ponto mais alto da casa",
    short:
      "Suite familiar equipada com kitchenette, sala de estar e banheira de hidromassagem.",
    hero: penthouseHero,
    gallery: penthouseGallery,
    guests: "2–4 hóspedes",
    bed: "Cama king + sofá-cama",
    description: [
      "A penthouse ocupa todo o último piso da torre original. Suite familiar equipada com kitchenette, sala de estar e banheira de hidromassagem.",
      "Pensada para ocasiões raras — um aniversário, uma lua-de-mel, uma escapadinha em família com a paisagem como única companhia.",
    ],
    amenities: commonAmenities,
  },
  {
    slug: "loft",
    name: "Loft",
    count: "Estúdio acolhedor",
    short:
      "Um ambiente amplo e descontraído, que combina conforto e personalidade para uma estadia diferente.",
    hero: loftHero,
    gallery: loftGallery,
    guests: "2 hóspedes",
    bed: "Cama queen-size",
    description: [
      "Um ambiente amplo e descontraído, que combina conforto e personalidade para uma estadia diferente.",
      "O Loft é o espaço mais informal da casa — perfeito para quem procura liberdade e carácter em Sintra.",
    ],
    amenities: commonAmenities,
  },
];

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);
