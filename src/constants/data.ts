import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Hetav Shah',
    title: 'Backend / Fullstack Engineer',
    email: 'hetavshah1705@gmail.com',
    phone: '+91-8849046503',
    location: {
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India',
    },
    profiles: {
      linkedin: 'https://linkedin.com/in/hetav1705',
      github: 'https://github.com/HetavShah',
    },
    summary:
      'Backend-focused fullstack engineer with experience designing and owning scalable, production-grade systems at a Zerodha-backed tax platform. Strong background in serverless architectures, third-party integrations, workflow orchestration, and reliability engineering.',
  },

  education: [
    {
      degree: 'B.Tech',
      field: 'Information Technology',
      institution: 'Dharamsinh Desai University',
      location: 'Nadiad, Gujarat',
      duration: {
        start: '2020',
        end: '2024',
      },
      cgpa: 8.49,
    },
    {
      degree: 'Higher Secondary (Science)',
      institution: 'Alembic Vidyalaya',
      location: 'Vadodara, Gujarat',
      duration: {
        start: '2018',
        end: '2020',
      },
      percentage: 81.07,
    },
  ],

  skills: {
    languages: ['JavaScript', 'TypeScript'],
    backend: ['Node.js', 'Serverless Architectures'],
    cloud: ['AWS Lambda', 'AWS Step Functions', 'API Gateway', 'EventBridge', 'S3', 'CloudFront'],
    databases: ['DynamoDB', 'PostgreSQL', 'Oracle'],
    architecture: [
      'OAuth 2.0',
      'Asynchronous workflows',
      'Idempotent APIs',
      'Event-driven systems',
      'Workflow orchestration',
    ],
    engineering_practices: [
      'System design',
      'Fault tolerance',
      'Performance optimization',
      'Production debugging',
      'Dependency Injection',
      'Singleton lifecycle management',
    ],
    tools: ['Git', 'GitHub', 'CI/CD pipelines', 'Tsyringe', 'CloudWatch'],
  },

  experience: [
    {
      company: 'Quicko',
      url: 'https://quicko.com',
      description:
        'Zerodha-backed tax filing and financial analytics platform serving millions of users with highly seasonal traffic.',
      location: 'Ahmedabad, India',
      role: 'Backend / Fullstack Engineer',
      duration: {
        start: '2024-01',
        end: 'Present',
      },
      scale: {
        users: '2M+',
        broker_integrations: '500K+',
        traffic_pattern: '5–8x seasonal spikes during tax filing months',
      },
      responsibilities: [
        'Designed and owned core backend platforms used across tax filing, investments, and analytics workflows',
        'Led end-to-end system design, implementation, and production readiness for serverless, event-driven systems',
        'Worked directly with external partners such as brokers and HRMS providers to design secure, scalable integrations',
      ],
      systems: {
        'P&L Page': {
          purpose:
            'A broker-verified P&L analytics and sharing platform providing a unified view of trading performance across asset classes.',
          url: 'https://pnl.page',
          use_cases: [
            'Personal P&L and tax analytics for traders',
            'Verified, read-only P&L sharing for social proof',
            'Tax-ready performance breakdowns for filing',
          ],
          architecture: {
            pattern: 'Serverless, event-driven',
            components: ['AWS Lambda', 'DynamoDB', 'S3', 'Step Functions', 'EventBridge'],
            design_concepts: ['Trade normalization', 'Settlement object generation', 'Parallel P&L computation'],
          },
          security_and_privacy: [
            'Read-only OAuth broker scopes',
            'PII masking on public shared views',
            'Tokenized access for shareable links',
          ],
          impact: {
            'Verified Analytics': true,
            'Fake Screenshot Risk Eliminated': true,
            'Multi-asset Consolidation': true,
          },
        },
        'AppStore Integration': {
          purpose:
            'Central integration platform managing user–broker relationships, accounts, sessions, and access tokens.',
          url: 'https://appstore.quicko.com',
          problem_solved:
            'Eliminates repeated broker authentication and duplicated integration logic across multiple workflows.',
          architecture: {
            pattern: 'Serverless, event-driven',
            components: ['AWS Lambda', 'Step Functions', 'API Gateway', 'DynamoDB'],
            design_concepts: ['OAuth 2.0', 'Session lifecycle management', 'Idempotent APIs'],
          },
          consumed_by: ['Quicko Web/Mobile', 'Glyde App', 'pnl.page'],
        },
        'ITD Prefill': {
          purpose: 'Automated workflow for fetching and mapping taxpayer data from the Income Tax Department.',
          architecture: {
            components: ['Multiple ERI configs', 'Authorization revocation handling'],
            design_concepts: ['Asynchronous execution', 'Retry-safe states'],
          },
          impact: {
            'Manual Data Entry Reduction': '30–40%',
            'User Effort': 'Significant reduction',
          },
        },
        'HRMS Keka Integration': {
          purpose: 'OAuth-based HRMS integration for automated Form-16 ingestion.',
          problem_solved: 'Reduced manual PDF uploads and parsing errors.',
          impact: {
            'Manual Upload Reduction': '~80% for HRMS users',
          },
        },
      },
    },
    {
      company: 'Infigon Futures',
      location: 'Mumbai, India',
      role: 'Backend Developer Intern',
      duration: {
        start: '2023-08',
        end: '2023-12',
      },
      work: [
        'Built multi-tenant backend systems supporting multiple clients',
        'Implemented secure workflows including payment integrations and OTP mechanisms',
        'Worked on regulatory compliance features such as DLT header verification',
        'Integrated push notifications and third-party messaging services',
      ],
    },
    {
      company: 'Cosedge',
      location: 'Noida, India',
      role: 'Backend Developer Intern (Node.js)',
      duration: {
        start: '2023-07',
        end: '2023-08',
      },
      work: [
        'Contributed to an e-commerce backend',
        'Developed APIs and documentation',
        'Participated in code reviews and debugging sessions',
      ],
    },
  ],

  projects: [
    {
      name: 'Karkaushal',
      type: 'Microservice Backend',
      stack: ['Node.js', 'TypeScript', 'MongoDB', 'NATS'],
      architecture: ['Microservices', 'DB-per-service', 'Pub-sub communication'],
      highlights: ['Inter-service communication via NATS', 'CI/CD pipelines', 'Rate limiting and resilience'],
    },
    {
      name: 'Job Portal Backend',
      stack: ['Node.js', 'Express', 'PostgreSQL'],
      features: ['Resume management', 'Job listings', 'JWT-based authentication', 'Password hashing'],
    },
  ],

  certifications: [
    'Node.js',
    'REST API',
    'JavaScript (Basic)',
    'Problem Solving (Basic)',
    'Google Cloud Skill Badge',
  ],
};
