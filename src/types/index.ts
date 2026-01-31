export interface Personal {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  profiles: {
    linkedin: string;
    github: string;
  };
  summary: string;
}

export interface Education {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  duration: {
    start: string;
    end: string;
  };
  cgpa?: number;
  percentage?: number;
}

export interface Skills {
  languages: string[];
  backend: string[];
  cloud: string[];
  databases: string[];
  architecture: string[];
  engineering_practices: string[];
  tools: string[];
}

export interface QuickoSystem {
  purpose: string;
  url?: string;
  problem_solved?: string;
  architecture?: {
    pattern?: string;
    components: string[];
    design_concepts?: string[];
    services?: string[];
  };
  impact?: Record<string, string | boolean>;
  use_cases?: string[];
  user_journey?: string[];
  security_and_privacy?: string[];
  consumed_by?: string[];
  supported_flows?: string[];
}

export interface Experience {
  company: string;
  url?: string;
  description?: string;
  location: string;
  role: string;
  duration: {
    start: string;
    end: string;
  };
  scale?: {
    users: string;
    broker_integrations: string;
    traffic_pattern: string;
  };
  responsibilities?: string[];
  systems?: Record<string, QuickoSystem>;
  work?: string[];
}

export interface Project {
  name: string;
  type?: string;
  stack: string[];
  architecture?: string[];
  highlights?: string[];
  features?: string[];
}

export interface PortfolioData {
  personal: Personal;
  education: Education[];
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  certifications: string[];
}
