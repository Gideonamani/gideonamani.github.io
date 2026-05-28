import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import talks from '../data/talks';

export default function Talks() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="section-title">{t.talks.title}</h1>
        <p className="section-subtitle">{t.talks.subtitle}</p>
      </div>

      <div className="card-grid">
        {talks.map(talk => (
          <div className="card" key={talk.id}>
            <div className="card-icon">{talk.icon}</div>
            <h3 className="card-title">{talk.title[lang]}</h3>
            <p className="card-description">{talk.description[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
