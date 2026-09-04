import type { Lang } from "./config";

export type RoomText = {
  name: string;
  count: string;
  short: string;
  guests: string;
  bed: string;
  view: string;
  description: string[];
};

export const amenitiesByLang: Record<Lang, string[]> = {
  pt: [
    "Wi-Fi de alta velocidade",
    "Ar condicionado",
    "Pavimento radiante na casa de banho",
    "Amenities de banho",
    "Roupão de banho turco",
    "Cofre",
    "Mini-bar",
    "Chaleira",
  ],
  en: [
    "High-speed Wi-Fi",
    "Air conditioning",
    "Underfloor heating in the bathroom",
    "Bath amenities",
    "Turkish bathrobe",
    "Safe",
    "Mini-bar",
    "Kettle",
  ],
  es: [
    "Wi-Fi de alta velocidad",
    "Aire acondicionado",
    "Suelo radiante en el baño",
    "Amenities de baño",
    "Albornoz turco",
    "Caja fuerte",
    "Mini-bar",
    "Hervidor de agua",
  ],
  fr: [
    "Wi-Fi haut débit",
    "Climatisation",
    "Plancher chauffant dans la salle de bain",
    "Produits de bain",
    "Peignoir turc",
    "Coffre-fort",
    "Mini-bar",
    "Bouilloire",
  ],
};

