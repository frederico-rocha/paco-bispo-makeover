import studioAsset from "@/assets/room-studio.jpg.asset.json";
const studio = studioAsset.url;
import penthouse053Asset from "@/assets/penthouse-053-2.jpg.asset.json";
import penthouse054Asset from "@/assets/penthouse-054-2.jpg.asset.json";
import penthouse055Asset from "@/assets/penthouse-055.jpg.asset.json";
import penthouse056Asset from "@/assets/penthouse-056-3.jpg.asset.json";
import penthouse057Asset from "@/assets/penthouse-057.jpg.asset.json";
import penthouse058Asset from "@/assets/penthouse-058.jpg.asset.json";
import penthouse059Asset from "@/assets/penthouse-059.jpg.asset.json";
import penthouse060Asset from "@/assets/penthouse-060.jpg.asset.json";
import penthouse061Asset from "@/assets/penthouse-061.jpg.asset.json";
import penthouse062Asset from "@/assets/penthouse-062.jpg.asset.json";
import penthouse063Asset from "@/assets/penthouse-063.jpg.asset.json";
import penthouse064Asset from "@/assets/penthouse-064.jpg.asset.json";
import penthouse065Asset from "@/assets/penthouse-065.jpg.asset.json";
import penthouse071Asset from "@/assets/penthouse-071.jpg.asset.json";
const penthouseHero = penthouse054Asset.url;
const penthouseGallery = [
  penthouse054Asset.url,
  penthouse061Asset.url,
  penthouse053Asset.url,
  penthouse055Asset.url,
  penthouse056Asset.url,
  penthouse059Asset.url,
  penthouse060Asset.url,
  penthouse065Asset.url,
  penthouse063Asset.url,
  penthouse064Asset.url,
  penthouse071Asset.url,
  penthouse062Asset.url,
  penthouse057Asset.url,
  penthouse058Asset.url,
];
import standard120Asset from "@/assets/standard-120.jpg.asset.json";
import standard026Asset from "@/assets/standard-026.jpg.asset.json";
import standard027Asset from "@/assets/standard-027.jpg.asset.json";
import standard028Asset from "@/assets/standard-028.jpg.asset.json";
import standard029Asset from "@/assets/standard-029.jpg.asset.json";
import standard030Asset from "@/assets/standard-030.jpg.asset.json";
import standard031Asset from "@/assets/standard-031.jpg.asset.json";
const standardHero = standard120Asset.url;
const standardGallery = [
  standard120Asset.url,
  standard027Asset.url,
  standard026Asset.url,
  standard028Asset.url,
  standard029Asset.url,
  standard031Asset.url,
  standard030Asset.url,
];
import superior032Asset from "@/assets/superior-032.jpg.asset.json";
import superior033Asset from "@/assets/superior-033.jpg.asset.json";
import superior034Asset from "@/assets/superior-034.jpg.asset.json";
import superior035Asset from "@/assets/superior-035.jpg.asset.json";
import superior036Asset from "@/assets/superior-036.jpg.asset.json";
import superior037Asset from "@/assets/superior-037.jpg.asset.json";
import superior038Asset from "@/assets/superior-038.jpg.asset.json";
const superiorHero = superior032Asset.url;
const superiorGallery = [
  superior032Asset.url,
  superior036Asset.url,
  superior033Asset.url,
  superior035Asset.url,
  superior034Asset.url,
  superior037Asset.url,
  superior038Asset.url,
];
import deluxe1Asset from "@/assets/deluxe-102_1.jpg.asset.json";
import deluxe2Asset from "@/assets/deluxe-102_2.jpg.asset.json";
import deluxe3Asset from "@/assets/deluxe-102_3.jpg.asset.json";
import deluxe118Asset from "@/assets/deluxe-118.jpg.asset.json";
import deluxeWc1Asset from "@/assets/deluxe-102_wc1.jpg.asset.json";
import deluxeWc2Asset from "@/assets/deluxe-102_wc2.jpg.asset.json";
import deluxeWc3Asset from "@/assets/deluxe-102_wc3.jpg.asset.json";
import deluxe017Asset from "@/assets/deluxe-017.jpg.asset.json";
import deluxe018Asset from "@/assets/deluxe-018.jpg.asset.json";
import deluxe019Asset from "@/assets/deluxe-019-2.jpg.asset.json";
import deluxe020Asset from "@/assets/deluxe-020.jpg.asset.json";
import deluxe021Asset from "@/assets/deluxe-021.jpg.asset.json";
import deluxe022Asset from "@/assets/deluxe-022.jpg.asset.json";
import deluxe023Asset from "@/assets/deluxe-023.jpg.asset.json";
import deluxe024Asset from "@/assets/deluxe-024.jpg.asset.json";
import deluxe025Asset from "@/assets/deluxe-025.jpg.asset.json";
import deluxe119Asset from "@/assets/deluxe-119.jpg.asset.json";
const deluxeHero = deluxe1Asset.url;
const deluxeGallery = [
  deluxe1Asset.url,
  deluxe2Asset.url,
  deluxe118Asset.url,
  deluxe3Asset.url,
  deluxe017Asset.url,
  deluxe018Asset.url,
  deluxe020Asset.url,
  deluxe021Asset.url,
  deluxe022Asset.url,
  deluxe119Asset.url,
  deluxe019Asset.url,
  deluxeWc1Asset.url,
  deluxeWc2Asset.url,
  deluxeWc3Asset.url,
  deluxe023Asset.url,
  deluxe024Asset.url,
  deluxe025Asset.url,
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
  view: string;
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
    bed: "Cama queen-size",
    view: "Pátio interior",
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
    view: "Jardim ou pátio",
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
    view: "Jardim",
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
    view: "Panorâmica sobre a serra",
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
    hero: studio,
    gallery: [studio],
    guests: "2 hóspedes",
    bed: "Cama queen-size",
    view: "Jardim",
    description: [
      "Um ambiente amplo e descontraído, que combina conforto e personalidade para uma estadia diferente.",
      "O Loft é o espaço mais informal da casa — perfeito para quem procura liberdade e carácter em Sintra.",
    ],
    amenities: commonAmenities,
  },
];

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);
