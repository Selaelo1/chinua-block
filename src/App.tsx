import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/auth/Login";
import OnboardingPage from "./components/onboarding/OnboardingPage";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Overview from "./components/dashboard/Overview";
import Wallet from "./components/dashboard/Wallet";
import Settings from "./components/dashboard/Settings";
import InvestmentOpportunities from "./components/investments/InvestmentOpportunities";
import InvestmentDetails from "./components/investments/InvestmentDetails";

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="investments" element={<InvestmentOpportunities />} />
          <Route path="investments/:id" element={<InvestmentDetails />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