export const roomTexts: Record<Lang, Record<string, RoomText>> = {
  pt: {
    standard: {
      name: "Standard",
      count: "Ponto de partida",
      short: "Um refúgio simples e acolhedor, ideal para estadias curtas.",
      guests: "2 hóspedes",
      bed: "Cama queen-size",
      view: "Pátio interior",
      description: [
        "O quarto Standard é o ponto de partida da casa: espaço acolhedor, luz natural e um enquadramento sereno sobre o pátio interior.",
        "Um refúgio simples e acolhedor, ideal para estadias curtas em Sintra.",
      ],
    },
    deluxe: {
      name: "Deluxe",
      count: "Um passo a cima",
      short:
        "Um espaço tranquilo e confortável, pensado para proporcionar uma estadia agradável e especial.",
      guests: "2 hóspedes",
      bed: "Cama king-size",
      view: "Jardim ou pátio",
      description: [
        "Um espaço tranquilo e confortável, pensado para proporcionar uma estadia agradável e especial.",
        "Restauradas a partir das alas originais do palacete setecentista, as suítes Deluxe conservam tectos altos, soalhos largos em pinho e detalhes em azulejo do século XVIII.",
      ],
    },
    superior: {
      name: "Superior",
      count: "Uma experiência Superior",
      short: "Mais espaço, mais conforto, uma experiência Superior.",
      guests: "2 hóspedes",
      bed: "Cama king-size",
      view: "Jardim",
      description: [
        "Um passo acima do Standard, o quarto Superior oferece mais área, uma zona de estar e vista sobre o jardim.",
        "Mais espaço, mais conforto — uma experiência Superior, sem renunciar à discrição da casa.",
      ],
    },
    penthouse: {
      name: "Penthouse",
      count: "O ponto mais alto da casa",
      short:
        "Suite familiar equipada com kitchenette, sala de estar e banheira de hidromassagem.",
      guests: "2–4 hóspedes",
      bed: "Cama king + sofá-cama",
      view: "Panorâmica sobre a serra",
      description: [
        "A penthouse ocupa todo o último piso da torre original. Suite familiar equipada com kitchenette, sala de estar e banheira de hidromassagem.",
        "Pensada para ocasiões raras — um aniversário, uma lua-de-mel, uma escapadinha em família com a paisagem como única companhia.",
      ],
    },
    loft: {
      name: "Loft",
      count: "Estúdio acolhedor",
      short:
        "Um ambiente amplo e descontraído, que combina conforto e personalidade para uma estadia diferente.",
      guests: "2 hóspedes",
      bed: "Cama queen-size",
      view: "Jardim",
      description: [
        "Um ambiente amplo e descontraído, que combina conforto e personalidade para uma estadia diferente.",
        "O Loft é o espaço mais informal da casa — perfeito para quem procura liberdade e carácter em Sintra.",
      ],
    },
  },

  en: {
    standard: {
      name: "Standard",
      count: "The starting point",
      short: "A simple, welcoming retreat, ideal for short stays.",
      guests: "2 guests",
      bed: "Queen-size bed",
      view: "Inner courtyard",
      description: [
        "The Standard room is the starting point of the house: a welcoming space, natural light and a serene outlook over the inner courtyard.",
        "A simple, welcoming retreat, ideal for short stays in Sintra.",
      ],
    },
    deluxe: {
      name: "Deluxe",
      count: "One step above",
      short:
        "A calm and comfortable space, designed for a pleasant and memorable stay.",
      guests: "2 guests",
      bed: "King-size bed",
      view: "Garden or courtyard",
      description: [
        "A calm and comfortable space, designed for a pleasant and memorable stay.",
        "Restored from the original wings of the 18th-century manor, the Deluxe suites retain high ceilings, wide pine floorboards and 18th-century tile details.",
      ],
    },
    superior: {
      name: "Superior",
      count: "A Superior experience",
      short: "More space, more comfort — a Superior experience.",
      guests: "2 guests",
      bed: "King-size bed",
      view: "Garden",
      description: [
        "A step above the Standard, the Superior room offers more space, a seating area and views over the garden.",
        "More space, more comfort — a Superior experience, without giving up the discretion of the house.",
      ],
    },
    penthouse: {
      name: "Penthouse",
      count: "The highest point of the house",
      short:
        "Family suite with kitchenette, living room and hydromassage bathtub.",
      guests: "2–4 guests",
      bed: "King bed + sofa bed",
      view: "Panoramic over the hills",
      description: [
        "The penthouse occupies the entire top floor of the original tower. A family suite with kitchenette, living room and hydromassage bathtub.",
        "Designed for rare occasions — a birthday, a honeymoon, a family escape with the landscape as the only company.",
      ],
    },
    loft: {
      name: "Loft",
      count: "A cosy studio",
      short:
        "A spacious, relaxed setting combining comfort and character for a different kind of stay.",
      guests: "2 guests",
      bed: "Queen-size bed",
      view: "Garden",
      description: [
        "A spacious, relaxed setting combining comfort and character for a different kind of stay.",
        "The Loft is the most informal space in the house — perfect for those seeking freedom and character in Sintra.",
      ],
    },
  },

  es: {
    standard: {
      name: "Standard",
      count: "Punto de partida",
      short: "Un refugio sencillo y acogedor, ideal para estancias cortas.",
      guests: "2 huéspedes",
      bed: "Cama queen-size",
      view: "Patio interior",
      description: [
        "La habitación Standard es el punto de partida de la casa: un espacio acogedor, luz natural y una vista serena sobre el patio interior.",
        "Un refugio sencillo y acogedor, ideal para estancias cortas en Sintra.",
      ],
    },
    deluxe: {
      name: "Deluxe",
      count: "Un paso más",
      short:
        "Un espacio tranquilo y confortable, pensado para ofrecer una estancia agradable y especial.",
      guests: "2 huéspedes",
      bed: "Cama king-size",
      view: "Jardín o patio",
      description: [
        "Un espacio tranquilo y confortable, pensado para ofrecer una estancia agradable y especial.",
        "Restauradas a partir de las alas originales del palacete del siglo XVIII, las suites Deluxe conservan techos altos, suelos anchos de pino y detalles en azulejo del siglo XVIII.",
      ],
    },
    superior: {
      name: "Superior",
      count: "Una experiencia Superior",
      short: "Más espacio, más confort, una experiencia Superior.",
      guests: "2 huéspedes",
      bed: "Cama king-size",
      view: "Jardín",
      description: [
        "Un paso por encima de la Standard, la habitación Superior ofrece más superficie, una zona de estar y vistas al jardín.",
        "Más espacio, más confort — una experiencia Superior, sin renunciar a la discreción de la casa.",
      ],
    },
    penthouse: {
      name: "Penthouse",
      count: "El punto más alto de la casa",
      short:
        "Suite familiar equipada con kitchenette, salón y bañera de hidromasaje.",
      guests: "2–4 huéspedes",
      bed: "Cama king + sofá cama",
      view: "Panorámica sobre la sierra",
      description: [
        "La penthouse ocupa toda la última planta de la torre original. Suite familiar equipada con kitchenette, salón y bañera de hidromasaje.",
        "Pensada para ocasiones especiales — un aniversario, una luna de miel, una escapada en familia con el paisaje como única compañía.",
      ],
    },
    loft: {
      name: "Loft",
      count: "Estudio acogedor",
      short:
        "Un ambiente amplio y desenfadado, que combina confort y personalidad para una estancia diferente.",
      guests: "2 huéspedes",
      bed: "Cama queen-size",
      view: "Jardín",
      description: [
        "Un ambiente amplio y desenfadado, que combina confort y personalidad para una estancia diferente.",
        "El Loft es el espacio más informal de la casa — perfecto para quien busca libertad y carácter en Sintra.",
      ],
    },
  },

  fr: {
    standard: {
      name: "Standard",
      count: "Le point de départ",
      short: "Un refuge simple et chaleureux, idéal pour les courts séjours.",
      guests: "2 personnes",
      bed: "Lit queen-size",
      view: "Cour intérieure",
      description: [
        "La chambre Standard est le point de départ de la maison : un espace accueillant, une lumière naturelle et une vue paisible sur la cour intérieure.",
        "Un refuge simple et chaleureux, idéal pour les courts séjours à Sintra.",
      ],
    },
    deluxe: {
      name: "Deluxe",
      count: "Un cran au-dessus",
      short:
        "Un espace calme et confortable, conçu pour un séjour agréable et mémorable.",
      guests: "2 personnes",
      bed: "Lit king-size",
      view: "Jardin ou cour",
      description: [
        "Un espace calme et confortable, conçu pour un séjour agréable et mémorable.",
        "Restaurées à partir des ailes d'origine du manoir du XVIIIe siècle, les suites Deluxe conservent de hauts plafonds, de larges parquets en pin et des détails en azulejos du XVIIIe siècle.",
      ],
    },
    superior: {
      name: "Superior",
      count: "Une expérience Superior",
      short: "Plus d'espace, plus de confort, une expérience Superior.",
      guests: "2 personnes",
      bed: "Lit king-size",
      view: "Jardin",
      description: [
        "Un cran au-dessus de la Standard, la chambre Superior offre plus de surface, un coin salon et une vue sur le jardin.",
        "Plus d'espace, plus de confort — une expérience Superior, sans renoncer à la discrétion de la maison.",
      ],
    },
    penthouse: {
      name: "Penthouse",
      count: "Le point le plus haut de la maison",
      short:
        "Suite familiale équipée d'une kitchenette, d'un salon et d'une baignoire balnéo.",
      guests: "2–4 personnes",
      bed: "Lit king + canapé-lit",
      view: "Panoramique sur les collines",
      description: [
        "La penthouse occupe tout le dernier étage de la tour d'origine. Suite familiale équipée d'une kitchenette, d'un salon et d'une baignoire balnéo.",
        "Pensée pour les grandes occasions — un anniversaire, une lune de miel, une escapade en famille avec le paysage pour seule compagnie.",
      ],
    },
    loft: {
      name: "Loft",
      count: "Studio chaleureux",
      short:
        "Un espace vaste et décontracté, alliant confort et caractère pour un séjour différent.",
      guests: "2 personnes",
      bed: "Lit queen-size",
      view: "Jardin",
      description: [
        "Un espace vaste et décontracté, alliant confort et caractère pour un séjour différent.",
        "Le Loft est l'espace le plus informel de la maison — parfait pour ceux qui recherchent liberté et caractère à Sintra.",
      ],
    },
  },
};
