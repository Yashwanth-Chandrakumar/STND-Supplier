import React from 'react';
import { Mail, Clock, BarChart3 } from 'lucide-react';
import { ICONS } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stnd-navy mb-4">{t.services.title}</h2>
            <p className="text-slate-600">
              {t.services.desc}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.services.items.map((item, index) => {
            const Icon = index === 0 ? ICONS.Knitwear : index === 1 ? ICONS.Woven : ICONS.Accessories;
            return (
              <RevealOnScroll key={index} delay={index * 100} className="h-full">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-1">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-stnd-navy mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Stats / Performance Indicators */}
        <RevealOnScroll delay={300}>
          <div className="bg-stnd-navy rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700">
              <div className="p-4">
                <div className="flex justify-center mb-4 text-blue-400">
                  <Mail size={32} />
                </div>
                <h4 className="text-3xl font-bold mb-2">{t.services.stats[0].title}</h4>
                <p className="text-slate-400">{t.services.stats[0].desc}</p>
              </div>
              
              <div className="p-4">
                <div className="flex justify-center mb-4 text-blue-400">
                  <Clock size={32} />
                </div>
                <h4 className="text-3xl font-bold mb-2">{t.services.stats[1].title}</h4>
                <p className="text-slate-400">{t.services.stats[1].desc}</p>
              </div>

              <div className="p-4">
                <div className="flex justify-center mb-4 text-blue-400">
                  <BarChart3 size={32} />
                </div>
                <h4 className="text-3xl font-bold mb-2">{t.services.stats[2].title}</h4>
                <p className="text-slate-400">{t.services.stats[2].desc}</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Services;