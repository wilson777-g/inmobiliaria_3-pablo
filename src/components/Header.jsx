import React from 'react';
    import { motion } from 'framer-motion';

    const Header = () => {
      return (
        <header className="py-12 bg-transparent relative">
          <div className="container mx-auto text-center px-4 z-10 relative">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center items-center mb-6"
            >
               <img
                alt="Logo Asesor Inmobiliario P.C"
                className="h-36 w-36 object-contain rounded-full shadow-md border-2 border-amber-700"
               src="https://horizons-cdn.hostinger.com/05350ba8-2066-4221-966a-34492523c02a/a8ad4d3a708b8ef4cf129ede6c19d4b3.jpg" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative inline-block group"
            >
              <div className="absolute -inset-2.5 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-lg blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg"></div>
              <h1 
                className="relative text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 px-6 py-3 border-2 border-white/50 rounded-lg shadow-lg"
                style={{textShadow: '0px 2px 4px rgba(0,0,0,0.1)'}}
              >
                Inversiones Inmobiliarias Cundinamarca y Tolima
              </h1>
            </motion.div>
            
            <motion.p 
              className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Su sueño de tener propiedad comienza aquí. Asesoría experta por <span className="font-bold text-blue-600">Pablo Fernando Camacho</span>.
            </motion.p>
          </div>
        </header>
      );
    };

    export default Header;