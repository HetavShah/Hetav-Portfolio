import { Activity, ArrowUpRight, Clock, Github, Linkedin, MapPin, Terminal } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { portfolioData } from '../constants/data';

export const Footer: React.FC = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const systemMetrics = [
    { icon: MapPin, label: 'LOC', value: 'Ahmedabad, IN' },
    { icon: Clock, label: 'IST', value: time },
    { icon: Activity, label: 'UPTIME', value: '100%' },
    { icon: Terminal, label: 'STATUS', value: 'AVAILABLE' },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-500 pt-24 md:pt-32 pb-12 overflow-hidden bg-grid"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 md:mb-32 items-end">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand mb-6 md:mb-8 block">
              Ready for the next sprint?
            </span>
            <h2 className="text-huge font-black italic tracking-tighter text-black dark:text-white uppercase leading-none mb-10 md:mb-12">
              SYNC.
            </h2>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-xl md:text-3xl lg:text-5xl font-black text-black dark:text-white hover:text-brand transition-colors duration-300 flex items-center gap-4 group hyphens-auto break-all sm:break-normal"
            >
              {portfolioData.personal.email}
              <ArrowUpRight className="w-6 h-6 md:w-12 md:h-12 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform flex-shrink-0" />
            </a>
          </div>

          <div className="lg:text-right flex flex-col lg:items-end">
            <p className="text-zinc-400 dark:text-zinc-600 font-medium text-lg lg:max-w-xs leading-tight mb-8">
              Currently engineering reliability at Quicko. Open for architectural consultations and high-scale challenges.
            </p>
            <div className="flex gap-6">
              <a
                href={portfolioData.personal.profiles.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-zinc-100 dark:border-zinc-900 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.personal.profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-zinc-100 dark:border-zinc-900 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 md:mb-24 border-y border-zinc-100 dark:border-zinc-900 py-10 md:py-12">
          {systemMetrics.map((metric, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <metric.icon size={12} className="text-zinc-300 dark:text-zinc-700" />
                <span className="text-[10px] font-black text-zinc-300 dark:text-zinc-700 uppercase tracking-widest">
                  {metric.label}
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                {metric.label === 'STATUS' && (
                  <div className="w-2 h-2 rounded-full bg-green-500 status-pulse flex-shrink-0"></div>
                )}
                <span className="text-xs md:text-sm font-bold text-black dark:text-white tracking-wider whitespace-nowrap">
                  {metric.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-2 group cursor-default">
            <div className="hidden sm:block w-4 h-px bg-zinc-200 dark:bg-zinc-800 group-hover:w-8 transition-all"></div>
            <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.4em]">
              Hetav Shah &copy; {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <p className="text-[10px] font-black text-zinc-200 dark:text-zinc-800 uppercase tracking-widest">
              Built for 10^7 sessions
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-50/50 dark:from-zinc-950/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};
