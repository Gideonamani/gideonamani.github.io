import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <nav className="footer-nav">
          <Link to="/">{t.nav.home}</Link>
          <Link to="/about">{t.nav.about}</Link>
          <Link to="/blog">{t.nav.blog}</Link>
          <Link to="/awesome-lists">{t.nav.awesomeLists}</Link>
          <Link to="/talks">{t.nav.talks}</Link>
          <Link to="/contact">{t.nav.contact}</Link>
        </nav>
        <div className="footer-social">
          <a href="https://github.com/Gideonamani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">💻</a>
          <a href="https://twitter.com/Gideonamani" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
          <a href="https://www.facebook.com/gmarress" target="_blank" rel="noopener noreferrer" aria-label="Facebook">👤</a>
          <a href="https://vk.com/Gideonamani" target="_blank" rel="noopener noreferrer" aria-label="VK">💬</a>
        </div>
        <p className="footer-disclaimer" style={{
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          maxWidth: '600px',
          lineHeight: '1.6',
          margin: '8px auto 16px',
          fontStyle: 'italic',
          opacity: 0.75
        }}>
          {t.footer.disclaimer}
        </p>
        <p className="footer-copyright">
          {t.footer.copyright.replace('{year}', year)}
        </p>
      </div>
    </footer>
  );
}
