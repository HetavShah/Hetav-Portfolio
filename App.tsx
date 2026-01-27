
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Server, 
  Cloud, 
  Database, 
  Code2, 
  ChevronRight, 
  Cpu,
  ShieldCheck,
  Terminal,
  Activity,
  Layers,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Globe
} from 'lucide-react';
import { portfolioData } from './data';
import { 
  Experience, 
  QuickoSystem, 
  Project 
} from './types';

// --- Reusable UI Atoms ---

// Fixed: Using React.FC to correctly handle 'key' and 'children' props in JSX
interface TagProps {
  children?: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => (
  <span className="px-2 py-0.5 rounded bg-zinc-50 text-zinc-500 border border-zinc-200/50 text-[10px] font-bold uppercase tracking-wider">
    {children}
  </span>
);

// Fixed: Using React.FC for consistent component definition
interface SectionHeaderProps {
  icon: any;
  title: string;
  id: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title, id }) => (
  <div id={id} className="flex items-center gap-3 mb-10 scroll-mt-28">
    <div className="p-2 bg-zinc-900 text-white rounded-lg">
      <Icon className="w-5 h-5" />
    </div>
    <h2 className="text-2xl font-black tracking-tight text-zinc-900 uppercase italic">{title}</h2>
    <div className="flex-1 h-px bg-zinc-100" />
  </div>
);

// --- Component: Technical Highlight (Sub-systems) ---

// Fixed: Using React.FC to allow 'key' prop when rendering in a list
interface TechnicalHighlightProps {
  name: string;
  system: QuickoSystem;
}

const TechnicalHighlight: React.FC<TechnicalHighlightProps> = ({ name, system }) => (
  <div className="group p-5 bg-white border border-zinc-100 rounded-xl hover:border-zinc-300 transition-all">
    <div className="flex justify-between items-start mb-3">
      <h4 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
        <Cpu className="w-3.5 h-3.5 text-zinc-400" />
        {name}
      </h4>
      {system.url && (
        <a href={system.url} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-zinc-900 transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
    </div>
    <p className="text-xs text-zinc-500 leading-relaxed mb-4">
      {system.purpose}
    </p>
    <div className="flex flex-wrap gap-1.5">
      {system.architecture?.components.map(c => (
        <span key={c} className="text-[9px] font-bold text-zinc-400 px-1.5 py-0.5 border border-zinc-100 rounded">
          {c}
        </span>
      ))}
    </div>
  </div>
);

// --- Component: Experience Item ---

// Fixed: Using React.FC to allow 'key' prop when rendering in a list
interface ExperienceItemProps {
  exp: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp }) => (
  <div className="relative pl-8 pb-16 last:pb-0 group">
    {/* Timeline vertical line */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-100 group-last:h-10" />
    {/* Timeline dot */}
    <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-zinc-900 bg-white group-hover:bg-zinc-900 transition-colors" />
    
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-6">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-extrabold text-zinc-900">{exp.role}</h3>
          {exp.url && (
            <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-zinc-900 transition-colors">
              <Globe className="w-4 h-4" />
            </a>
          )}
        </div>
        <p className="text-zinc-500 font-bold text-sm tracking-tight">{exp.company} • {exp.location}</p>
      </div>
      <div className="text-left md:text-right">
        <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">{exp.duration.start} — {exp.duration.end}</p>
        {exp.scale && <p className="text-[10px] text-zinc-400 font-bold mt-1 uppercase tracking-tighter">Scale: {exp.scale.users} Users</p>}
      </div>
    </div>

    {exp.description && (
      <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-3xl italic border-l-2 border-zinc-100 pl-4">
        {exp.description}
      </p>
    )}

    {exp.responsibilities && (
      <ul className="space-y-3 mb-8">
        {exp.responsibilities.map((resp, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 font-medium">
            <ChevronRight className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
            {resp}
          </li>
        ))}
      </ul>
    )}

    {exp.work && (
      <ul className="space-y-3 mb-8">
        {exp.work.map((w, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 font-medium">
            <ChevronRight className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
            {w}
          </li>
        ))}
      </ul>
    )}

    {exp.systems && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(exp.systems).map(([name, sys]) => (
          <TechnicalHighlight key={name} name={name} system={sys} />
        ))}
      </div>
    )}
  </div>
);

// --- Component: Project Item ---

