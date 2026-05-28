import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="section-title">{t.about.title}</h1>
      </div>
      <div className="about-content">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
        <p><em>{t.about.cheers}</em></p>

        <h2>{t.about.additionalTitle}</h2>
        <p>{t.about.additionalDesc}</p>
        <div className="about-links">
          <Link to="/awesome-lists">{t.about.link1}</Link>
          <Link to="/talks">{t.about.link2}</Link>
        </div>
      </div>
    </div>
  );
}
