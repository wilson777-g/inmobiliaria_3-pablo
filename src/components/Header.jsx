import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSelector from '@/components/LanguageSelector';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-12 bg-transparent relative">
      {/* Selector de idioma */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSelector />
      </div>

      <div className="container mx-auto text-center px-4 z-10 relative">
        {/* Logo animado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center mb-6"
        >
          <img
            alt="Logo Camacho Finca Raiz"
            className="h-40 w-auto"
            src="https://horizons-cdn.hostinger.com/05350ba8-2066-4221-966a-34492523c02a/038da3d0a7c391b97cb40f310316717b.png"
          />
        </motion.div>

        {/* Título principal con efecto bandera */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative inline-block group"
        >
          <div className="absolute -inset-2.5 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-lg blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg"></div>

          {/* 👇 Aquí el cambio clave: se usa dangerouslySetInnerHTML */}
          <h1
            className="relative text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 px-6 py-3 border-2 border-white/50 rounded-lg shadow-lg"
            style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.1)' }}
            dangerouslySetInnerHTML={{ __html: t('header.title') }}
          ></h1>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('header.subtitle.start')}{' '}
          <span className="font-bold text-blue-600">{t('header.subtitle.expertName')}</span>.
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
