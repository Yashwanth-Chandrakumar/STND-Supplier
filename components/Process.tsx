import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">The Pipeline</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stnd-navy mt-2">How We Drive Orders</h2>
          </div>
        </RevealOnScroll>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100"></div>

          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <RevealOnScroll key={index} delay={index * 150}>
                <div className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Side */}
                  <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0 text-center md:text-left">
                    <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'}`}>
                      <h3 className="text-2xl font-bold text-stnd-navy mb-3">Step {index + 1}: {step.title}</h3>
                      <p className={`text-slate-600 max-w-sm ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white z-10 border-4 border-white shadow-lg">
                    <Icon size={20} />
                  </div>

                  {/* Empty Side for layout balance */}
                  <div className="w-full md:w-1/2 px-6"></div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;