import React from 'react';
    import { motion } from 'framer-motion';
    import { Phone, Mail } from 'lucide-react';
    import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

    const AgentProfile = () => {
        const phoneNumber = '573015788055';
        const openWhatsApp = () => {
            window.open(`https://wa.me/${phoneNumber}`, '_blank');
        };
      
        const openTikTok = () => {
            window.open('https://www.tiktok.com/@pablocamachorealtor', '_blank');
        };

      return (
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 sticky top-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center text-center">
            <img
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 mb-4 shadow-lg"
              alt="Foto de Pablo Fernando Camacho"
              src="https://horizons-cdn.hostinger.com/05350ba8-2066-4221-966a-34492523c02a/7ad3b8b0268059e1472c2884c042f4ae.jpg" />
            <h3 className="text-2xl font-bold text-gray-900">Pablo Fernando Camacho</h3>
            <p className="text-blue-600 font-medium">Asesor Inmobiliario Experto</p>
          </div>
          <p className="text-gray-600 text-center mt-4 text-sm leading-relaxed">
            Con más de 15 años de experiencia, mi pasión es conectar a las personas con la propiedad de sus sueños. Ofrezco una asesoría integral y transparente para garantizar la mejor inversión.
          </p>
          <div className="border-t border-gray-200 my-6"></div>
          <div className="space-y-4">
             <a href="tel:+573015788055" className="flex items-center text-gray-700 group">
              <Phone className="h-5 w-5 mr-3 text-blue-500 group-hover:text-blue-700" />
              <span className="group-hover:text-blue-700">+57 301 578 8055</span>
            </a>
            <a href="mailto:pafercainmobiliariocarmen01@gmail.com" className="flex items-center text-gray-700 group">
              <Mail className="h-5 w-5 mr-3 text-blue-500 group-hover:text-blue-700" />
              <span className="group-hover:text-blue-700 truncate">pafercainmobiliariocarmen01@gmail.com</span>
            </a>
          </div>
          <div className="border-t border-gray-200 my-6"></div>
          <div className="flex justify-center space-x-4">
            <motion.a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 rounded-full text-white bg-[#25D366] hover:opacity-90 transition-opacity">
              <FaWhatsapp className="h-6 w-6" />
            </motion.a>
            <motion.a href="https://www.tiktok.com/@pablocamachorealtor" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 rounded-full text-white bg-black hover:opacity-80 transition-opacity">
              <FaTiktok className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>
      );
    };

    export default AgentProfile;