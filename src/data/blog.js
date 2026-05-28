export const blogCategories = [
  { id: 'book-summaries', icon: '📚' },
  { id: 'cool-projects', icon: '🚀' },
  { id: 'random-thoughts', icon: '💭' },
  { id: 'travels', icon: '✈️' },
];

export const blogPosts = [
  {
    id: 'the-medium-is-the-metaphor',
    category: 'book-summaries',
    title: {
      en: 'The Media is the Metaphor',
      sw: 'Njia ya Usambazaji Ndiyo Sitiari',
    },
    description: {
      en: 'Chapter One Summary of the book Amusing Ourselves to Death.',
      sw: 'Muhtasari wa Sura ya Kwanza ya kitabu Amusing Ourselves to Death.',
    },
    keywords: ['language', 'media'],
  },
  {
    id: 'building-a-jekyll-multilingual-blog',
    category: 'cool-projects',
    title: {
      en: 'Building a Jekyll Multilingual Blog',
      sw: 'Kutengeneza Blog ya Lugha Kadhaa kwa Jekyll',
    },
    description: {
      en: 'How I built a multilingual blog using Jekyll and GitHub Pages.',
      sw: 'Jinsi nilivyotengeneza blog ya lugha kadhaa kwa kutumia Jekyll na GitHub Pages.',
    },
    keywords: ['jekyll', 'blog', 'multilingual'],
  },
];
