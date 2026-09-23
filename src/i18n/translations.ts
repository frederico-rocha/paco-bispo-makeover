import type { Lang } from "./config";

export type Dict = {
  nav: {
    home: string;
    rooms: string;
    gallery: string;
    events: string;
    sintra: string;
    contact: string;
    book: string;
    menu: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    ctaBook: string;
    ctaDiscover: string;
    scroll: string;
    videoLabel: string;
  };
  about: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    p1: string;
    p2: string;
    statRooms: string;
    statLoft: string;
    statPenthouse: string;
    imageAlt: string;
  };
  rooms: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    seeGallery: string;
  };
  experiences: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    eventsTitle: string;
    eventsText: string;
    eventsAlt: string;
    poolEyebrow: string;
    poolTitle: string;
    poolDesc: string;
    chapelEyebrow: string;
    chapelTitle: string;
    chapelDesc: string;
  };
  location: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    text: string;
    imageAlt: string;
    points: { d: string; l: string }[];
  };
  reservation: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    subtitle: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    submit: string;
    contactUs: string;
  };
  footer: {
    tagline: string;
    visit: string;
    contact: string;
    address: string;
  };
  gallery: {
    back: string;
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    intro: string;
    close: string;
    categories: Record<
      "all" | "exterior" | "rooms" | "spaces" | "details" | "surroundings",
      string
    >;
    captions: {
      facade: string;
      house: string;
      pool: string;
      chapel: string;
      events: string;
      breakfast: string;
      standard: string;
      superior: string;
      deluxe: string;
      penthouse: string;
      loft: string;
      sintra: string;
    };
  };
  roomDetail: {
    about: string;
    capacity: string;
    bed: string;
    amenities: string;
    bookRoom: string;
    keepExploring: string;
    otherStart: string;
    otherAccent: string;
    backHome: string;
  };
  eventsPage: {
    back: string;
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    intro: string;
    carouselAlt: string;
    servicesTitle: string;
    services: { title: string; desc: string }[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    metaTitle: string;
    metaDescription: string;
    moreLink: string;
  };
  notFound: {
    title: string;
    text: string;
    back: string;
  };
  meta: {
    title: string;
    description: string;
  };
};

