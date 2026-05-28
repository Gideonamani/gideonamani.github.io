import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import Terminal from '../components/Terminal';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const cards = [
    { ...t.home.blogCard, icon: '📝', to: '/blog' },
    { ...t.home.awesomeCard, icon: '⭐', to: '/awesome-lists' },
    { ...t.home.talksCard, icon: '🎤', to: '/talks' },
    { ...t.home.contactCard, icon: '📬', to: '/contact' },
  ];

  return (
    <>
      <section className="hero">
        <div className="page-container hero-grid">
          <ScrollReveal animation="fade-up" delay={100} className="hero-text-block">
            <h1 className="hero-title">{t.hero.greeting}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <p className="hero-description">{t.hero.description}</p>
            <div className="hero-actions">
              <Link to="/blog" className="btn btn-primary">{t.hero.cta1}</Link>
              <Link to="/about" className="btn btn-secondary">{t.hero.cta2}</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="scale-up" delay={250}>
            <Terminal />
          </ScrollReveal>
        </div>
      </section>

      <section className="page-container" style={{ paddingBottom: '80px' }}>
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">{t.home.exploreTitle}</h2>
          <p className="section-subtitle">{t.home.exploreSubtitle}</p>
        </ScrollReveal>
        <div className="card-grid">
          {cards.map((card, i) => (
            <ScrollReveal animation="scale-up" delay={i * 100} key={card.to}>
              <Link to={card.to} style={{ textDecoration: 'none', width: '100%' }}>
                <div className="card" style={{ height: '100%' }}>
                  <div className="card-icon">{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <span className="card-link">
                    {lang === 'en' ? 'Explore' : 'Gundua'} →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
