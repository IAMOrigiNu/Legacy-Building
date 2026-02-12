import React, { useState } from 'react';
import Layout from './components/Layout';
import Overview from './components/Overview';
import TechStack from './components/TechStack';
import Roadmap from './components/Roadmap';
import CostComparison from './components/CostComparison';
import FAQ from './components/FAQ';
import { Section } from './types';

const App: React.FC = () => {
  const [currentSection, setSection] = useState<Section>(Section.OVERVIEW);

  const renderSection = () => {
    switch (currentSection) {
      case Section.OVERVIEW:
        return <Overview setSection={setSection} />;
      case Section.TECH_STACK:
        return <TechStack />;
      case Section.ROADMAP:
        return <Roadmap />;
      case Section.COSTS:
        return <CostComparison />;
      case Section.FAQ:
        return <FAQ />;
      default:
        return <Overview setSection={setSection} />;
    }
  };

  return (
    <Layout currentSection={currentSection} setSection={setSection}>
      {renderSection()}
    </Layout>
  );
};

export default App;
