
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  ArrowUpRight, 
  ChevronRight, 
  Sun,
  Moon,
  Clock,
  MapPin,
  Terminal,
  Activity
} from 'lucide-react';
import { portfolioData } from './data';

// --- Theme Hook ---

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return { theme, toggleTheme };
};

// --- Shared Components ---

const Nav = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [activeSection, setActiveSection] = useState('about');

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
    { id: 'contact', label: 'Contact' }
  ];

  const isWorkActive = ['pnl-page', 'appstore', 'karkaushal'].includes(activeSection);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900 h-16 flex items-center transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center w-full">
        <div className="font-black text-xl tracking-tighter flex items-center group cursor-default text-black dark:text-white">
          H/S<span className="text-[#a3bc1a] group-hover:translate-x-1 transition-transform inline-block">.</span>
        </div>
        
        <div className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = item.id === 'pnl-page' ? isWorkActive : activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive ? 'text-black dark:text-white' : 'text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white'
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
            className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-500 dark:text-zinc-400"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a href={portfolioData.personal.profiles.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={portfolioData.personal.profiles.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ id, label, title, url, color = "#a3bc1a", isHindi = false }: { id: string, label: string, title: string, url?: string, color?: string, isHindi?: boolean }) => {
  const TitleContent = () => (
    <h2 className={`text-huge font-black italic tracking-tighter text-black dark:text-white uppercase leading-none transition-colors duration-300 ${isHindi ? 'font-hindi' : ''} ${url ? 'hover:text-zinc-400 dark:hover:text-zinc-600 cursor-pointer' : ''}`} style={isHindi ? { fontStyle: 'italic' } : {}}>
      {title}
    </h2>
  );

  return (
    <div className="mb-20">
      <span className={`font-black text-[10px] uppercase tracking-[0.6em] mb-4 block`} style={{ color }}>{label}</span>
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

const DetailText = ({ label, content }: { label: string, content: string }) => (
  <div className="mb-12 group">
    <p className="text-[10px] font-black uppercase text-zinc-300 dark:text-zinc-700 tracking-[0.3em] mb-4 group-hover:text-zinc-500 transition-colors">{label}</p>
    <p className="text-xl font-medium text-zinc-800 dark:text-zinc-300 leading-relaxed max-w-3xl">{content}</p>
  </div>
);

// --- Animated Company Reveal ---
const ContextDivider = () => {
  const roles = ["BUILDER", "ENGINEER", "DEVELOPER"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-zinc-50 dark:bg-zinc-950/30 py-40 px-6 lg:px-12 border-y border-zinc-100 dark:border-zinc-900 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="flex flex-col">
            <div className="text-5xl lg:text-9xl font-black tracking-tighter h-[1.1em] leading-none">
              <span className="inline-block w-[4.5ch] lg:w-[9.5ch] overflow-hidden">
                <span className={`text-black dark:text-white transition-opacity duration-300 block ${fade ? 'opacity-100' : 'opacity-0'}`}>
                  {roles[index]}
                </span>
              </span>
            </div>
            <div className="pl-12 lg:pl-32 text-5xl lg:text-9xl font-black text-zinc-200 dark:text-zinc-800 tracking-tighter leading-none">
              AT QUICKO.
            </div>
          </div>
          
          <div className="flex flex-col items-end pb-2 lg:pb-4 text-right">
            <div className="flex items-center gap-4 mb-4">
              <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.4em] whitespace-nowrap">
                Scale Engineering
              </p>
              <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-800" />
            </div>
            <p className="text-xl font-medium text-zinc-400 dark:text-zinc-500 max-w-xs leading-tight">
              Scaling fintech infrastructure for 2 million users at Quicko.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Sections ---

const Hero = () => (
  <section id="about" className="relative min-h-screen flex flex-col justify-center bg-white dark:bg-black px-6 lg:px-12 pt-16 overflow-hidden transition-colors duration-500">
    <div className="container mx-auto max-w-7xl relative z-10">
      <h1 className="text-huge font-black text-black dark:text-white italic mb-12 uppercase">
        HETAV<br />SHAH
      </h1>
      <div className="max-w-3xl">
        <p className="text-2xl lg:text-5xl font-bold text-zinc-300 dark:text-zinc-700 leading-tight">
          I build the <span className="text-black dark:text-white">backends</span> that stay up, no matter how many millions of people log in at once.
        </p>
      </div>
    </div>
  </section>
);

const PnlPage = () => (
  <section id="pnl-page" className="relative bg-white dark:bg-black py-40 px-6 lg:px-12 overflow-hidden transition-colors duration-500">
    <div className="container mx-auto max-w-7xl relative z-10">
      <SectionHeader id="pnl-page" label="SYSTEM 01" title="pnl.page" url="https://pnl.page" color="#a3bc1a" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <DetailText 
            label="The Objective" 
            content="Standardizing verified P&L social proof for a hyper-fragmented trading community. Eliminating 'inspect element' fraud via read-only broker integrations."
          />
          <DetailText 
            label="Engineering Strategy" 
            content="Built a multi-broker ingestion engine using AWS Step Functions to orchestrate parallel trade normalization. Managed massive trade object volumes with EventBridge-driven asynchronous processing."
          />
        </div>
        
        <div className="lg:col-span-4 flex flex-col justify-between border-l border-zinc-100 dark:border-zinc-900 pl-12 lg:pl-16">
          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-black text-zinc-200 dark:text-zinc-800 uppercase tracking-widest mb-6">
                Stack
              </p>
              <ul className="space-y-4 text-sm font-bold text-zinc-500 dark:text-zinc-400">
                <li className="flex items-center gap-4"><ChevronRight className="w-3 h-3 text-zinc-200 dark:text-zinc-800" /> AWS Lambda & Step Functions</li>
                <li className="flex items-center gap-4"><ChevronRight className="w-3 h-3 text-zinc-200 dark:text-zinc-800" /> DynamoDB & EventBridge</li>
                <li className="flex items-center gap-4"><ChevronRight className="w-3 h-3 text-zinc-200 dark:text-zinc-800" /> Node.js / TypeScript</li>
              </ul>
            </div>
            
            <a href="https://pnl.page" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-xs font-black text-black dark:text-white uppercase tracking-[0.2em] group">
              <span className="border-b border-zinc-100 dark:border-zinc-900 group-hover:border-[#a3bc1a] transition-all pb-1">Verify Performance</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a3bc1a]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Appstore = () => (
  <section id="appstore" className="relative bg-white dark:bg-black py-40 px-6 lg:px-12 border-t border-zinc-100 dark:border-zinc-900 overflow-hidden transition-colors duration-500">
    <div className="container mx-auto max-w-7xl relative z-10">
      <SectionHeader id="appstore" label="CORE SERVICE" title="Appstore" url="https://appstore.quicko.com" color="#2962FF" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 lg:order-2">
          <DetailText 
            label="The Challenge" 
            content="Authentication sprawl. Every internal product was re-inventing broker OAuth logic. We needed a centralized 'Identity Hub' for the entire Quicko ecosystem."
          />
          <DetailText 
            label="The Solution" 
            content="Standardized OAuth 2.0 lifecycle management across dozens of brokers. Built an idempotent API surface that handles token rotation and account mapping for millions of sessions."
          />
        </div>
        
        <div className="lg:col-span-4 flex flex-col justify-between border-r border-zinc-100 dark:border-zinc-900 pr-12 lg:pr-16 lg:order-1 text-right lg:text-left">
          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-black text-zinc-200 dark:text-zinc-800 uppercase tracking-widest mb-6">
                Identity Hub
              </p>
              <ul className="space-y-4 text-sm font-bold text-zinc-500 dark:text-zinc-400">
                <li className="flex items-center gap-4 justify-end lg:justify-start">Tokenized persistence <ChevronRight className="w-3 h-3 text-zinc-200 dark:text-zinc-800 hidden lg:block" /></li>
                <li className="flex items-center gap-4 justify-end lg:justify-start">Integration abstraction <ChevronRight className="w-3 h-3 text-zinc-200 dark:text-zinc-800 hidden lg:block" /></li>
                <li className="flex items-center gap-4 justify-end lg:justify-start">Fault-tolerant sessions <ChevronRight className="w-3 h-3 text-zinc-200 dark:text-zinc-800 hidden lg:block" /></li>
              </ul>
            </div>

            <a href="https://appstore.quicko.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-xs font-black text-black dark:text-white uppercase tracking-[0.2em] group">
              <span className="border-b border-zinc-100 dark:border-zinc-900 group-hover:border-[#2962FF] transition-all pb-1">Enter the Ecosystem</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#2962FF]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Karkaushal = () => (
  <section id="karkaushal" className="relative bg-white dark:bg-black py-40 px-6 lg:px-12 border-t border-zinc-100 dark:border-zinc-900 overflow-hidden transition-colors duration-500">
    <div className="container mx-auto max-w-7xl relative z-10">
      <SectionHeader id="karkaushal" label="INDEPENDENT WORK" title="करकौशल" url="https://github.com/HetavShah/karkaushal" color="#ef4444" isHindi={true} />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <DetailText 
            label="The Exploration" 
            content="A deep-dive into distributed resilience. Using NATS as a lightweight backbone for microservice communication, exploring eventual consistency and Saga patterns."
          />
          <div className="mt-16 pt-12 border-t border-zinc-100 dark:border-zinc-900 grid grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] font-black uppercase text-zinc-200 dark:text-zinc-800 tracking-widest mb-4">Focus</p>
              <p className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">Event-driven Pub/Sub</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-zinc-200 dark:text-zinc-800 tracking-widest mb-4">Foundation</p>
              <p className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">Node / NATS / Mongo</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-4 flex flex-col justify-end border-l border-zinc-100 dark:border-zinc-900 pl-12 lg:pl-16">
          <a href="https://github.com/HetavShah/karkaushal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-xs font-black text-black dark:text-white uppercase tracking-[0.2em] group">
            <span className="border-b border-zinc-100 dark:border-zinc-900 group-hover:border-red-500 transition-all pb-1">Browse the Source</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const SkillsNarrative = () => (
  <section id="skills" className="relative bg-zinc-50 dark:bg-zinc-950/30 py-40 px-6 lg:px-12 border-t border-zinc-100 dark:border-zinc-900 overflow-hidden transition-colors duration-500">
    <div className="container mx-auto max-w-7xl relative z-10">
      <h2 className="text-huge font-black text-black dark:text-white italic mb-32 tracking-tighter leading-[0.7] uppercase">CORE.</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {[
          { label: "Systems I Design", items: ['Serverless Architectures', 'Event-Driven Integration', 'Idempotent Public APIs', 'Auth & Session Engines'] },
          { label: "Problems I Enjoy", items: ['Race Condition Resolution', 'Distributed Persistence', 'Seasonal Traffic Scaling', 'Data Normalization'] },
          { label: "Concepts I Care About", items: ['Observability over Features', 'Modularity by Constraint', 'Resilience Engineering', 'Security-First Scoping'] },
          { label: "Tools I Reach For", items: ['TypeScript / Node.js', 'AWS (Lambda/Step/Event)', 'DynamoDB / PostgreSQL', 'Dependency Injection'] }
        ].map((group, idx) => (
          <div key={idx}>
            <p className="text-[10px] font-black uppercase text-[#a3bc1a] tracking-widest mb-8">{group.label}</p>
            <ul className="space-y-4">
              {group.items.map(s => (
                <li key={s} className="text-sm font-bold text-zinc-500 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AcademicInfo = () => (
  <section id="education" className="relative bg-white dark:bg-black py-40 px-6 lg:px-12 border-t border-zinc-100 dark:border-zinc-900 overflow-hidden transition-colors duration-500">
    <div className="container mx-auto max-w-7xl relative z-10">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <h2 className="text-[10px] font-black uppercase text-zinc-200 dark:text-zinc-800 tracking-[0.4em] mb-12">Academic History</h2>
          <div className="space-y-12">
            {portfolioData.education.map((edu, i) => (
              <div key={i} className="group">
                <h3 className="text-2xl font-black text-black dark:text-white group-hover:text-zinc-400 dark:group-hover:text-zinc-600 transition-colors duration-500">{edu.degree}</h3>
                <p className="text-sm font-medium text-zinc-400 dark:text-zinc-600 mt-2">{edu.institution} • {edu.duration.start}—{edu.duration.end}</p>
                <div className="inline-block mt-4 text-[10px] font-black text-zinc-200 dark:text-zinc-800 border-b border-zinc-100 dark:border-zinc-900 pb-1">
                  {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Score: ${edu.percentage}%`}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-[10px] font-black uppercase text-zinc-200 dark:text-zinc-800 tracking-[0.4em] mb-12">Certifications</h2>
          <div className="grid grid-cols-1 gap-4">
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

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { 
    timeZone: 'Asia/Kolkata', 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit' 
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata', 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const systemMetrics = [
    { icon: MapPin, label: "LOC", value: "Ahmedabad, IN" },
    { icon: Clock, label: "IST", value: time },
    { icon: Activity, label: "UPTIME", value: "100%" },
    { icon: Terminal, label: "STATUS", value: "AVAILABLE" },
  ];

  return (
    <footer id="contact" className="relative bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-500 pt-32 pb-12 overflow-hidden bg-grid">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Top Section: Typographic Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-end">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand mb-8 block">Ready for the next sprint?</span>
            <h2 className="text-huge font-black italic tracking-tighter text-black dark:text-white uppercase leading-none mb-12">SYNC.</h2>
            <a 
              href={`mailto:${portfolioData.personal.email}`} 
              className="text-2xl md:text-5xl font-black text-black dark:text-white hover:text-brand transition-colors duration-300 flex items-center gap-4 group"
            >
              {portfolioData.personal.email}
              <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </a>
          </div>
          
          <div className="lg:text-right flex flex-col lg:items-end">
            <p className="text-zinc-400 dark:text-zinc-600 font-medium text-lg lg:max-w-xs leading-tight mb-8">
              Currently engineering reliability at Quicko. Open for architectural consultations and high-scale challenges.
            </p>
            <div className="flex gap-6">
              <a href={portfolioData.personal.profiles.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-zinc-100 dark:border-zinc-900 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                <Github size={20} />
              </a>
              <a href={portfolioData.personal.profiles.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 border border-zinc-100 dark:border-zinc-900 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Dashboard Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-zinc-100 dark:border-zinc-900 py-12">
          {systemMetrics.map((metric, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <metric.icon size={12} className="text-zinc-300 dark:text-zinc-700" />
                <span className="text-[10px] font-black text-zinc-300 dark:text-zinc-700 uppercase tracking-widest">{metric.label}</span>
              </div>
              <div className="flex items-center gap-3">
                {metric.label === "STATUS" && (
                  <div className="w-2 h-2 rounded-full bg-green-500 status-pulse"></div>
                )}
                <span className="text-sm font-bold text-black dark:text-white tracking-wider">{metric.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-4 h-px bg-zinc-200 dark:bg-zinc-800 group-hover:w-8 transition-all"></div>
            <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.4em]">
              Hetav Shah &copy; {new Date().getFullYear()}
            </p>
          </div>
          
          <div className="flex items-center gap-8">
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

      {/* Background Graphic Element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-50/50 dark:from-zinc-950/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="transition-colors duration-500">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <ContextDivider />
      <PnlPage />
      <Appstore />
      <Karkaushal />
      <SkillsNarrative />
      <AcademicInfo />
      <Footer />
    </div>
  );
};

export default App;
