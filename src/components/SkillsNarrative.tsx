import React from 'react';

export const SkillsNarrative: React.FC = () => (
  <section
    id="skills"
    className="relative bg-zinc-50 dark:bg-zinc-950/30 py-24 md:py-40 px-6 lg:px-12 border-t border-zinc-100 dark:border-zinc-900 overflow-hidden transition-colors duration-500"
  >
    <div className="container mx-auto max-w-7xl relative z-10">
      <h2 className="text-huge font-black text-black dark:text-white italic mb-16 md:mb-32 tracking-tighter leading-[0.7] uppercase">
        CORE.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
        {[
          {
            label: 'Systems I Design',
            items: [
              'Serverless Architectures',
              'Event-Driven Integration',
              'Scalable Microfrontends',
              'Auth & Session Engines',
            ],
          },
          {
            label: 'Problems I Enjoy',
            items: ['User Experience Optimization', 'Data Consistency', 'Performance at Scale', 'System Integration'],
          },
          {
            label: 'Concepts I Care About',
            items: ['Clean Code & Documentation', 'Modular Design', 'Reliable Systems', 'Failure-aware Design'],
          },
          {
            label: 'Tools I Reach For',
            items: ['TypeScript / Node.js', 'AWS', 'DynamoDB', 'Angular'],
          },
        ].map((group, idx) => (
          <div key={idx}>
            <p className="text-[10px] font-black uppercase text-[#a3bc1a] tracking-widest mb-6 md:mb-8">{group.label}</p>
            <ul className="space-y-3 md:space-y-4">
              {group.items.map((s) => (
                <li
                  key={s}
                  className="text-sm font-bold text-zinc-500 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors cursor-default"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
