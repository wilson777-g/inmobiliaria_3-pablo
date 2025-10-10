import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import HomePage from '@/pages/HomePage';
    import VideosPage from '@/pages/VideosPage';
    import { Toaster } from '@/components/ui/toaster';
    import FloatingButton from '@/components/FloatingButton';
    import Footer from '@/components/Footer';
    import OfferBanner from '@/components/OfferBanner';
    import ScrollToTop from '@/components/ScrollToTop';
    import { LanguageProvider } from '@/context/LanguageContext';

    function App() {
      return (
        <LanguageProvider>
          <Router>
            <ScrollToTop />
            <div className="bg-gray-50 text-gray-800 min-h-screen font-sans relative">
              <div className="absolute inset-0 bg-contain bg-center opacity-[0.03]" style={{backgroundImage: "url('https://horizons-cdn.hostinger.com/05350ba8-2066-4221-966a-34492523c02a/93f63116a4e393b320d9319e34d6501c.png')"}}></div>
              <div className="relative z-10">
                <main>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/videos" element={<VideosPage />} />
                  </Routes>
                </main>
                <OfferBanner />
                <FloatingButton />
                <Footer />
                <Toaster />
              </div>
            </div>
          </Router>
        </LanguageProvider>
      );
    }

    export default App;