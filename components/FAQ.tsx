import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { useLanguage } from '../LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-50 rounded-full mb-4 text-blue-600">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stnd-navy mb-4">{t.faq.title}</h2>
            <p className="text-slate-600">
              {t.faq.desc}
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div 
                className={`border rounded-lg transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-blue-200 bg-blue-50/30 shadow-sm' 
                    : 'border-slate-200 hover:border-blue-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-blue-700' : 'text-stnd-navy'}`}>
                    {item.question}
                  </span>
                  <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? (
                      <Minus className="text-blue-600" size={20} />
                    ) : (
                      <Plus className="text-slate-400" size={20} />
                    )}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-blue-100/50">
                    {item.answer}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;