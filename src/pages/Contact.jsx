import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import contacts from '../data/contacts';

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="section-title">{t.contact.title}</h1>
        <p className="section-subtitle">{t.contact.subtitle}</p>
      </div>
      <div className="contact-grid">
        {contacts.map(c => (
          <div className="contact-card" key={c.platform}>
            <div className="contact-icon">{c.icon}</div>
            <div className="contact-info">
              <h3>{c.platform}</h3>
              <p className="contact-status">{c.status[lang]}</p>
              <p className="contact-desc">{c.description[lang]}</p>
              <a className="contact-link" href={c.url} target="_blank" rel="noopener noreferrer">
                {c.anchorText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
