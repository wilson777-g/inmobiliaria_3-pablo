import React, { useState } from 'react';
    import { Helmet } from 'react-helmet';
    import { Link } from 'react-router-dom';
    import { ArrowLeft, PlayCircle } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import VideoPlayerModal from '@/components/VideoPlayerModal';

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
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
        },
      },
    };

    const VideosPage = () => {
      const [selectedVideo, setSelectedVideo] = useState(null);

      return (
        <>
          <Helmet>
            <title>Videos de Propiedades | Inmobiliaria Cundinamarca</title>
            <meta name="description" content="Explore nuestros videos de propiedades en Cundinamarca. Recorridos virtuales de casas, apartamentos y fincas." />
          </Helmet>
          <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Button asChild variant="ghost" className="mb-8 group">
                  <Link to="/" className="flex items-center text-blue-600 hover:text-blue-700">
                    <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
                    Volver al Inicio
                  </Link>
                </Button>
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                    Videos de Propiedades
                  </h1>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Explore recorridos virtuales de nuestras exclusivas propiedades en Cundinamarca.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {videoData.map((video) => (
                  <motion.div 
                    key={video.id}
                    className="group"
                    variants={itemVariants}
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200 transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-400 cursor-pointer hover:-translate-y-1">
                      <div className="aspect-w-16 aspect-h-9">
                        <video 
                          src={`${video.videoSrc}#t=0.1`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          preload="metadata"
                          muted
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <PlayCircle className="h-16 w-16 text-white" />
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{video.title}</h3>
                        <p className="mt-2 text-sm text-gray-600">{video.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <VideoPlayerModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
        </>
      );
    };

    export default VideosPage;