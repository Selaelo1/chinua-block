// components/LandingPage.tsx
import React, { useState } from "react";
import { ArrowUpRight, Globe2 } from "lucide-react";
import Hero from "./Hero";
import Features from "./Features";
import InvestmentOpportunities from "./investments/InvestmentOpportunities";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Globe2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-900">
                ChanuaBlock
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-blue-900 hover:text-blue-600">
                Features
              </a>
              <a href="#invest" className="text-blue-900 hover:text-blue-600">
                Invest
              </a>
              <a
                href="#how-it-works"
                className="text-blue-900 hover:text-blue-600"
              >
                How it Works
              </a>
              <a
                href="/onboarding"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
              >
                Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6 text-blue-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-2 space-y-4">
            <a
              href="#features"
              className="block text-blue-900 hover:text-blue-600"
              onClick={closeMobileMenu}
            >
              Features
            </a>
            <a
              href="#invest"
              className="block text-blue-900 hover:text-blue-600"
              onClick={closeMobileMenu}
            >
              Invest
            </a>
            <a
              href="#how-it-works"
              className="block text-blue-900 hover:text-blue-600"
              onClick={closeMobileMenu}
            >
              How it Works
            </a>
            <a
              href="/onboarding"
              className="block bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
              onClick={closeMobileMenu}
            >
              Get Started <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <Features />
        <InvestmentOpportunities />
        <HowItWorks />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
