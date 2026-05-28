import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('site-lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const toggleLanguage = () => {
    setLang(prev => {
      const next = prev === 'en' ? 'sw' : 'en';
      try { localStorage.setItem('site-lang', next); } catch {}
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
