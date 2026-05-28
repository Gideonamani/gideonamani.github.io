import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const SUPPORTED_LANGUAGES = ['en', 'sw', 'ru', 'fr'];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('site-lang');
      return SUPPORTED_LANGUAGES.includes(saved) ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const changeLanguage = (newLang) => {
    if (SUPPORTED_LANGUAGES.includes(newLang)) {
      setLang(newLang);
      try {
        localStorage.setItem('site-lang', newLang);
      } catch (e) {
        console.warn('Failed to persist language choice:', e);
      }
    }
  };

  const toggleLanguage = () => {
    setLang(prev => {
      const nextIndex = (SUPPORTED_LANGUAGES.indexOf(prev) + 1) % SUPPORTED_LANGUAGES.length;
      const next = SUPPORTED_LANGUAGES[nextIndex];
      try {
        localStorage.setItem('site-lang', next);
      } catch (e) {
        console.warn('Failed to persist language choice:', e);
      }
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
