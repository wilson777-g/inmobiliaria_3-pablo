import React from 'react';
    import { Link } from 'react-router-dom';
    import { Phone, Mail, MapPin } from 'lucide-react';

    const Footer = () => {
      return (
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold mb-4">Propiedades Cundinamarca</h3>
                <p className="text-gray-400">
                  Tu mejor opción para encontrar lotes, casas y apartamentos en Cundinamarca. Asesoría de confianza.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contacto</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center justify-center md:justify-start">
                    <Phone className="h-5 w-5 mr-3 text-blue-400" />
                    <a href="tel:+573015788055" className="hover:text-blue-400">+57 301 578 8055</a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <Mail className="h-5 w-5 mr-3 text-blue-400" />
                    <a href="mailto:pafercainmobiliariocarmen01@gmail.com" className="hover:text-blue-400">pafercainmobiliariocarmen01@gmail.com</a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                    <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                    <span>Cundinamarca, Colombia</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Navegación</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/" className="hover:text-blue-400">Inicio</Link></li>
                  <li><Link to="/videos" className="hover:text-blue-400">Videos de Predios</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 py-4">
            <div className="container mx-auto text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Propiedades Cundinamarca. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;