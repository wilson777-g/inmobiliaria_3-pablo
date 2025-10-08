import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { useToast } from '@/components/ui/use-toast';

    const ContactForm = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const recipientEmail = 'pafercainmobiliariocarmen01@gmail.com';
        const subject = `Consulta Inmobiliaria de ${formData.name}`;
        const body = `Hola Pablo,\n\nHas recibido una nueva consulta a través de tu página web.\n\nNombre: ${formData.name}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone || 'No proporcionado'}\n\nMensaje:\n${formData.message}\n\n---\nEste es un mensaje automático.`;
        
        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Attempt to open mail client
        window.location.href = mailtoUrl;

        toast({
          title: "¡Abriendo tu cliente de correo!",
          description: "Tu mensaje está listo para ser enviado. Por favor, confírmalo en tu aplicación de correo.",
          className: "bg-blue-600 text-white border-blue-700",
        });
        
        // Reset form after a short delay
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', message: '' });
            // This is a simplistic reset as we can't confirm if the email was actually sent.
        }, 1500);
      };

      return (
        <motion.div
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Contácteme</h2>
          <p className="text-gray-600 mb-8">¿Interesado en una propiedad? Envíeme un mensaje y le responderé a la brevedad.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-600">Nombre Completo</Label>
                <Input id="name" type="text" placeholder="Su nombre" required onChange={handleChange} value={formData.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-600">Correo Electrónico</Label>
                <Input id="email" type="email" placeholder="Su correo" required onChange={handleChange} value={formData.email} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-600">Teléfono (Opcional)</Label>
              <Input id="phone" type="tel" placeholder="Su número de teléfono" onChange={handleChange} value={formData.phone} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-600">Mensaje</Label>
              <Textarea id="message" placeholder="Escriba aquí su consulta..." required onChange={handleChange} value={formData.message} className="min-h-[120px]" />
            </div>
            <div className="text-right">
              <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
                Enviar Mensaje por Correo
              </Button>
            </div>
          </form>
        </motion.div>
      );
    };

    export default ContactForm;