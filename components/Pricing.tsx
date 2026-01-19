import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';
import { ICONS, CONTACT_INFO } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    const icons = [ICONS.MonthlyCost, ICONS.Commission, ICONS.Network, ICONS.Travel, ICONS.Availability, ICONS.Reporting, ICONS.Outreach];
    return icons[index] || ICONS.MonthlyCost;
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-stnd-navy mb-4">{t.pricing.title}</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">
               {t.pricing.desc}
             </p>
          </div>
        </RevealOnScroll>

        {/* Performance Guarantee */}
        <RevealOnScroll delay={100}>
          <div className="bg-white border-l-4 border-blue-600 rounded-r-lg shadow-md p-6 mb-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-stnd-navy mb-6 flex items-center">
              <ShieldCheck className="mr-2 text-blue-600" /> {t.pricing.guarantee.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
               <div className="flex flex-col">
                  <span className="text-4xl font-extrabold text-blue-600 mb-1">{t.pricing.guarantee.stat1Value}</span>
                  <span className="text-sm text-slate-700 font-bold uppercase tracking-wide">{t.pricing.guarantee.stat1Label}</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-4xl font-extrabold text-stnd-navy mb-1">{t.pricing.guarantee.stat2Value}</span>
                  <span className="text-sm text-slate-700 font-bold uppercase tracking-wide">{t.pricing.guarantee.stat2Label}</span>
               </div>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500 italic leading-relaxed">
                {t.pricing.guarantee.disclaimer}
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Desktop Comparison Table */}
        <RevealOnScroll delay={200}>
          <div className="hidden md:block bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
            <div className="grid grid-cols-12 bg-stnd-navy text-white py-6 px-8 items-center">
              <div className="col-span-4 font-bold text-lg uppercase tracking-wider">{t.pricing.table.headerFeature}</div>
              <div className="col-span-4 font-bold text-lg text-slate-300 text-center">{t.pricing.table.headerConv}</div>
              <div className="col-span-4 font-bold text-xl text-blue-400 text-center flex items-center justify-center gap-2">
                 {t.pricing.table.headerStnd} <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">{t.pricing.table.rec}</span>
              </div>
            </div>
            
            <div className="divide-y divide-slate-100">
              {t.pricing.table.rows.map((point, index) => {
                const Icon = getIcon(index);
                return (
                  <div key={index} className="grid grid-cols-12 py-5 px-8 items-center hover:bg-slate-50 transition-colors">
                    <div className="col-span-4 flex items-center text-stnd-navy font-semibold">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded mr-3">
                        <Icon size={18} />
                      </div>
                      {point.feature}
                    </div>
                    <div className="col-span-4 text-center text-slate-500 flex items-center justify-center gap-2">
                       <XCircle className="text-red-300" size={16} />
                       {point.conv}
                    </div>
                    <div className="col-span-4 text-center text-stnd-navy font-bold flex items-center justify-center gap-2">
                       <CheckCircle2 className="text-green-500" size={18} />
                       {point.stnd}
                    </div>
                  </div>
                );
              })}
            </div>
             <div className="p-8 bg-slate-50 text-center border-t border-slate-200">
               <a href={`mailto:${CONTACT_INFO.email}`} className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                 {t.pricing.table.cta}
               </a>
             </div>
          </div>
        </RevealOnScroll>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-8">
           <RevealOnScroll>
            <div className="bg-white rounded-lg shadow p-6 border border-slate-200">
               <h3 className="text-xl font-bold text-slate-500 mb-4 text-center pb-4 border-b">{t.pricing.table.mobileTitle1}</h3>
               <div className="space-y-4">
                 {t.pricing.table.rows.map((point, idx) => (
                    <div key={idx} className="flex justify-between items-start text-sm">
                       <span className="text-slate-400 font-medium">{point.feature}:</span>
                       <span className="text-right text-slate-600 max-w-[50%]">{point.conv}</span>
                    </div>
                 ))}
               </div>
            </div>
           </RevealOnScroll>

           <RevealOnScroll delay={100}>
            <div className="bg-white rounded-lg shadow-xl p-6 border-2 border-blue-600 relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1">{t.pricing.table.mobileBadge}</div>
               <h3 className="text-xl font-bold text-stnd-navy mb-4 text-center pb-4 border-b">{t.pricing.table.mobileTitle2}</h3>
               <div className="space-y-4">
                 {t.pricing.table.rows.map((point, idx) => (
                    <div key={idx} className="flex justify-between items-start text-sm">
                       <span className="text-stnd-navy font-bold">{point.feature}:</span>
                       <span className="text-right text-blue-700 font-bold max-w-[60%]">{point.stnd}</span>
                    </div>
                 ))}
               </div>
               <div className="mt-8">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="block w-full text-center bg-stnd-navy text-white font-bold py-3 rounded">
                    {t.pricing.table.cta}
                  </a>
               </div>
            </div>
           </RevealOnScroll>
        </div>

      </div>
    </section>
  );
};

export default Pricing;