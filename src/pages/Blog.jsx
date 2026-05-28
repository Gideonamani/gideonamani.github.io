import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import { blogCategories, blogPosts } from '../data/blog';

export default function Blog() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="section-title">{t.blog.title}</h1>
        <p className="section-subtitle">{t.blog.subtitle}</p>
      </div>

      <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>
        {t.blog.categoriesTitle}
      </h2>
      <div className="blog-categories">
        {blogCategories.map(cat => (
          <Link to={`/blog/${cat.id}`} key={cat.id} style={{ textDecoration: 'none' }}>
            <div className="card">
              <div className="card-icon">{cat.icon}</div>
              <h3 className="card-title">{t.blog.categories[cat.id].name}</h3>
              <p className="card-description">{t.blog.categories[cat.id].description}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="section-title" style={{ fontSize: '1.5rem', marginTop: '48px', marginBottom: '24px' }}>
        {t.blog.recentTitle}
      </h2>
      <div className="post-list">
        {blogPosts.map(post => (
          <div className="post-item" key={post.id}>
            <h3>{post.title[lang]}</h3>
            <p className="post-meta">
              {t.blog.categories[post.category]?.name}
            </p>
            <p className="post-excerpt">{post.description[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
