import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const InvestmentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { opportunity } = location.state;

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the main page
  };

  return (
    <div className="min-h-screen py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <button
          onClick={handleGoBack}
          className="mb-6 text-blue-600 flex items-center hover:text-blue-700"
        >
          <ChevronLeft className="h-6 w-6 mr-2" />
          Back to Investments
        </button>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-900">
            {opportunity.title}
          </h2>
          <p className="mt-2 text-gray-600">{opportunity.description}</p>
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              Minimum Investment: ${opportunity.minInvestment}
            </p>
            <p className="text-sm text-gray-500">
              Expected Return: {opportunity.expectedReturn}
            </p>
          </div>

          {/* Add Graph Section (Placeholder for now) */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-blue-900">
              Past Performance (Last 12 Months)
            </h3>
            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <div className="h-48 flex items-center justify-center text-gray-500">
                {/* Placeholder for Graph */}
                Graph Placeholder (Chart.js or ApexCharts here)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetails;
