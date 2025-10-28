
    import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reemplaza con tus credenciales EmailJS
    const serviceID = 'service_i7zi1r3';
    const templateID = 'template_a7yti4u';
    const publicKey = '1HcBAciuF2VXL3vWB'; // <- Reemplaza esto con tu clave pública real

    const params = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, params, publicKey)
      .then(() => {
        toast({
          title: "✅ Mensaje enviado correctamente",
          description: "Gracias por contactarnos, te responderemos pronto.",
          className: "bg-green-600 text-white border-green-700",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        toast({
          title: "❌ Error al enviar el mensaje",
          description: "Inténtalo nuevamente o revisa tu conexión.",
          className: "bg-red-600 text-white border-red-700",
        });
      });
  };

  return (
    <motion.div
      className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Contáctanos</h2>
      <p className="text-gray-600 mb-8">
        Déjanos tus datos y te responderemos pronto.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-600">Nombre</Label>
            <Input id="name" type="text" required onChange={handleChange} value={formData.name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-600">Correo</Label>
            <Input id="email" type="email" required onChange={handleChange} value={formData.email} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-600">Teléfono</Label>
          <Input id="phone" type="tel" onChange={handleChange} value={formData.phone} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-600">Mensaje</Label>
          <Textarea id="message" required onChange={handleChange} value={formData.message} className="min-h-[120px]" />
        </div>

        <div className="text-right">
          <Button
            type="submit"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
          >
            Enviar Mensaje
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
