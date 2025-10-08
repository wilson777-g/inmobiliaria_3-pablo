
import React from 'react';
    import { motion } from 'framer-motion';
    import { FaWhatsapp } from 'react-icons/fa';
    import { Phone } from 'lucide-react';

    const FloatingButton = () => {
      const openWhatsApp = () => {
        window.open('https://wa.me/573015788055', '_blank');
      };
      
      const makeCall = () => {
        window.location.href = 'tel:+573015788055';
      };

      return (
        <>
          <motion.button
            onClick={makeCall}
            className="fixed bottom-20 right-5 bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2.5,
              delay: 0.5
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Llamar"
          >
            <Phone className="h-7 w-7" />
          </motion.button>
        
          <motion.button
            onClick={openWhatsApp}
            className="fixed bottom-5 right-5 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2.5
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp className="h-8 w-8" />
          </motion.button>
        </>
      );
    };

    export default FloatingButton;
