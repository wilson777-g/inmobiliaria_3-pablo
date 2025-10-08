import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Video } from 'lucide-react';

    const VideosCTA = () => {
      return (
        <motion.section
          className="text-center py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Explore Nuestros Videos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Vea recorridos detallados de nuestras propiedades destacadas y descubra cada rincón desde la comodidad de su hogar.
          </p>
          <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold transition-all duration-300 shadow-lg shadow-cyan-600/20 hover:shadow-cyan-600/40 transform hover:scale-105">
            <Link to="/videos">
              <Video className="mr-2 h-5 w-5" />
              Ver Videos de Predios
            </Link>
          </Button>
        </motion.section>
      );
    };

    export default VideosCTA;