export const translations: Record<Lang, Dict> = {
  pt: {
    nav: {
      home: "A Casa",
      rooms: "Quartos",
      gallery: "Galeria",
      events: "Eventos",
      sintra: "Sintra",
      contact: "Contacto",
      book: "Reservar",
      menu: "Menu",
      language: "Idioma",
    },
    hero: {
      eyebrow: "Ribeira da Penha Longa · Sintra",
      titleLine1: "Contemporâneo entre",
      titleLine2: "natureza e história",
      ctaBook: "Reservar estadia",
      ctaDiscover: "Conhecer o hotel",
      scroll: "Scroll",
      videoLabel:
        "Paço do Bispo Boutique House ao entardecer, na serra de Sintra",
    },
    about: {
      eyebrow: "A Casa",
      titleStart: "Um refúgio com",
      titleAccent: "história e alma",
      p1: "Inserido na reserva natural de Sintra, o Paço do Bispo Boutique House foi alvo de uma recente recuperação, atenta ao pormenor, pelo arquitecto Luís Black da Silva e a decoração de interior da arquitecta Sara Mendes de Almeida.",
      p2: "Nove quartos de luxo, um Loft e uma Penthouse, onde a beleza da tradição encontra a serenidade contemporânea.",
      statRooms: "Quartos",
      statLoft: "Loft",
      statPenthouse: "Penthouse",
      imageAlt:
        "Fachada principal do Paço do Bispo, com paredes cor de terracota, telhado de telha e cruzeiro de pedra",
    },
    rooms: {
      eyebrow: "Estadia",
      titleStart: "Cinco formas de",
      titleAccent: "dormir em Sintra",
      seeGallery: "Ver galeria completa",
    },
    experiences: {
      eyebrow: "Eventos",
      titleStart: "Para além do quarto,",
      titleAccent: "a casa.",
      eventsTitle: "Celebrar numa casa com história",
      eventsText:
        "Para mais informações sobre eventos, entre em contacto connosco através de",
      eventsAlt:
        "Paço do Bispo Boutique House — espaço para eventos em Sintra",
      poolEyebrow: "Piscina panorâmica",
      poolTitle: "Vista privilegiada sobre a serra",
      poolDesc:
        "A piscina abre-se sobre os pinhais e as colinas — um lugar para ficar, ler e desaparecer.",
      chapelEyebrow: "A Capela / Lounge",
      chapelTitle: "Lounge na antiga capela",
      chapelDesc:
        "Antiga capela do século XVIII, este espaço foi cuidadosamente transformado num lounge exclusivo, onde a história e o conforto contemporâneo se encontram em perfeita harmonia. As abóbadas originais, os detalhes arquitectónicos e o altar preservado conferem-lhe uma atmosfera única, intimista e sofisticada.",
    },
    location: {
      eyebrow: "Localização",
      titleStart: "No coração do",
      titleAccent: "Parque Natural Sintra-Cascais",
      text: "A poucos minutos do Atlântico e da vila mágica de Sintra. Estacionamento privativo.",
      imageAlt: "Serra de Sintra coberta por neblina ao amanhecer",
      points: [
        { d: "5 km", l: "Vila de Sintra" },
        { d: "5 km", l: "Estoril & Cascais" },
        { d: "30 km", l: "Lisboa" },
        { d: "—", l: "Golf & ténis nas imediações" },
      ],
    },
    reservation: {
      eyebrow: "Reservas",
      titleStart: "A sua estadia",
      titleAccent: "começa aqui",
      subtitle:
        "Verifique disponibilidade e tarifas. Respondemos em poucas horas.",
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Hóspedes",
      submit: "Pedir reserva",
      contactUs: "Ou contacte-nos diretamente em",
    },
    footer: {
      tagline:
        "Uma casa nobre na reserva natural de Sintra. Tradição, paisagem e silêncio, a poucos minutos do Atlântico.",
      visit: "Visite",
      contact: "Contacto",
      address: "Ribeira da Penha Longa\nLargo S. Brás, nº 88\n2710-005 Sintra",
    },
    gallery: {
      back: "Voltar",
      eyebrow: "Galeria",
      titleStart: "A casa em",
      titleAccent: "imagens",
      intro:
        "Detalhes, paisagem, luz e silêncio. Um percurso visual pelo Paço do Bispo e pela serra que o envolve.",
      close: "Fechar",
      categories: {
        all: "Tudo",
        exterior: "Exterior",
        rooms: "Quartos",
        spaces: "Espaços",
        details: "Detalhes",
        surroundings: "Envolvente",
      },
      captions: {
        facade: "A fachada da casa",
        house: "A casa ao amanhecer",
        pool: "Piscina panorâmica",
        chapel: "Lounge na antiga capela",
        events: "Eventos",
        breakfast: "Sala de pequenos-almoços",
        standard: "Quarto Standard",
        superior: "Quarto Superior",
        deluxe: "Quarto Deluxe",
        penthouse: "Penthouse — terraço privado",
        loft: "Loft",
        sintra: "Serra de Sintra",
      },
    },
    roomDetail: {
      about: "Sobre o quarto",
      capacity: "Capacidade",
      bed: "Cama",
      amenities: "Comodidades",
      bookRoom: "Reservar este quarto",
      keepExploring: "Continuar a explorar",
      otherStart: "Outros",
      otherAccent: "quartos",
      backHome: "Voltar ao início",
    },
    eventsPage: {
      back: "Voltar",
      eyebrow: "Casamentos & Eventos em Sintra",
      titleStart: "O palco perfeito para o",
      titleAccent: "vosso grande dia",
      intro:
        "Entre a serra e o Atlântico, o Paço do Bispo Boutique House é um palacete histórico recuperado para receber casamentos, batizados, celebrações e eventos corporativos num ambiente exclusivo e intimista.",
      carouselAlt:
        "Casamentos e eventos no Paço do Bispo Boutique House, Sintra",
      servicesTitle: "O que oferecemos",
      services: [
        {
          title: "Espaços versáteis",
          desc: "Salão de eventos, lounge na antiga capela do século XVIII, jardins e piscina panorâmica sobre a serra.",
        },
        {
          title: "Alojamento no local",
          desc: "Nove quartos de luxo, um Loft e uma Penthouse para os noivos e convidados ficarem na casa.",
        },
        {
          title: "Exclusividade",
          desc: "Possibilidade de privatização total da casa para o vosso evento, com total privacidade.",
        },
        {
          title: "Localização única",
          desc: "No Parque Natural Sintra-Cascais, a 5 minutos da vila de Sintra e a 30 km de Lisboa, com estacionamento privativo.",
        },
      ],
      ctaTitle: "Vamos planear o vosso evento",
      ctaText:
        "Conte-nos a vossa ideia e enviamos uma proposta personalizada.",
      ctaButton: "Pedir proposta",
      metaTitle:
        "Casamentos e Eventos em Sintra — Paço do Bispo Boutique House",
      metaDescription:
        "Espaço para casamentos, batizados e eventos corporativos em Sintra. Palacete histórico com salão, capela, jardins, piscina e alojamento no local.",
    },
    notFound: {
      title: "Página não encontrada",
      text: "A página que procura não existe ou foi movida.",
      back: "Voltar ao início",
    },
    meta: {
      title: "Paço do Bispo Boutique House · Sintra",
      description:
        "Boutique house de luxo no Parque Natural Sintra-Cascais. Nove quartos, um loft e uma penthouse, piscina panorâmica e lounge na antiga capela.",
    },
  },

  en: {
    nav: {
      home: "The House",
      rooms: "Rooms",
      gallery: "Gallery",
      events: "Events",
      sintra: "Sintra",
      contact: "Contact",
      book: "Book",
      menu: "Menu",
      language: "Language",
    },
    hero: {
      eyebrow: "Ribeira da Penha Longa · Sintra",
      titleLine1: "Contemporary between",
      titleLine2: "nature and history",
      ctaBook: "Book your stay",
      ctaDiscover: "Discover the hotel",
      scroll: "Scroll",
      videoLabel:
        "Paço do Bispo Boutique House at dusk, in the Sintra hills",
    },
    about: {
      eyebrow: "The House",
      titleStart: "A retreat with",
      titleAccent: "history and soul",
      p1: "Set within the Sintra nature reserve, Paço do Bispo Boutique House has recently been restored with meticulous attention to detail by architect Luís Black da Silva, with interiors by architect Sara Mendes de Almeida.",
      p2: "Nine luxury rooms, a Loft and a Penthouse, where the beauty of tradition meets contemporary serenity.",
      statRooms: "Rooms",
      statLoft: "Loft",
      statPenthouse: "Penthouse",
      imageAlt:
        "Main façade of Paço do Bispo, with terracotta walls, tiled roof and stone cross",
    },
    rooms: {
      eyebrow: "Stay",
      titleStart: "Five ways to",
      titleAccent: "sleep in Sintra",
      seeGallery: "See full gallery",
    },
    experiences: {
      eyebrow: "Events",
      titleStart: "Beyond the room,",
      titleAccent: "the house.",
      eventsTitle: "Celebrate in a house with history",
      eventsText: "For more information about events, please contact us at",
      eventsAlt: "Paço do Bispo Boutique House — event venue in Sintra",
      poolEyebrow: "Panoramic pool",
      poolTitle: "A privileged view over the hills",
      poolDesc:
        "The pool opens onto the pine woods and the hills — a place to linger, read and disappear.",
      chapelEyebrow: "The Chapel / Lounge",
      chapelTitle: "Lounge in the former chapel",
      chapelDesc:
        "A former 18th-century chapel, this space has been carefully transformed into an exclusive lounge where history and contemporary comfort meet in perfect harmony. The original vaults, architectural details and preserved altar give it a unique, intimate and sophisticated atmosphere.",
    },
    location: {
      eyebrow: "Location",
      titleStart: "In the heart of the",
      titleAccent: "Sintra-Cascais Natural Park",
      text: "Just minutes from the Atlantic and the magical village of Sintra. Private parking.",
      imageAlt: "The Sintra hills covered in mist at dawn",
      points: [
        { d: "5 km", l: "Sintra village" },
        { d: "5 km", l: "Estoril & Cascais" },
        { d: "30 km", l: "Lisbon" },
        { d: "—", l: "Golf & tennis nearby" },
      ],
    },
    reservation: {
      eyebrow: "Reservations",
      titleStart: "Your stay",
      titleAccent: "begins here",
      subtitle: "Check availability and rates. We reply within a few hours.",
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Guests",
      submit: "Request booking",
      contactUs: "Or contact us directly at",
    },
    footer: {
      tagline:
        "A noble house in the Sintra nature reserve. Tradition, landscape and silence, minutes from the Atlantic.",
      visit: "Visit",
      contact: "Contact",
      address: "Ribeira da Penha Longa\nLargo S. Brás, nº 88\n2710-005 Sintra",
    },
    gallery: {
      back: "Back",
      eyebrow: "Gallery",
      titleStart: "The house in",
      titleAccent: "images",
      intro:
        "Details, landscape, light and silence. A visual journey through Paço do Bispo and the hills that surround it.",
      close: "Close",
      categories: {
        all: "All",
        exterior: "Exterior",
        rooms: "Rooms",
        spaces: "Spaces",
        details: "Details",
        surroundings: "Surroundings",
      },
      captions: {
        facade: "The house façade",
        house: "The house at dawn",
        pool: "Panoramic pool",
        chapel: "Lounge in the former chapel",
        events: "Events",
        breakfast: "Breakfast room",
        standard: "Standard room",
        superior: "Superior room",
        deluxe: "Deluxe room",
        penthouse: "Penthouse — private terrace",
        loft: "Loft",
        sintra: "Sintra hills",
      },
    },
    roomDetail: {
      about: "About the room",
      capacity: "Capacity",
      bed: "Bed",
      amenities: "Amenities",
      bookRoom: "Book this room",
      keepExploring: "Keep exploring",
      otherStart: "Other",
      otherAccent: "rooms",
      backHome: "Back to home",
    },
    eventsPage: {
      back: "Back",
      eyebrow: "Weddings & Events in Sintra",
      titleStart: "The perfect setting for",
      titleAccent: "your big day",
      intro:
        "Between the hills and the Atlantic, Paço do Bispo Boutique House is a restored historic palace hosting weddings, christenings, celebrations and corporate events in an exclusive, intimate atmosphere.",
      carouselAlt:
        "Weddings and events at Paço do Bispo Boutique House, Sintra",
      servicesTitle: "What we offer",
      services: [
        {
          title: "Versatile spaces",
          desc: "Event hall, lounge in the former 18th-century chapel, gardens and a panoramic pool overlooking the hills.",
        },
        {
          title: "On-site accommodation",
          desc: "Nine luxury rooms, a Loft and a Penthouse so the couple and their guests can stay in the house.",
        },
        {
          title: "Exclusivity",
          desc: "Full privatisation of the house for your event, with complete privacy.",
        },
        {
          title: "Unique location",
          desc: "In the Sintra-Cascais Natural Park, 5 minutes from Sintra village and 30 km from Lisbon, with private parking.",
        },
      ],
      ctaTitle: "Let's plan your event",
      ctaText: "Tell us your idea and we will send you a tailored proposal.",
      ctaButton: "Request a proposal",
      metaTitle:
        "Weddings and Events in Sintra — Paço do Bispo Boutique House",
      metaDescription:
        "Venue for weddings, christenings and corporate events in Sintra. Historic palace with event hall, chapel, gardens, pool and on-site accommodation.",
    },
    notFound: {
      title: "Page not found",
      text: "The page you are looking for does not exist or has been moved.",
      back: "Back to home",
    },
    meta: {
      title: "Paço do Bispo Boutique House · Sintra",
      description:
        "Luxury boutique house in the Sintra-Cascais Natural Park. Nine rooms, a loft and a penthouse, panoramic pool and lounge in the former chapel.",
    },
  },

  es: {
    nav: {
      home: "La Casa",
      rooms: "Habitaciones",
      gallery: "Galería",
      events: "Eventos",
      sintra: "Sintra",
      contact: "Contacto",
      book: "Reservar",
      menu: "Menú",
      language: "Idioma",
    },
    hero: {
      eyebrow: "Ribeira da Penha Longa · Sintra",
      titleLine1: "Contemporáneo entre",
      titleLine2: "naturaleza e historia",
      ctaBook: "Reservar estancia",
      ctaDiscover: "Conocer el hotel",
      scroll: "Scroll",
      videoLabel:
        "Paço do Bispo Boutique House al atardecer, en la sierra de Sintra",
    },
    about: {
      eyebrow: "La Casa",
      titleStart: "Un refugio con",
      titleAccent: "historia y alma",
      p1: "Situado en la reserva natural de Sintra, el Paço do Bispo Boutique House ha sido recientemente rehabilitado con gran atención al detalle por el arquitecto Luís Black da Silva, con interiorismo de la arquitecta Sara Mendes de Almeida.",
      p2: "Nueve habitaciones de lujo, un Loft y una Penthouse, donde la belleza de la tradición se encuentra con la serenidad contemporánea.",
      statRooms: "Habitaciones",
      statLoft: "Loft",
      statPenthouse: "Penthouse",
      imageAlt:
        "Fachada principal del Paço do Bispo, con paredes color terracota, tejado de teja y crucero de piedra",
    },
    rooms: {
      eyebrow: "Estancia",
      titleStart: "Cinco formas de",
      titleAccent: "dormir en Sintra",
      seeGallery: "Ver galería completa",
    },
    experiences: {
      eyebrow: "Eventos",
      titleStart: "Más allá de la habitación,",
      titleAccent: "la casa.",
      eventsTitle: "Celebrar en una casa con historia",
      eventsText:
        "Para más información sobre eventos, póngase en contacto con nosotros en",
      eventsAlt:
        "Paço do Bispo Boutique House — espacio para eventos en Sintra",
      poolEyebrow: "Piscina panorámica",
      poolTitle: "Vista privilegiada sobre la sierra",
      poolDesc:
        "La piscina se abre sobre los pinares y las colinas — un lugar para quedarse, leer y desaparecer.",
      chapelEyebrow: "La Capilla / Lounge",
      chapelTitle: "Lounge en la antigua capilla",
      chapelDesc:
        "Antigua capilla del siglo XVIII, este espacio fue cuidadosamente transformado en un lounge exclusivo, donde la historia y el confort contemporáneo se encuentran en perfecta armonía. Las bóvedas originales, los detalles arquitectónicos y el altar conservado le confieren una atmósfera única, íntima y sofisticada.",
    },
    location: {
      eyebrow: "Ubicación",
      titleStart: "En el corazón del",
      titleAccent: "Parque Natural Sintra-Cascais",
      text: "A pocos minutos del Atlántico y del mágico pueblo de Sintra. Aparcamiento privado.",
      imageAlt: "Sierra de Sintra cubierta de niebla al amanecer",
      points: [
        { d: "5 km", l: "Pueblo de Sintra" },
        { d: "5 km", l: "Estoril y Cascais" },
        { d: "30 km", l: "Lisboa" },
        { d: "—", l: "Golf y tenis en los alrededores" },
      ],
    },
    reservation: {
      eyebrow: "Reservas",
      titleStart: "Su estancia",
      titleAccent: "empieza aquí",
      subtitle:
        "Consulte disponibilidad y tarifas. Respondemos en pocas horas.",
      checkIn: "Entrada",
      checkOut: "Salida",
      guests: "Huéspedes",
      submit: "Solicitar reserva",
      contactUs: "O contáctenos directamente en",
    },
    footer: {
      tagline:
        "Una casa noble en la reserva natural de Sintra. Tradición, paisaje y silencio, a pocos minutos del Atlántico.",
      visit: "Visite",
      contact: "Contacto",
      address: "Ribeira da Penha Longa\nLargo S. Brás, nº 88\n2710-005 Sintra",
    },
    gallery: {
      back: "Volver",
      eyebrow: "Galería",
      titleStart: "La casa en",
      titleAccent: "imágenes",
      intro:
        "Detalles, paisaje, luz y silencio. Un recorrido visual por el Paço do Bispo y la sierra que lo rodea.",
      close: "Cerrar",
      categories: {
        all: "Todo",
        exterior: "Exterior",
        rooms: "Habitaciones",
        spaces: "Espacios",
        details: "Detalles",
        surroundings: "Entorno",
      },
      captions: {
        facade: "La fachada de la casa",
        house: "La casa al amanecer",
        pool: "Piscina panorámica",
        chapel: "Lounge en la antigua capilla",
        events: "Eventos",
        breakfast: "Sala de desayunos",
        standard: "Habitación Standard",
        superior: "Habitación Superior",
        deluxe: "Habitación Deluxe",
        penthouse: "Penthouse — terraza privada",
        loft: "Loft",
        sintra: "Sierra de Sintra",
      },
    },
    roomDetail: {
      about: "Sobre la habitación",
      capacity: "Capacidad",
      bed: "Cama",
      amenities: "Comodidades",
      bookRoom: "Reservar esta habitación",
      keepExploring: "Seguir explorando",
      otherStart: "Otras",
      otherAccent: "habitaciones",
      backHome: "Volver al inicio",
    },
    eventsPage: {
      back: "Volver",
      eyebrow: "Bodas y Eventos en Sintra",
      titleStart: "El escenario perfecto para",
      titleAccent: "vuestro gran día",
      intro:
        "Entre la sierra y el Atlántico, el Paço do Bispo Boutique House es un palacete histórico rehabilitado para acoger bodas, bautizos, celebraciones y eventos corporativos en un ambiente exclusivo e íntimo.",
      carouselAlt:
        "Bodas y eventos en el Paço do Bispo Boutique House, Sintra",
      servicesTitle: "Qué ofrecemos",
      services: [
        {
          title: "Espacios versátiles",
          desc: "Salón de eventos, lounge en la antigua capilla del siglo XVIII, jardines y piscina panorámica sobre la sierra.",
        },
        {
          title: "Alojamiento in situ",
          desc: "Nueve habitaciones de lujo, un Loft y una Penthouse para que los novios y los invitados se alojen en la casa.",
        },
        {
          title: "Exclusividad",
          desc: "Posibilidad de privatización total de la casa para vuestro evento, con total privacidad.",
        },
        {
          title: "Ubicación única",
          desc: "En el Parque Natural Sintra-Cascais, a 5 minutos del pueblo de Sintra y a 30 km de Lisboa, con aparcamiento privado.",
        },
      ],
      ctaTitle: "Planeemos vuestro evento",
      ctaText:
        "Contadnos vuestra idea y os enviaremos una propuesta personalizada.",
      ctaButton: "Solicitar propuesta",
      metaTitle:
        "Bodas y Eventos en Sintra — Paço do Bispo Boutique House",
      metaDescription:
        "Espacio para bodas, bautizos y eventos corporativos en Sintra. Palacete histórico con salón, capilla, jardines, piscina y alojamiento in situ.",
    },
    notFound: {
      title: "Página no encontrada",
      text: "La página que busca no existe o ha sido movida.",
      back: "Volver al inicio",
    },
    meta: {
      title: "Paço do Bispo Boutique House · Sintra",
      description:
        "Boutique house de lujo en el Parque Natural Sintra-Cascais. Nueve habitaciones, un loft y una penthouse, piscina panorámica y lounge en la antigua capilla.",
    },
  },

  fr: {
    nav: {
      home: "La Maison",
      rooms: "Chambres",
      gallery: "Galerie",
      events: "Événements",
      sintra: "Sintra",
      contact: "Contact",
      book: "Réserver",
      menu: "Menu",
      language: "Langue",
    },
    hero: {
      eyebrow: "Ribeira da Penha Longa · Sintra",
      titleLine1: "Contemporain entre",
      titleLine2: "nature et histoire",
      ctaBook: "Réserver un séjour",
      ctaDiscover: "Découvrir l'hôtel",
      scroll: "Scroll",
      videoLabel:
        "Paço do Bispo Boutique House au crépuscule, dans les collines de Sintra",
    },
    about: {
      eyebrow: "La Maison",
      titleStart: "Un refuge avec",
      titleAccent: "histoire et âme",
      p1: "Située dans la réserve naturelle de Sintra, la Paço do Bispo Boutique House a récemment été restaurée avec un grand souci du détail par l'architecte Luís Black da Silva, avec une décoration intérieure signée par l'architecte Sara Mendes de Almeida.",
      p2: "Neuf chambres de luxe, un Loft et une Penthouse, où la beauté de la tradition rencontre la sérénité contemporaine.",
      statRooms: "Chambres",
      statLoft: "Loft",
      statPenthouse: "Penthouse",
      imageAlt:
        "Façade principale du Paço do Bispo, avec murs couleur terre cuite, toit de tuiles et croix en pierre",
    },
    rooms: {
      eyebrow: "Séjour",
      titleStart: "Cinq façons de",
      titleAccent: "dormir à Sintra",
      seeGallery: "Voir la galerie complète",
    },
    experiences: {
      eyebrow: "Événements",
      titleStart: "Au-delà de la chambre,",
      titleAccent: "la maison.",
      eventsTitle: "Célébrer dans une maison chargée d'histoire",
      eventsText:
        "Pour plus d'informations sur les événements, contactez-nous à",
      eventsAlt:
        "Paço do Bispo Boutique House — lieu d'événements à Sintra",
      poolEyebrow: "Piscine panoramique",
      poolTitle: "Une vue privilégiée sur les collines",
      poolDesc:
        "La piscine s'ouvre sur les pinèdes et les collines — un lieu pour s'attarder, lire et disparaître.",
      chapelEyebrow: "La Chapelle / Lounge",
      chapelTitle: "Lounge dans l'ancienne chapelle",
      chapelDesc:
        "Ancienne chapelle du XVIIIe siècle, cet espace a été soigneusement transformé en un lounge exclusif, où l'histoire et le confort contemporain se rencontrent en parfaite harmonie. Les voûtes d'origine, les détails architecturaux et l'autel préservé lui confèrent une atmosphère unique, intime et raffinée.",
    },
    location: {
      eyebrow: "Emplacement",
      titleStart: "Au cœur du",
      titleAccent: "Parc Naturel de Sintra-Cascais",
      text: "À quelques minutes de l'Atlantique et du village magique de Sintra. Parking privé.",
      imageAlt: "Les collines de Sintra couvertes de brume à l'aube",
      points: [
        { d: "5 km", l: "Village de Sintra" },
        { d: "5 km", l: "Estoril & Cascais" },
        { d: "30 km", l: "Lisbonne" },
        { d: "—", l: "Golf & tennis à proximité" },
      ],
    },
    reservation: {
      eyebrow: "Réservations",
      titleStart: "Votre séjour",
      titleAccent: "commence ici",
      subtitle:
        "Vérifiez les disponibilités et les tarifs. Nous répondons en quelques heures.",
      checkIn: "Arrivée",
      checkOut: "Départ",
      guests: "Personnes",
      submit: "Demander une réservation",
      contactUs: "Ou contactez-nous directement à",
    },
    footer: {
      tagline:
        "Une demeure noble dans la réserve naturelle de Sintra. Tradition, paysage et silence, à quelques minutes de l'Atlantique.",
      visit: "Visiter",
      contact: "Contact",
      address: "Ribeira da Penha Longa\nLargo S. Brás, nº 88\n2710-005 Sintra",
    },
    gallery: {
      back: "Retour",
      eyebrow: "Galerie",
      titleStart: "La maison en",
      titleAccent: "images",
      intro:
        "Détails, paysage, lumière et silence. Un parcours visuel à travers le Paço do Bispo et les collines qui l'entourent.",
      close: "Fermer",
      categories: {
        all: "Tout",
        exterior: "Extérieur",
        rooms: "Chambres",
        spaces: "Espaces",
        details: "Détails",
        surroundings: "Environs",
      },
      captions: {
        facade: "La façade de la maison",
        house: "La maison à l'aube",
        pool: "Piscine panoramique",
        chapel: "Lounge dans l'ancienne chapelle",
        events: "Événements",
        breakfast: "Salle des petits-déjeuners",
        standard: "Chambre Standard",
        superior: "Chambre Supérieure",
        deluxe: "Chambre Deluxe",
        penthouse: "Penthouse — terrasse privée",
        loft: "Loft",
        sintra: "Collines de Sintra",
      },
    },
    roomDetail: {
      about: "À propos de la chambre",
      capacity: "Capacité",
      bed: "Lit",
      amenities: "Équipements",
      bookRoom: "Réserver cette chambre",
      keepExploring: "Continuer à explorer",
      otherStart: "Autres",
      otherAccent: "chambres",
      backHome: "Retour à l'accueil",
    },
    eventsPage: {
      back: "Retour",
      eyebrow: "Mariages & Événements à Sintra",
      titleStart: "Le cadre idéal pour",
      titleAccent: "votre grand jour",
      intro:
        "Entre les collines et l'Atlantique, la Paço do Bispo Boutique House est un palais historique restauré qui accueille mariages, baptêmes, célébrations et événements d'entreprise dans une atmosphère exclusive et intimiste.",
      carouselAlt:
        "Mariages et événements au Paço do Bispo Boutique House, Sintra",
      servicesTitle: "Ce que nous offrons",
      services: [
        {
          title: "Espaces polyvalents",
          desc: "Salle de réception, lounge dans l'ancienne chapelle du XVIIIe siècle, jardins et piscine panoramique sur les collines.",
        },
        {
          title: "Hébergement sur place",
          desc: "Neuf chambres de luxe, un Loft et une Penthouse pour que les mariés et leurs invités dorment dans la maison.",
        },
        {
          title: "Exclusivité",
          desc: "Possibilité de privatisation totale de la maison pour votre événement, en toute intimité.",
        },
        {
          title: "Emplacement unique",
          desc: "Dans le Parc Naturel de Sintra-Cascais, à 5 minutes du village de Sintra et à 30 km de Lisbonne, avec parking privé.",
        },
      ],
      ctaTitle: "Planifions votre événement",
      ctaText:
        "Racontez-nous votre idée et nous vous enverrons une proposition sur mesure.",
      ctaButton: "Demander une proposition",
      metaTitle:
        "Mariages et Événements à Sintra — Paço do Bispo Boutique House",
      metaDescription:
        "Lieu de mariages, baptêmes et événements d'entreprise à Sintra. Palais historique avec salle de réception, chapelle, jardins, piscine et hébergement sur place.",
    },
    notFound: {
      title: "Page introuvable",
      text: "La page que vous recherchez n'existe pas ou a été déplacée.",
      back: "Retour à l'accueil",
    },
    meta: {
      title: "Paço do Bispo Boutique House · Sintra",
      description:
        "Boutique house de luxe dans le Parc Naturel de Sintra-Cascais. Neuf chambres, un loft et une penthouse, piscine panoramique et lounge dans l'ancienne chapelle.",
    },
  },
};
