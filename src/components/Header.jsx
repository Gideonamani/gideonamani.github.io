import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

export default function Header() {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => {
    try {
      return localStorage.getItem('site-theme-mode') === 'light';
    } catch {
      return false;
    }
  });

  // Sync light-mode body class and persistence
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    try {
      localStorage.setItem('site-theme-mode', isLightMode ? 'light' : 'dark');
    } catch (e) {
      console.warn('Could not persist theme mode choice:', e);
    }
  }, [isLightMode]);

  const toggleThemeMode = () => {
    setIsLightMode(prev => !prev);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-logo">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Gideonamani</NavLink>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>{t.nav.home}</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>{t.nav.about}</NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>{t.nav.blog}</NavLink>
          <NavLink to="/awesome-lists" onClick={() => setMenuOpen(false)}>{t.nav.awesomeLists}</NavLink>
          <NavLink to="/talks" onClick={() => setMenuOpen(false)}>{t.nav.talks}</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</NavLink>
          <button className="theme-mode-toggle" onClick={toggleThemeMode} aria-label="Toggle dark/light mode">
            {isLightMode ? '🌙' : '☀️'}
          </button>
          <button className="lang-switch" onClick={toggleLanguage}>
            {lang === 'en' ? 'SW 🇹🇿' : 'EN 🇬🇧'}
          </button>
        </nav>
      </div>
    </header>
  );
}
