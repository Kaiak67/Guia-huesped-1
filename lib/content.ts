export const content = {
  es: {
    checkInOut: {
      title: "Check-in / Check-out",
      checkInTime: "2:00 PM",
      checkOutTime: "10:00 AM",
      smartLock: "La cerradura es una Yale YRL266 Slim (cerradura inteligente). El código de acceso se proporcionará por mensaje.",
      location: "El espacio es la \"Cabaña\" junto a la casa principal. Tiene entrada independiente por el costado. El número de la casa principal es #0186.",
      tip: "Busca la entrada lateral junto a la casa principal con número 0186."
    },
    wifi: {
      title: "WiFi",
      network: "Casa",
      password: "pelota1122",
      tip: "La señal es fuerte en todo el espacio."
    },
    houseRules: {
      title: "Reglas de la Casa",
      rules: [
        { icon: "🚭", rule: "No fumar", desc: "Está prohibido fumar dentro del espacio." },
        { icon: "🎉", rule: "No fiestas", desc: "No se permiten fiestas ni eventos." },
        { icon: "👥", rule: "Número de huéspedes", desc: "No más huéspedes de los especificados en la reserva." },
        { icon: "🌙", rule: "Horas de silencio", desc: "Después de medianoche hasta las 6 AM, por favor mantener el ruido al mínimo." },
        { icon: "🐾", rule: "Sin mascotas", desc: "No se permiten mascotas." },
        { icon: "🚿", rule: "Sistema de drenaje", desc: "No verter aceite ni nada que pueda obstruir el sistema por el desagüe." }
      ],
      catStory: {
        title: "🐱 El Mes Que No Queremos Vivir",
        story: "Una pequeña historia que debemos compartir: Una vez, un huésped dejó basura afuera y nuestros gatos la encontraron. ¿El resultado? Un mes COMPLETO de problemas estomacales felinos. Imagina un mes entero de... bueno, digamos que fue una \"fiesta de caca\" que nadie quería. Por favor, NUNCA dejes basura en el exterior. Nuestros gatos (y nosotros) te lo agradeceremos eternamente. 😅"
      }
    },
    heating: {
      title: "Calefacción y Clima",
      thermostat: "El termostato está ubicado en la cocina. La temperatura está en grados Celsius.",
      temperatures: [
        { situation: "Durante el día (en casa)", temp: "21-22°C" },
        { situation: "Para dormir", temp: "16-17°C o menos" },
        { situation: "Cuando salgas", temp: "18°C" }
      ],
      stove: "La estufa a gas se enciende con el chispero que está colgado en la pared."
    },
    entertainment: {
      title: "Entretenimiento",
      tv: "El televisor tiene activadas las siguientes plataformas:",
      services: [
        { name: "Netflix", icon: "📺", logo: "/images/logos/netflix.svg" },
        { name: "Disney+ Premium", icon: "✨", logo: "/images/logos/disney.svg" },
        { name: "DirecTV GO", desc: "+90 canales en vivo", icon: "📡", logo: "/images/logos/directv.svg" },
        { name: "HBO Max", icon: "🎬", logo: "/images/logos/hbo.svg" },
        { name: "Prime Video", icon: "🎥", logo: "/images/logos/prime.svg" },
        { name: "VIX", icon: "📱", logo: "/images/logos/vix.svg" },
        { name: "Pluto TV", icon: "📺", logo: "/images/logos/pluto.svg" }
      ],
      tip: "Usa el control remoto del televisor para navegar entre las aplicaciones."
    },
    kitchen: {
      title: "Cocina y Electrodomésticos",
      items: [
        "Refrigerador",
        "Microondas",
        "Hervidor eléctrico",
        "Tostadora",
        "Máquina de café Nespresso (Dolce Gusto)",
        "Utensilios completos de cocina"
      ],
      trash: "El basurero está debajo del lavaplatos. Los productos de limpieza están en el mismo lugar.",
      cleaning: "Por favor, no limpiar el piso con paños o toallas.",
      emergencyKits: "Hay un kit de emergencias femenino y un kit de primeros auxilios para heridas menores. Por favor usar solo si es estrictamente necesario. ¡Gracias! 🙏"
    },
    trash: {
      title: "Basura y Reciclaje",
      departure: "Al salir, la basura debe quedar en el basurero, ojalá sellada (con nudo en la bolsa).",
      glass: "Si hay botellas de vidrio, dejarlas fuera de la bolsa de basura para que las reciclemos.",
      collection: "El camión de basura pasa los Lunes, Miércoles y Viernes, antes de mediodía (a veces pasa durante la tarde).",
      tip: "Para saber si ya pasó el camión, verifica si los vecinos tienen bolsas de basura en sus portones. Si tienen, no ha pasado. Si no tienen, ya pasó.",
      warning: "⚠️ NUNCA dejes basura afuera. Tenemos mascotas que pueden comerla y enfermarse gravemente."
    },
    parking: {
      title: "Estacionamiento",
      free: "El estacionamiento es gratuito en toda la zona.",
      recommended: "Se recomienda estacionar al frente del espacio o un poco más adelante hasta la entrada de vehículos del vecino (sin bloquearla).",
      alternative: "Si no hay lugar disponible, toda la cuadra y el barrio es muy seguro. Buscar un espacio cerca es tan seguro como dejarlo al frente del espacio."
    },
    emergency: {
      title: "Información de Emergencia",
      hosts: [
        { name: "Patricio (Anfitrión principal)", phone: "+56 9 8424 1171" },
        { name: "Carolina (Co-anfitriona)", phone: "+56 9 8524 9042" }
      ],
      hospitals: [
        { type: "Hospital Público", name: "Hospital Clínico Magallanes", address: "Av. Los Flamencos 01364", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hospital+Cl%C3%ADnico+Magallanes+Punta+Arenas" },
        { type: "Clínica Privada", name: "Clínica RedSalud Magallanes", address: "Av. Pdte. Manuel Bulnes 1448", note: "Entrada por Av. España para urgencias después de medianoche.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+RedSalud+Magallanes+Punta+Arenas" },
        { type: "Hospital de las Fuerzas Armadas", name: "Hospital de las FF.AA.", address: "Av. Pdte. Manuel Bulnes 0256", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hospital+de+las+FF.AA.+Punta+Arenas+Chile" }
      ],
      emergencyNumbers: [
        { service: "Ambulancia", number: "131" },
        { service: "Bomberos", number: "132" },
        { service: "Carabineros (Policía)", number: "133" },
        { service: "PDI (Policía de Investigaciones)", number: "134" }
      ]
    },
    departure: {
      title: "Instrucciones de Salida",
      instructions: [
        { task: "Estirar las camas", desc: "Por favor NO ordenar las camas, solo estirarlas (strip beds)." },
        { task: "Toallas usadas", desc: "Dejar las toallas utilizadas encima de la cama principal (la más grande)." },
        { task: "Basura", desc: "Dejar la basura amarrada dentro del basurero." },
        { task: "Loza", desc: "Lavar la loza es opcional, ¡se agradece si sucede!" },
        { task: "Comunicar daños", desc: "Por favor avisar si algo se rompe durante la estadía. Es mejor enterarnos por ustedes que encontrar la sorpresa después." },
        { task: "Manchas", desc: "Si hay alguna mancha crítica (sangre, tinta, vino, esmalte de uñas), por favor hacérnoslo saber." }
      ],
      message: "Este espacio está siendo mejorado y adecuado de acuerdo a los feedbacks que nos dan. Agradecemos sus comentarios para poder mejorar continuamente. 🙏"
    },
    hosts: {
      title: "Conoce a tus Anfitriones",
      message: "Somos Patricio y Carolina, y estaremos encantados de ser sus anfitriones. Este espacio ha sido preparado para que se sienta como su hogar durante los próximos días. Ponemos mucha dedicación y cariño en que la cabaña esté siempre limpia, ordenada, bonita y con un aroma agradable, además de otros pequeños detalles que irá descubriendo.\n\nSolo le pedimos, por favor, que cuide el espacio con el mismo respeto con el que fue entregado. El excelente estado de la cabaña es gracias a ese cuidado constante y también a la colaboración de nuestros huéspedes anteriores, lo que permite que usted hoy pueda disfrutarla tanto como ellos.\n\nSi durante su estadía surge cualquier duda, problema o necesita ayuda, no dude en contactarnos. Estamos aquí para lo que necesite.\n\n¡Esperamos que disfrute mucho su estadía!",
      contacts: [
        { name: "Patricio", role: "Anfitrión principal", phone: "+56 9 8424 1171" },
        { name: "Carolina", role: "Co-anfitriona", phone: "+56 9 8524 9042" }
      ]
    },
    extraServices: {
      title: "Servicios Adicionales",
      message: "Próximamente agregaremos información sobre servicios adicionales como arriendo de autos y ofertas especiales.",
      items: []
    }
  },
  en: {
    checkInOut: {
      title: "Check-in / Check-out",
      checkInTime: "2:00 PM",
      checkOutTime: "10:00 AM",
      smartLock: "The lock is a Yale YRL266 Slim (smart lock). The access code will be provided via message.",
      location: "The space is the \"Cabin\" next to the main house. It has its own independent entrance on the side. The main house number is #0186.",
      tip: "Look for the side entrance next to the main house numbered 0186."
    },
    wifi: {
      title: "WiFi",
      network: "Casa",
      password: "pelota1122",
      tip: "Signal is strong throughout the space."
    },
    houseRules: {
      title: "House Rules",
      rules: [
        { icon: "🚭", rule: "No smoking", desc: "Smoking is prohibited inside the space." },
        { icon: "🎉", rule: "No parties", desc: "No parties or events allowed." },
        { icon: "👥", rule: "Number of guests", desc: "No more guests than specified in the reservation." },
        { icon: "🌙", rule: "Quiet hours", desc: "After midnight until 6 AM, please keep noise to a minimum." },
        { icon: "🐾", rule: "No pets", desc: "Pets are not allowed." },
        { icon: "🚿", rule: "Drainage system", desc: "Do not pour oil or anything that could clog the system down the drain." }
      ],
      catStory: {
        title: "🐱 The Month We Don't Want to Relive",
        story: "A little story we must share: Once, a guest left trash outside and our cats found it. The result? A FULL month of feline stomach problems. Imagine a whole month of... well, let's just say it was a \"poop party\" that nobody wanted. Please, NEVER leave trash outside. Our cats (and us) will be eternally grateful. 😅"
      }
    },
    heating: {
      title: "Heating & Climate",
      thermostat: "The thermostat is located in the kitchen. Temperature is in Celsius.",
      temperatures: [
        { situation: "During the day (at home)", temp: "21-22°C" },
        { situation: "For sleeping", temp: "16-17°C or less" },
        { situation: "When going out", temp: "18°C" }
      ],
      stove: "The gas stove is lit with the lighter hanging on the wall."
    },
    entertainment: {
      title: "Entertainment",
      tv: "The TV has the following platforms activated:",
      services: [
        { name: "Netflix", icon: "📺", logo: "/images/logos/netflix.svg" },
        { name: "Disney+ Premium", icon: "✨", logo: "/images/logos/disney.svg" },
        { name: "DirecTV GO", desc: "+90 live channels", icon: "📡", logo: "/images/logos/directv.svg" },
        { name: "HBO Max", icon: "🎬", logo: "/images/logos/hbo.svg" },
        { name: "Prime Video", icon: "🎥", logo: "/images/logos/prime.svg" },
        { name: "VIX", icon: "📱", logo: "/images/logos/vix.svg" },
        { name: "Pluto TV", icon: "📺", logo: "/images/logos/pluto.svg" }
      ],
      tip: "Use the TV remote to navigate between apps."
    },
    kitchen: {
      title: "Kitchen & Appliances",
      items: [
        "Refrigerator",
        "Microwave",
        "Electric kettle",
        "Toaster",
        "Nespresso coffee machine (Dolce Gusto)",
        "Complete kitchen utensils"
      ],
      trash: "The trash can is under the sink. Cleaning products are in the same place.",
      cleaning: "Please don't clean the floor with cloths or towels.",
      emergencyKits: "There's a feminine emergency kit and a first aid kit for minor injuries. Please use only if strictly necessary. Thank you! 🙏"
    },
    trash: {
      title: "Trash & Recycling",
      departure: "When leaving, trash should be in the trash can, preferably sealed (tied bag).",
      glass: "If there are glass bottles, leave them outside the trash bag so we can recycle them.",
      collection: "The garbage truck comes on Mondays, Wednesdays, and Fridays, before noon (sometimes in the afternoon).",
      tip: "To know if the truck has passed, check if neighbors have trash bags at their gates. If they do, it hasn't passed. If they don't, it already has.",
      warning: "⚠️ NEVER leave trash outside. We have pets that could eat it and get seriously ill."
    },
    parking: {
      title: "Parking",
      free: "Parking is free throughout the area.",
      recommended: "It's recommended to park in front of the space or a bit further up to the neighbor's vehicle entrance (without blocking it).",
      alternative: "If there's no available spot, the entire block and neighborhood is very safe. Finding a spot nearby is just as safe as parking in front of the space."
    },
    emergency: {
      title: "Emergency Information",
      hosts: [
        { name: "Patricio (Main host)", phone: "+56 9 8424 1171" },
        { name: "Carolina (Co-host)", phone: "+56 9 8524 9042" }
      ],
      hospitals: [
        { type: "Public Hospital", name: "Hospital Clínico Magallanes", address: "Av. Los Flamencos 01364", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hospital+Cl%C3%ADnico+Magallanes+Punta+Arenas" },
        { type: "Private Clinic", name: "Clínica RedSalud Magallanes", address: "Av. Pdte. Manuel Bulnes 1448", note: "Enter via Av. España for emergencies after midnight.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+RedSalud+Magallanes+Punta+Arenas" },
        { type: "Armed Forces Hospital", name: "Hospital de las FF.AA.", address: "Av. Pdte. Manuel Bulnes 0256", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hospital+de+las+FF.AA.+Punta+Arenas+Chile" }
      ],
      emergencyNumbers: [
        { service: "Ambulance", number: "131" },
        { service: "Fire Department", number: "132" },
        { service: "Carabineros (Police)", number: "133" },
        { service: "PDI (Investigation Police)", number: "134" }
      ]
    },
    departure: {
      title: "Departure Instructions",
      instructions: [
        { task: "Strip the beds", desc: "Please DO NOT make the beds, just strip them." },
        { task: "Used towels", desc: "Leave used towels on the main bed (the largest one)." },
        { task: "Trash", desc: "Leave the trash tied up inside the trash can." },
        { task: "Dishes", desc: "Washing dishes is optional, but appreciated!" },
        { task: "Report damage", desc: "Please let us know if something breaks during your stay. It's better to hear from you than to find the surprise later." },
        { task: "Stains", desc: "If there's a critical stain (blood, ink, wine, nail polish), please let us know." }
      ],
      message: "This space is being improved based on the feedback we receive. We appreciate your comments to help us continuously improve. 🙏"
    },
    hosts: {
      title: "Meet Your Hosts",
      message: "We are Patricio and Carolina, and we'll be delighted to be your hosts. This space has been prepared so you can feel at home during the next few days. We put a lot of dedication and care into keeping the cabin always clean, organized, beautiful, and with a pleasant aroma, along with other small details you'll discover.\n\nWe only ask you, please, to take care of the space with the same respect with which it was given to you. The excellent condition of the cabin is thanks to that constant care and also the collaboration of our previous guests, which allows you today to enjoy it as much as they did.\n\nIf during your stay you have any questions, problems, or need help, don't hesitate to contact us. We're here for whatever you need.\n\nWe hope you enjoy your stay!",
      contacts: [
        { name: "Patricio", role: "Main host", phone: "+56 9 8424 1171" },
        { name: "Carolina", role: "Co-host", phone: "+56 9 8524 9042" }
      ]
    },
    extraServices: {
      title: "Extra Services",
      message: "Coming soon: information about additional services like car rentals and special offers.",
      items: []
    }
  }
};

export const restaurants = {
  es: [
    {
      id: 1,
      name: "La Yegua Loca",
      type: "Cocina de autor",
      description: "Su cocina es de autor, con preparaciones que varían de acuerdo a la temporada. Se caracterizan por usar ingredientes de calidad, frescos.",
      priceRange: "$15.000 - $30.000 CLP",
      address: "Fagnano 310",
      phone: "+56 9 7172 0877",
      hours: "Almuerzo: Lun-Dom 12:00-15:00 | Cena: 18:00-21:30 (horarios varían por salón)",
      recommendation: "Personalmente es mi elección N°1 porque cada vez que he ido jamás he tenido un problema y su constancia en servicio es impecable. Para ocasiones especiales, celebraciones. Se puede reservar a través de WhatsApp. Se recomienda reservar en \"La Pérgola\" para visual hacia la ciudad y el Estrecho de Magallanes.",
      link: "https://uqr.to/pmi7",
      image: "/images/la_yegua_loca.jpg",
      coords: { lat: -53.1548, lng: -70.9107 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Yegua+Loca+Punta+Arenas",
      honorable: false
    },
    {
      id: 2,
      name: "Taberna Club de la Unión",
      type: "Cocina chilena tradicional",
      description: "La Taverna se destaca por su ubicación y cocina tradicional chilena con toques propios. Ubicado en el Palacio de Sara Braun en plena Plaza de Armas, se encuentra en el piso inferior menos 1.",
      priceRange: "$10.000 - $30.000 CLP",
      address: "Pdte. Pedro Montt 701-799",
      phone: "(61) 222 2777",
      hours: "Consultar horarios",
      recommendation: "Muy buen local para conversar, compartir una cerveza, unas papas fritas ovejero y empaparse de la historia local en el palacio de la mujer más rica de la Patagonia a comienzos del 1900. Se recomienda reservar o ir antes de las 21 hrs porque a esa hora se llena, especialmente los fines de semana.",
      link: "https://tabernabar.cl/",
      image: "/images/la_taverna.jpg",
      coords: { lat: -53.1638, lng: -70.9069 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Taberna+Club+de+la+Union+Punta+Arenas",
      honorable: false
    },
    {
      id: 3,
      name: "HDM Cervecería",
      type: "Pub / Cervecería artesanal",
      description: "Pub/restaurant con menos de 2 años en la zona que ha logrado posicionarse como una excelente opción para degustar cervezas de fabricación local, comer unas papas fritas con salsa cheddar, distintos tipos de milanesas de cerdo con preparaciones únicas.",
      priceRange: "$8.000 - $20.000 CLP",
      address: "Mario Toledo Viola 220",
      phone: "Consultar",
      hours: "Lun-Mié 17:30-01:00 | Jue-Sáb 17:30-02:00 | Dom 13:00-22:00",
      recommendation: "Personalmente es mi lugar favorito para compartir un pisco sour, unas papas fritas cheddar y buena música. Muy buena barra, música adecuada, estilo informal para compartir con quien tú quieras. Sugiero el Pork Mila 2.0 si gustas de la carne.",
      link: "https://cervezamagallanes.cl/",
      image: "/images/hdm_cerveceria.jpg",
      coords: { lat: -53.1625, lng: -70.9055 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=HDM+Cerveceria+Punta+Arenas",
      honorable: false
    },
    {
      id: 4,
      name: "La Luna",
      type: "Restaurant turístico clásico",
      description: "Clásico restaurant de turismo de la zona con opciones de Menú diario (almuerzo fijo a un costo menor). Podrás probar el clásico Chupe de Centolla (Centolla, crema, pan, especias y queso parmesano como capa superior cocinado al horno en un plato de greda).",
      priceRange: "$10.000 - $25.000 CLP",
      address: "Libertador Bernardo O'Higgins #1017",
      phone: "+56 9 6703 1060",
      hours: "12:00-16:00 | 17:00-22:00 (excepto domingos)",
      recommendation: "Un restaurant clásico de turismo, muy agradable a la vista, la decoración del lugar es muy interesante. Las preparaciones son clásicas, el cordero también debe ser mencionado en esta área del planeta.",
      link: "https://qr.recafy.com/en/lalunarestaurante/menu/5457/",
      image: "/images/la_luna.jpg",
      coords: { lat: -53.1622, lng: -70.9108 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Luna+Restaurant+Punta+Arenas",
      honorable: false
    },
    {
      id: 5,
      name: "Mesita Grande",
      type: "Pastas y Pizzas",
      description: "Como la pasta no puede faltar en ningún lugar, les dejo el mejor lugar para comer pastas y pizzas. Su gran mesa para compartir con quienes están comiendo hace honor a su nombre, hornos adecuados para pizzas, pastas caseras y una atención que destaca.",
      priceRange: "$15.000 - $30.000 CLP",
      address: "Libertador Bernardo O'Higgins #1001",
      phone: "+56 9 5378 8200",
      hours: "Lun-Sáb 12:00-22:00 | Dom y festivos 12:00-21:30",
      recommendation: "En plena esquina, destaca por su cocina específica y grato ambiente para compartir en familia o con amigos a toda hora. ¡Si van a Puerto Natales, también hay una sucursal allá (la de Puerto Natales es mucho mejor! 😉)",
      link: "https://mesitagrande.cl/menu-online-puq/",
      image: "/images/mesita_grande.jpg",
      coords: { lat: -53.1620, lng: -70.9115 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Mesita+Grande+Punta+Arenas",
      honorable: false
    },
    {
      id: 6,
      name: "Be Happy",
      type: "Café inclusivo",
      description: "Un restaurante muy local, inclusivo para todas las tribus. Destaca su menú a la hora de almuerzo que incluye jugo, sopa o crema, fondo y postre (2 opciones: carnívora y vegana). Definitivamente el menú más creativo que puedes encontrar.",
      priceRange: "~$10.000 CLP (menú completo)",
      address: "Lautaro Navarro 739",
      phone: "(61) 228 9620",
      hours: "Lun-Vie 08:30-19:30 | Sáb 08:00-15:00 | Dom 08:00-16:00",
      recommendation: "Lugar acogedor con muy buena vibra, se siente fresco al entrar, luminoso. Si quieres un almuerzo diferente a todo lo ofrecido, debes visitar Be Happy. En su Instagram entregan diariamente las opciones de Menú.",
      link: "https://www.instagram.com/behappycafe.puq/?hl=es",
      image: "/images/be_happy_cafe.jpg",
      coords: { lat: -53.1632, lng: -70.9082 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Be+Happy+Cafe+Punta+Arenas",
      honorable: true
    }
  ],
  en: [
    {
      id: 1,
      name: "La Yegua Loca",
      type: "Author cuisine",
      description: "Their cuisine is author-style, with preparations that vary according to the season. They're characterized by using fresh, quality ingredients.",
      priceRange: "$15,000 - $30,000 CLP (~$15-30 USD)",
      address: "Fagnano 310",
      phone: "+56 9 7172 0877",
      hours: "Lunch: Mon-Sun 12:00-15:00 | Dinner: 18:00-21:30 (times vary by room)",
      recommendation: "Personally, it's my #1 choice because every time I've been there I've never had a problem and their service consistency is impeccable. For special occasions and celebrations. You can reserve via WhatsApp. We recommend reserving in \"La Pérgola\" for views of the city and the Strait of Magellan.",
      link: "https://uqr.to/pmi7",
      image: "/images/la_yegua_loca.jpg",
      coords: { lat: -53.1548, lng: -70.9107 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Yegua+Loca+Punta+Arenas",
      honorable: false
    },
    {
      id: 2,
      name: "Taberna Club de la Unión",
      type: "Traditional Chilean cuisine",
      description: "La Taverna stands out for its location and traditional Chilean cuisine with its own twist. Located in the Sara Braun Palace right on the main square, on floor minus 1.",
      priceRange: "$10,000 - $30,000 CLP (~$10-30 USD)",
      address: "Pdte. Pedro Montt 701-799",
      phone: "(61) 222 2777",
      hours: "Check schedule",
      recommendation: "Great place to chat, share a beer, some \"ovejero\" fries and immerse yourself in local history at the palace of the richest woman in Patagonia in the early 1900s. We recommend reserving or going before 9 PM as it fills up, especially on weekends.",
      link: "https://tabernabar.cl/",
      image: "/images/la_taverna.jpg",
      coords: { lat: -53.1638, lng: -70.9069 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Taberna+Club+de+la+Union+Punta+Arenas",
      honorable: false
    },
    {
      id: 3,
      name: "HDM Cervecería",
      type: "Pub / Craft brewery",
      description: "Pub/restaurant with less than 2 years in the area that has positioned itself as an excellent option for tasting locally brewed beers, cheddar fries, and various unique pork schnitzel preparations.",
      priceRange: "$8,000 - $20,000 CLP (~$8-20 USD)",
      address: "Mario Toledo Viola 220",
      phone: "Check",
      hours: "Mon-Wed 17:30-01:00 | Thu-Sat 17:30-02:00 | Sun 13:00-22:00",
      recommendation: "Personally, it's my favorite place for a pisco sour, cheddar fries, and good music. Great bar, appropriate music, informal style to share with whoever you want. I suggest the Pork Mila 2.0 if you like meat.",
      link: "https://cervezamagallanes.cl/",
      image: "/images/hdm_cerveceria.jpg",
      coords: { lat: -53.1625, lng: -70.9055 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=HDM+Cerveceria+Punta+Arenas",
      honorable: false
    },
    {
      id: 4,
      name: "La Luna",
      type: "Classic tourist restaurant",
      description: "Classic tourist restaurant in the area with daily menu options (fixed lunch at lower cost). You can try the classic Chupe de Centolla (King crab with cream, bread, spices, and parmesan cheese baked in a clay dish).",
      priceRange: "$10,000 - $25,000 CLP (~$10-25 USD)",
      address: "Libertador Bernardo O'Higgins #1017",
      phone: "+56 9 6703 1060",
      hours: "12:00-16:00 | 17:00-22:00 (except Sundays)",
      recommendation: "A classic tourist restaurant, very pleasant to the eye, the decor is very interesting. The preparations are classic, lamb must also be mentioned in this area of the planet.",
      link: "https://qr.recafy.com/en/lalunarestaurante/menu/5457/",
      image: "/images/la_luna.jpg",
      coords: { lat: -53.1622, lng: -70.9108 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Luna+Restaurant+Punta+Arenas",
      honorable: false
    },
    {
      id: 5,
      name: "Mesita Grande",
      type: "Pasta & Pizza",
      description: "Since pasta can't be missing anywhere, here's the best place for pasta and pizza. Their large communal table lives up to its name, proper pizza ovens, homemade pasta, and outstanding service.",
      priceRange: "$15,000 - $30,000 CLP (~$15-30 USD)",
      address: "Libertador Bernardo O'Higgins #1001",
      phone: "+56 9 5378 8200",
      hours: "Mon-Sat 12:00-22:00 | Sun & holidays 12:00-21:30",
      recommendation: "Right on the corner, it stands out for its specific cuisine and pleasant atmosphere for sharing with family or friends at any time. If you go to Puerto Natales, there's also a branch there (Puerto Natales is much better! 😉)",
      link: "https://mesitagrande.cl/menu-online-puq/",
      image: "/images/mesita_grande.jpg",
      coords: { lat: -53.1620, lng: -70.9115 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Mesita+Grande+Punta+Arenas",
      honorable: false
    },
    {
      id: 6,
      name: "Be Happy",
      type: "Inclusive café",
      description: "A very local restaurant, inclusive for all tribes. Their lunch menu stands out, including juice, soup or cream, main dish, and dessert (2 options: meat and vegan). Definitely the most creative menu you can find.",
      priceRange: "~$10,000 CLP (~$10 USD full menu)",
      address: "Lautaro Navarro 739",
      phone: "(61) 228 9620",
      hours: "Mon-Fri 08:30-19:30 | Sat 08:00-15:00 | Sun 08:00-16:00",
      recommendation: "Cozy place with great vibes, feels fresh when you enter, bright. If you want a lunch different from everything offered, you must visit Be Happy. They post daily menu options on their Instagram.",
      link: "https://www.instagram.com/behappycafe.puq/?hl=es",
      image: "/images/be_happy_cafe.jpg",
      coords: { lat: -53.1632, lng: -70.9082 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Be+Happy+Cafe+Punta+Arenas",
      honorable: true
    }
  ]
};

export const touristPlaces = {
  es: [
    {
      id: 1,
      name: "Plaza de Armas",
      type: "Plaza / Parque",
      address: "Centro de la ciudad",
      hours: "Siempre abierta",
      entryFee: "Gratis",
      description: "La plaza ubicada en el centro de la ciudad es el centro neurálgico donde se puede ver lo diferente que es Punta Arenas versus el resto del país. En la mitad de la plaza está la estatua a quien en 1520 descubriera el estrecho que lleva su nombre, Hernando de Magallanes.",
      highlight: "A un lado hay un nativo que según la leyenda, si besas o tocas su dedo del pie, volverás a la Patagonia. La arquitectura que recuerda edificios de Europa está influenciada por los inmigrantes que llegaron desde el viejo continente a finales y comienzos del 1800 y 1900 respectivamente.",
      tip: "Punto de parada obligado para cualquier city tour, por ende habrá actividad durante temporada alta. Mención honorable al Palacio de Sara Braun ubicado en una esquina. ¿Podrás identificarlo?",
      image: "/images/plaza_de_armas.jpg",
      coords: { lat: -53.1638, lng: -70.9069 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+de+Armas+Punta+Arenas"
    },
    {
      id: 2,
      name: "Mirador Cerro de la Cruz",
      type: "Mirador",
      address: "Manuel Señoret 1012",
      hours: "Siempre abierto",
      entryFee: "Gratis",
      description: "Por su cercanía a la Plaza de Armas (solo unos 5 min caminando) está ubicado el mirador de la ciudad \"Cerro de la Cruz\". Con una vista inigualable hacia la ciudad y el Estrecho de Magallanes bañándola.",
      highlight: "Nos muestra hacia el horizonte, si es que el clima lo permite, apreciar también la Tierra del Fuego, la isla más grande de la Patagonia.",
      tip: "Se sugiere visitar este lugar primero y después \"bajar\" (ir hacia el mar) para llegar a la Plaza de Armas. Bajar por el lado derecho de la vereda porque a mitad de cuadra encontrarán una casa con muchas flores, la dueña es muy amable. Ahí mismo también está ubicado el restaurante La Yegua Loca. ¿Podrás encontrarlo?",
      image: "/images/mirador_cerro_cruz.jpg",
      coords: { lat: -53.1575, lng: -70.9085 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Mirador+Cerro+de+la+Cruz+Punta+Arenas"
    },
    {
      id: 3,
      name: "Cementerio de Punta Arenas",
      type: "Cementerio histórico",
      address: "Av. Pdte. Manuel Bulnes 29",
      hours: "Lun-Dom 8:00-19:00",
      entryFee: "7 USD (extranjeros)",
      description: "Hace unos años el cementerio fue calificado dentro de los 10 cementerios más hermosos del mundo de acuerdo a un top ten de la CNN. Este lugar refleja lo que fue la época dorada de Punta Arenas (1890-1920).",
      highlight: "Un puñado de familias de inmigrantes eran los dueños de prácticamente toda la Patagonia y reflejaban sus fortunas no solo a través de los palacios y edificios cercanos a la Plaza de Armas sino también en sus hermosos mausoleos. Se sugiere visitar el mausoleo de Sara Braun (el más grande del cementerio, ubicado lejos de los mausoleos centrales).",
      tip: "Si has ido alguna vez a Buenos Aires y visitaste el Cementerio de Recoleta, ese cementerio obtuvo el segundo lugar en el ranking mencionado. Por último, si eres visitante y no quieres que te cobren, utiliza las entradas laterales en vez de la principal.",
      image: "/images/cementerio.jpg",
      coords: { lat: -53.1482, lng: -70.9152 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Cementerio+Municipal+Punta+Arenas"
    },
    {
      id: 4,
      name: "Museo Nao Victoria",
      type: "Museo marítimo",
      address: "7,5 km hacia el norte por la ruta Y-565 a Río Seco (Código Plus: V4VC+35)",
      hours: "09:00 - 19:00",
      entryFee: "$8.000 CLP (chilenos) / $10.000 CLP (extranjeros)",
      description: "Uno de los museos mejor logrados de la zona. Si gustas de la historia y la navegación, este es tu lugar. Con réplicas a escala real de la Nao Victoria (la primera nave que dio la vuelta al mundo) utilizada en la expedición de Hernando de Magallanes.",
      highlight: "Réplica del H.M.S Beagle donde viajó Charles Darwin. La Goleta Ancud con la que Chile reclamó el Estrecho de Magallanes en 1848. El James Caird, la embarcación liderada por Ernest Shackleton con la que navegó más de 1.500 km buscando ayuda en el Círculo Antártico.",
      tip: "No hay transporte público que llegue al museo, puedes utilizar taxi o Uber para llegar. Si está ventoso, abrígate, es un museo al aire libre. Tienen audioguía en diferentes idiomas.",
      image: "/images/museo_nao_victoria.jpg",
      coords: { lat: -53.1105, lng: -70.8688 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Museo+Nao+Victoria+Punta+Arenas"
    },
    {
      id: 5,
      name: "Modulo Central Zona Franca",
      type: "Mall / Centro comercial duty-free",
      address: "Av. Bulnes Km. 3,5 Norte (Código Plus: V48F+J8)",
      hours: "11:00 - 20:00",
      entryFee: "Gratis",
      description: "La recomiendo por ser un lugar clásico de compras para visitantes y locales. Todo \"sin IVA\". Lugar de esparcimiento con cine, bowling, pista de hielo y juegos para niños.",
      highlight: "Un sin fin de posibilidades para gastar una tarde o un día: múltiples lugares para comer, videojuegos, camas elásticas, pista de hielo, cine y bowling.",
      tip: "El módulo central contiene la mayoría de las atracciones. Para artículos tecnológicos: NewArk, Sánchez y Sánchez. Para ropa outdoor: Balfer (tienen una tienda grande fuera del módulo central). Para cervezas y alimentos importados, destaco las cervezas, té, hierbas y especias.",
      image: "/images/zona_franca.jpg",
      coords: { lat: -53.1358, lng: -70.9162 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Modulo+Central+Zona+Franca+Punta+Arenas"
    }
  ],
  en: [
    {
      id: 1,
      name: "Plaza de Armas",
      type: "Plaza / Park",
      address: "City center",
      hours: "Always open",
      entryFee: "Free",
      description: "The plaza located in the city center is the nerve center where you can see how different Punta Arenas is from the rest of the country. In the middle of the plaza is the statue of the man who in 1520 discovered the strait that bears his name, Ferdinand Magellan.",
      highlight: "On one side there's a native figure - according to legend, if you kiss or touch his toe, you'll return to Patagonia. The architecture reminiscent of European buildings was influenced by immigrants who arrived from the old continent in the late 1800s and early 1900s.",
      tip: "Mandatory stop for any city tour, so there will be activity during high season. Honorable mention to Sara Braun Palace located on one corner. Can you identify it?",
      image: "/images/plaza_de_armas.jpg",
      coords: { lat: -53.1638, lng: -70.9069 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+de+Armas+Punta+Arenas"
    },
    {
      id: 2,
      name: "Cerro de la Cruz Viewpoint",
      type: "Viewpoint",
      address: "Manuel Señoret 1012",
      hours: "Always open",
      entryFee: "Free",
      description: "Due to its proximity to Plaza de Armas (only about 5 min walking), here's the city viewpoint \"Cerro de la Cruz\". With an unparalleled view of the city and the Strait of Magellan.",
      highlight: "On the horizon, weather permitting, you can also see Tierra del Fuego, the largest island in Patagonia.",
      tip: "We suggest visiting this place first and then \"going down\" (toward the sea) to reach Plaza de Armas. Go down on the right side of the sidewalk because halfway down the block you'll find a house with many flowers, the owner is very kind. Restaurant La Yegua Loca is also located there. Can you find it?",
      image: "/images/mirador_cerro_cruz.jpg",
      coords: { lat: -53.1575, lng: -70.9085 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Mirador+Cerro+de+la+Cruz+Punta+Arenas"
    },
    {
      id: 3,
      name: "Punta Arenas Cemetery",
      type: "Historic cemetery",
      address: "Av. Pdte. Manuel Bulnes 29",
      hours: "Mon-Sun 8:00-19:00",
      entryFee: "7 USD (foreigners)",
      description: "A few years ago the cemetery was ranked among the 10 most beautiful cemeteries in the world according to a CNN top ten. This place reflects what was the golden age of Punta Arenas (1890-1920).",
      highlight: "A handful of immigrant families owned practically all of Patagonia and reflected their fortunes not only through the palaces and buildings near Plaza de Armas but also in their beautiful mausoleums. We suggest visiting Sara Braun's mausoleum (the largest in the cemetery, located away from the central mausoleums).",
      tip: "If you've ever been to Buenos Aires and visited Recoleta Cemetery, that cemetery came second in the mentioned ranking. Finally, if you're a visitor and don't want to pay, use the side entrances instead of the main one.",
      image: "/images/cementerio.jpg",
      coords: { lat: -53.1482, lng: -70.9152 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Cementerio+Municipal+Punta+Arenas"
    },
    {
      id: 4,
      name: "Nao Victoria Museum",
      type: "Maritime museum",
      address: "7.5 km north on route Y-565 to Río Seco (Plus Code: V4VC+35)",
      hours: "09:00 - 19:00",
      entryFee: "$8,000 CLP (Chileans) / $10,000 CLP (foreigners)",
      description: "One of the best museums in the area. If you enjoy history and navigation, this is your place. With full-scale replicas of the Nao Victoria (the first ship to circumnavigate the globe) used in Ferdinand Magellan's expedition.",
      highlight: "Replica of the H.M.S Beagle where Charles Darwin traveled. The Goleta Ancud with which Chile claimed the Strait of Magellan in 1848. The James Caird, the boat led by Ernest Shackleton with which he sailed more than 1,500 km seeking help in the Antarctic Circle.",
      tip: "There's no public transport to the museum, you can use a taxi or Uber to get there. If it's windy, bundle up, it's an outdoor museum. They have audio guides in different languages.",
      image: "/images/museo_nao_victoria.jpg",
      coords: { lat: -53.1105, lng: -70.8688 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Museo+Nao+Victoria+Punta+Arenas"
    },
    {
      id: 5,
      name: "Modulo Central Zona Franca",
      type: "Mall / Duty-free shopping center",
      address: "Av. Bulnes Km. 3.5 North (Plus Code: V48F+J8)",
      hours: "11:00 - 20:00",
      entryFee: "Free",
      description: "I recommend it as a classic shopping place for visitors and locals. Everything \"tax-free\". Entertainment with cinema, bowling, ice rink, and games for kids.",
      highlight: "Endless possibilities to spend an afternoon or a day: multiple places to eat, video games, trampolines, ice rink, cinema, and bowling.",
      tip: "The central module contains most attractions. For tech items: NewArk, Sánchez y Sánchez. For outdoor clothing: Balfer (they have a large store outside the central module). For imported beers and food, I highlight beers, tea, herbs, and spices.",
      image: "/images/zona_franca.jpg",
      coords: { lat: -53.1358, lng: -70.9162 },
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Modulo+Central+Zona+Franca+Punta+Arenas"
    }
  ]
};
