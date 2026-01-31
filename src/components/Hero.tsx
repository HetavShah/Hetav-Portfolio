import React from 'react';

export const Hero: React.FC = () => (
  <section
    id="about"
    className="relative min-h-screen flex flex-col justify-center bg-white dark:bg-black px-6 lg:px-12 pt-16 overflow-hidden transition-colors duration-500"
  >
    <div className="container mx-auto max-w-7xl relative z-10">
      <h1 className="text-huge font-black text-black dark:text-white italic mb-8 md:mb-12 uppercase">
        HETAV<br />
        SHAH
      </h1>
      <div className="max-w-3xl">
        <p className="text-xl md:text-3xl lg:text-5xl font-bold text-zinc-300 dark:text-zinc-700 leading-tight">
          I take <span className="text-black dark:text-white">features</span> from idea to production.
        </p>
      </div>
    </div>
  </section>
);
