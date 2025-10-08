
import React from 'react';
    import { motion } from 'framer-motion';
    import { Star } from 'lucide-react';

    const OfferBanner = () => {
        const openWhatsApp = () => {
            window.open('https://wa.me/573015788055', '_blank');
        };

      return (
        <motion.div
          drag
          dragConstraints={{
            top: -250,
            left: -250,
            right: 250,
            bottom: 250,
          }}
          onClick={openWhatsApp}
          className="fixed bottom-36 right-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg shadow-2xl z-50 flex items-center space-x-3 cursor-grab active:cursor-grabbing"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
            }
          }}
        >
          <Star className="h-6 w-6 text-yellow-200" fill="currentColor" />
          <div className="text-sm font-bold">
            <p>¡Solo con un Millón!</p>
            <p>Inicia tu sueño de tener propiedad.</p>
          </div>
        </motion.div>
      );
    };

    export default OfferBanner;
