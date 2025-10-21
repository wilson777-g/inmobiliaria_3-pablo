// src/pages/VideosPage/VideosPage.jsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import VideoPlayerModal from '@/components/VideoPlayerModal';
import { useTranslation } from '@/hooks/useTranslation';

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
  const { t } = useTranslation();
  const videoData = t('videosPage.videoData');

  return (
    <>
      <Helmet>
        <title>{t('videosPage.metaTitle')}</title>
        <meta name="description" content={t('videosPage.metaDescription')} />
      </Helmet>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Button asChild variant="ghost" className="mb-8 group">
              <Link to="/" className="flex items-center text-blue-600 hover:text-blue-700">
                <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
                {t('videosPage.backToHome')}
              </Link>
            </Button>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                {t('videosPage.title')}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                {t('videosPage.subtitle')}
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
                  
                  {/* AQUÍ ESTÁ EL CAMBIO PRINCIPAL */}
                  {/* Reemplazamos la etiqueta <video> por una <img> que usa la miniatura de YouTube */}
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={`https://img.youtube.com/vi/${video.videoSrc}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  {/* FIN DEL CAMBIO */}

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
      
      {/* Esto le pasa el ID de YouTube al Modal, que ya modificamos para que lo entienda */}
      <VideoPlayerModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </>
  );
};

export default VideosPage;