// Fixed: Using React.FC to allow 'key' prop when rendering in a list
interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => (
  <div className="group bg-white p-6 rounded-xl border border-zinc-100 hover:border-zinc-900 transition-all duration-300 flex flex-col h-full">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-zinc-50 text-zinc-400 rounded group-hover:bg-zinc-900 group-hover:text-white transition-colors">
        <Terminal className="w-5 h-5" />
      </div>
      <Tag>{project.type || 'Project'}</Tag>
    </div>
    
    <h3 className="text-lg font-black text-zinc-900 mb-2">{project.name}</h3>
    
    <div className="flex flex-wrap gap-1.5 mb-6">
      {project.stack.map(s => (
        <span key={s} className="text-[9px] font-bold text-zinc-400">{s}</span>
      ))}
    </div>

    {project.highlights && (
      <ul className="space-y-2 mt-auto">
        {project.highlights.map((h, i) => (
          <li key={i} className="text-xs text-zinc-500 flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-zinc-200 mt-1.5 shrink-0" />
            {h}
          </li>
        ))}
      </ul>
    )}

    {project.features && (
      <ul className="space-y-2 mt-auto">
        {project.features.map((f, i) => (
          <li key={i} className="text-xs text-zinc-500 flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-zinc-200 mt-1.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const App: React.FC = () => {
  const { personal, education, skills, experience, projects, certifications } = portfolioData;

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white pb-32">
      {/* Sidebar Navigation (Desktop) / Top Nav (Mobile) */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-100 px-6 h-16 flex items-center justify-between">
        <div className="font-black text-xl tracking-tighter">H.SHAH</div>
        <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-widest text-zinc-400">
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          <a href="#experience" className="hover:text-zinc-900 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-zinc-900 transition-colors">Arsenal</a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors">Portfolio</a>
          <a href="#education" className="hover:text-zinc-900 transition-colors">Academic</a>
        </div>
        <div className="flex gap-4">
          <a href={personal.profiles.github} target="_blank" className="p-2 text-zinc-400 hover:text-zinc-900"><Github className="w-4 h-4" /></a>
          <a href={personal.profiles.linkedin} target="_blank" className="p-2 text-zinc-400 hover:text-zinc-900"><Linkedin className="w-4 h-4" /></a>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 pt-32 lg:px-12">
        
        {/* Header / Intro */}
        <section id="about" className="mb-32 scroll-mt-28">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
            <div className="flex-1">
              <Tag>Software Engineer</Tag>
              <h1 className="text-5xl lg:text-8xl font-black tracking-tighter text-zinc-900 mt-6 leading-[0.85]">
                {personal.name.split(' ')[0]}<br />
                <span className="text-zinc-200">{personal.name.split(' ')[1]}</span>
              </h1>
              <p className="text-xl lg:text-2xl font-medium text-zinc-500 mt-10 max-w-2xl leading-relaxed">
                {personal.summary}
              </p>
            </div>
            <div className="space-y-4 text-sm font-bold border-l-2 border-zinc-900 pl-8 h-fit">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-zinc-300" />
                <a href={`mailto:${personal.email}`} className="hover:text-zinc-500 transition-colors">{personal.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-zinc-300" />
                <span>{personal.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <MapPin className="w-4 h-4 text-zinc-300" />
                <span>{personal.location.city}, {personal.location.country}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-32">
          <SectionHeader icon={Briefcase} title="Work Experience" id="experience" />
          <div className="space-y-4">
            {experience.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} />
            ))}
          </div>
        </section>

        {/* Arsenal (Skills) Section */}
        <section className="mb-32">
          <SectionHeader icon={Activity} title="Technical Arsenal" id="skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <p className="text-[10px] font-black uppercase text-zinc-300 tracking-widest mb-6 flex items-center gap-2">
                <Code2 className="w-3 h-3" /> Core Runtime
              </p>
              <div className="flex flex-wrap gap-2">
                {[...skills.languages, ...skills.backend].map(s => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-zinc-300 tracking-widest mb-6 flex items-center gap-2">
                <Cloud className="w-3 h-3" /> Infrastructure
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map(s => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-zinc-300 tracking-widest mb-6 flex items-center gap-2">
                <Database className="w-3 h-3" /> Persistence
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map(s => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-zinc-300 tracking-widest mb-6 flex items-center gap-2">
                <ShieldCheck className="w-3 h-3" /> Methodologies
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.engineering_practices.map(s => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          </div>
        </section>

        {/* Projects / Artifacts Section */}
        <section className="mb-32">
          <SectionHeader icon={Layers} title="Select Portfolio" id="projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectItem key={i} project={p} />
            ))}
          </div>
        </section>

        {/* Education & Academic Section */}
        <section className="mb-32">
          <SectionHeader icon={GraduationCap} title="Academic History" id="education" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              {education.map((edu, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-zinc-200 font-black text-3xl shrink-0">0{i+1}</div>
                  <div>
                    <h3 className="text-xl font-black text-zinc-900 leading-tight">{edu.degree}</h3>
                    <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mt-1">{edu.field || 'General Studies'}</p>
                    <div className="mt-4 space-y-1 text-sm font-medium text-zinc-500">
                      <p>{edu.institution}</p>
                      <p className="text-xs">{edu.duration.start} — {edu.duration.end} • {edu.location}</p>
                      {edu.cgpa && <p className="text-zinc-900 font-bold mt-2">Score: {edu.cgpa} CGPA</p>}
                      {edu.percentage && <p className="text-zinc-900 font-bold mt-2">Score: {edu.percentage}%</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 h-fit">
              <p className="text-[10px] font-black uppercase text-zinc-300 tracking-widest mb-6">Certifications</p>
              <div className="grid grid-cols-1 gap-3">
                {certifications.map(cert => (
                  <div key={cert} className="flex items-center gap-3 p-3 bg-white border border-zinc-200/50 rounded-lg text-xs font-bold text-zinc-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-zinc-400 font-medium">© {new Date().getFullYear()} Hetav Shah. Built for high impact.</div>
          <div className="flex gap-10">
            <a href={personal.profiles.github} target="_blank" className="text-[10px] font-black uppercase tracking-widest hover:text-zinc-400 transition-colors">GitHub</a>
            <a href={personal.profiles.linkedin} target="_blank" className="text-[10px] font-black uppercase tracking-widest hover:text-zinc-400 transition-colors">LinkedIn</a>
            <a href={`mailto:${personal.email}`} className="text-[10px] font-black uppercase tracking-widest hover:text-zinc-400 transition-colors">Contact</a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;
