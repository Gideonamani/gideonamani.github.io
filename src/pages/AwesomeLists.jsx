import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import awesomeLists from '../data/awesomeLists';

export default function AwesomeLists() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="section-title">{t.awesomeLists.title}</h1>
        <p className="section-subtitle">{t.awesomeLists.subtitle}</p>
      </div>

      <div className="card-grid">
        {awesomeLists.map(list => (
          <div className="card" key={list.id}>
            <div className="card-icon">{list.icon}</div>
            <h3 className="card-title">{list.title[lang]}</h3>
            <p className="card-description">{list.description[lang]}</p>
            {list.items && list.items.length > 0 && (
              <div className="list-content" style={{ marginTop: '16px' }}>
                <ul>
                  {list.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
