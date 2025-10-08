
import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { MapPin, Maximize, Video } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import VideoPlayerModal from '@/components/VideoPlayerModal';

    const allProperties = [
      { id: 1, type: "Casa", department: "Cundinamarca", title: "Villa de Lujo en Chía", price: "550.000.000", location: "Chía", area: "180 m²", description: "Espectacular casa con jardín privado y acabados de lujo.", videoId: 4 },
      { id: 2, type: "Apartamento", department: "Cundinamarca", title: "Moderno Apartamento en Cajicá", price: "320.000.000", location: "Cajicá", area: "85 m²", description: "Apartamento con balcón, excelente iluminación y vista.", videoId: 3 },
      { id: 3, type: "Lote", department: "Cundinamarca", title: "Lote Panorámico en Sopó", price: "1.200.000.000", location: "Sopó", area: "2500 m²", description: "Amplio lote con topografía plana, ideal para construcción.", videoId: 5 },
      { id: 4, type: "Finca", department: "Cundinamarca", title: "Finca El Remanso", price: "2.500.000.000", location: "La Calera", area: "5 Ha", description: "Finca productiva con casa principal, mayordomo y establos.", videoId: 2 },
      { id: 5, type: "Apartamento", department: "Cundinamarca", title: "Dúplex con Terraza en Zipaquirá", price: "410.000.000", location: "Zipaquirá", area: "110 m²", description: "Apartamento duplex con terraza BBQ, 3 habitaciones y estudio.", videoId: 6 },
      { id: 6, type: "Casa", department: "Cundinamarca", title: "Casa Campestre en Guatavita", price: "890.000.000", location: "Guatavita", area: "300 m²", description: "Casa campestre con vista al embalse, diseño rústico moderno.", videoId: 8 },
      { id: 7, type: "Finca", department: "Cundinamarca", title: "Finca de Recreo 'La Ilusión'", price: "1.800.000.000", location: "Anapoima", area: "3 Ha", description: "Finca de recreo con piscina, kiosko, y casa de 5 habitaciones.", videoId: 7 },
      { id: 8, type: "Lote", department: "Cundinamarca", title: "Lote en Condominio 'El Paraíso'", price: "250.000.000", location: "Fusagasugá", area: "1000 m²", description: "Lote en condominio con acceso a áreas sociales y piscina.", videoId: 13 },
      { id: 9, type: "Casa", department: "Tolima", title: "Casa de Lujo en Ibagué", price: "980.000.000", location: "Ibagué", area: "350 m²", description: "Impresionante casa en conjunto cerrado con piscina privada.", videoId: 1 },
      { id: 10, type: "Apartamento", department: "Tolima", title: "Apartamento con Vista al Nevado", price: "450.000.000", location: "Ibagué", area: "120 m²", description: "Penthouse con acabados modernos y vistas espectaculares.", videoId: 9 },
      { id: 11, type: "Finca", department: "Tolima", title: "Finca Cafetera en Melgar", price: "1.500.000.000", location: "Melgar", area: "10 Ha", description: "Tradicional finca cafetera, ideal para turismo o producción.", videoId: 10 },
      { id: 12, type: "Lote", department: "Tolima", title: "Lote en Condominio Náutico", price: "350.000.000", location: "Prado", area: "1500 m²", description: "Lote exclusivo con acceso directo a la represa de Prado.", videoId: 12 },
      { id: 13, type: "Casa", department: "Cundinamarca", title: "Casa Colonial en Tabio", price: "680.000.000", location: "Tabio", area: "220 m²", description: "Encantadora casa estilo colonial, rodeada de naturaleza.", videoId: 15 },
      { id: 14, type: "Apartamento", department: "Cundinamarca", title: "Apartamento Familiar", price: "280.000.000", location: "Facatativá", area: "75 m²", description: "Acogedor apartamento en conjunto nuevo, con parque infantil.", videoId: 11 },
      { id: 15, type: "Lote", department: "Cundinamarca", title: "Oportunidad de Inversión en Tenjo", price: "450.000.000", location: "Tenjo", area: "1500 m²", description: "Lote semiurbano con servicios públicos disponibles.", videoId: 13 },
      { id: 16, type: "Finca", department: "Cundinamarca", title: "Hacienda 'La Esmeralda'", price: "3.100.000.000", location: "Villeta", area: "8 Ha", description: "Finca con cultivos de frutas, piscina natural y casa de lujo.", videoId: 10 },
      { id: 17, type: "Casa", department: "Tolima", title: "Casa de Veraneo en Girardot", price: "750.000.000", location: "Girardot", area: "250 m²", description: "Perfecta casa de veraneo con piscina y zona de BBQ.", videoId: 12 },
      { id: 18, type: "Apartamento", department: "Tolima", title: "Apartamento Moderno en Honda", price: "290.000.000", location: "Honda", area: "80 m²", description: "Apartamento en el centro histórico, completamente remodelado.", videoId: 15 },
      { id: 19, type: "Finca", department: "Tolima", title: "Finca Ganadera en Espinal", price: "2.200.000.000", location: "Espinal", area: "20 Ha", description: "Extensa finca ganadera con excelentes pastos y corrales.", videoId: 2 },
      { id: 20, type: "Lote", department: "Tolima", title: "Lote Campestre en Carmen de Apicalá", price: "190.000.000", location: "Carmen de Apicalá", area: "1000 m²", description: "Lote en condominio con club social y piscinas.", videoId: 14 },
      { id: 21, type: "Casa", department: "Tolima", title: "Chalet en Mariquita", price: "480.000.000", location: "Mariquita", area: "190 m²", description: "Acogedor chalet con piscina y amplias zonas verdes.", videoId: 8 },
      { id: 22, type: "Casa", department: "Tolima", title: "Casa con Vista al Río", price: "620.000.000", location: "Ambalema", area: "210 m²", description: "Casa con acceso directo al río y muelle privado.", videoId: 4 },
      { id: 23, type: "Apartamento", department: "Tolima", title: "Apartamento en Club House", price: "380.000.000", location: "Ibagué", area: "95 m²", description: "Moderno apartamento en club house con gimnasio y spa.", videoId: 6 },
      { id: 24, type: "Apartamento", department: "Tolima", title: "Loft en Centro Histórico", price: "260.000.000", location: "Honda", area: "70 m²", description: "Loft de diseño en el corazón del centro histórico.", videoId: 11 },
      { id: 25, type: "Finca", department: "Tolima", title: "Finca de Recreo 'El Oasis'", price: "1.950.000.000", location: "Melgar", area: "5 Ha", description: "Espectacular finca de recreo con múltiples piscinas y toboganes.", videoId: 7 },
      { id: 26, type: "Finca", department: "Tolima", title: "Hacienda Panelera", price: "2.800.000.000", location: "Guamo", area: "30 Ha", description: "Hacienda productora de panela con trapiche propio.", videoId: 10 },
      { id: 27, type: "Lote", department: "Tolima", title: "Lote con Vista a la Represa", price: "400.000.000", location: "Prado", area: "2000 m²", description: "Lote con vista privilegiada a la represa de Prado.", videoId: 5 },
      { id: 28, type: "Lote", department: "Tolima", title: "Terreno para Desarrollo", price: "850.000.000", location: "Ibagué", area: "5000 m²", description: "Terreno ideal para proyecto de vivienda en zona de expansión.", videoId: 13 }
    ];

    const videoData = [
        { id: 1, title: 'Recorrido Conjunto Monte Verde', description: "Un vistazo exclusivo al lujoso Conjunto Monte Verde.", videoSrc: 'https://videos.pexels.com/video-files/857251/857251-hd_1280_720_25fps.mp4' },
        { id: 2, title: 'Finca de Ensueño en La Mesa', description: "Descubra esta hermosa finca con vistas panorámicas.", videoSrc: 'https://videos.pexels.com/video-files/1536322/1536322-hd_1280_720_25fps.mp4' },
        { id: 3, title: 'Apartamento Moderno en Chía', description: "Tour completo por este apartamento con acabados de primera.", videoSrc: 'https://videos.pexels.com/video-files/855938/855938-hd_1280_720_30fps.mp4' },
        { id: 4, title: 'Casa Campestre en Sopó', description: "Viva la tranquilidad del campo en esta espectacular casa.", videoSrc: 'https://videos.pexels.com/video-files/855829/855829-hd_1280_720_30fps.mp4' },
        { id: 5, title: 'Lote con Potencial en Anapoima', description: "El lugar perfecto para construir la casa de sus sueños.", videoSrc: 'https://videos.pexels.com/video-files/2869102/2869102-hd_1280_720_24fps.mp4' },
        { id: 6, title: 'Penthouse de Lujo en Bogotá', description: "Experimente la vida en las alturas con este increíble penthouse.", videoSrc: 'https://videos.pexels.com/video-files/5659938/5659938-hd_1280_720_25fps.mp4' },
        { id: 7, title: 'Villa de Lujo con Piscina', description: "Recorrido por una villa con diseño moderno.", videoSrc: 'https://videos.pexels.com/video-files/857288/857288-hd_1280_720_25fps.mp4'},
        { id: 8, title: 'Acogedora Cabaña en el Bosque', description: "Un escape a la naturaleza en esta hermosa cabaña.", videoSrc: 'https://videos.pexels.com/video-files/5494921/5494921-hd_1280_720_25fps.mp4'},
        { id: 9, title: 'Apartamento con Vista al Mar', description: "Despierte con el sonido de las olas.", videoSrc: 'https://videos.pexels.com/video-files/7578539/7578539-hd_1280_720_25fps.mp4'},
        { id: 10, title: 'Hacienda Tradicional Cafetera', description: "Explore la cultura del café en esta hacienda.", videoSrc: 'https://videos.pexels.com/video-files/4901323/4901323-hd_1280_720_25fps.mp4'},
        { id: 11, title: 'Loft Industrial en la Ciudad', description: "Estilo y modernidad en el corazón de la ciudad.", videoSrc: 'https://videos.pexels.com/video-files/854251/854251-hd_1280_720_25fps.mp4'},
        { id: 12, title: 'Casa de Playa Paradisíaca', description: "Su propio paraíso junto al mar caribe.", videoSrc: 'https://videos.pexels.com/video-files/2758364/2758364-hd_1280_720_24fps.mp4'},
        { id: 13, title: 'Terreno con Vista al Volcán', description: "Oportunidad única de inversión con vistas impresionantes.", videoSrc: 'https://videos.pexels.com/video-files/4665415/4665415-hd_1280_720_25fps.mp4'},
        { id: 14, title: 'Chalet en Montaña Nevada', description: "Disfrute del frío y la nieve en este acogedor chalet.", videoSrc: 'https://videos.pexels.com/video-files/6863172/6863172-hd_1280_720_25fps.mp4'},
        { id: 15, title: 'Residencia Histórica Restaurada', description: "Un viaje en el tiempo con todas las comodidades modernas.", videoSrc: 'https://videos.pexels.com/video-files/853875/853875-hd_1280_720_24fps.mp4'}
    ];

    const containerVariants = {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.05 }
      }
    };

    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const PropertyListings = () => {
      const [departmentFilter, setDepartmentFilter] = useState('Todos');
      const [typeFilter, setTypeFilter] = useState('Todos');
      const [selectedVideo, setSelectedVideo] = useState(null);

      const handleVideoClick = (videoId) => {
        const video = videoData.find(v => v.id === videoId);
        if (video) {
          setSelectedVideo(video);
        }
      };

      const filteredProperties = allProperties.filter(p => {
        const departmentMatch = departmentFilter === 'Todos' || p.department === departmentFilter;
        const typeMatch = typeFilter === 'Todos' || p.type === typeFilter;
        return departmentMatch && typeMatch;
      });

      const departmentOptions = ['Todos', 'Cundinamarca', 'Tolima'];
      const typeOptions = ['Todos', 'Casa', 'Apartamento', 'Finca', 'Lote'];

      return (
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Propiedades Disponibles
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 p-2 bg-gray-100 rounded-lg shadow-inner">
             <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="font-semibold text-gray-700 mr-2">Departamento:</span>
                {departmentOptions.map(option => (
                  <button
                    key={option}
                    onClick={() => setDepartmentFilter(option)}
                    className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${departmentFilter === option ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
                  >
                    {option}
                  </button>
                ))}
             </div>
             <div className="hidden sm:block border-l border-gray-300 h-6"></div>
             <div className="flex flex-wrap items-center justify-center gap-2">
                 <span className="font-semibold text-gray-700 mr-2">Tipo:</span>
                {typeOptions.map(option => (
                  <button
                    key={option}
                    onClick={() => setTypeFilter(option)}
                    className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${typeFilter === option ? 'bg-cyan-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
                  >
                    {option}
                  </button>
                ))}
             </div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`${departmentFilter}-${typeFilter}`}
          >
            {filteredProperties.map((prop) => (
              <motion.div
                key={prop.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-400 hover:-translate-y-2 group flex flex-col"
                variants={cardVariants}
                layout
              >
                <div className="relative">
                  <img class="w-full h-48 object-cover" alt={`Propiedad en ${prop.location}`} src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2" />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white font-bold px-3 py-1 m-2 rounded-full text-sm">{prop.type}</div>
                  <div className="absolute top-0 left-0 bg-gray-800 text-white font-semibold px-2 py-1 m-2 rounded-full text-xs">{prop.department}</div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-2xl font-bold text-gray-900 mb-1">${prop.price}</p>
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">{prop.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{prop.description}</p>
                  <div className="border-t border-gray-200 pt-4 mt-auto space-y-3 text-sm">
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{prop.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Maximize className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{prop.area}</span>
                    </div>
                  </div>
                   <Button onClick={() => handleVideoClick(prop.videoId)} className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600">
                      <Video className="mr-2 h-4 w-4" /> Ver Video
                   </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <VideoPlayerModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
        </section>
      );
    };

    export default PropertyListings;
