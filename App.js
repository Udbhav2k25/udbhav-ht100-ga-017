import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import CampaignCreation from './pages/CampaignCreation';
import AssetRefinement from './pages/AssetRefinement';
import StrategySimulation from './pages/StrategySimulation';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import CampaignTemplates from './pages/CampaignTemplates';
import SocialMediaScheduling from './pages/SocialMediaScheduling';
import PerformancePrediction from './pages/PerformancePrediction';
import Settings from './pages/Settings';
import Research from './pages/Research';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/campaign-creation" element={<CampaignCreation />} />
        <Route path="/asset-refinement" element={<AssetRefinement />} />
        <Route path="/strategy-simulation" element={<StrategySimulation />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/templates" element={<CampaignTemplates />} />
        <Route path="/scheduling" element={<SocialMediaScheduling />} />
        <Route path="/prediction" element={<PerformancePrediction />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </div>
  );
}

export default App;