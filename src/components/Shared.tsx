import React from 'react';

interface SectionHeaderProps {
  id: string;
  label: string;
  title: string;
  url?: string;
  color?: string;
  isHindi?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  id,
  label,
  title,
  url,
  color = '#a3bc1a',
  isHindi = false,
}) => {
  const TitleContent = () => (
    <h2
      className={`text-huge font-black italic tracking-tighter text-black dark:text-white uppercase leading-none transition-colors duration-300 ${
        isHindi ? 'font-hindi' : ''
      } ${url ? 'hover:text-zinc-400 dark:hover:text-zinc-600 cursor-pointer' : ''}`}
      style={isHindi ? { fontStyle: 'italic' } : {}}
    >
      {title}
    </h2>
  );

  return (
    <div className="mb-10 md:mb-20">
      <span
        className={`font-black text-[10px] uppercase tracking-[0.6em] mb-4 md:mb-6 block`}
        style={{ color }}
      >
        {label}
      </span>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block group w-fit">
          <TitleContent />
        </a>
      ) : (
        <TitleContent />
      )}
    </div>
  );
};

interface DetailTextProps {
  label: string;
  content: string;
}

export const DetailText: React.FC<DetailTextProps> = ({ label, content }) => (
  <div className="mb-8 md:mb-12 group">
    <p className="text-[10px] font-black uppercase text-zinc-300 dark:text-zinc-700 tracking-[0.3em] mb-4 group-hover:text-zinc-500 transition-colors">
      {label}
    </p>
    <p className="text-lg md:text-xl font-medium text-zinc-800 dark:text-zinc-300 leading-relaxed max-w-3xl">
      {content}
    </p>
  </div>
);
