import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage, translations } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Fijar idioma español y guardarlo en localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang !== 'es') {
      setLanguage('es');
      localStorage.setItem('lang', 'es');
    }
  }, [setLanguage]);

  const languageOptions = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'pt', name: 'Português' },
  ];

  const selectedLanguage = languageOptions.find(opt => opt.code === language);

  return (
    // 🔹 Botón totalmente oculto visualmente, pero activo en el DOM
    <div className="relative" style={{ display: 'none' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md text-sm font-semibold text-gray-700 hover:bg-white transition-colors"
      >
        <Globe className="w-5 h-5 text-gray-500" />
        <span>{selectedLanguage.name}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-xl overflow-hidden z-20"
          >
            <ul>
              {languageOptions.map((option) => (
                <li key={option.code}>
                  <button
                    onClick={() => {
                      setLanguage(option.code);
                      setIsOpen(false);
                      localStorage.setItem('lang', option.code);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                      language === option.code ? 'font-bold bg-gray-100' : ''
                    }`}
                  >
                    {option.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
