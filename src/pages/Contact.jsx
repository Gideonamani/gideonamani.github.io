import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import contacts from '../data/contacts';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="page-container">
      <ScrollReveal animation="fade-up">
        <div className="page-header">
          <h1 className="section-title">{t.contact.title}</h1>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>
      </ScrollReveal>
      <div className="contact-grid">
        {contacts.map((c, i) => (
          <ScrollReveal animation="scale-up" delay={i * 80} key={c.platform}>
            <div className="contact-card" style={{ height: '100%' }}>
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
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
