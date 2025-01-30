/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  TrendingUp,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { opportunities } from "../data/opportunities"; // Import opportunities from the new file

const InvestmentOpportunities = () => {
  const navigate = useNavigate(); // Initialize navigate
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollRef.current.scrollLeft;
      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const handleViewInfo = (opportunity: any) => {
    // Navigate to the details page and pass the opportunity as state
    navigate(`/investment-details`, { state: { opportunity } });
  };

  return (
    <div
      id="invest"
      className="min-h-screen flex items-center py-16 bg-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Featured Investment Opportunities
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover curated investment opportunities across Africa
          </p>
        </div>

        <div className="relative mt-12">
          <button
            onClick={() => handleScroll("left")}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
          >
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex-shrink-0 w-80"
              >
                <div className="relative h-48">
                  <img
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <span className="ml-2 text-sm font-medium text-blue-600">
                      {opportunity.type}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-blue-900">
                    {opportunity.title}
                  </h3>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">
                        Minimum Investment
                      </p>
                      <p className="text-lg font-medium text-blue-900">
                        ${opportunity.minInvestment}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Expected Return</p>
                      <p className="text-lg font-medium text-green-600">
                        {opportunity.expectedReturn}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleViewInfo(opportunity)} // Handle navigation
                    className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    View Details <ArrowUpRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleScroll("right")}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
    </div>
  );
};

export default InvestmentOpportunities;
