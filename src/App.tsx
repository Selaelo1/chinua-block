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
import Settings from "./components/dashboard/Settings"; // Corrected import

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Onboarding Route */}
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Dashboard Layout Route */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Default route for /dashboard */}
          <Route index element={<Overview />} />
          {/* Nested routes under /dashboard */}
          <Route path="wallet" element={<Wallet />} />
          <Route path="investments" element={<InvestmentOpportunities />} />
          <Route path="investments/:id" element={<InvestmentDetails />} />{" "}
          {/* Dynamic route for investment details */}
          <Route path="settings" element={<Settings />} />{" "}
          {/* Corrected settings route */}
        </Route>

        <Route path="/investment-details/:id" element={<InvestmentDetails />} />

        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
