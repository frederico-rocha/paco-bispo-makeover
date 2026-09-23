// Pure room data (no asset imports) — safe to use from the MCP server bundle.
export type RoomInfo = {
  slug: string;
  name: string;
  count: string;
  short: string;
  guests: string;
  bed: string;
  description: string[];
  amenities: string[];
};

export const commonAmenities = [
  "Wi-Fi de alta velocidade",
  "Ar condicionado",
  "Pavimento radiante na casa de banho",
  "Amenities de banho",
  "Roupão de banho turco",
  "Cofre",
  "Mini-bar",
  "Chaleira",
];

export const roomsInfo: RoomInfo[] = [
  {
    slug: "standard",
    name: "Standard",
    count: "Ponto de partida",
    short: "Um refúgio simples e acolhedor, ideal para estadias curtas.",
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
    guests: "2 hóspedes",
    bed: "Cama queen-size",
    description: [
      "Um ambiente amplo e descontraído, que combina conforto e personalidade para uma estadia diferente.",
      "O Loft é o espaço mais informal da casa — perfeito para quem procura liberdade e carácter em Sintra.",
    ],
    amenities: commonAmenities,
  },
];

export const getRoomInfo = (slug: string) =>
  roomsInfo.find((r) => r.slug === slug);
