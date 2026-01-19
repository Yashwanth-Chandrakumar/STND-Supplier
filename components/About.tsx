import React from 'react';
import { Cpu, Globe, Users, History } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    switch(index) {
      case 0: return Globe;
      case 1: return Cpu;
      case 2: return Users;
      case 3: return History;
      default: return Globe;
    }
  };

  return (
    <section id="about" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <RevealOnScroll className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-br-3xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800" 
              alt="Textile Manufacturing Factory" 
              className="rounded-lg shadow-xl w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border border-gray-100 max-w-xs">
              <p className="text-slate-800 font-bold text-lg mb-1">{t.about.badgeTitle}</p>
              <p className="text-slate-500 text-sm">{t.about.badgeDesc}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <h2 className="text-3xl font-bold text-stnd-navy mb-6">
              {t.about.title} <br/>
              <span className="text-blue-600">{t.about.titleHighlight}</span>
            </h2>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              {t.about.p1}
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed">
              {t.about.p2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.about.cards.map((card, idx) => {
                const Icon = getIcon(idx);
                return (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stnd-navy">{card.title}</h4>
                      <p className="text-sm text-slate-500">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default About;