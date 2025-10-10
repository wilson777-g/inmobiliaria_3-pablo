import React, { createContext, useState, useEffect } from 'react';
    import translations from '@/translations';

    export const LanguageContext = createContext();

    export const LanguageProvider = ({ children }) => {
      const [language, setLanguage] = useState('es');

      useEffect(() => {
        const browserLang = navigator.language.split('-')[0];
        if (Object.keys(translations).includes(browserLang)) {
          setLanguage(browserLang);
        }
      }, []);

      const t = (key, replacements = {}) => {
        const keys = key.split('.');
        let value = translations[language];
        try {
          for (let i = 0; i < keys.length; i++) {
            value = value[keys[i]];
          }
          if (typeof value === 'string') {
              Object.keys(replacements).forEach(rKey => {
                  value = value.replace(`{${rKey}}`, replacements[rKey]);
              });
          }
          return value || key;
        } catch (error) {
          return key;
        }
      };

      return (
        <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
          {children}
        </LanguageContext.Provider>
      );
    };