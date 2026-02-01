import React, { useEffect, useState } from 'react';

export const ContextDivider: React.FC = () => {
  const roles = ['BUILDER', 'ENGINEER', 'DEVELOPER'];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 1700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="works" className="relative bg-zinc-50 dark:bg-zinc-950/30 py-24 md:py-40 px-6 lg:px-12 border-y border-zinc-100 dark:border-zinc-900 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="flex flex-col">
            <div className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter h-[1.1em] leading-none mb-2">
              <span className="inline-block min-w-[4ch] lg:min-w-[9.5ch] overflow-hidden">
                <span
                  className={`text-black dark:text-white transition-opacity duration-300 block ${
                    fade ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {roles[index]}
                </span>
              </span>
            </div>
            <div className="lg:pl-32 text-4xl md:text-6xl lg:text-9xl font-black text-zinc-200 dark:text-zinc-800 tracking-tighter leading-none">
              AT{' '}
              <a
                href="https://quicko.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black dark:bg-white text-white dark:text-black px-2 lg:px-4 py-1 lg:py-2 rounded hover:opacity-80 transition-opacity inline-block"
              >
                QUICKO
              </a>
              .
            </div>
          </div>

          <div className="flex flex-col lg:items-end pb-2 lg:pb-4 lg:text-right">
            <div className="flex items-center gap-4 mb-4 lg:justify-end">
              <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.4em] whitespace-nowrap">
                Tackling challenges
              </p>
              <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-800" />
            </div>
            <p className="text-lg md:text-xl font-medium text-zinc-400 dark:text-zinc-500 max-w-xs leading-tight">
              Building fintech infrastructure for 2 million users at Quicko.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
