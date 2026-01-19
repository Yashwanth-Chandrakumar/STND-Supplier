import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { CONTACT_INFO, LanguageType } from '../constants';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  // Use separate refs for desktop and mobile menus to prevent overwriting
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Check if click is outside both desktop and mobile dropdown containers
      const outsideDesktop = desktopLangRef.current && !desktopLangRef.current.contains(target);
      const outsideMobile = mobileLangRef.current && !mobileLangRef.current.contains(target);

      if (langMenuOpen && outsideDesktop && outsideMobile) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const selectLanguage = (lang: LanguageType) => {
    setLanguage(lang);
    setLangMenuOpen(false);
    setIsOpen(false); // Close mobile menu if open
  };

  const getLangLabel = (lang: LanguageType) => {
    if (lang === 'en') return 'English';
    if (lang === 'hi') return 'हिंदी';
    return 'தமிழ்';
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-white/90 backdrop-blur-sm py-6 border-b border-gray-100'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-3xl font-bold tracking-tighter text-stnd-navy cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          STND<span className="text-blue-600">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {t.nav.links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors uppercase tracking-wide cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Dropdown */}
          <div className="relative" ref={desktopLangRef}>
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center space-x-1 text-sm font-bold text-stnd-navy hover:text-blue-600 border border-slate-200 px-3 py-1 rounded transition-colors"
            >
              <Globe size={16} />
              <span>{getLangLabel(language)}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden py-1 z-50">
                <button 
                  onClick={() => selectLanguage('en')}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-50 ${language === 'en' ? 'text-blue-600 font-bold' : 'text-slate-700'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => selectLanguage('hi')}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-50 ${language === 'hi' ? 'text-blue-600 font-bold' : 'text-slate-700'}`}
                >
                  हिंदी
                </button>
                <button 
                  onClick={() => selectLanguage('ta')}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-50 ${language === 'ta' ? 'text-blue-600 font-bold' : 'text-slate-700'}`}
                >
                  தமிழ்
                </button>
              </div>
            )}
          </div>

          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="px-5 py-2.5 bg-stnd-navy text-white text-sm font-semibold rounded-sm hover:bg-blue-800 transition-colors cursor-pointer"
          >
            {t.nav.cta}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile Language Dropdown */}
          <div className="relative" ref={mobileLangRef}>
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center space-x-1 text-sm font-bold text-stnd-navy border border-slate-200 px-2 py-1 rounded"
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'EN' : language === 'hi' ? 'हि' : 'த'}</span>
              <ChevronDown size={14} />
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden py-1 z-50">
                <button onClick={() => selectLanguage('en')} className="block w-full text-left px-4 py-2 text-sm hover:bg-slate-50 text-slate-700">English</button>
                <button onClick={() => selectLanguage('hi')} className="block w-full text-left px-4 py-2 text-sm hover:bg-slate-50 text-slate-700">हिंदी</button>
                <button onClick={() => selectLanguage('ta')} className="block w-full text-left px-4 py-2 text-sm hover:bg-slate-50 text-slate-700">தமிழ்</button>
              </div>
            )}
          </div>

          <button 
            className="text-slate-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {t.nav.links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-700 font-medium hover:text-blue-600"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="w-full text-center px-4 py-3 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;