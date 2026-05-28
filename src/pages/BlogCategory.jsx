import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import { blogPosts } from '../data/blog';

export default function BlogCategory() {
  const { categoryId } = useParams();
  const { lang } = useLanguage();
  const t = translations[lang];
  const categoryInfo = t.blog.categories[categoryId];
  const posts = blogPosts.filter(p => p.category === categoryId);

  if (!categoryInfo) {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1 className="section-title">Not Found</h1>
          <p className="section-subtitle">This category does not exist.</p>
          <Link to="/blog" className="btn btn-secondary" style={{ marginTop: '24px' }}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="section-title">{categoryInfo.name}</h1>
        <p className="section-subtitle">{categoryInfo.description}</p>
      </div>

      {posts.length === 0 ? (
        <p style={{ color: 'var(--text-muted)' }}>
          {lang === 'en' ? 'No posts in this category yet. Stay tuned!' : 'Hakuna machapisho katika kundi hili bado. Endelea kufuatilia!'}
        </p>
      ) : (
        <div className="post-list">
          {posts.map(post => (
            <div className="post-item" key={post.id}>
              <h3>{post.title[lang]}</h3>
              <p className="post-excerpt">{post.description[lang]}</p>
              {post.keywords && post.keywords.length > 0 && (
                <p className="post-meta" style={{ marginTop: '8px' }}>
                  {post.keywords.join(', ')}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      <Link to="/blog" className="btn btn-secondary" style={{ marginTop: '32px' }}>
        ← {lang === 'en' ? 'Back to Blog' : 'Rudi Blog'}
      </Link>
    </div>
  );
}
