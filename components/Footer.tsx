import React from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-stnd-navy text-slate-300 pt-20 pb-10 scroll-mt-24">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-white mb-2">STND.</h2>
            <p className="text-xs text-blue-400 mb-6 uppercase tracking-wider font-semibold">Sourcing Technology & Network Development</p>
            <p className="text-slate-400 mb-6">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">{t.footer.contactTitle}</h3>
            <div className="space-y-4">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center group hover:text-white transition-colors">
                <Mail className="mr-3 text-blue-500" size={20} />
                <span className="group-hover:translate-x-1 transition-transform">{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-center">
                <MapPin className="mr-3 text-blue-500" size={20} />
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>

           {/* Quick Links / CTA */}
           <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">{t.footer.actionTitle}</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.navLinks.about}
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, '#services')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.navLinks.services}
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleNavClick(e, '#pricing')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.navLinks.pricing}
              </a>
              <a 
                href="#faq" 
                onClick={(e) => handleNavClick(e, '#faq')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.navLinks.faq}
              </a>
              
              <a 
                href={`mailto:${CONTACT_INFO.email}?subject=Discovery Call Request`} 
                className="mt-4 inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 group"
              >
                {t.footer.cta} <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all"/>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="mt-4 md:mt-0">
             <span className="mr-4">{t.footer.privacy}</span>
             <span>{t.footer.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;