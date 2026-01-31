import React from 'react';
import { portfolioData } from '../constants/data';

export const AcademicInfo: React.FC = () => (
  <section
    id="education"
    className="relative bg-white dark:bg-black py-24 md:py-40 px-6 lg:px-12 border-t border-zinc-100 dark:border-zinc-900 overflow-hidden transition-colors duration-500"
  >
    <div className="container mx-auto max-w-7xl relative z-10">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <h2 className="text-[10px] font-black uppercase text-zinc-200 dark:text-zinc-800 tracking-[0.4em] mb-12">
            Academic History
          </h2>
          <div className="space-y-12">
            {portfolioData.education.map((edu, i) => (
              <div key={i} className="group">
                <h3 className="text-xl md:text-2xl font-black text-black dark:text-white group-hover:text-zinc-400 dark:group-hover:text-zinc-600 transition-colors duration-500">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-zinc-400 dark:text-zinc-600 mt-2">
                  {edu.institution} • {edu.duration.start}—{edu.duration.end}
                </p>
                <div className="inline-block mt-4 text-[10px] font-black text-zinc-200 dark:text-zinc-800 border-b border-zinc-100 dark:border-zinc-900 pb-1">
                  {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Score: ${edu.percentage}%`}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-[10px] font-black uppercase text-zinc-200 dark:text-zinc-800 tracking-[0.4em] mb-12">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolioData.certifications.map((cert) => (
              <div key={cert} className="text-xs font-bold text-zinc-400 dark:text-zinc-600 border-l border-zinc-100 dark:border-zinc-900 pl-4 py-1">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
