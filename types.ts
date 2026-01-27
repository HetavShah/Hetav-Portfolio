
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
  problem_solved?: string;
  complexity?: string[];
  architecture?: {
    pattern: string;
    components: string[];
    design_concepts: string[];
  };
  flows_supported?: string[];
  consumers?: string[];
  integration_type?: string;
  implementation?: {
    workflow_type: string;
    data_handling: string[];
  };
  impact?: {
    manual_data_entry_reduction?: string;
    filing_time_improvement?: string;
    manual_upload_reduction?: string;
  };
  ownership?: string;
  business_logic?: string[];
  design?: string[];
  use_cases?: string[];
  url?: string;
}

export interface ProductionIncident {
  issue: string;
  root_cause?: string;
  root_causes?: string[];
  fix: string[];
  learning: string;
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
  production_incidents?: ProductionIncident[];
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
