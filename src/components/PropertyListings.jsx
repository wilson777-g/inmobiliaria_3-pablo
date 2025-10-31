import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Maximize, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoPlayerModal from '@/components/VideoPlayerModal';
import { useTranslation } from '@/hooks/useTranslation';
import "./PropertyListings.css";

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
  const { t } = useTranslation();
  const allProperties = t('propertyListings.allProperties');
  const videoData = t('videosPage.videoData');

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
        {t('propertyListings.title')}
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 p-2 bg-gray-100 rounded-lg shadow-inner">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="font-semibold text-gray-700 mr-2">
            {t('propertyListings.filterDepartment')}:
          </span>
          {departmentOptions.map(option => (
            <button
              key={option}
              onClick={() => setDepartmentFilter(option)}
              className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                departmentFilter === option
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t(`propertyListings.departments.${option.toLowerCase()}`)}
            </button>
          ))}
        </div>

        <div className="hidden sm:block border-l border-gray-300 h-6"></div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="font-semibold text-gray-700 mr-2">
            {t('propertyListings.filterType')}:
          </span>
          {typeOptions.map(option => (
            <button
              key={option}
              onClick={() => setTypeFilter(option)}
              className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                typeFilter === option
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t(`propertyListings.types.${option.toLowerCase()}`)}
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
            className="property-card bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-400 hover:-translate-y-2 group flex flex-col"
            variants={cardVariants}
            layout
          >
            {/* Imagen principal */}
            <div className="relative">
              <img
                className="w-full h-48 object-cover"
                alt={`${t('propertyListings.propertyIn')} ${prop.location}`}
                src={prop.image || "/imagenes/miramonte.jpg"}
              />
              <div className="absolute top-0 right-0 bg-blue-600 text-white font-bold px-3 py-1 m-2 rounded-full text-sm">
                {t(`propertyListings.types.${prop.type.toLowerCase()}`)}
              </div>
              <div className="absolute top-0 left-0 bg-gray-800 text-white font-semibold px-2 py-1 m-2 rounded-full text-xs">
                {t(`propertyListings.departments.${prop.department.toLowerCase()}`)}
              </div>
            </div>

            {/* Información del proyecto */}
            <div className="p-5 flex flex-col flex-grow">
              <p className="text-2xl font-bold text-gray-900 mb-1">
                ${prop.price}
              </p>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {prop.title}
              </h3>

              {/* Descripción con formato HTML (se renderiza correctamente) */}
              <div
                className="property-description"
                dangerouslySetInnerHTML={{ __html: prop.description }}
              ></div>

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

              <Button
                onClick={() => handleVideoClick(prop.videoId)}
                className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600"
              >
                <Video className="mr-2 h-4 w-4" /> {t('propertyListings.watchVideo')}
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


