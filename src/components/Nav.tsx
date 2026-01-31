import { Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { portfolioData } from '../constants/data';

interface NavProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Nav: React.FC<NavProps> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'pnl-page', label: 'Works' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Academic' },
    { id: 'contact', label: 'Contact' },
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
            {navItems.map((item) => {
              const isActive = item.id === 'pnl-page' ? isWorkActive : activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive
                      ? 'text-black dark:text-white'
                      : 'text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="h-4 w-px bg-zinc-100 dark:bg-zinc-800 mx-2" />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300 text-zinc-500 dark:text-zinc-400 group"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon size={18} className="group-hover:rotate-12 transition-transform" />
              ) : (
                <Sun size={18} className="group-hover:rotate-45 transition-transform" />
              )}
            </button>
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
          </div>
        </div>
      </div>
    </>
  );
};
