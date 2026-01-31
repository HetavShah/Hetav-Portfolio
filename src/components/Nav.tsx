import { ChevronDown, Download, Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { portfolioData } from '../constants/data';

interface NavProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Nav: React.FC<NavProps> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorksDropdownOpen, setIsWorksDropdownOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that is most visible on screen
        const mostVisibleEntry = entries.reduce((prev, current) => 
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );

        if (mostVisibleEntry.intersectionRatio > 0) {
          setActiveSection(mostVisibleEntry.target.id);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Academic' },
    { id: 'contact', label: 'Contact' },
  ];

  const workItems = [
    { id: 'pnl-page', label: 'PnL Page' },
    { id: 'appstore', label: 'AppStore' },
    { id: 'karkaushal', label: 'Karkaushal' },
  ];

  const isWorkActive = ['pnl-page', 'appstore', 'karkaushal'].includes(activeSection);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900 h-16 flex items-center transition-all duration-300">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center w-full max-w-7xl">
          <div className="font-black text-xl tracking-tighter flex items-center group cursor-default text-black dark:text-white">
            H/S<span className="text-[#a3bc1a] group-hover:translate-x-1 transition-transform inline-block">.</span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <React.Fragment key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive
                        ? 'text-black dark:text-white'
                        : 'text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                  {index === 0 && (
                    <div className="relative group">
                      <div className="flex items-center gap-1">
                        <a
                          href="#works"
                          className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                            isWorkActive
                              ? 'text-black dark:text-white'
                              : 'text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white'
                          }`}
                        >
                          Works
                        </a>
                        <button
                          onClick={() => setIsWorksDropdownOpen(!isWorksDropdownOpen)}
                          className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-1 ${
                            isWorkActive
                              ? 'text-black dark:text-white'
                              : 'text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white'
                          }`}
                        >
                          <ChevronDown size={14} className={`transition-transform ${isWorksDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>

                      {isWorksDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg shadow-lg py-2 z-50">
                          {workItems.map((item) => (
                            <a
                              key={item.id}
                              href={`#${item.id}`}
                              onClick={() => setIsWorksDropdownOpen(false)}
                              className={`block px-4 py-2 text-[10px] font-black uppercase tracking-[0.1em] transition-colors ${
                                activeSection === item.id
                                  ? 'text-black dark:text-white bg-zinc-50 dark:bg-zinc-800'
                                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800'
                              }`}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </React.Fragment>
              );
            })}

            
          </div>

          <div className="flex gap-4 items-center">
            <button
              onClick={toggleTheme}
              className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-500 dark:text-zinc-400"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-500 dark:text-zinc-400"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="hidden sm:flex gap-4 items-center">
              <a
                href={portfolioData.personal.profiles.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-2" />
              <a
                href="/Hetav_Shah_Resume.pdf"
                download="Hetav_Shah_Resume.pdf"
                className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Download Resume"
              >
                <Download className="w-4 h-4" />
              </a>
              <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-2" />
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300 text-zinc-400 dark:text-zinc-400 group"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? (
                  <Moon size={16} className="group-hover:rotate-12 transition-transform" />
                ) : (
                  <Sun size={16} className="group-hover:rotate-45 transition-transform" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white dark:bg-black transition-transform duration-500 md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-black uppercase tracking-[0.2em] ${
                activeSection === item.id ? 'text-black dark:text-white' : 'text-zinc-300 dark:text-zinc-700'
              }`}
            >
              {item.label}
            </a>
          ))}

          <div>
            <div className="flex items-center gap-2">
              <a
                href="#works"
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-black uppercase tracking-[0.2em] ${
                  isWorkActive ? 'text-black dark:text-white' : 'text-zinc-300 dark:text-zinc-700'
                }`}
              >
                Works
              </a>
              <button
                onClick={() => setIsWorksDropdownOpen(!isWorksDropdownOpen)}
                className={`text-2xl font-black uppercase tracking-[0.2em] flex items-center gap-2 ${
                  isWorkActive ? 'text-black dark:text-white' : 'text-zinc-300 dark:text-zinc-700'
                }`}
              >
                <ChevronDown size={20} className={`transition-transform ${isWorksDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {isWorksDropdownOpen && (
              <div className="flex flex-col gap-4 mt-4">
                {workItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsWorksDropdownOpen(false);
                    }}
                    className={`text-lg font-bold uppercase ${
                      activeSection === item.id ? 'text-black dark:text-white' : 'text-zinc-400 dark:text-zinc-600'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-12 mt-8">
            <a
              href={portfolioData.personal.profiles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.personal.profiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="/Hetav_Shah_Resume.pdf"
              download="Hetav_Shah_Resume.pdf"
              className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Download size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
