import studioAsset from "@/assets/room-studio.jpg.asset.json";
const studio = studioAsset.url;
import penthouse053Asset from "@/assets/penthouse-053-2.jpg.asset.json";
import penthouse0534Asset from "@/assets/penthouse-053-4.jpg.asset.json";
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
import penthouse0533Asset from "@/assets/penthouse-053-3.jpg.asset.json";
import penthouse0543Asset from "@/assets/penthouse-054-3.jpg.asset.json";
import penthouse0552Asset from "@/assets/penthouse-055-2.jpg.asset.json";
import penthouse0564Asset from "@/assets/penthouse-056-4.jpg.asset.json";
import penthouse0572Asset from "@/assets/penthouse-057-2.jpg.asset.json";
import penthouse0582Asset from "@/assets/penthouse-058-2.jpg.asset.json";
import penthouse0592Asset from "@/assets/penthouse-059-2.jpg.asset.json";
import penthouse0602Asset from "@/assets/penthouse-060-2.jpg.asset.json";
import penthouse0612Asset from "@/assets/penthouse-061-2.jpg.asset.json";
import penthouse0622Asset from "@/assets/penthouse-062-2.jpg.asset.json";
import penthouse0633Asset from "@/assets/penthouse-063-3.jpg.asset.json";
import penthouse0643Asset from "@/assets/penthouse-064-3.jpg.asset.json";
import penthouse0653Asset from "@/assets/penthouse-065-3.jpg.asset.json";
import penthouse0712Asset from "@/assets/penthouse-071-2.jpg.asset.json";
const penthouseHero = penthouse0534Asset.url;
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
  penthouse0533Asset.url,
  penthouse0543Asset.url,
  penthouse0552Asset.url,
  penthouse0564Asset.url,
  penthouse0572Asset.url,
  penthouse0582Asset.url,
  penthouse0592Asset.url,
  penthouse0602Asset.url,
  penthouse0612Asset.url,
  penthouse0622Asset.url,
  penthouse0633Asset.url,
  penthouse0643Asset.url,
  penthouse0653Asset.url,
  penthouse0712Asset.url,
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
    hero: studio,
    gallery: [studio],
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
