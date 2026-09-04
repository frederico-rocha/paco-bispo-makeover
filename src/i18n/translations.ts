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
      house: string;
      suite: string;
      chapel: string;
      pool: string;
      loft: string;
      poolArea: string;
      penthouse: string;
      sintra: string;
    };
  };
  roomDetail: {
    about: string;
    capacity: string;
    bed: string;
    view: string;
    amenities: string;
    bookRoom: string;
    keepExploring: string;
    otherStart: string;
    otherAccent: string;
    backHome: string;
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
        "Pátio exterior do Paço do Bispo com fachada cor de terracota, telhado de telha e escultura de cavalos no centro do lajedo",
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
      address: "Ribeira da Penha Longa\n2710 Sintra, Portugal",
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
        house: "A casa ao amanhecer",
        suite: "Suíte principal",
        chapel: "Lounge na antiga capela",
        pool: "Piscina panorâmica",
        loft: "Loft com vista",
        poolArea: "Área da piscina",
        penthouse: "Penthouse — terraço privado",
        sintra: "Serra de Sintra",
      },
    },
    roomDetail: {
      about: "Sobre o quarto",
      capacity: "Capacidade",
      bed: "Cama",
      view: "Vista",
      amenities: "Comodidades",
      bookRoom: "Reservar este quarto",
      keepExploring: "Continuar a explorar",
      otherStart: "Outros",
      otherAccent: "quartos",
      backHome: "Voltar ao início",
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
        "Outdoor courtyard of Paço do Bispo with terracotta façade, tiled roof and horse sculpture at the centre of the paving",
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
      address: "Ribeira da Penha Longa\n2710 Sintra, Portugal",
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
        house: "The house at dawn",
        suite: "Main suite",
        chapel: "Lounge in the former chapel",
        pool: "Panoramic pool",
        loft: "Loft with a view",
        poolArea: "Pool area",
        penthouse: "Penthouse — private terrace",
        sintra: "Sintra hills",
      },
    },
    roomDetail: {
      about: "About the room",
      capacity: "Capacity",
      bed: "Bed",
      view: "View",
      amenities: "Amenities",
      bookRoom: "Book this room",
      keepExploring: "Keep exploring",
      otherStart: "Other",
      otherAccent: "rooms",
      backHome: "Back to home",
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
        "Patio exterior del Paço do Bispo con fachada color terracota, tejado de teja y escultura de caballos en el centro del empedrado",
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
      address: "Ribeira da Penha Longa\n2710 Sintra, Portugal",
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
        house: "La casa al amanecer",
        suite: "Suite principal",
        chapel: "Lounge en la antigua capilla",
        pool: "Piscina panorámica",
        loft: "Loft con vistas",
        poolArea: "Zona de la piscina",
        penthouse: "Penthouse — terraza privada",
        sintra: "Sierra de Sintra",
      },
    },
    roomDetail: {
      about: "Sobre la habitación",
      capacity: "Capacidad",
      bed: "Cama",
      view: "Vistas",
      amenities: "Comodidades",
      bookRoom: "Reservar esta habitación",
      keepExploring: "Seguir explorando",
      otherStart: "Otras",
      otherAccent: "habitaciones",
      backHome: "Volver al inicio",
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
        "Cour extérieure du Paço do Bispo avec façade terracotta, toit de tuiles et sculpture de chevaux au centre du dallage",
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
      address: "Ribeira da Penha Longa\n2710 Sintra, Portugal",
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
        house: "La maison à l'aube",
        suite: "Suite principale",
        chapel: "Lounge dans l'ancienne chapelle",
        pool: "Piscine panoramique",
        loft: "Loft avec vue",
        poolArea: "Espace piscine",
        penthouse: "Penthouse — terrasse privée",
        sintra: "Collines de Sintra",
      },
    },
    roomDetail: {
      about: "À propos de la chambre",
      capacity: "Capacité",
      bed: "Lit",
      view: "Vue",
      amenities: "Équipements",
      bookRoom: "Réserver cette chambre",
      keepExploring: "Continuer à explorer",
      otherStart: "Autres",
      otherAccent: "chambres",
      backHome: "Retour à l'accueil",
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
