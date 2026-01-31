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
        description1="Helping traders share real, broker-verified P&L without relying on screenshots."
        description2="Built a system that automatically collects and processes trading data from multiple brokers. It uses asynchronous workflows to handle large volumes of trades in parallel, ensuring the system remains reliable and responsive even under heavy load."
        stackItems={['AWS Lambda & Step Functions', 'DynamoDB & EventBridge', 'Node.js / TypeScript']}
        ctaText="Verify Performance"
      />

      <ProjectSection
        id="appstore"
        label="CORE SERVICE"
        title="Appstore"
        url="https://appstore.quicko.com"
        color="#2962FF"
        description1="Broker authentication was duplicated across products, so we built a centralized identity hub to handle OAuth and sessions for the entire Quicko ecosystem."
        description2="Built a central system that reliably manages broker logins, token refresh, and account mapping at scale, without breaking when requests are retried or duplicated."
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
        description1="A personal project to learn how microservices communicate and handle data consistency across services."
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
