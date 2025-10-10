import React from 'react';
    import { motion } from 'framer-motion';
    import { Star } from 'lucide-react';
    import { useTranslation } from '@/hooks/useTranslation';

    const OfferBanner = () => {
        const { t } = useTranslation();

      return (
        <motion.div
          drag
          dragConstraints={{
            top: -250,
            left: -250,
            right: 250,
            bottom: 250,
          }}
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
            <p>{t('offerBanner.line1')}</p>
            <p>{t('offerBanner.line2')}</p>
          </div>
        </motion.div>
      );
    };

    export default OfferBanner;