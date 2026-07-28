import suiteAsset from "@/assets/room-suite.jpg.asset.json";
const suite = suiteAsset.url;
import studioAsset from "@/assets/room-studio.jpg.asset.json";
const studio = studioAsset.url;
import penthouseAsset from "@/assets/room-penthouse.jpg.asset.json";
const penthouse = penthouseAsset.url;
import houseDetailAsset from "@/assets/house-detail.jpg.asset.json";
const houseDetail = houseDetailAsset.url;
import poolAsset from "@/assets/pool.jpg.asset.json";
const pool = poolAsset.url;
import chapelAsset from "@/assets/chapel-lounge.jpg.asset.json";
const chapel = chapelAsset.url;
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

export type Room = {
  slug: string;
  name: string;
  count: string;
  short: string;
  hero: string;
  gallery: string[];
  size: string;
  guests: string;
  bed: string;
  view: string;
  description: string[];
  amenities: string[];
};

export const rooms: Room[] = [
  {
    slug: "standard",
    name: "Standard",
    count: "Tipologia base",
    short:
      "Um quarto sereno e luminoso, com o essencial cuidado ao detalhe da casa.",
    hero: standardHero,
    gallery: standardGallery,
    size: "22–26 m²",
    guests: "2 hóspedes",
    bed: "Cama queen-size",
    view: "Pátio interior",
    description: [
      "O quarto Standard é o ponto de partida da casa: espaço acolhedor, luz natural e um enquadramento sereno sobre o pátio interior.",
      "Um refúgio simples e sofisticado, ideal para estadias curtas em Sintra.",
    ],
    amenities: [
      "Linho 400 fios",
      "Casa de banho privativa",
      "Produtos de banho artesanais",
      "Wi-Fi de alta velocidade",
      "Pequeno-almoço incluído",
      "Climatização individual",
    ],
  },
  {
    slug: "superior",
    name: "Superior",
    count: "Mais espaço",
    short:
      "Área generosa e detalhes originais do palacete, num ambiente calmo e contemporâneo.",
    hero: houseDetail,
    gallery: [houseDetail, suite, pool],
    size: "28–32 m²",
    guests: "2 hóspedes",
    bed: "Cama king-size",
    view: "Jardim",
    description: [
      "Um passo acima do Standard, o quarto Superior oferece mais área, uma zona de estar e vista sobre o jardim.",
      "Ideal para quem procura conforto extra sem renunciar à discrição da casa.",
    ],
    amenities: [
      "Zona de estar",
      "Linho 400 fios",
      "Casa de banho privativa",
      "Produtos de banho artesanais",
      "Wi-Fi de alta velocidade",
      "Pequeno-almoço incluído",
    ],
  },
  {
    slug: "deluxe",
    name: "Deluxe",
    count: "Suíte com carácter",
    short:
      "Tectos altos, azulejos seculares e linhos imaculados — um capítulo original da casa.",
    hero: suite,
    gallery: [suite, chapel, houseDetail],
    size: "32–38 m²",
    guests: "2 hóspedes",
    bed: "Cama king-size",
    view: "Jardim ou pátio",
    description: [
      "Restauradas a partir das alas originais do palacete setecentista, as suítes Deluxe conservam tectos altos, soalhos largos em pinho e detalhes em azulejo do século XVIII.",
      "Mobiliário antigo, peças contemporâneas, têxteis em linho português e iluminação suave — uma encenação discreta para o silêncio da serra.",
    ],
    amenities: [
      "Linho 400 fios",
      "Casa de banho privativa em mármore",
      "Produtos de banho artesanais",
      "Wi-Fi de alta velocidade",
      "Pequeno-almoço incluído",
      "Climatização individual",
    ],
  },
  {
    slug: "penthouse",
    name: "Penthouse",
    count: "Terraço privado",
    short:
      "O ponto mais alto da casa. Vista panorâmica sobre Sintra, terraço só seu.",
    hero: penthouse,
    gallery: [penthouse, chapel, pool],
    size: "62 m² + 24 m² terraço",
    guests: "2–3 hóspedes",
    bed: "Cama king + sofá-cama",
    view: "Panorâmica sobre a serra",
    description: [
      "A penthouse ocupa todo o último piso da torre original. Quarto, sala, casa de banho em mármore e um terraço privado a 360º sobre a serra de Sintra e o vale.",
      "Pensada para ocasiões raras — um aniversário, uma lua-de-mel, uma fuga de fim-de-semana com a paisagem como única companhia.",
    ],
    amenities: [
      "Terraço privado 24 m²",
      "Banheira com vista",
      "Sala separada",
      "Bar privado",
      "Welcome amenities premium",
      "Late check-out garantido",
    ],
  },
];

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);
