import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { DetailText, SectionHeader } from './Shared';

interface ProjectSectionProps {
  id: string;
  label: string;
  title: string;
  url: string;
  color: string;
  description1: string;
  description2: string;
  stackItems: string[];
  ctaText: string;
  isHindi?: boolean;
  reverse?: boolean;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  id,
  label,
  title,
  url,
  color,
  description1,
  description2,
  stackItems,
  ctaText,
  isHindi = false,
  reverse = false,
}) => (
  <section
    id={id}
    className={`relative bg-white dark:bg-black py-24 md:py-40 px-6 lg:px-12 border-t border-zinc-100 dark:border-zinc-900 overflow-hidden transition-colors duration-500`}
  >
    <div className="container mx-auto max-w-7xl relative z-10">
      <SectionHeader id={id} label={label} title={title} url={url} color={color} isHindi={isHindi} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className={`col-span-full lg:col-span-8 ${reverse ? 'lg:order-2' : ''}`}>
          <DetailText label="The Challenge" content={description1} />
          <DetailText label="The Strategy" content={description2} />
        </div>

        <div
          className={`col-span-full lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 pt-12 lg:pt-0 ${
            reverse ? 'lg:order-1 lg:border-r lg:pr-12' : 'lg:border-l lg:pl-12'
          } border-zinc-100 dark:border-zinc-900`}
        >
          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-black text-zinc-200 dark:text-zinc-800 uppercase tracking-widest mb-6">
                Stack & Focus
              </p>
              <ul className="space-y-4 text-sm font-bold text-zinc-500 dark:text-zinc-400">
                {stackItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className={`w-3 h-3 text-zinc-200 dark:text-zinc-800 flex-shrink-0`}>▸</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 text-xs font-black text-black dark:text-white uppercase tracking-[0.2em] group"
            >
              <span className={`border-b border-zinc-100 dark:border-zinc-900 transition-all pb-1`} style={{ borderColor: 'transparent' }}>
                {ctaText}
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
