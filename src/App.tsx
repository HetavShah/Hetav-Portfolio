import React from 'react';
import {
  AcademicInfo,
  ContextDivider,
  Footer,
  Hero,
  Nav,
  ProjectSection,
  SkillsNarrative,
} from './components';
import { useTheme } from './hooks/useTheme';
import './styles/index.css';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="transition-colors duration-500">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <ContextDivider />

      <ProjectSection
        id="pnl-page"
        label="SYSTEM 01"
        title="pnl.page"
        url="https://pnl.page"
        color="#a3bc1a"
        description1="Standardizing verified P&L social proof for a hyper-fragmented trading community. Eliminating 'inspect element' fraud via read-only broker integrations."
        description2="Built a multi-broker ingestion engine using AWS Step Functions to orchestrate parallel trade normalization. Managed massive trade object volumes with EventBridge-driven asynchronous processing."
        stackItems={['AWS Lambda & Step Functions', 'DynamoDB & EventBridge', 'Node.js / TypeScript']}
        ctaText="Verify Performance"
      />

      <ProjectSection
        id="appstore"
        label="CORE SERVICE"
        title="Appstore"
        url="https://appstore.quicko.com"
        color="#2962FF"
        description1="Authentication sprawl. Every internal product was re-inventing broker OAuth logic. We needed a centralized 'Identity Hub' for the entire Quicko ecosystem."
        description2="Standardized OAuth 2.0 lifecycle management across dozens of brokers. Built an idempotent API surface that handles token rotation and account mapping for millions of sessions."
        stackItems={['Tokenized persistence', 'Integration abstraction', 'Fault-tolerant sessions']}
        ctaText="Enter the Ecosystem"
        reverse={true}
      />

      <ProjectSection
        id="karkaushal"
        label="INDEPENDENT WORK"
        title="करकौशल"
        url="https://github.com/HetavShah/karkaushal"
        color="#ef4444"
        description1="A deep-dive into distributed resilience. Using NATS as a lightweight backbone for microservice communication, exploring eventual consistency and Saga patterns."
        description2="Investigating inter-service communication via NATS and implementing DB-per-service patterns for absolute isolation and independent scalability."
        stackItems={['Event-driven Pub/Sub', 'Node / NATS / Mongo', 'Microservice Patterns']}
        ctaText="Browse the Source"
        isHindi={true}
      />

      <SkillsNarrative />
      <AcademicInfo />
      <Footer />
    </div>
  );
};

export default App;
