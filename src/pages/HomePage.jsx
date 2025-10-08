
import React from 'react';
    import { Helmet } from 'react-helmet';
    import Header from '@/components/Header';
    import PropertyListings from '@/components/PropertyListings';
    import AgentProfile from '@/components/AgentProfile';
    import ContactForm from '@/components/ContactForm';
    import VideosCTA from '@/components/VideosCTA';

    const HomePage = () => {
      return (
        <>
          <Helmet>
            <title>Inmobiliaria Cundinamarca y Tolima | Venta de Propiedades</title>
            <meta name="description" content="Encuentre los mejores lotes, casas, apartamentos y fincas en venta en Cundinamarca y Tolima con el asesor Pablo Fernando Camacho. ¡Contáctenos hoy!" />
          </Helmet>
          <div className="overflow-hidden">
            <Header />
            <main className="container mx-auto px-4 py-8 md:py-16 space-y-24">
              <PropertyListings />
              <VideosCTA />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                <div className="lg:col-span-2">
                  <ContactForm />
                </div>
                <div>
                  <AgentProfile />
                </div>
              </div>
            </main>
          </div>
        </>
      );
    };

    export default HomePage;
