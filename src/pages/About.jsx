import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="page-container" style={{ paddingBottom: '80px' }}>
      <ScrollReveal animation="fade-up">
        <div className="page-header">
          <h1 className="section-title">{t.about.title}</h1>
        </div>
      </ScrollReveal>

      <div className="about-content">
        <ScrollReveal animation="fade-up" delay={100}>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p style={{ marginTop: '20px' }}>
            <em>{t.about.cheers}</em>
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <h2 className="section-title" style={{ marginTop: '56px', marginBottom: '24px' }}>
            {t.about.journeyTitle}
          </h2>
        </ScrollReveal>

        <div className="card-grid" style={{ marginBottom: '56px' }}>
          <ScrollReveal animation="scale-up" delay={100}>
            <div className="card" style={{ height: '100%' }}>
              <h3 className="card-title" style={{ color: 'var(--accent-cyan)' }}>
                {t.about.beginningsTitle}
              </h3>
              <p className="card-description" style={{ marginTop: '12px', fontSize: '0.94rem' }}>
                {t.about.beginningsText}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={200}>
            <div className="card" style={{ height: '100%' }}>
              <h3 className="card-title" style={{ color: 'var(--accent-purple)' }}>
                {t.about.currentTitle}
              </h3>
              <p className="card-description" style={{ marginTop: '12px', fontSize: '0.94rem' }}>
                {t.about.currentText}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={300}>
            <div className="card" style={{ height: '100%' }}>
              <h3 className="card-title" style={{ color: 'var(--accent-blue)' }}>
                {t.about.futureTitle}
              </h3>
              <p className="card-description" style={{ marginTop: '12px', fontSize: '0.94rem' }}>
                {t.about.futureText}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" delay={400}>
          <div className="card" style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '24px' }}>
            <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
              {t.about.additionalTitle}
            </h3>
            <p className="card-description" style={{ marginBottom: '16px' }}>
              {t.about.additionalDesc}
            </p>
            <div className="about-links" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/awesome-lists" className="btn btn-secondary" style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
                {t.about.link1} →
              </Link>
              <Link to="/talks" className="btn btn-secondary" style={{ padding: '8px 18px', fontSize: '0.88rem' }}>
                {t.about.link2} →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
