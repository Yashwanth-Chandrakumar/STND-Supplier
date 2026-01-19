import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;