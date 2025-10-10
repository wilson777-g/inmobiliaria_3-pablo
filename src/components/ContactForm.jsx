
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { useToast } from '@/components/ui/use-toast';
    import { useTranslation } from '@/hooks/useTranslation';

    const ContactForm = () => {
      const { toast } = useToast();
      const { t } = useTranslation();
      const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const recipientEmail = 'contacto@camachofincaraiz.com.co';
        const subject = t('contactForm.emailSubject', { name: formData.name });
        const body = t('contactForm.emailBody', {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || t('contactForm.noPhone'),
          message: formData.message,
        });
        
        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.open(mailtoUrl, '_blank');

        toast({
          title: t('contactForm.toast.title'),
          description: t('contactForm.toast.description'),
          className: "bg-blue-600 text-white border-blue-700",
        });
        
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1500);
      };

      return (
        <motion.div
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('contactForm.title')}</h2>
          <p className="text-gray-600 mb-8">{t('contactForm.subtitle')}</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-600">{t('contactForm.nameLabel')}</Label>
                <Input id="name" type="text" placeholder={t('contactForm.namePlaceholder')} required onChange={handleChange} value={formData.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-600">{t('contactForm.emailLabel')}</Label>
                <Input id="email" type="email" placeholder={t('contactForm.emailPlaceholder')} required onChange={handleChange} value={formData.email} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-600">{t('contactForm.phoneLabel')}</Label>
              <Input id="phone" type="tel" placeholder={t('contactForm.phonePlaceholder')} onChange={handleChange} value={formData.phone} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-600">{t('contactForm.messageLabel')}</Label>
              <Textarea id="message" placeholder={t('contactForm.messagePlaceholder')} required onChange={handleChange} value={formData.message} className="min-h-[120px]" />
            </div>
            <div className="text-right">
              <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
                {t('contactForm.submitButton')}
              </Button>
            </div>
          </form>
        </motion.div>
      );
    };

    export default ContactForm;
  