export const blogCategories = [
  { id: 'notebook-lms', icon: '🧠' },
  { id: 'substack-blog', icon: '✍️' },
  { id: 'youtube-channel', icon: '🎥' },
];

export const blogPosts = [
  {
    id: 'amusing-ourselves-to-death-workspace',
    category: 'notebook-lms',
    title: {
      en: 'Amusing Ourselves to Death AI Hub',
      sw: 'Kitovu cha AI cha Amusing Ourselves to Death',
      ru: 'Информационный хаб Amusing Ourselves to Death',
      fr: 'Hub IA Amusing Ourselves to Death',
    },
    description: {
      en: "Interactive AI-curated workspaces, audio discussions, and deep summaries of Neil Postman's classic critique of television media.",
      sw: 'Nafasi za kazi zilizoratibiwa na AI, majadiliano ya sauti, na muhtasari wa kitabu cha Neil Postman kuhusu vyombo vya habari vya televisheni.',
      ru: 'Интерактивные рабочие пространства на базе ИИ, аудиодискуссии и глубокие резюме классической критики телевидения Нила Постмана.',
      fr: "Espaces de travail interactifs gérés par IA, discussions audio et synthèses approfondies de la critique classique de la télévision par Neil Postman.",
    },
    keywords: ['NotebookLM', 'AI Workspace', 'Neil Postman', 'Media Philosophy'],
    url: 'https://notebooklm.google.com/',
  },
  {
    id: 'substack-portfolio-update',
    category: 'substack-blog',
    title: {
      en: 'Gideonamani on Substack',
      sw: 'Gideonamani kwenye Substack',
      ru: 'Gideonamani на Substack',
      fr: 'Gideonamani sur Substack',
    },
    description: {
      en: 'Weekly essays on technology development, assets investment, capital allocation, and techno-flaning philosophy.',
      sw: 'Insha za kila wiki kuhusu maendeleo ya teknolojia, uwekezaji wa rasilimali, ugawaji wa mitaji, na falsafa ya techno-flaning.',
      ru: 'Еженедельные эссе о развитии технологий, инвестировании в активы, распределении капитала и философии техно-фланирования.',
      fr: "Essais hebdomadaires sur le développement technologique, l'investissement, l'allocation de capital et la philosophie du techno-flâneur.",
    },
    keywords: ['Substack', 'Capital Allocations', 'Software bit systems', 'Essays'],
    url: 'https://substack.com/',
  },
  {
    id: 'youtube-coding-tutorials',
    category: 'youtube-channel',
    title: {
      en: 'TechnoFlaneur Programming Tutorials',
      sw: 'Mafunzo ya Programu ya TechnoFlaneur',
      ru: 'Уроки программирования TechnoFlaneur',
      fr: 'Tutoriels de Programmation TechnoFlaneur',
    },
    description: {
      en: 'Clean code walk-throughs, React setup guides, full-stack frameworks, and tutorials on pedagogy.',
      sw: 'Miongozo ya kuandika code, usanidi wa React, mifumo kamili ya programu, na mafunzo kuhusu ufundishaji.',
      ru: 'Разборы чистого кода, руководства по настройке React, веб-фреймворки и лекции по педагогике программирования.',
      fr: 'Démonstrations de code propre, guides de configuration React, frameworks full-stack et tutoriels sur la pédagogie.',
    },
    keywords: ['YouTube', 'Programming Tutorials', 'React Guides', 'Pedagogy'],
    url: 'https://youtube.com/',
  },
];
