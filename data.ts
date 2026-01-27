
import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  "personal": {
    "name": "Hetav Shah",
    "title": "Backend / Fullstack Engineer",
    "email": "hetavshah1705@gmail.com",
    "phone": "+91-8849046503",
    "location": {
      "city": "Ahmedabad",
      "state": "Gujarat",
      "country": "India"
    },
    "profiles": {
      "linkedin": "https://linkedin.com/in/hetav1705",
      "github": "https://github.com/HetavShah"
    },
    "summary": "Backend-focused fullstack engineer with experience designing and owning scalable, production-grade systems at a Zerodha-backed tax platform. Strong background in serverless architectures, third-party integrations, workflow orchestration, and reliability engineering."
  },

  "education": [
    {
      "degree": "B.Tech",
      "field": "Information Technology",
      "institution": "Dharamsinh Desai University",
      "location": "Nadiad, Gujarat",
      "duration": {
        "start": "2020",
        "end": "2024"
      },
      "cgpa": 8.49
    },
    {
      "degree": "Higher Secondary (Science)",
      "institution": "Alembic Vidyalaya",
      "location": "Vadodara, Gujarat",
      "duration": {
        "start": "2018",
        "end": "2020"
      },
      "percentage": 81.07
    }
  ],

  "skills": {
    "languages": ["JavaScript", "TypeScript"],
    "backend": ["Node.js", "Serverless Architectures"],
    "cloud": [
      "AWS Lambda",
      "AWS Step Functions",
      "API Gateway",
      "EventBridge",
      "S3",
      "CloudFront"
    ],
    "databases": ["DynamoDB", "PostgreSQL", "Oracle"],
    "architecture": [
      "OAuth 2.0",
      "Asynchronous workflows",
      "Idempotent APIs",
      "Event-driven systems",
      "Workflow orchestration"
    ],
    "engineering_practices": [
      "System design",
      "Fault tolerance",
      "Performance optimization",
      "Production debugging",
      "Dependency Injection",
      "Singleton lifecycle management"
    ],
    "tools": [
      "Git",
      "GitHub",
      "CI/CD pipelines",
      "Tsyringe",
      "CloudWatch"
    ]
  },

  "experience": [
    {
      "company": "Quicko",
      "url": "https://quicko.com",
      "description": "Zerodha-backed tax filing platform serving millions of users with highly seasonal traffic patterns.",
      "location": "Ahmedabad, India",
      "role": "Backend / Fullstack Engineer",
      "duration": {
        "start": "2024-01",
        "end": "Present"
      },
      "scale": {
        "users": "2M+",
        "broker_integrations": "500K+",
        "traffic_pattern": "5–8x seasonal spikes during tax filing months"
      },
      "responsibilities": [
        "Designed and owned core backend platforms used across multiple tax and investment workflows",
        "Led system design, implementation, and production readiness for high-scale serverless systems",
        "Handled critical production releases, including late-night and weekend deployments during peak tax season"
      ],
      "systems": {
        "AppStore Integration": {
          "purpose": "Central integration platform managing user–broker relationships, accounts, sessions, and tokens",
          "url": "https://appstore.quicko.com",
          "problem_solved": "Eliminated repeated broker authentication and duplicated integration logic across workflows",
          "architecture": {
            "pattern": "Serverless, event-driven",
            "components": ["AWS Lambda", "Step Functions", "API Gateway", "DynamoDB"],
            "design_concepts": ["OAuth-based authentication", "Session lifecycle management", "Idempotent workflows", "Asynchronous orchestration"]
          },
          "flows_supported": ["Quicko-initiated broker connection", "Broker-initiated onboarding journeys"],
          "consumers": ["Quicko web application", "Quicko mobile application", "Glyde Android application"]
        },
        "ITD Data Prefill": {
          "purpose": "Automated ingestion of taxpayer data from the Income Tax Department",
          "complexity": ["Multiple ERI configurations", "Revoked and reconnected authorizations", "Partial workflow states", "Retry-safe execution"],
          "implementation": {
            "workflow_type": "Asynchronous, multi-stage",
            "data_handling": ["Validation", "Transformation", "Domain mapping"]
          },
          "impact": {
            "manual_data_entry_reduction": "30–40%",
            "filing_time_improvement": "Significant reduction in user effort"
          }
        },
        "HRMS Keka Integration": {
          "purpose": "Automated Form-16 ingestion for salaried users",
          "integration_type": "OAuth-based HRMS integration",
          "ownership": "End-to-end ownership including external stakeholder coordination",
          "business_logic": ["User-initiated salary import", "Authorization lifecycle handling", "Data validation and mapping"],
          "impact": {
            "manual_upload_reduction": "~80% for HRMS users"
          }
        },
        "P&L Shareable Reports": {
          "purpose": "Secure, shareable read-only P&L reports",
          "url": "https://pnl.page",
          "design": ["Tokenized access", "No authenticated session exposure", "Strict immutability guarantees"],
          "use_cases": ["Accountants", "Tax advisors", "External sharing"]
        }
      },
      "production_incidents": [
        {
          "issue": "DynamoDB DNS resolution failures under high concurrency",
          "root_cause": "Excessive client instantiation per Lambda invocation",
          "fix": ["Introduced singleton resource management", "Implemented dependency injection using Tsyringe"],
          "learning": "Understanding Lambda runtime behavior and resource lifecycle is critical at scale"
        },
        {
          "issue": "Lambda timeouts for users with extremely large broker P&L payloads",
          "root_causes": ["Inefficient code patterns (nested loops, excessive object copying)", "Database write constraints under large payload sizes"],
          "fix": ["Algorithmic optimizations", "Reduced in-memory object duplication", "Chunked and controlled database writes"],
          "learning": "Systems fail at edge cases; design must account for worst-case payloads"
        }
      ]
    },
    {
      "company": "Infigon Futures",
      "location": "Mumbai, India",
      "role": "Backend Developer Intern",
      "duration": {
        "start": "2023-08",
        "end": "2023-12"
      },
      "work": [
        "Built multi-tenant backend systems supporting multiple clients",
        "Implemented secure workflows including payment integrations and OTP mechanisms",
        "Worked on regulatory compliance features such as DLT header verification",
        "Integrated push notifications and third-party messaging services"
      ]
    },
    {
      "company": "Cosedge",
      "location": "Noida, India",
      "role": "Backend Developer Intern (Node.js)",
      "duration": {
        "start": "2023-07",
        "end": "2023-08"
      },
      "work": [
        "Contributed to an e-commerce backend",
        "Developed APIs and documentation",
        "Participated in code reviews and debugging sessions"
      ]
    }
  ],

  "projects": [
    {
      "name": "Karkaushal",
      "type": "Microservice Backend",
      "stack": ["Node.js", "TypeScript", "MongoDB", "NATS"],
      "architecture": [
        "Microservices",
        "DB-per-service",
        "Pub-sub communication"
      ],
      "highlights": [
        "Inter-service communication via NATS",
        "CI/CD pipelines",
        "Rate limiting and resilience"
      ]
    },
    {
      "name": "Job Portal Backend",
      "stack": ["Node.js", "Express", "PostgreSQL"],
      "features": [
        "Resume management",
        "Job listings",
        "JWT-based authentication",
        "Password hashing"
      ]
    }
  ],

  "certifications": [
    "Node.js",
    "REST API",
    "JavaScript (Basic)",
    "Problem Solving (Basic)",
    "Google Cloud Skill Badge"
  ]
};
