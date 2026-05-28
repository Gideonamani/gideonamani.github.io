import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Terminal() {
  const { lang } = useLanguage();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of the terminal window whenever history changes
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  // Focus terminal input when clicking inside terminal window
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const getWelcomeMessage = () => {
    if (lang === 'en') {
      return `Gideonamani OS [Version 2.0.0]\n(c) 2026 Gideonamani. All rights reserved.\n\nType 'help' or click the quick commands below to explore.`;
    } else {
      return `Gideonamani OS [Toleo la 2.0.0]\n(c) 2026 Gideonamani. Haki zote zimehifadhiwa.\n\nAndika 'help' au bonyeza vitufe vya chini ili kugundua.`;
    }
  };

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let output = '';

    if (lang === 'en') {
      switch (trimmed) {
        case 'help':
          output = `Available commands:\n  about     - Short introduction of who I am\n  skills    - Professional tech capabilities\n  journey   - Timeline of my developer journey\n  socials   - Active direct contact links\n  clear     - Empty the terminal screen`;
          break;
        case 'about':
          output = `GIDEONAMANI\n-----------------------------------------\nRole:     Instructor • Investor • Developer • TechnoFlaneur\nLocation: St. Petersburg, Russia (from Tanzania)\nFocus:    Unlocking potential through code and investments.\nI explore ideas at the intersection of culture, markets, and bits.`;
          break;
        case 'skills':
          output = `TECHNICAL CAPABILITIES:\n-----------------------------------------\nCoding & Logic     [████████████░░░] 80% (React, Node, Python)\nTeaching/Instruct  [██████████████░] 90% (Theory & Practical)\nInvesting/Markets  [██████████░░░░░] 65% (Assets & Capital)\nTechno-Flaning     [███████████████] 100% (Idea Exploration)`;
          break;
        case 'journey':
          output = `GIDEONAMANI TIMELINE:\n-----------------------------------------\n[2018 - Began]    - Wrote my first lines of code in St. Petersburg.\n[2021 - Expand]   - Dove deep into markets, capital investing & tutoring.\n[2024 - Builder]  - Developing custom full-stack solutions & systems.\n[Present]         - Merging pedagogy, finance, and software structures.\n[Prospects]       - Building next-gen educational & investing tools.`;
          break;
        case 'socials':
          output = `ACTIVE DIRECT REACH:\n-----------------------------------------\n- GitHub:   github.com/Gideonamani\n- VK:       vk.com/Gideonamani\n- Substack: gideonamani.substack.com (Coming soon)\n- Email:    gmarress@gmail.com / gmarress@yahoo.com`;
          break;
        default:
          output = `Command not found: '${trimmed}'. Type 'help' for available options.`;
      }
    } else {
      // Swahili commands mapping
      switch (trimmed) {
        case 'help':
          output = `Amri zinazopatikana:\n  about     - Utambulisho mfupi kunihusu\n  skills    - Ujuzi wangu wa kitaalamu wa teknolojia\n  journey   - Historia ya safari yangu kama msanidi programu\n  socials   - Viungo vya wasifu wangu mitandaoni\n  clear     - Safisha skrini ya terminal`;
          break;
        case 'about':
          output = `GIDEONAMANI\n-----------------------------------------\nWajibu:   Mwalimu • Mwekezaji • Msanidi Programu • TechnoFlaneur\nMahali:   St. Petersburg, Urusi (kutoka Tanzania)\nLengo:    Kufungua fursa kupitia msimbo na uwekezaji.\nNinachunguza mawazo ambapo tamaduni, masoko, na baiti zinakutana.`;
          break;
        case 'skills':
          output = `UWEZO WA TEKNOLOJIA:\n-----------------------------------------\nKuandika Code      [████████████░░░] 80% (React, Node, Python)\nKufundisha/Elimu   [██████████████░] 90% (Nadharia & Vitendo)\nUwekezaji/Masoko   [██████████░░░░░] 65% (Mitaji & Rasilimali)\nTechno-Flaning     [███████████████] 100% (Uchunguzi wa Mawazo)`;
          break;
        case 'journey':
          output = `SAFARI YA GIDEONAMANI:\n-----------------------------------------\n[2018 - Mwanzo]   - Niliandika mistari ya kwanza ya msimbo huko St. Petersburg.\n[2021 - Kukua]    - Niliingia kwa undani katika masoko, uwekezaji na kufundisha.\n[2024 - Kujenga]  - Kutengeneza mifumo na suluhisho kamili za programu.\n[Sasa]            - Kuunganisha elimu, fedha, na miundo ya programu.\n[Baadaye]         - Kujenga zana za kisasa za elimu na uwekezaji.`;
          break;
        case 'socials':
          output = `NJIA ZA WASILIANO HAI:\n-----------------------------------------\n- GitHub:   github.com/Gideonamani\n- VK:       vk.com/Gideonamani\n- Substack: gideonamani.substack.com (Inakuja hivi karibuni)\n- Barua Pepe: gmarress@gmail.com / gmarress@yahoo.com`;
          break;
        default:
          output = `Amri haipatikani: '${trimmed}'. Andika 'help' kupata chaguo zilizopo.`;
      }
    }

    setHistory((prev) => [...prev, { command: cmdText, output }]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  const handleQuickAction = (cmd) => {
    executeCommand(cmd);
  };

  return (
    <div className="terminal-window" onClick={handleTerminalClick}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot close"></span>
          <span className="terminal-dot minimize"></span>
          <span className="terminal-dot maximize"></span>
        </div>
        <div className="terminal-title">gideonamani@digital-space ~</div>
      </div>
      <div className="terminal-body" ref={terminalBodyRef}>
        <div className="terminal-welcome">{getWelcomeMessage()}</div>
        {history.map((item, idx) => (
          <div className="terminal-history-item" key={idx}>
            <div className="terminal-history-cmd">{item.command}</div>
            <div className="terminal-history-out">{item.output}</div>
          </div>
        ))}
        <div className="terminal-input-row">
          <span className="terminal-input-prefix">guest@gideon-space:~$</span>
          <div className="terminal-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              className="terminal-input-element"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
      <div className="terminal-quick-actions">
        <button
          className="terminal-action-btn"
          onClick={() => handleQuickAction('about')}
        >
          [about]
        </button>
        <button
          className="terminal-action-btn"
          onClick={() => handleQuickAction('skills')}
        >
          [skills]
        </button>
        <button
          className="terminal-action-btn"
          onClick={() => handleQuickAction('journey')}
        >
          [journey]
        </button>
        <button
          className="terminal-action-btn"
          onClick={() => handleQuickAction('socials')}
        >
          [socials]
        </button>
        <button
          className="terminal-action-btn"
          onClick={() => handleQuickAction('clear')}
        >
          [clear]
        </button>
      </div>
    </div>
  );
}
