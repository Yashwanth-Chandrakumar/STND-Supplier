import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920" 
          alt="Fashion Showroom and Manufacturing" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 lg:w-1/2">
          <RevealOnScroll>
            <div className="inline-block px-3 py-1 mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full">
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">{t.hero.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-sm transition-all flex items-center justify-center group"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* Abstract Graphic / Right Side */}
        <div className="hidden md:block md:w-1/3 lg:w-1/2 relative h-full">
           {/* Decorative elements */}
           <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;