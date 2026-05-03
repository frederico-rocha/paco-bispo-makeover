import suite from "@/assets/room-suite.jpg";
import studio from "@/assets/room-studio.jpg";
import penthouse from "@/assets/room-penthouse.jpg";
import houseDetail from "@/assets/house-detail.jpg";
import pool from "@/assets/pool.jpg";
import chapel from "@/assets/chapel-lounge.jpg";

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
    slug: "suites-de-luxo",
    name: "Quartos de Luxo",
    count: "Nove suítes",
    short:
      "Tectos altos, azulejos seculares e linhos imaculados — cada quarto é um capítulo da casa.",
    hero: suite,
    gallery: [suite, houseDetail, chapel],
    size: "32–38 m²",
    guests: "2 hóspedes",
    bed: "Cama king-size",
    view: "Jardim ou pátio",
    description: [
      "Cada uma das nove suítes do Paço do Bispo é única. Restauradas a partir das alas originais do palacete setecentista, conservam tectos altos, soalhos largos em pinho e detalhes em azulejo do século XVIII.",
      "Os interiores cruzam mobiliário antigo com peças contemporâneas, têxteis em linho português e iluminação suave — uma encenação discreta para o silêncio da serra.",
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
    slug: "estudio",
    name: "Estúdio",
    count: "Vista campo",
    short:
      "Um refúgio íntimo banhado por luz natural, com vista para os pinhais da Penha Longa.",
    hero: studio,
    gallery: [studio, pool, houseDetail],
    size: "28 m²",
    guests: "2 hóspedes",
    bed: "Cama queen-size",
    view: "Pinhais da Penha Longa",
    description: [
      "Uma escolha íntima para quem viaja a dois. Espaço aberto com kitchenette discreta, mesa de refeição e zona de estar junto a uma grande janela voltada a poente.",
      "Ideal para estadias mais longas, com o ritmo de uma casa privada e o serviço de um boutique hotel.",
    ],
    amenities: [
      "Kitchenette equipada",
      "Máquina de café",
      "Zona de estar",
      "Casa de banho com banheira",
      "Wi-Fi de alta velocidade",
      "Acesso à piscina",
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
