
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Phone, Mail, MapPin } from 'lucide-react';
    import { FaWhatsapp, FaTiktok, FaYoutube } from 'react-icons/fa';
    import { useTranslation } from '@/hooks/useTranslation';

    const Footer = () => {
      const { t } = useTranslation();
      const phoneNumber = '573015788055';

      return (
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
              <div className="md:col-span-1">
                <h3 className="text-xl font-bold mb-4">{t('footer.aboutTitle')}</h3>
                <p className="text-gray-400">
                  {t('footer.aboutText')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{t('footer.contactTitle')}</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center justify-center md:justify-start">
                    <Phone className="h-5 w-5 mr-3 text-blue-400" />
                    <a href="tel:+573015788055" className="hover:text-blue-400">+57 301 578 8055</a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <Mail className="h-5 w-5 mr-3 text-blue-400" />
                    <a href="mailto:contacto@camachofincaraiz.com.co" className="hover:text-blue-400 truncate">contacto@camachofincaraiz.com.co</a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                    <span>{t('footer.location')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{t('footer.navigationTitle')}</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/" className="hover:text-blue-400">{t('footer.navHome')}</Link></li>
                  <li><Link to="/videos" className="hover:text-blue-400">{t('footer.navVideos')}</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaWhatsapp size={24} />
                  </a>
                  <a href="https://www.tiktok.com/@camachofincaraiz.oficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaTiktok size={24} />
                  </a>
                  <a href="https://www.youtube.com/@Camachofincaraiz2025" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <FaYoutube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 py-4">
            <div className="container mx-auto text-center text-gray-500 text-sm">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
  