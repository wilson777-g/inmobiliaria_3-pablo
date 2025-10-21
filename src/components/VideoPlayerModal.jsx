// src/components/VideoPlayerModal.jsx

import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import PropTypes from 'prop-types'; // Importamos PropTypes

// Definimos la 'forma' que debe tener el objeto 'video'
const videoShape = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
};

const VideoPlayerModal = ({ video, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (video) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  // No renderizamos nada si no hay video
  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        // Añadimos 'key' para optimizar AnimatePresence
        key={video.id} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={handleClickOutside}
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.9, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: -20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative bg-black rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden"
        >
          {/* ESTE ES EL IFRAME DE YOUTUBE CORRECTO Y FINAL */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${video.videoSrc}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* FIN DEL IFRAME */}

          <div className="p-4 bg-gray-900/50">
            <h3 className="text-xl font-bold text-white">{video.title}</h3>
            <p className="text-sm text-gray-300 mt-1">{video.description}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors"
            aria-label="Cerrar video"
          >
            <X className="h-6 w-6" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Definimos los propTypes para que React nos avise de errores
VideoPlayerModal.propTypes = {
  video: PropTypes.shape(videoShape),
  onClose: PropTypes.func.isRequired,
};

// Optimizamos el componente con React.memo
export default React.memo(VideoPlayerModal);