import { useState, useEffect } from 'react';

const THEMES = [
  { id: 'indigo', name: 'Indigo Nebula', class: 'indigo' },
  { id: 'emerald', name: 'Emerald Matrix', class: 'emerald' },
  { id: 'cyberpunk', name: 'Cyberpunk Sunset', class: 'cyberpunk' },
  { id: 'glacier', name: 'Glacier Ice', class: 'glacier' },
];

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => {
    try {
      return localStorage.getItem('site-theme-accent') || 'indigo';
    } catch {
      return 'indigo';
    }
  });

  // Apply theme class to document body on mount and activeTheme state changes
  useEffect(() => {
    // Remove any existing theme- classes
    THEMES.forEach((t) => {
      document.body.classList.remove(`theme-${t.id}`);
    });

    // Add active theme class
    document.body.classList.add(`theme-${activeTheme}`);

    // Persist in localStorage
    try {
      localStorage.setItem('site-theme-accent', activeTheme);
    } catch (e) {
      console.warn('Could not persist theme choice:', e);
    }
  }, [activeTheme]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const selectTheme = (themeId) => {
    setActiveTheme(themeId);
  };

  return (
    <div className="theme-customizer-container">
      <div className={`theme-customizer-panel ${isOpen ? 'open' : ''}`}>
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            className={`theme-dot-option ${theme.class} ${
              activeTheme === theme.id ? 'active' : ''
            }`}
            onClick={() => selectTheme(theme.id)}
            title={theme.name}
            aria-label={`Select ${theme.name} Theme`}
          />
        ))}
      </div>
      <button
        className="theme-customizer-trigger"
        onClick={toggleOpen}
        title="Customize Theme"
        aria-label="Customize Theme Accent Colors"
      >
        🎨
      </button>
    </div>
  );
}
