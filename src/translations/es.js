export default {
  homePage: {
    metaTitle: "Inmobiliaria Cundinamarca y Tolima | Venta de Propiedades",
    metaDescription:
      "Encuentre los mejores lotes, casas, apartamentos y fincas en venta en Cundinamarca y Tolima con el asesor Pablo Fernando Camacho. ¡Contáctenos hoy!",
  },
  header: {
    // ✅ Título con animación de bandera y borde negro
    title: 'Inversiones Inmobiliarias Cundinamarca y Tolima <span class="flag-glow">Colombia</span>',
    subtitle: {
      start:
        "Su sueño de tener propiedad comienza aquí. Asesoría experta por",
      expertName: "Pablo Fernando Camacho",
    },
      },
      propertyListings: {
        title: "Propiedades Disponibles",
        filterDepartment: "Departamento",
        filterType: "Tipo",
        departments: {
          todos: 'Todos',
          cundinamarca: 'Cundinamarca',
          tolima: 'Tolima',
        },
        types: {
          todos: 'Todos',
          casa: 'Casa',
          apartamento: 'Apartamento',
          finca: 'Finca',
          lote: 'Lote',
        },
        propertyIn: "Propiedad en",
        watchVideo: "Ver Video",
        allProperties: [
  {
    id: 1,
    type: "Casa",
    department: "Cundinamarca",
    title: "Villa de Lujo en Chía",
    price: "550.000.000",
    location: "Chía",
    area: "180 m²",
    description: `
      <ul>
        <li>Espectacular casa con jardín privado</li>
        <li>Acabados de lujo y excelente ubicación</li>
        <li>Espacios amplios e iluminación natural</li>
      </ul>
    `,
    videoId: 4
  },
  {
    id: 2,
    type: "Apartamento",
    department: "Cundinamarca",
    title: "Moderno Apartamento en Cajicá",
    price: "320.000.000",
    location: "Cajicá",
    area: "85 m²",
    description: `
      <ul>
        <li>Apartamento moderno con balcón</li>
        <li>Excelente iluminación y vista panorámica</li>
        <li>Ubicado en conjunto cerrado con zonas verdes</li>
      </ul>
    `,
    videoId: 3
  },
  {
    id: 3,
    type: "Lote",
    department: "Cundinamarca",
    title: "Lote Panorámico en Sopó",
    price: "1.200.000.000",
    location: "Sopó",
    area: "2500 m²",
    description: `
      <ul>
        <li>Amplio lote con topografía plana</li>
        <li>Ideal para construcción campestre</li>
        <li>Hermosa vista a las montañas</li>
      </ul>
    `,
    videoId: 5
  },
  {
    id: 4,
    type: "Finca",
    department: "Cundinamarca",
    title: "Finca El Remanso",
    price: "2.500.000.000",
    location: "La Calera",
    area: "5 Ha",
    description: `
      <ul>
        <li>Finca productiva con casa principal</li>
        <li>Incluye casa de mayordomo y establos</li>
        <li>Acceso pavimentado y excelentes vistas</li>
      </ul>
    `,
    videoId: 2
  },
  {
    id: 5,
    type: "Apartamento",
    department: "Cundinamarca",
    title: "Dúplex con Terraza en Zipaquirá",
    price: "410.000.000",
    location: "Zipaquirá",
    area: "110 m²",
    description: `
      <ul>
        <li>Apartamento dúplex con terraza BBQ</li>
        <li>3 habitaciones, estudio y parqueadero</li>
        <li>Ubicado cerca al centro histórico</li>
      </ul>
    `,
    videoId: 6
  },
  {
    id: 6,
    type: "Casa",
    department: "Cundinamarca",
    title: "Casa Campestre en Guatavita",
    price: "890.000.000",
    location: "Guatavita",
    area: "300 m²",
    description: `
      <ul>
        <li>Casa campestre con vista al embalse</li>
        <li>Diseño rústico moderno con chimenea</li>
        <li>Amplios jardines y zona social</li>
      </ul>
    `,
    videoId: 8
  },
  {
    id: 7,
    type: "Finca",
    department: "Cundinamarca",
    title: "Finca de Recreo 'La Ilusión'",
    price: "1.800.000.000",
    location: "Anapoima",
    area: "3 Ha",
    description: `
      <ul>
        <li>Finca de recreo con piscina y kiosko</li>
        <li>Casa principal con 5 habitaciones</li>
        <li>Zonas verdes amplias y privadas</li>
      </ul>
    `,
    videoId: 7
  },
  {
    id: 8,
    type: "Lote",
    department: "Cundinamarca",
    title: "Lote en Condominio 'El Paraíso'",
    price: "250.000.000",
    location: "Fusagasugá",
    area: "1000 m²",
    description: `
      <ul>
        <li>Lote en condominio cerrado</li>
        <li>Acceso a piscina y áreas sociales</li>
        <li>Servicios públicos disponibles</li>
      </ul>
    `,
    videoId: 13
  },
  {
    id: 9,
    type: "Casa",
    department: "Tolima",
    title: "Casa de Lujo en Ibagué",
    price: "980.000.000",
    location: "Ibagué",
    area: "350 m²",
    description: `
      <ul>
        <li>Casa de lujo en conjunto cerrado</li>
        <li>Piscina privada y amplias terrazas</li>
        <li>Diseño moderno y acabados premium</li>
      </ul>
    `,
    videoId: 1
  },
  {
    id: 10,
    type: "Apartamento",
    department: "Tolima",
    title: "Conjunto Residencial MIRAMONTE",
    price: "39.000.000",
    location: "Carmen de Apicalá",
    area: "72 m²",
    description: `
      <ul>
        <li>Proyecto MIRAMONTE - Conjunto Residencial</li>
        <li>Desde $39 millones</li>
        <li>Áreas desde 72 m²</li>
        <li>A solo 1 minuto del parque principal</li>
      </ul>
    `,
    videoId: 9,
    image: "/imagenes/miramonte.jpg"
  },
  {
    id: 11,
    type: "Finca",
    department: "Tolima",
    title: "Finca Cafetera en Melgar",
    price: "1.500.000.000",
    location: "Melgar",
    area: "10 Ha",
    description: `
      <ul>
        <li>Tradicional finca cafetera</li>
        <li>Ideal para turismo o producción agrícola</li>
        <li>Excelente clima y acceso</li>
      </ul>
    `,
    videoId: 10
  },
  {
    id: 12,
    type: "Lote",
    department: "Tolima",
    title: "Lote en Carmen de Apicalá",
    price: "39.000.000",
    location: "Carmen de Apicalá",
    area: "2400 m²",
    description: `
      <ul>
        <li>Servicios públicos disponibles</li>
        <li>A 5 minutos del centro</li>
        <li>Financiación hasta 36 meses o contado</li>
        <li>Cuota inicial desde $10.000.000</li>
        <li>Escrituras públicas y Certificado de Tradición y Libertad individual listos</li>
      </ul>
    `,
    videoId: 9,
    image: "/imagenes/Lote-2400-M.jpg"
  },
  {
    id: 13,
    type: "Casa",
    department: "Cundinamarca",
    title: "Casa Colonial en Tabio",
    price: "680.000.000",
    location: "Tabio",
    area: "220 m²",
    description: `
      <ul>
        <li>Encantadora casa estilo colonial</li>
        <li>Rodeada de naturaleza y tranquilidad</li>
        <li>Amplios corredores y chimenea</li>
      </ul>
    `,
    videoId: 15
  },
  {
    id: 14,
    type: "Apartamento",
    department: "Cundinamarca",
    title: "Apartamento Familiar",
    price: "280.000.000",
    location: "Facatativá",
    area: "75 m²",
    description: `
      <ul>
        <li>Apartamento en conjunto nuevo</li>
        <li>Parque infantil y zonas verdes</li>
        <li>Excelente iluminación natural</li>
      </ul>
    `,
    videoId: 11
  },
  {
    id: 15,
    type: "Lote",
    department: "Cundinamarca",
    title: "Oportunidad de Inversión en Tenjo",
    price: "450.000.000",
    location: "Tenjo",
    area: "1500 m²",
    description: `
      <ul>
        <li>Lote semiurbano con excelente acceso</li>
        <li>Servicios públicos disponibles</li>
        <li>Zona de alta valorización</li>
      </ul>
    `,
    videoId: 13
  },
  {
    id: 16,
    type: "Finca",
    department: "Cundinamarca",
    title: "Hacienda 'La Esmeralda'",
    price: "3.100.000.000",
    location: "Villeta",
    area: "8 Ha",
    description: `
      <ul>
        <li>Finca con cultivos de frutas tropicales</li>
        <li>Piscina natural y casa de lujo</li>
        <li>Ideal para descanso o inversión turística</li>
      </ul>
    `,
    videoId: 10
  },
  {
    id: 17,
    type: "Casa",
    department: "Tolima",
    title: "Casa de Veraneo en Girardot",
    price: "750.000.000",
    location: "Girardot",
    area: "250 m²",
    description: `
      <ul>
        <li>Casa de veraneo con piscina privada</li>
        <li>Zona BBQ y jardines amplios</li>
        <li>Ubicada en conjunto cerrado</li>
      </ul>
    `,
    videoId: 12
  },
  {
    id: 18,
    type: "Apartamento",
    department: "Tolima",
    title: "Conjunto Residencial Bella Vista",
    price: "34.000.000",
    location: "Carmen de Apicalá",
    area: "Desde 72 m²",
    description: `
      <ul>
        <li>Ubicado en en Carmen de Apicala</li>
        <li>5 minutos del parque principal</li>
        <li>Desde 72 metros cuadrados</li>
        <li>Desde 34 millones de pesos</li>
        <li>Se respeta la fachada, internamente construya como quiera</li>
        <li>390 lotes en total</li>
        <li>Cuota inicial de 3 millones, separa con 1 millon</li>
        <li>Plazo de financiación 20 meses</li>
        <li>Se entregan con vías pavimentadas, puntos de energía, acueducto, alcantarillado</li>
      </ul>
    `,
    videoId: 15,
    image: "/imagenes/conjunto_bella_vista.jpg"
  },
  {
    id: 19,
    type: "Finca",
    department: "Tolima",
    title: "Finca Ganadera en Espinal",
    price: "2.200.000.000",
    location: "Espinal",
    area: "20 Ha",
    description: `
      <ul>
        <li>Extensa finca ganadera con corrales</li>
        <li>Excelentes pastos y sistemas de riego</li>
        <li>Acceso pavimentado y buena ubicación</li>
      </ul>
    `,
    videoId: 2
  },
  {
    id: 20,
    type: "Lote",
    department: "Tolima",
    title: "Lote Campestre en Carmen de Apicalá",
    price: "190.000.000",
    location: "Carmen de Apicalá",
    area: "1000 m²",
    description: `
      <ul>
        <li>Lote en condominio cerrado</li>
        <li>Club social con piscina y canchas</li>
        <li>Ideal para casa campestre</li>
      </ul>
    `,
    videoId: 14
  },
  {
    id: 21,
    type: "Casa",
    department: "Tolima",
    title: "Chalet en Mariquita",
    price: "480.000.000",
    location: "Mariquita",
    area: "190 m²",
    description: `
      <ul>
        <li>Chalet con piscina y amplias zonas verdes</li>
        <li>Ambiente natural y tranquilo</li>
        <li>Perfecto para descanso o turismo rural</li>
      </ul>
    `,
    videoId: 8
  },
  {
    id: 22,
    type: "Casa",
    department: "Tolima",
    title: "Casa con Vista al Río",
    price: "620.000.000",
    location: "Ambalema",
    area: "210 m²",
    description: `
      <ul>
        <li>Casa con acceso directo al río</li>
        <li>Muelle privado y hermosas vistas</li>
        <li>Ideal para fines de semana</li>
      </ul>
    `,
    videoId: 4
  },
  {
    id: 23,
    type: "Apartamento",
    department: "Tolima",
    title: "Apartamento proyecto Cancún 3",
    price: "45.000.000",
    location: "Carmen de Apicalá",
    area: "Desde 72 m²",
    description: `
      <ul>
        <li>Ubicado en Carmen de Apicala Tolima</li>
        <li>A minuto y medio del parque principal </li>
        <li>Desde 72 metros cuadrados</li>
        <li>Desde 45 millones</li>
        <li>Libre construcción</li>
        <li>Financiación 24 meses</li>
        <li>Cuota inicial de 5 millones</li>
        <li>Separas con 1 millón</li>
        <li>Escrituras públicas y certificado de libertad y tradición individualidad</li>
      </ul>
    `,
    videoId: 6,
    image: "/imagenes/Proyecto_cacun_3.jpg"
  },
  {
    id: 24,
    type: "Apartamento",
    department: "Tolima",
    title: "Loft en Centro Histórico",
    price: "260.000.000",
    location: "Honda",
    area: "70 m²",
    description: `
      <ul>
        <li>Loft de diseño moderno</li>
        <li>Ubicado en el corazón del centro histórico</li>
        <li>Ambiente cálido y elegante</li>
      </ul>
    `,
    videoId: 11
  },
  {
    id: 25,
    type: "Finca",
    department: "Tolima",
    title: "Finca de Recreo 'El Oasis'",
    price: "1.950.000.000",
    location: "Melgar",
    area: "5 Ha",
    description: `
      <ul>
        <li>Finca de recreo con múltiples piscinas</li>
        <li>Toboganes y amplias zonas verdes</li>
        <li>Perfecta para turismo y descanso</li>
      </ul>
    `,
    videoId: 7
  },
  {
    id: 26,
    type: "Finca",
    department: "Tolima",
    title: "Hacienda Panelera",
    price: "2.800.000.000",
    location: "Guamo",
    area: "30 Ha",
    description: `
      <ul>
        <li>Hacienda productora de panela</li>
        <li>Incluye trapiche propio y bodegas</li>
        <li>Excelente ubicación rural</li>
      </ul>
    `,
    videoId: 10
  },
  {
    id: 27,
    type: "Lote",
    department: "Tolima",
    title: "Lote Urbano Carmen de Apicalá",
    price: "35.000.000",
    location: "Carmen de Apicalá",
    area: "124 m²",
    description: `
      <ul>
        <li>Lote listo para construir casa de 1 hasta 6 pisos</li>
        <li>Ideal para casa vacacional</li>
        <li>Terreno con excelente acceso</li>
        <li>Vía pavimentada</li>
        <li>Servicios básicos disponibles</li>
        <li>Escritura pública y certificado de tradición y libertad listos</li>
      </ul>
    `,
    videoId: 5,
    image: "/imagenes/Lote-7x18-de-fondo.jpg"
  },
  {
    id: 28,
    type: "Lote",
    department: "Tolima",
    title: "Terreno para Desarrollo",
    price: "850.000.000",
    location: "Ibagué",
    area: "5000 m²",
    description: `
      <ul>
        <li>Terreno ideal para proyecto de vivienda</li>
        <li>Zona en expansión y alta valorización</li>
        <li>Servicios públicos disponibles</li>
      </ul>
    `,
    videoId: 13
  }
]
,
      },
      agentProfile: {
        altPhoto: "Foto de Pablo Fernando Camacho",
        name: "Pablo Fernando Camacho",
        title: "Asesor Inmobiliario Experto",
        bio: "Con más de 15 años de experiencia, mi pasión es conectar a las personas con la propiedad de sus sueños. Ofrezco una asesoría integral y transparente para garantizar la mejor inversión.",
      },
      contactForm: {
        title: "Contácteme",
        subtitle: "¿Interesado en una propiedad? Envíeme un mensaje y le responderé a la brevedad.",
        nameLabel: "Nombre Completo",
        namePlaceholder: "Su nombre",
        emailLabel: "Correo Electrónico",
        emailPlaceholder: "Su correo",
        phoneLabel: "Teléfono (Opcional)",
        phonePlaceholder: "Su número de teléfono",
        messageLabel: "Mensaje",
        messagePlaceholder: "Escriba aquí su consulta...",
        submitButton: "Enviar Mensaje por Correo",
        emailSubject: "Consulta Inmobiliaria de {name}",
        emailBody: "Hola Pablo,\n\nHas recibido una nueva consulta a través de tu página web.\n\nNombre: {name}\nCorreo: {email}\nTeléfono: {phone}\n\nMensaje:\n{message}\n\n---\nEste es un mensaje automático.",
        noPhone: "No proporcionado",
        toast: {
            title: "¡Abriendo tu cliente de correo!",
            description: "Tu mensaje está listo para ser enviado. Por favor, confírmalo en tu aplicación de correo.",
        }
      },
      videosCTA: {
        title: "Explore Nuestros Videos",
        subtitle: "Vea recorridos detallados de nuestras propiedades destacadas y descubra cada rincón desde la comodidad de su hogar.",
        button: "Ver Videos de Predios",
      },
      offerBanner: {
        line1: "¡Solo con un Millón!",
        line2: "Inicia tu sueño de tener propiedad.",
      },
      footer: {
        aboutTitle: "Propiedades Cundinamarca",
        aboutText: "Tu mejor opción para encontrar lotes, casas y apartamentos en Cundinamarca. Asesoría de confianza.",
        contactTitle: "Contacto",
        location: "Cundinamarca, Colombia",
        navigationTitle: "Navegación",
        navHome: "Inicio",
        navVideos: "Videos de Predios",
        copyright: "© {year} Propiedades Cundinamarca. Todos los derechos reservados.",
      },
      videosPage: {
        metaTitle: "Videos de Propiedades | Inmobiliaria Cundinamarca",
        metaDescription: "Explore nuestros videos de propiedades en Cundinamarca. Recorridos virtuales de casas, apartamentos y fincas.",
        backToHome: "Volver al Inicio",
        title: "Videos de Propiedades",
        subtitle: "Explore recorridos virtuales de nuestras exclusivas propiedades en Cundinamarca y Tolima.",
        videoData: [
            { id: 1, title: 'Recorrido Conjunto Monte Verde', description: "Un vistazo exclusivo al lujoso Conjunto Monte Verde.", videoSrc: 'dQw4w9WgXcQ' },
            { id: 2, title: 'Finca de Ensueño en La Mesa', description: "Descubra esta hermosa finca con vistas panorámicas.", videoSrc: 'RMF--zYg-as' },
            { id: 3, title: 'Apartamento Moderno en Chía', description: "Tour completo por este apartamento con acabados de primera.", videoSrc: 'L-Esq8kzD14' },
            { id: 4, title: 'Casa Campestre en Sopó', description: "Viva la tranquilidad del campo en esta espectacular casa.", videoSrc: 'QoZjZb6v-zk' },
            { id: 5, title: 'Lote urbano Carmen de Apicalá', description: "Lote listo para construir casa de 1 hasta 6 pisos.", videoSrc: 'f2c3LcwC0Vs' },
            { id: 6, title: 'Penthouse de Lujo en Bogotá', description: "Experimente la vida en las alturas con este increíble penthouse.", videoSrc: 'YWbMsHcsB4U' },
            { id: 7, title: 'Villa de Lujo con Piscina', description: "Recorrido por una villa con diseño moderno.", videoSrc: 'N0L3uMCQFV0'},
            { id: 8, title: 'Acogedora Cabaña en el Bosque', description: "Un escape a la naturaleza en esta hermosa cabaña.", videoSrc: 'knTu5vnnThg'},
            { id: 9, title: 'Lote en Carmen de Apicalá', description: "Cuota inicial desde $10.000.000.", videoSrc: 'uXBjrIPsUdo'},
            { id: 10, title: 'Hacienda Tradicional Cafetera', description: "Explore la cultura del café en esta hacienda.", videoSrc: 'l7IX8C8_rbg'},
            { id: 11, title: 'Loft Industrial en la Ciudad', description: "Estilo y modernidad en el corazón de la ciudad.", videoSrc: '2Ar2pa5tEQk'},
            { id: 12, title: 'Casa de Playa Paradisíaca', description: "Su propio paraíso junto al mar caribe.", videoSrc: '1tkskHdTHu0'},
            { id: 13, title: 'Terreno con Vista al Volcán', description: "Oportunidad única de inversión con vistas impresionantes.", videoSrc: 'Kkob8ZhzW98'},
            { id: 14, title: 'Chalet en Montaña Nevada', description: "Disfrute del frío y la nieve en este acogedor chalet.", videoSrc: 'shXd1Vpa71c'},
            { id: 15, title: 'Conjunto Residencial Bella Vista', description: "Desde 34 millones de pesos.", videoSrc: '4LKFXXLGgl4'}
        ],
      }
    };