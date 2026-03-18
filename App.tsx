import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RealEstatePage from './pages/RealEstatePage';
import PropertyManagementPage from './pages/PropertyManagementPage';
import BuildingServicesPage from './pages/BuildingServicesPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/real-estate-brokerage" element={<RealEstatePage />} />
        <Route path="/property-management" element={<PropertyManagementPage />} />
        <Route path="/building-services" element={<BuildingServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
