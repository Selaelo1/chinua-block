// App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import OnboardingPage from "./components/onboarding/OnboardingPage";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Overview from "./components/dashboard/Overview";
import Wallet from "./components/dashboard/Wallet";
import InvestmentOpportunities from "./components/investments/InvestmentOpportunities";
import InvestmentDetails from "./components/investments/InvestmentDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route - Investment Opportunities are here too */}
        <Route path="/" element={<LandingPage />} />

        {/* Onboarding Route */}
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Dashboard Layout Route */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="wallet" element={<Wallet />} />

          {/* Investment Routes in Dashboard */}
          <Route path="investments" element={<InvestmentOpportunities />} />
          <Route path="investment-details" element={<InvestmentDetails />} />

          {/* Example for settings */}
          <Route path="settings" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
