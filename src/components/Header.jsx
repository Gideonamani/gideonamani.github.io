import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import { UKFlag, TZFlag, RUFlag, FRFlag } from './Flags';

export default function Header() {
  const { lang, toggleLanguage, changeLanguage } = useLanguage();
  const t = translations[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  // Click-outside listener to close the language dropdown
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.lang-selector-container')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dropdownOpen]);

  const toggleThemeMode = () => {
    setIsLightMode(prev => !prev);
  };

  const languages = [
    { code: 'en', name: 'English', flag: UKFlag },
    { code: 'sw', name: 'Kiswahili', flag: TZFlag },
    { code: 'ru', name: 'Русский', flag: RUFlag },
    { code: 'fr', name: 'Français', flag: FRFlag },
  ];

  const activeLang = languages.find(l => l.code === lang) || languages[0];

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-logo">
          <NavLink to="/" onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}>Gideonamani</NavLink>
        </div>
        <button
          className="menu-toggle"
          onClick={() => { setMenuOpen(!menuOpen); setDropdownOpen(false); }}
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
          
          <div className="nav-controls">
            <div className="control-group">
              <span className="control-label">{t.nav.languageLabel}</span>
              <div className="lang-selector-container">
                <button 
                  className="lang-dropdown-trigger" 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  aria-label="Select language"
                >
                  <activeLang.flag size={15} style={{ marginRight: '6px' }} />
                  <span className="lang-code-text">{activeLang.code.toUpperCase()}</span>
                  <span className={`chevron-indicator ${dropdownOpen ? 'rotated' : ''}`}>▼</span>
                </button>
                
                {dropdownOpen && (
                  <ul className="lang-dropdown-menu">
                    {languages.map((item) => {
                      const ItemFlag = item.flag;
                      return (
                        <li key={item.code}>
                          <button
                            className={`lang-dropdown-item ${lang === item.code ? 'active' : ''}`}
                            onClick={() => {
                              changeLanguage(item.code);
                              setDropdownOpen(false);
                              setMenuOpen(false);
                            }}
                          >
                            <ItemFlag size={15} style={{ marginRight: '8px' }} />
                            <span className="lang-name-text">{item.name}</span>
                            {lang === item.code && <span className="active-check">✓</span>}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>

            <div className="control-group">
              <span className="control-label">{t.nav.displayModeLabel}</span>
              <button className="theme-mode-toggle" onClick={toggleThemeMode} aria-label="Toggle dark/light mode">
                {isLightMode ? '🌙' : '☀️'}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
