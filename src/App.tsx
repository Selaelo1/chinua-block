import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ArrowUpRight, Globe2 } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import InvestmentOpportunities from './components/InvestmentOpportunities';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import OnboardingPage from './components/onboarding/OnboardingPage';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Overview from './components/dashboard/Overview';
import Wallet from './components/dashboard/Wallet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="investments" element={<Navigate to="/dashboard" />} />
          <Route path="settings" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </Router>
  );
}

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Globe2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-900">ChanuaBlock</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-blue-900 hover:text-blue-600">Features</a>
              <a href="#invest" className="text-blue-900 hover:text-blue-600">Invest</a>
              <a href="#how-it-works" className="text-blue-900 hover:text-blue-600">How it Works</a>
              <a 
                href="/onboarding"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
              >
                Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <button className="md:hidden">
              <svg className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <InvestmentOpportunities />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}

export default App;